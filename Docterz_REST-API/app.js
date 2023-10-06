import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileupload from 'express-fileupload';

const app= express();

//to link routes
import userRouter from './routes/user.router.js' ;
import doctorRouter from './routes/doctor.router.js';


//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":true}));

//to extract file data from request
app.use(fileupload());

//for resolve cross origin problem
app.use(cors());

//route level middleware
app.use("/user",userRouter);
app.use("/doctor",doctorRouter);


app.listen(3001);
console.log("server invoked at link http://localhost:3001");