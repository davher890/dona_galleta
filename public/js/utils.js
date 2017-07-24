function addToCart(data) {

    $.ajax({
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        mimeType: 'application/json',
        url: 'http://localhost:3000/session',
        data: JSON.stringify(data),
        async: true,
        processData: false,
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function getCart(callback) {

    $.ajax({
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        mimeType: 'application/json',
        url: 'http://localhost:3000/session',
        async: true,
        processData: false,
        success: function(response) {
            callback();
        },
        error: function(error) {
            callback();
        }
    });
}
