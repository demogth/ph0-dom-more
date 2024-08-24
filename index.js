let box = document.querySelector('.box');
let message = document.getElementById('very-important-message');
let cssProperty = document.getElementById('css-property-name');
let cssValue = document.getElementById('css-property-value');
let btn = document.getElementsByClassName('badaboom')[0];

function setNewStyle(element, style) {
    for (let property in style) {
        element.style[property] = style[property];
    }
    return element;
}

btn.addEventListener('click', () => {
    let style = {
        [cssProperty.value]: cssValue.value,
    }
    setNewStyle(box, style)
    box.innerText = message.value
})