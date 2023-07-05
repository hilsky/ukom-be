const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const {Absensi} = require('../model/absensi')


// Tambah Divisi
router.post('/', (req, res) => {
    const absensi = new Absensi({
        tanggal: req.body.tanggal,
        nip: req.body.nip,
    });
    absensi.save()
        .then(() => {
            res.status(200).json({message: 'Berhasil Absen'})
        })
        .catch((err) => {
            res.send(err)
        })
})


//Get Data Pegawai
router.get('/', (req, res) => {
    Absensi.find()
        .then((absensi) => {
            res.send(absensi)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.get('/:tanggal', (req, res) => {
    try {
        if (req.params.tanggal) {
            Absensi.find(req.params.tanggal)
                .then((absensi) => {
                    res.send(absensi);
                }
                )
                .catch((err) => {
                    res.send(err);
                }
                );
        }
        else {
            res.send('Invalid Tanggal');
        }
    }
    catch (err) {
        res.send(err);
    }
})


router.put('/:id', (req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            Absensi.findByIdAndUpdate(req.params.id, {
                jam_pulang: req.body.jam_pulang,
            }, { new: true })
                .then((absensi) => {
                    res.status(200).send({ message: 'Berhasil absen pulang: ', absensi });
                }
                )
                .catch((err) => {
                    res.send(err);
                }
                );
        }
        else {
            res.send('Invalid ID');
        }
    }
    catch (err) {
        res.send(err);
    }
}
)



module.exports = router