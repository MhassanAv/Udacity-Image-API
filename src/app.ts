import express from 'express';      //setting up the server and importing my modules & routes 
import routes from './routes/index';


const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/?filename=&width=500&height=500/`);
});

app.use("/", routes);   //using my main route through my app



export default app