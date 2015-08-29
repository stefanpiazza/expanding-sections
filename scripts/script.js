var columns = document.getElementsByClassName('column');

for (var i = 0; i < columns.length; i++) {
    attachListeners(columns[i]);
}

function toggleWidth(column) {
    column.style.webkitTransitionDuration = '500ms';
    column.style.transitionDuration = '500ms';

    if (!column.expanded) {
        column.expanded = true;
        column.classList.add('expand');
    }

    else {
        column.expanded = false;
        column.classList.remove('expand');
    }
}

function attachListeners(element) {
    element.addEventListener('webkitTransitionEnd', function () {
        element.style.webkitTransitionDuration = '';
        element.style.transitionDuration = '';
    });

    element.addEventListener('orientationchange', function () {
        element.style.webkitTransitionDuration = '';
        element.style.transitionDuration = '';
    });

    element.addEventListener('resize', function () {
        element.style.webkitTransitionDuration = '';
        element.style.transitionDuration = '';
    });
}

window.addEventListener('touchstart', function (event) {
	toggleWidth(event.target);
	event.preventDefault();
})

window.addEventListener('mousedown', function (event) {
	toggleWidth(event.target);
	event.preventDefault();
})