'use strict';

(function indexScope() {
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.button');
        const frameOne = document.querySelector('.frame-one');
        const frameTwo = document.querySelector('.frame-two');

        btn.addEventListener("mouseover", setEffect());
        btn.addEventListener("onmouseout", resetEffect());

        function setEffect() {
            console.log('mouseover!');
        }

        function resetEffect() {
            console.log('onmouseout!');
        }
    });
}.bind({})());