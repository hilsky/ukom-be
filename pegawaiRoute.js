const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const {Pegawai} = require('../model/pegawai')


// Tambah Pegawai
router.post('/', (req, res) => {
    const pegawai = new Pegawai({
        nip: req.body.nip,
        nama: req.body.nama,
        alamat: req.body.alamat,
        tanggal_lahir: req.body.tanggal_lahir,
        kode_divisi: req.body.kode_divisi
    });
    pegawai.save()
        .then(() => {
            res.status(200).json({message: 'Berhasil ditambahkan'})
        })
        .catch((err) => {
            res.send(err)
        })
})


//Get Data Pegawai
router.get('/', (req, res) => {
    Pegawai.find()
        .then((pegawai) => {
            res.send(pegawai)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.get('/:nip', (req, res) => {
    try {
        if (req.params.nip) {
            Pegawai.findById(req.params.nip)
                .then((user) => {
                    res.send(user);
                }
                )
                .catch((err) => {
                    res.send(err);
                }
                );
        }
        else {
            res.send('Invalid NIP');
        }
    }
    catch (err) {
        res.send(err);
    }
}
)

router.get('/:tanggal_lahir', (req, res) => {
    try {
        if (req.params.tanggal_lahir) {
            Pegawai.find(req.params.tanggal_lahir)
                .then((user) => {
                    res.send(user);
                }
                )
                .catch((err) => {
                    res.send(err);
                }
                );
        }
        else {
            res.send('Invalid Tanggal Lahir');
        }
    }
    catch (err) {
        res.send(err);
    }
})


router.get('/:kode_divisi', (req, res) => {
    try {
        if (req.params.kode_divisi) {
            Pegawai.find(req.params.kode_divisi)
                .then((user) => {
                    res.send(user);
                }
                )
                .catch((err) => {
                    res.send(err);
                }
                );
        }
        else {
            res.send('Invalid KodeDivisi');
        }
    }
    catch (err) {
        res.send(err);
    }
})

router.get('/:alamat', (req, res) => {
    try {
        if (req.params.alamat) {
            Pegawai.find(req.params.alamat)
                .then((user) => {
                    res.send(user);
                }
                )
                .catch((err) => {
                    res.send(err);
                }
                );
        }
        else {
            res.send('Invalid Alamat');
        }
    }
    catch (err) {
        res.send(err);
    }
})





module.exports = router