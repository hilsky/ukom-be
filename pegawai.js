const mongoose = require('mongoose');
const PegawaiSchema = new mongoose.Schema({
    nip: {
        type: String,
    },
    nama: {
        type: String
    },
    alamat : {
        type: String
    },
    tanggal_lahir: {
        type: String
    },
    kode_divisi: {
        type: String,
        ref: 'kodeDivisi'
    }
    
})

exports.Pegawai = new mongoose.model('Pegawai', PegawaiSchema);