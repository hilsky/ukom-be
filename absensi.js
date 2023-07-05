const mongoose = require('mongoose');
const absensi = new mongoose.Schema({
    tanggal: {
        type: Date,
    },
    nip: {
        type: mongoose.Types.ObjectId,
        ref: 'Pegawai'
    },
    jam_masuk: {
        type: Date
    },
    jam_pulang: {
        type: Date
    }
})

exports.absensi = new mongoose.model('absensi', absensi);