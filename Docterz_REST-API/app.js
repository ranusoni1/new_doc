import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app= express();

//to link routes
import userRouter from './routes/user.router.js' ;
import doctorRouter from './routes/doctor.router.js';
import categoryrouter from './routes/category.router.js';
import subcatrouter from './routes/subcategory.router.js';

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":true}));

//for resolve cross origin problem
app.use(cors());

//route level middleware
app.use("/user",userRouter);
app.use("/doctor",doctorRouter);
app.use("/category",categoryrouter);
app.use("/subcategory",subcatrouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");