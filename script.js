const introText = document.getElementById('intro-text');
const text = introText.textContent;
introText.textContent = '';

let i = 0;
const intervalId = setInterval(() => {
    introText.textContent += text[i];
    i++;
    if (i > text.length) {
        clearInterval(intervalId);
    }
}, 50); 