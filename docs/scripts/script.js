'use strict';

(function indexScope() {
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.button');
        const frameOne = document.querySelector('.frame-one');
        const frameTwo = document.querySelector('.frame-two');

        btn.addEventListener("mouseenter", setEffect);
        btn.addEventListener("mouseleave", resetEffect);

        function setEffect() {
            frameOne.classList.add('move-frame-one');
            frameTwo.classList.add('move-frame-two');
        }

        function resetEffect() {
            frameOne.classList.remove('move-frame-one');
            frameTwo.classList.remove('move-frame-two');
        }
    });
}.bind({})());