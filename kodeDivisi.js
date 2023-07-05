const mongoose = require('mongoose');
const kodeDivisi = new mongoose.Schema({
    kode_divisi: {
        type: String,
    },
    nama_divisi: {
        type: String
    },
    pimpinan_divisi : {
        type: String
    }
})

exports.kodeDivisi = new mongoose.model('kodeDivisi', kodeDivisi);