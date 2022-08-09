$(document).ready(() => {
    const socket = io.connect();

    let currentUser;
    // client socket sends 'get online users' to server socket when connection opens
    socket.emit('get online users');

    $('#join-button').click((e) => {
        e.preventDefault();
        // if username input has length
        if ($('#username-input').val().length > 0) {
            // client socket emits 'new user', username to server socket
            socket.emit('new user', $('#username-input').val());
            // saves current user
            currentUser = $('#username-input').val();
            // remove username form
            $('.username-form').remove();
            // change .chat display to 'flex' to un-hide elements
            $('.chat').css('display', 'flex');
        }
    });

    // client socket listens for 'new user', accepts username
    socket.on('new user', (username) => {
        // logs 'username has joined the chat' to client
        console.log(`${username} has joined the chat`);
        // appends new online user to .online-users
        $('.online-users').append(`<div class="user-online">${username}</div>`);
    })

    $('#send-button').click((e) => {
        e.preventDefault();
        // message = input value from HTML
        let message = $('#chat-input').val();
        // if message has length
        if (message.length > 0) {
            // client socket sends 'new message', {currentUser, message} to server
            socket.emit('new message', {
                sender: currentUser,
                message: message,
            });
            $('#chat-input').val("");
        }
    });

    // client socket listens for 'new message', data from server socket
    socket.on('new message', (data) => {
        // appends sender and message to HTML
        $('.message-container').append(`
      <div class="message">
        <p class="message-user">${data.sender}: </p>
        <p class="message-text">${data.message}</p>
      </div>
    `);

    })

    // client socket listes for 'user has left' from server socket
    socket.on('get online users', (users) => {
        // for (key in obj)
        // iterates through dictionary key/value pairs
        // for each username in users object
        for (username in users) {
            $('.online-users').append(`<div class="user-online">${username}</div>`);
        }
    })

    // client socket listes for 'user has left' from server socket
    socket.on('user has left', (users) => {
        // empty the HTML element
        $('.users-online').empty();
        // for (key in obj)
        // iterates through dictionary key/value pairs
        // for each username in users object
        for (username in users) {
            // append online user
            $('.users-online').append(`<p>${username}</p>`);
        }
    });
});