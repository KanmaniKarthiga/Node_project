const express = require("express");
const { route } = require("./Routes/CategoryRoutes");
const { bollywood } = require("./dummyData/data");
const PORT = 5005;
const app = express();

app.use("/api", route)
app.listen(PORT, () =>{
    try{
        console.log("Server is running")
    }
    catch(err){
        console.log("Error occured while starting the server")
    }
})

