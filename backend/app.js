import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});