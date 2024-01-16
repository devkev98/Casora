//Back-end
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'tinyhomesadmin',
   password: '$9f20f2m',
   database: 'tinyhomesdb',
});
connection.connect();
app.post('/add_listing', (req, res) => {
   const {
      book_name,
      author
   } = req.body;

   if (!book_name || !author) {
      return res.status(400).json('Book Name and Author cannot be blank');
   }

   const data = {
      book_name,
      author
   };

   const query = connection.query('INSERT INTO books SET ?', data, (err, rows) => {
      if (err) {
         return res.status(400).json('Sorry!! Unable To Add');
      } else {
         return res.status(200).json('Book Added Successfully!!');
      }
   });
});

app.listen(3000, () => {
   console.log('App is running on port 3000');
});