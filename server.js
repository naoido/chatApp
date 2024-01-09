const express =  require("express");
const http    =  require("http");
const io      =  require("socket.io")(server);

const app     =  express();
const server  =  http.createServer(app);
const PORT    =  3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("ユーザーが接続しました");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log("listening on 3000");
});
