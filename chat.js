const { Message, User } = require('./models');

module.exports = (io, socket, users) => {

    socket.on('new user', (username) => {
        users[username] = socket.id;
        socket["username"] = username;
        console.log(`${username} has joined the chat!`);
        io.emit("new user", username);
    })

    socket.on('new message', (data) => {
        console.log(`${data.sender}: ${data.message}`)
        io.emit('new message', data);
        console.log(`your message is ${data}`);
        Message.create({
            text: data.message,
            // how to pass in logged-in user info?
            // username: data.username,
            username: socket.username,
        })
    })

    socket.on('get online users', () => {
        socket.emit('get online users', users);
    })

    socket.on('disconnect', () => {
        delete users[socket.username]
        io.emit('user has left', users);
    });
};