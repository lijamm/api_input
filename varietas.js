const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const { db } = require('./route/db');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create
app.post('/', (req, res) => {
    const varietas = req.body.varietas;
    const land_area = req.body.land_area;
    const date = req.body.date;

    const sqlQuery = "INSERT INTO api_analisis (varietas, land_area, date) VALUE (?, ?, ?)";
    db.query(sqlQuery, [varietas, land_area, date], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});
// #####

app.listen(3001, () => {
    console.log('server berhasil berjalan pada port 3001!');
});