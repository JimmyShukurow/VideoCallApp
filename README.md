# VideoCallApp
<h1>This is simple video call app with WebRTC and  <u>Spring boot</u> <u>Vue.js 3 composition API</u> <u>Quasar</u> and <u>Stomp Websocket</u></h1>
<br>
<h3> Basic logic is here to make instance of SimplePeer.js on each browser and send signal of  SimplePeer to each other, stream of video will be done automaticly. </h3>
<img src="https://github.com/JimmyShukurow/VideoCallApp/blob/main/images/demo.png" alt="demo">
<img src="https://github.com/JimmyShukurow/VideoCallApp/blob/main/images/call.png" alt="call">
<img src="https://github.com/JimmyShukurow/VideoCallApp/blob/main/images/answer.png" alt="answer">
<img src="https://github.com/JimmyShukurow/VideoCallApp/blob/main/images/Video-call-final.png" alt="final">
<p>In this demo WebSocket is used to send PEER signal of browser to target users browers, then PEER connections are sharing video stream to each other. PEER connection is similar to WebSocket, but for video datas. </p>
<p> Similar example <a href="https://github.com/adrianhajdin/project_video_chat">https://github.com/adrianhajdin/project_video_chat</a>
<p> If you have a docker and docker compose in your computer you can download docker-compose-files folder and run it. </p>
<p>It will give you Frontend with <br>localhost:4444<br> and backend with <br>localhost:3333<br></p>
<br>
<br>
<p>This is the example code for people who has researched for Stomp usage with Springboot and vue.js 3. </p>
<p>In quasar I have socket.js file which has all methods to connect, send and recieve data from socket at a real time. </p>
