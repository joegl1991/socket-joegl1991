const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Adminsitrador',
        mensaje: 'Bienvenido a esta app'
    });

    // Escuchar eventos
    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) => {

        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', mensaje);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo mal'
        //     });
        // }

    });

});