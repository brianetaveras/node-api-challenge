const express = require('express');
const server = express();
server.use(express.json())


// Routers
const projectRouter = require("./routers/projectsRouter");


server.use('/api/projects', projectRouter);


server.get('/', async (req, res)=>{
    res.json({
        message: "Hey, welcome to my sprint challenge API :)"
    })
})



server.listen(4001, ()=>{
    console.log(
        `%c
     --------------------------------------------------------------
     |       ___                                                   |
     |      (^o^) <Server is running on http://localhost:4001      |
     |     ((___))                                                 |
     |       ^ ^                                                   |
     --------------------------------------------------------------
            `,
        "font-family:monospace; color: green"
      );
})