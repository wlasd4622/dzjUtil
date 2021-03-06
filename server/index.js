// socket.io引入成功后，可通过io()生成客户端所需的socket对象。
let socket = io('http://127.0.0.0:3000');

// socket.emmit()用户客户端向服务端发送消息，服务端与之对应的是socket.on()来接收信息。
socket.emmit('client message', {
  msg: 'hi, server'
});

// socket.on()用于接收服务端发来的消息
socket.on('connect', () => {
  console.log('client connect server');
});
socket.on('disconnect', () => {
  console.log('client disconnect');
});
