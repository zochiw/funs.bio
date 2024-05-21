const texts = document.getElementById('typingTexts').innerHTML.split(' &lt;&gt; ');
const textElement = document.getElementById('typingText');
let currentTextIndex = 0;

function typeWriter(text, i) {
    if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i);
        }, 100);
    } else {
        setTimeout(function() {
            eraseText(text);
        }, 1000);
    }
}

function eraseText(text) {
    let length = text.length;
    if (length > 0) {
        textElement.textContent = text.substring(0, length - 1);
        setTimeout(function() {
            eraseText(text.substring(0, length - 1));
        }, 50);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(function() {
            typeWriter(texts[currentTextIndex], 0);
        }, 500);
    }
}

typeWriter(texts[currentTextIndex], 0);