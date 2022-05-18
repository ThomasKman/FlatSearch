const express = require('express');
const router = express.Router();

const db = require('../../database');
const validator = require('../../helpers/validators');

// every route here will be prefixed with "/api/apartments"

router.get('/', async (req, res) => {
    let query = 'select * from apartments ';
    if (req.query.sortBy)
        query += `order by ${req.query.sortBy}`;

    db.query(query, (errors, results, fields) => {
        res.send(results);
    });
});

router.get('/:id', (req, res) => {
    let query = `select * from apartments where id = ${req.params.id} `;

    db.query(query, (errors, results, fields) => {
        console.log(results);
        if (!results.length) {
            return res.status(404).send({ error: 'apartment not found!' })
        }
        res.send(results[0]);
    });
});

router.post('/', (req, res) => {
    const { error } = validator.validateApartment(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const query = `insert into apartments (description, number_of_bedrooms, number_of_bathrooms) 
                   values ('${req.body.description}', ${req.body.number_of_bedrooms}, ${req.body.number_of_bathrooms})`;
    db.query(query, (err, result) => {
        if (err) throw err;
    })
    res.status(201).send();
});

router.put('/:id', (req, res) => {
    let query = `select * from apartments where id = ${req.params.id} `;

    db.query(query, (err, results, fields) => {
        console.log(results);
        if (!results.length) {
            return res.status(404).send({ error: 'apartment not found!' })
        }
    });

    const { error } = validator.validateApartment(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //
    // everything fine
    query = `update apartments set 
            description = '${req.body.description}',
            number_of_bedrooms = '${req.body.number_of_bedrooms}',
            number_of_bathrooms = '${req.body.number_of_bathrooms}'
            where id = ${req.params.id}`;

    db.query(query, (err, results, fields) => {
        if (err) throw err;
        res.send();
    });
});

router.delete('/:id', (req, res) => {
    let query = `select * from apartments where id = ${req.params.id} `;

    db.query(query, (err, results, fields) => {
        if (!results.length) {
            return res.status(404).send({ error: 'apartment not found!' })

        }
        let query = `delete from apartments where id = ${req.params.id}`;
        db.query(query, function (err, result) {
            if (err) throw err;
        });
        res.send();
    });


});

module.exports = router; //export this module so we can use it in server.js