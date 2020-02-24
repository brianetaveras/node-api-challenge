const express = require('express');
const router = express.Router();
const db = require('../data/helpers/projectModel');

// Middleware
const validateID = require('../middleware/validateID');

router.get('/', async (req, res)=>{
    try{
        res.json(await db.get());
    } catch{
        res.status(500).json({message: "There was a server error while getting the projects."});
    };
});

router.post('/', async (req, res) =>{
    try{
        if (req.body.name && req.body.description){
            return res.status(201).json(await db.insert({
                name: req.body.name,
                description: req.body.description,
                completed: req.body.completed
            }))
        }
        res.status(400).json({message: "All fields are required. Please make sure to provide the name and description for your project."})

    } catch(err){
        console.log(err)
        res.status(500).json({message: "There was an error while adding your project"})
    }
})




module.exports = router;