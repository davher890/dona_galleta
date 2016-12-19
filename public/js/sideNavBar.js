function openNav(type) {
    $("#navigationMenu").empty();
    var typeArray = typeMenu[type];
    for (var i = 0; i < typeArray.length; i++) {
        $("#navigationMenu").append("<a class='mdl-navigation__link' href=/galeria/"+typeArray[i][0]+">" + typeArray[i][1] + "</a>");
    }
    $("#navigationTitle").text(type);
    $(".mdl-layout__drawer-button").click();
}

function closeNav() {
    $("#mySidenav").empty();
    $("#mySidenav").css('width', '0');
}

var typeMenu = {
    bebes: [['chupeteros', 'Chupeteros'], ['braguitas', 'Braguitas'], ['manta', 'Manta'], ['toalla', 'Toalla'], ['cojin', 'Cojín']],
    mamas: [['sujetadores', 'Sujetadores'], ['pulseras', 'Pulseras'], ['iguales', 'Iguales']],
    decoracion: [['piezas_madera', 'Piezas madera'], ['luces', 'Luces'], ['cojin', 'Cojín']],
    cestas: [['Recién nacido', 'recien_nacido'], ['recien_mama', 'Recién mamá']],
    pedidos: [],
    blog: []
}
