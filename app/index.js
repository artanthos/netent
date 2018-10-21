import getAnswer from './utils';
import express from 'express';

const app = express();
const port = 5050;

app.use('/', express.static('./client/'));
app.get('/api/getAnswer', getAnswer);

app.listen(port, function() { 
    console.log('Express server on http://localhost:' + port);
});