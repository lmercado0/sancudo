const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const PORT = 1883;

server.listen(PORT, function () {
  console.log('MQTT server started on port', PORT);
});

aedes.on('client', function (client) {
  console.log('Client connected:', client.id);
});

aedes.on('clientDisconnect', function (client) {
  console.log('Client disconnected:', client.id);
});

aedes.on('publish', function (packet, client) {
  console.log('Received message on topic:', packet.topic, 'with message:', packet.payload.toString());
});