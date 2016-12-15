var express = require('express');
var router = express.Router();


router.get('/mujer', function(req, res) {

    // Get hombre data from firebase and show the data
    // var jsonData = getDataFromFirebase():
    res.render('gallery', {
        data: getDataFromFirebase()
    });
});

function getDataFromFirebase() {
    return [{
        'tipo': 'Camiseta',
        'nombre': 'Camistea de hombre color rojo',
        'descripcion': 'Camiseta de hombre, todas las tallas y colores disponibles',
        'color': 'rojo',
        'precio': '23',
        'img': 'http://www.desafiointerior.es/media/catalog/product/c/a/camiseta_interior_t_rmica_impetus_1_.jpg'
    }, {
        'tipo': 'Pantalon',
        'nombre': 'Camistea de hombre color rojo',
        'descripcion': 'Camiseta de hombre, todas las tallas y colores disponibles',
        'color': 'azul',
        'precio': '45',
        'img': 'http://static.kiabi.es/images/pantalon-pitillo-chino-elastico-verde-hombre-td458_38_lpr1.jpg'
    }, {
        'tipo': 'Zapatos',
        'nombre': 'Camistea de hombre color rojo',
        'descripcion': 'Camiseta de hombre, todas las tallas y colores disponibles',
        'color': 'negro',
        'precio': '168',
        'img': 'http://mla-s1-p.mlstatic.com/calzado-de-vestir-hombres-cuero-legitimo-zapatos-masculinos-12881-MLA20067033293_032014-F.jpg'
    }, {
        'tipo': 'Pantalon',
        'nombre': 'Camistea de hombre color rojo',
        'descripcion': 'Camiseta de hombre, todas las tallas y colores disponibles',
        'color': 'azul',
        'precio': '45',
        'img': 'http://static.kiabi.es/images/pantalon-pitillo-chino-elastico-verde-hombre-td458_38_lpr1.jpg'
    }, {
        'tipo': 'Zapatos',
        'nombre': 'Camistea de hombre color rojo',
        'descripcion': 'Camiseta de hombre, todas las tallas y colores disponibles',
        'color': 'negro',
        'precio': '168',
        'img': 'http://mla-s1-p.mlstatic.com/calzado-de-vestir-hombres-cuero-legitimo-zapatos-masculinos-12881-MLA20067033293_032014-F.jpg'
    }, {
        'tipo': 'Pantalon',
        'nombre': 'Camistea de hombre color rojo',
        'descripcion': 'Camiseta de hombre, todas las tallas y colores disponibles',
        'color': 'azul',
        'precio': '45',
        'img': 'http://static.kiabi.es/images/pantalon-pitillo-chino-elastico-verde-hombre-td458_38_lpr1.jpg'
    }, {
        'tipo': 'Zapatos',
        'nombre': 'Camistea de hombre color rojo',
        'descripcion': 'Camiseta de hombre, todas las tallas y colores disponibles',
        'color': 'negro',
        'precio': '168',
        'img': 'http://mla-s1-p.mlstatic.com/calzado-de-vestir-hombres-cuero-legitimo-zapatos-masculinos-12881-MLA20067033293_032014-F.jpg'
    }];
}

module.exports = router;
