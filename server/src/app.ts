import express from 'express';
import bodyParser from 'body-parser';
import campaignRoutes from './routes/routes';
import {mongodbConnect} from "./config/database/mongodb";

mongodbConnect();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/campaigns', function(req, res, next) {
    //Uncomment to run in dev mode

    /** res.header('Access-Control-Allow-Origin', `*`);
    res.header('Access-Control-Allow-Methods', `*`);

    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    ); */
    next();
},campaignRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
