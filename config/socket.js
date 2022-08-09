const { Message } = require('../models');

module.exports = (io, socket, users) => {

    // server socket listens for 'new user', accepts username
    socket.on('new user', (username) => {
        // save username to users Dictionary to access the socket.id (unique to client)
        users[username] = socket.id;
        // save username to socket Dictionary
        socket["username"] = username;
        console.log(`${username} has joined the chat!`);
        // io.emit (sent to all connected clients)
        // sends username to all connected clients
        io.emit("new user", username);
    })
    // on new message to server
    socket.on('new message', (data) => {
        // send that message back to all clients
        io.emit('new message', data);
        Message.create({
            text: data.message,
            username: socket.username,
        })
    })

    // server socket listens for 'get online users'
    socket.on('get online users', () => {
        // then sends online users to client socket that emited 'get online users'
        socket.emit('get online users', users);
    })

    // server socket listens for 'disconnect' message from client socket (sent on disconnect)
    socket.on('disconnect', () => {
        // deleters username from users dictionary
        delete users[socket.username]
        // server socket sends 'user has left' to client socket
        io.emit('user has left', users);
    });
};