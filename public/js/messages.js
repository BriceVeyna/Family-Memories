$(document).ready(() => {
    const socket = io.connect();

    let currentUser;
    socket.emit('get online users');
    $('#join-button').click((e) => {
        e.preventDefault();
        if ($('#username-input').val().length > 0) {
            socket.emit('new user', $('#username-input').val());
            currentUser = $('#username-input').val();
            $('.username-form').remove();
            $('.chat').css('display', 'flex');
        }
    });

    $('#send-button').click((e) => {
        e.preventDefault();
        let message = $('#chat-input').val();
        if (message.length > 0) {
            socket.emit('new message', {
                sender: currentUser,
                message: message,
            });
            $('#chat-input').val("");
        }
    });

    socket.on('new user', (username) => {
        console.log(`${username} has joined the chat`);
        $('.users-online').append(`<div class="user-online">${username}</div>`);
    })

    socket.on('new message', (data) => {
        $('.message-container').append(`
      <div class="message">
        <p class="message-user">${data.sender}: </p>
        <p class="message-text">${data.message}</p>
      </div>
    `);

    })

    socket.on('get online users', (onlineUsers) => {
        for (username in onlineUsers) {
            $('.users-online').append(`<div class="user-online">${username}</div>`);
        }
    })

    socket.on('user has left', (onlineUsers) => {
        $('.users-online').empty();
        for (username in onlineUsers) {
            $('.users-online').append(`<p>${username}</p>`);
        }
    });
});