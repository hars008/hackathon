import  express from  "express";
const app = express();
import dotenv from "dotenv";
import  mongoose from "mongoose";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import movieRouter from "./routes/movie.js";
import cors from "cors";
import bodyParser from "body-parser";
// const userRoute = require("./routes/users");
// const authRoute = require("./routes/auth");
// const postRoute = require("./routes/post");

dotenv.config();
mongoose.set('strictQuery', false);

const connect =()=>{

    try {
        mongoose.connect(process.env.MONGO);
        console.log("Connect to mongobd");
    } catch (error) {
        throw error;
    }
}

//MIDDLEWARE

app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }
));
app.use(bodyParser.urlencoded({extended:true}));


app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/movie", movieRouter)

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});



app.listen(8000, () => {
    connect();
    console.log("CONNECTED TO BECKEND");
})
