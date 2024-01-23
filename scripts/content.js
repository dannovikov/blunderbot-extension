chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "changeKing") {
    changeMyKingStyle();
    displayGifOnBoard();
  }
});

function changeMyKingStyle() {
  // const kingImage = chrome.runtime.getURL('images/kings/cool.png'); // Path to your local king image
  const kingImage = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Q4cmU4dmF2Y3oyNHJtb3AxZTA2ZHd2ZmswbzlnOTYyb2RiMGZ0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XMmf6i3xuKZiPMvNZe/giphy.gif"
  const myColor = 'white'; // Your piece color

  const styleTag = document.createElement('style');
  styleTag.id = 'my-king-style';
  styleTag.innerHTML = `
    .piece.${myColor[0]}k, 
    .analyse__board .orientation-${myColor} .king.${myColor}, 
    .is2d .puzzle .orientation-${myColor} .king.${myColor}, 
    .playing .is2d .orientation-${myColor} .king.${myColor} {
      background-image: url('${kingImage}') !important;
    }
  `;
  document.head.appendChild(styleTag);
}

function displayGifOnBoard() {
  const gifUrl = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Q4cmU4dmF2Y3oyNHJtb3AxZTA2ZHd2ZmswbzlnOTYyb2RiMGZ0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XMmf6i3xuKZiPMvNZe/giphy.gif"; 
  const boardElement = document.querySelector('.main-board'); 

  if (boardElement) {
    const gifElement = document.createElement('img');
    gifElement.src = gifUrl;
    gifElement.style.position = 'absolute';
    gifElement.style.width = '100px'; // Set width as needed
    gifElement.style.height = '100px'; // Set height as needed
    gifElement.style.left = '50%'; // Adjust position as needed
    gifElement.style.top = '50%'; // Adjust position as needed
    gifElement.style.transform = 'translate(-50%, -50%)';
    gifElement.style.zIndex = '1000'; // Ensure the GIF is above other elements

    boardElement.appendChild(gifElement);
  } else {
    console.error('Board element not found');
  }
}