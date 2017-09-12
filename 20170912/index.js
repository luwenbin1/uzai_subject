var _indextop = document.getElementsByClassName('fixed')[0];
var floor1 = document.getElementById('floor1');

function getTop(elem) {
    var offtop = elem.offsetTop;
    var parent = elem.offsetParent;
    while (parent) {
        offtop += parent.offsetTop;
        parent = parent.offsetParent;
    }
    return offtop;
}
var itop = getTop(_indextop);
setTimeout(function() {
    itop = getTop(_indextop);
}, 100);
window.onscroll = function() {
    if (window.scrollY >= itop) {
        _indextop.classList.add('no-fixed');
        floor1.style.marginTop = '.9rem';
    } else {
        _indextop.classList.remove('no-fixed');
        floor1.style.marginTop = '0rem';
    }
};