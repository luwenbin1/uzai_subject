(function(window) {
    'use strict;'
    var $doc = document;
    /**
     * $My--查找元素变量
     */
    var $My = {
        $bar: $doc.querySelector('.zx-japan-banner .bar'),
        $barUl: $doc.querySelector('.zx-japan-banner .bar .conts'),
        $barLi: $doc.querySelectorAll('.zx-japan-banner .bar .conts li'),
        $pScroll: $doc.getElementsByClassName('zx-japan-all')
    }
    var $varvibale = {
        $barOffset: $My.$bar.offsetTop
    }
    for (var i = 0, len = $My.$barLi.length; i < len; i++) {
        (function(i) {
            $My.$barLi[i].onclick = function() {
                document.body.scrollTop = $My.$pScroll[i].offsetTop - $My.$barUl.offsetHeight;
            };
        })(i);
    }

    function dataSuccess() {
        window.onscroll = function() {
            if ($varvibale.$barOffset > (document.body.scrollTop||document.documentElement.scrollTop)) {
                $My.$barUl.classList.remove('active');
            } else {
                $My.$barUl.classList.add('active');
            }
        };
        oddshow('zx-japan-t3');
        oddshow('zx-japan-t4');
        oddshow('zx-japan-t5');
    }
    window.dataSuccess = window.dataSuccess || dataSuccess;
    function oddshow(mk) {
        var mk1 = document.getElementsByClassName(mk)[0];
        var length1 = mk1.getElementsByClassName('productlist3').length;
        if (length1 % 2 != 0) {
            var last = mk1.getElementsByClassName('productlist3')[length1 - 1];
            last.classList.add('hide');
        }
    }
})(window);