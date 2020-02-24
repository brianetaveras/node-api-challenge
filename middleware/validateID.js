const projectDB = require("../data/helpers/projectModel");
const actionDB = require('../data/helpers/actionModel');

const validateID = type => {
  return async (req, res, next) => {
    switch (type) {
      case "project":
        try {
          const project = await projectDB.get(req.params.id);
          if (project) { 
            req.project = project;
            return next();
          }
          res
            .status(404)
            .json({ message: "Couldn't find a project with that ID" });
        } catch (err) {
          res
            .status(500)
            .json({ message: "There was an error while getting your project" });
            console.log(err);
        }
        break;
        case "action":
            try{
                const project = await projectDB.get(req.params.projectID);
                if (project){
                    const actions = await actionDB.get(req.params.id);
                    if(actions){
                        req.actions = actions
                        return next()
                    }
                    req.actions = [];
                    return next()
                }
                res.status(404).json({message: "The project you specified doesn't exist"})

            } catch(err){
                console.log(err.message)
                res
                  .status(500)
                  .json({ message: "There was an error while getting your actions" });
                
          }
    }
  };
};

module.exports = validateID;
