api.loading();

function subject_dataSuccess() {
    setTimeout(function() {
        var _box = document.getElementsByClassName('uzai-product-six')[0];
        var _star = _box.getElementsByClassName('product-startadr');
        for (var i = 0; i < _star.length; i++) {
            _star[i].innerHTML = 'NO.' + (i + 1);
        }
    }, 0);
    if (document.querySelector('.subject-swiper-container')) {
        var swiper = new Swiper('.subject-swiper-container', {
            pagination: '.swiper-pagination1',
            paginationClickable: true,
            observer: true,
            observeParents: true,
        });
    }
}
(function() {
    var _bar = document.getElementsByClassName('uzai-netsix-bar');
    setTimeout(function() {
        for (var i = 0; i < _bar.length; i++) {
            _bar[i].attrtop = _bar[i].offsetTop;
            _bar[i].style.zIndex = 99 + i;
        }
        api.endloading();
    }, 2000);
    window.onscroll = function() {
        for (var i = 0; i < _bar.length; i++) {
            if (_bar[i].attrtop <= window.scrollY) {
                _bar[i].classList.add('on');
            } else {
                _bar[i].classList.remove('on');
            }
        }
    };
    var _jnav = document.getElementsByClassName('j_nav'),
        _scroll = document.getElementsByClassName('conts-scroll');
    for (var m = 0; m < _jnav.length; m++) {
        _jnav[m].index = m;
        _jnav[m].addEventListener('click', function() {
            window.scrollTo(0, _scroll[this.index].offsetTop - 50);
        });
    }
})();