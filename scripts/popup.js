
document.addEventListener('DOMContentLoaded', function() {
  const changeKingButton = document.getElementById('changeKingButton');
  if (changeKingButton) {
    changeKingButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "changeKing"});
      });
    });
  } else {
    console.error('Change King Button not found');
  }
});
