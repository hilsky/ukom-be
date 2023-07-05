const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bp = require('body-parser')
const { success, error} = require('consola')
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use('/pegawai', require('./routers/pegawaiRoute'))
app.use('/divisi', require('./routers/divisiRoute'))
app.use('/absensi', require('./routers/presensiRoute'))


mongoose.
    connect(
        process.env.URI_DB,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => success({
        messege:'Connected to MongoDB',
        badge: true
    }))
    .catch(err => error({
        messege: err.message,
        badge:true
    }));

app.listen(PORT, () => success({
    messege:`Server started on port ${PORT}`,
    badge:true
}));
