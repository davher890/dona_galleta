function openNav(type) {
    $("#mySidenav").empty();
    $("#mySidenav").append("<a class='closebtn' onclick=closeNav()>&times</a>");
    $("#mySidenav").css('width', '250px');
    var typeArray = typeMenu[type];
    for (var i = 0; i < typeArray.length; i++) {
        $("#mySidenav").append('<a href="/galeria?tipo="+typeArray[i][0]>' + typeArray[i][1] + '</a>');
    }
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
