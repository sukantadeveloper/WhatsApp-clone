import { Server } from 'socket.io';

const io = new Server(8000, {
    cors: {
        origin: 'https://chat-app-sukanta.vercel.app',
    }, 
})


let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}


const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}


const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}


io.on('connection',  (socket) => {

    console.log('user connected')
    //connect or when someone loged in 
    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })


    //send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverId);
        io.to(user.socketId).emit('getMessage', data)
    })


    //disconnect user or leave our app 
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })

})