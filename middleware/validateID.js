const projectDb = require('../data/helpers/projectModel');

const validateID = type => {
  return async (req, res, next) => {
    switch (type) {
      case "project":
          try{
              const project = await projectDb.get(req.params.id);
            if (project){
                req.project = project;
                next()

            }
            res.status(404).json({message: "Couldn't find a project with that ID"});
          } catch(err) {
            res.status(500).json({message: "There was an error while getting your project"});
            console.log(err)
          }
        break;
      case "action":
        console.log("boo");
        break;
    }
  };
};

module.exports = validateID;
