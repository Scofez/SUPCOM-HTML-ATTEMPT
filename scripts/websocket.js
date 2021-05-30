const ws = new WebSocket("ws://localhost:8082")

ws.addEventListener("open", () =>{
    console.log("We are connected!");
    ws.send('This is a great recipe that I found in my Grandmas recipe book. Judging from the weathered look of this recipe card, this was a family favorite')
});
 ws.addEventListener("message", ({data}) => {
     console.log(data);
 });