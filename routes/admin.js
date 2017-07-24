var express = require('express');
var router = express.Router();
var db = require('../db.js');


router.get('/admin', (req, res) => {

    // Get database items
    var camisetasPromise = new Promise((resolve, reject) => {
        db.getCamisetas((err, ret) => {
            if (err) {
                reject(err);
            } else {
                resolve(ret);
            }
        });
    });
    var vestidosPromise = new Promise((resolve, reject) => {
        db.getVestidos((err, ret) => {
            if (err) {
                reject(err);
            } else {
                resolve(ret);
            }
        });
    });

    var mantasPromise = new Promise((resolve, reject) => {
        db.getMantas((err, ret) => {
            if (err) {
                reject(err);
            } else {
                resolve(ret);
            }
        });
    });

    Promise.all([camisetasPromise, vestidosPromise, mantasPromise]).then(values => {
        var obj = {
            inventory: [{
                type : 'camiseta',
                title: 'Camisetas',
                fields: [{
                    title: 'Precio',
                    type: 'number'
                }, {
                    title: 'Cantidad',
                    type: 'number'
                }, {
                    title: 'Talla',
                    type: 'text'
                }, {
                    title: 'Color',
                    type: 'text'
                }, {
                    title: 'Bolsillo',
                    type: 'text'
                }],
                items: values[0]
            }, {
                type : 'vestido',
                title: 'Vestidos',
                fields: [{
                    title: 'Precio',
                    type: 'number'
                }, {
                    title: 'Cantidad',
                    type: 'number'
                }, {
                    title: 'Talla',
                    type: 'text'
                }, {
                    title: 'Color',
                    type: 'text'
                }],
                items: values[1]
            }, {
                type : 'manta',
                title: 'Mantas',
                fields: [{
                    title: 'Precio',
                    type: 'number'
                }, {
                    title: 'Cantidad',
                    type: 'number'
                }, {
                    title: 'Color',
                    type: 'text'
                }],
                items: values[2]
            }]
        };
        res.render('admin', obj);
    });
});

// Camisetas
router.post('/admin/camiseta', (req, res) => {

    if (req.body.id) {
        db.updateCamiseta(req.body);
    } else {
        db.insertCamiseta(req.body);
    }
    res.redirect('/admin');
});

router.get('/admin/camiseta/:id/delete', (req, res) => {

    var id = req.params.id;
    db.deleteCamiseta(id);
    res.redirect('/admin');
});

// Vestidos
router.post('/admin/vestido', (req, res) => {

    if (req.body.id) {
        db.updateVestido(req.body);
    } else {
        db.insertVestido(req.body);
    }
    res.redirect('/admin');
});

router.get('/admin/vestido/:id/delete', (req, res) => {

    var id = req.params.id;
    db.deleteVestido(id);
    res.redirect('/admin');
});


// Mantas
router.post('/admin/manta', (req, res) => {

    if (req.body.id) {
        db.updateManta(req.body);
    } else {
        db.insertManta(req.body);
    }
    res.redirect('/admin');
});

router.get('/admin/manta/:id/delete', (req, res) => {

    var id = req.params.id;
    db.deleteManta(id);
    res.redirect('/admin');
});


module.exports = router;
