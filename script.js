document.getElementById('teaser').getElementsByTagName('span')[0].innerText = "";

setTimeout(function() {
  typeText('Raspberry');
}, 3000)

function typeText(text) {
  addLetters(text);
}

var i = 0;
function addLetters(text) {
  var writer = setTimeout(function() {
    document.getElementById('teaser').getElementsByTagName('span')[0].innerText += text[i];

    if (i === text.length-1) {
      clearTimeout(writer);
    } else {
      i++
      addLetters(text);
    }
  }, Math.floor(Math.random() * (270 - 40) + 40));
}
