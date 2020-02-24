const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionModel');
const validateID = require('../middleware/validateID');


router.get('/', async (req, res) =>{
    try{
        console.log(req.params)
        res.json(await db.get())
    } catch(err) {
        console.log(err.message);
        res.status(500).json({message: "There was an error while getting the actions"})
    }
})


router.get('/:projectID/:id', validateID('action'),  async (req, res)=>{
    res.json(req.actions)
})

router.post('/:projectID/', validateID('action'), async (req, res)=>{
    try {
        res.json(await db.insert({
            project_id: req.params.projectID,
            description: req.body.description,
            notes: req.body.notes,
            completed: req.body.completed
        }))
    } catch(err){
        res.status(500).json({message: "There was an error while adding an action"})
    }
})


module.exports = router;