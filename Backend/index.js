const express = require('express');
const mongoose = require('mongoose');
const app=express();
const PORT=5000;
const URL = "mongodb+srv://aryashanish:9525633767@cluster0.j7tl5vl.mongodb.net/portfoio?retryWrites=true&w=majority";
const cors = require("cors");
const USER=require("./Model/user");

//Middleware
app.use(cors(
    {
        origin: ["https://aryashanish.netlify.app"],
        methods: ["POST", "GET"],
        credentials: true 
    }
));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// MongoDB connection
mongoose.connect(URL).then( ()=>{
    console.log("DataBase Connected sucessfully");
}).catch( (err)=> {
    console.log(" Database connection failed : "+err);
});


app.post("/contact", (req, res) => {
    //console.log(req.body);
    const result = USER.create({
        firstname: req.body.firstName,
        lastname : req.body.lastName,
        email : req.body.email,
        phone : req.body.phone,
        description : req.body.message,
    })

    if (result)
        return res.status(200).json({ "msg": "Received Msg" });
    return res.status(401).json({ "msg": "Not Received Msg" });
})

app.listen(PORT,()=> console.log(`Server Running at ${PORT}`));
