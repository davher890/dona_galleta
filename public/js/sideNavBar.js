function openNav(type, name) {
    $("#navigationMenu").empty();
    var typeArray = typeMenu[type];
    for (var i = 0; i < typeArray.length; i++) {
        $("#navigationMenu").append("<a class='mdl-navigation__link' href=/galeria/" + typeArray[i][0] + ">" + typeArray[i][1] + "</a>");
    }
    $("#navigationTitle").text(name);
    $(".mdl-layout__drawer-button").click();
}

function closeNav() {
    $("#mySidenav").empty();
    $("#mySidenav").css('width', '0');
}

var typeMenu = {
    bebes_ninos: [
        ['vestidos', 'Vestidos'],
        ['culottes', 'Culottes'],
        ['cumpleanos', 'Cumpleaños'],
        ['conjuntos', 'Conjuntos'],
        ['cojines', 'Cojínes'],
        ['chupeteros', 'Chupeteros'],
        ['mantas', 'Mantas']
        //['bolsas', 'Bolsas']
    ],
    mamas_papas: [
        ['iguales', 'Camisetas "vamos iguales"']
        ['pulseras', 'Pulseras'],
        ['sujetadores', 'Sujetadores'],
        ['cordon_gafas', 'Cordón gafas'],
    ],
    decoracion: [
        ['pizarras', 'Pizarras'],
        ['cojin', 'Cojínes'],
        ['guirnaldas', 'Guirnaldas'],
        ['cestas', 'Cestas']
    ],
    cestas: [
        ['recien_nacido', 'Recién nacido'],
        ['recien_mama', 'Recién mamá']
    ],
    pedidos: [],
    blog: []
}
