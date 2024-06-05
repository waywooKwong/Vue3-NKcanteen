import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path'

const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'QT',
  password: '1234',
  database: 'dblab01'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.use(cors());
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });


app.post('/dishes', upload.single('image'), (req, res) => {
  const { win_id, name, price } = req.body;
  const imageUrl = `/${req.file.filename}`;
  
  const sql = 'INSERT INTO front_menu (win_id,name, price, image) VALUES (?, ?, ?, ?)';
  db.query(sql, [win_id,name, price, imageUrl], (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Failed to save dish' });
      return;
    }
    res.status(201).send({ message: 'Dish saved successfully', imageUrl });
  });
});

// GET 请求处理
app.get('/dishes', (req, res) => {
  // 从数据库中获取菜品数据
  db.query('SELECT * FROM front_menu', (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Failed to fetch menu' });
      return;
    }
    res.json(result); // 将菜品数据作为 JSON 对象发送回客户端
  });
});

// 删除菜品
app.delete('/dishes_delete', (req, res) => {
  const id = req.body.id;
  const sql = 'DELETE FROM front_menu WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Failed to delete dish' });
      return;
    }
    res.status(200).send({ message: 'Dish deleted successfully' });
  });
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
