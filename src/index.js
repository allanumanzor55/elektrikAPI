const express = require("express");
const mongoose = require("mongoose");
const app = express();
const devicesRoutes = require("./routes/devices")
const userRoutes = require("./routes/users")
const tariffRoutes = require("./routes/tariff")
const cors = require('cors')
require("dotenv").config()
const port = process.env.PORT || 9000;
app.use(cors());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','http://localhost:4200');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});
app.use(express.json())
app.use("/elektrik",devicesRoutes)
app.use("/elektrik",userRoutes)
app.use("/elektrik",tariffRoutes)
app.get("/");
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("Connected to MongoDBAtlas"))
    .catch((e)=>console.error(e))
app.listen(port, () => console.log("Server listening on port", port));
