const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const {kodeDivisi} = require('../model/kodeDivisi')


// Tambah Divisi
router.post('/', (req, res) => {
    const kode_divisi = new kodeDivisi({
       kode_divisi : req.body.kode_divisi,
       nama_divisi: req.body.nama_divisi,
       pimpinan_divisi: req.body.pimpinan_divisi
    });
    kode_divisi.save()
        .then(() => {
            res.status(200).json({message: 'Berhasil ditambahkan'})
        })
        .catch((err) => {
            res.send(err)
        })
})


//Get Data Pegawai
router.get('/', (req, res) => {
    kodeDivisi.find()
        .then((pegawai) => {
            res.send(pegawai)
        })
        .catch((err) => {
            res.send(err)
        })
})




module.exports = router