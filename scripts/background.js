const ws = new WebSocket('wss://echo.websocket.org/');

ws.onopen = function() {
  console.log('WebSocket connection opened');
  ws.send('Hello, WebSocket!'); // Send a test message
};

ws.onmessage = function(event) {
  console.log('Received:', event.data);
  // You can add more logic here to handle incoming messages
};

ws.onerror = function(error) {
  console.error('WebSocket Error:', error);
};

ws.onclose = function() {
  console.log('WebSocket connection closed');
};
