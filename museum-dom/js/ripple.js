const rippledButtons = document.querySelectorAll('.book-button');

rippledButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        const x = event.clientX;
        const y = event.clientY;

        const btnTop = event.target.offsetTop;
        const btnLeft = event.target.offsetLeft;

        const xCoord = x - btnLeft;
        const yCoord = y - btnTop;

        const rippleEffect = document.createElement('span');
        rippleEffect.classList.add('rippleEffect');
        rippleEffect.style.top = yCoord + 710 + 'px';
        rippleEffect.style.left = xCoord + 1185 + 'px';

        this.appendChild(rippleEffect);

        setTimeout(() => rippleEffect.remove(), 500);
    })
});


function getToTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};