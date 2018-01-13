let field = document.querySelector('#js-field');
let ball = document.querySelector('#js-ball');

field.addEventListener('click', function(e){
    let left = e.clientX;
    let top = e.clientY;
    let fieldMarginLeft = getComputedStyle(field).marginLeft;
    let fieldMarginTop = getComputedStyle(field).marginTop;
    let ballWidth = getComputedStyle(ball).width;
    let ballHeight = getComputedStyle(ball).height;

    ball.style.left = (left - parseInt(fieldMarginLeft) - parseInt(ballWidth)/2 - 14) + 'px';
    ball.style.top = (top - parseInt(fieldMarginTop) - parseInt(ballHeight)/2 - 14) + 'px';
});
