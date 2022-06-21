const express = require('express');
const app = express();
const PORT = 8080;

const pool = require("./database");

app.use(express.json())

// ROUTES

//get ALL Records



//get a route

// get a todo

app.post("/global_plastic_production",async(req,res) =>{
    try{
        const {Entity} = req.body;
        const newRecord = await pool.query("INSERT INTO global_plastic_production (Entity,Code,Year,Global_plastics_production) VALUES ($1,$2,$3,$4) RETURNING * ",
        [Entity],
        [Code],
        [Year],
        [Global_plastics_production]
        );

        res.json(newRecord.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }
});

// delete


app.listen(
    PORT, 
    () => console.log(`api is running on http://localhost:${PORT}`)
);
