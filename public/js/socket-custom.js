var socket = io();

// Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar eventos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Héctor',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});