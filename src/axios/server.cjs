const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'MySQLwd020827',
    database: 'user_schema'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.use(cors());
app.use(bodyParser.json());

app.get('/windows', (req, res) => {
    const sql = 'SELECT DISTINCT win_id, name FROM front_menu';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send({ error: 'Failed to fetch windows' });
            return;
        }
        res.status(200).send(results);
    });
});

app.get('/menu_items', (req, res) => {
    const sql = 'SELECT * FROM front_menu';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send({ error: 'Failed to fetch menu items' });
            return;
        }
        res.status(200).send(results);
    });
});

app.post('/reserve', (req, res) => {
    const { window, queueNumber, items } = req.body;
    const sql = 'INSERT INTO reservations (window_id, queue_number, item_name) VALUES (?, ?, ?)';

    db.beginTransaction(err => {
        if (err) {
            res.status(500).send({ error: 'Failed to start transaction' });
            return;
        }

        const promises = items.map(item => {
            return new Promise((resolve, reject) => {
                db.query(sql, [window, queueNumber, item], (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                });
            });
        });

        Promise.all(promises)
            .then(results => {
                db.commit(err => {
                    if (err) {
                        return db.rollback(() => {
                            res.status(500).send({ error: 'Failed to commit transaction' });
                        });
                    }
                    res.status(201).send({ message: 'Reservation saved successfully' });
                });
            })
            .catch(err => {
                db.rollback(() => {
                    res.status(500).send({ error: 'Failed to save reservation' });
                });
            });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});