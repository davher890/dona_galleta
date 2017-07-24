var sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('dona_galleta'),
    SHOP = {};


SHOP.createTables = function(reset) {
    if (reset){
        db.run("DROP TABLE IF EXISTS camisetas");
        db.run("DROP TABLE IF EXISTS vestidos");
        db.run("DROP TABLE IF EXISTS mantas");
    }
    db.run("CREATE TABLE IF NOT EXISTS camisetas (id INTEGER PRIMARY KEY AUTOINCREMENT, precio REAL, cantidad INTEGER, talla TEXT, color TEXT, bolsillo TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS vestidos (id INTEGER PRIMARY KEY AUTOINCREMENT, precio REAL, cantidad INTEGER, talla TEXT, color TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS mantas (id INTEGER PRIMARY KEY AUTOINCREMENT, precio REAL, cantidad INTEGER, color TEXT)");
}

// Camisetas
SHOP.getCamisetas = function(callback) {
    db.all("SELECT * FROM camisetas", callback);
}

SHOP.insertCamiseta = function(data) {
    var stmt = db.prepare("INSERT INTO camisetas VALUES (?,?,?,?,?,?)");
    stmt.run(null, data.precio, data.cantidad, data.talla, data.color, data.bolsillo);
    stmt.finalize();
}

SHOP.updateCamiseta = function(data) {
    var stmt = db.prepare("UPDATE camisetas SET precio = ?, cantidad = ?, talla = ?, color = ?, bolsillo = ? WHERE id = ?");
    stmt.run(data.precio, data.cantidad, data.talla, data.color, data.bolsillo, data.id);
    stmt.finalize();
}

SHOP.deleteCamiseta = function(id) {
    var stmt = db.prepare("DELETE FROM camisetas WHERE id=(?)");
    stmt.run(id);
    stmt.finalize();
}

// Vestidos
SHOP.getVestidos = function(callback) {
    db.all("SELECT * FROM vestidos", callback);
}

SHOP.insertVestido = function(data) {
    var stmt = db.prepare("INSERT INTO vestidos VALUES (?,?,?,?,?)");
    stmt.run(null, data.precio, data.cantidad, data.talla, data.color);
    stmt.finalize();
}

SHOP.updateVestido = function(data) {
    var stmt = db.prepare("UPDATE vestidos SET precio = ?, cantidad = ?, talla = ?, color = ? WHERE id = ?");
    stmt.run(data.precio, data.cantidad, data.talla, data.color, data.id);
    stmt.finalize();
}

SHOP.deleteVestido = function(id) {
    var stmt = db.prepare("DELETE FROM vestidos WHERE id=(?)");
    stmt.run(id);
    stmt.finalize();
}

// Mantas
SHOP.getMantas = function(callback) {
    db.all("SELECT * FROM mantas", callback);
}

SHOP.insertManta = function(data) {
    var stmt = db.prepare("INSERT INTO mantas VALUES (?,?,?,?)");
    stmt.run(null, data.precio, data.cantidad, data.color);
    stmt.finalize();
}

SHOP.updateManta = function(data) {
    var stmt = db.prepare("UPDATE mantas SET precio = ?, cantidad = ?, color = ? WHERE id = ?");
    stmt.run(data.precio, data.cantidad, data.color, data.id);
    stmt.finalize();
}

SHOP.deleteManta = function(id) {
    var stmt = db.prepare("DELETE FROM mantas WHERE id=(?)");
    stmt.run(id);
    stmt.finalize();
}



module.exports = SHOP;
