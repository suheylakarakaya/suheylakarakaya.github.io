const introText = document.getElementById('intro-text');
const text = introText.textContent;
introText.textContent = '';

let i = 0;
const intervalId = setInterval(() => {
    if (i < text.length) { // Bu koşul eklendi
        introText.textContent += text[i];
        i++;
    } else {
        clearInterval(intervalId);
    }
}, 50);
