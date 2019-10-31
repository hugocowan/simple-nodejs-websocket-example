const ws = new WebSocket('ws://localhost:3210');

ws.addEventListener('open', () => {
    const data = { message: 'Hello from the client!' };
    const json = JSON.stringify(data);
    ws.send(json);
});

ws.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    console.log(data);
});

ws.addEventListener('error', event => {
    // Not sure what would be sent here, will be interesting to see
    console.log('Error:', event);
});
