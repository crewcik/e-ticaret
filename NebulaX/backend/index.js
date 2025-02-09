const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());

const PORT = 3001;

const db = mysql.createConnection({
    host: 'localhost',
    database: 'crew',
    password: '',
    user: 'root',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error(`[YT-Soft]: MySql bağlantısı başarısız: ${err}`);
        return;
    };

    console.warn(`[YT-Soft]: MySql bağlantısı başarılı: ${db.threadId}`);
});

app.get('/api/user', (req, res) => {
    const sql = 'SELECT * FROM user';

    db.query(sql, (err, result) => {
        if (err) {
            console.error(`[YT-Soft]: Kullanıcılar getirilemedi: ${err}`);
            return;
        };

        res.json(result);
    });
});

app.listen(PORT, () => {
    console.warn('[YT-Soft]: Backend başarılı bir şekilde açıldı!');
    console.warn('[YT-Soft]: Backend Aktif!')
});