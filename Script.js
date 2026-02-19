const slideElements = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

slideElements.forEach(el => observer.observe(el));

const text = "Welcome to Codingking!";
const typingElement = document.querySelector('.typing-text');

let index = 0;
let typingSpeed = 100; // milliseconds per character
let pauseBetweenLoops = 1500; // pause before restarting

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  } else {
    // After typing complete, pause then clear and restart
    setTimeout(() => {
      typingElement.textContent = '';
      index = 0;
      type();
    }, pauseBetweenLoops);
  }
}

type();





