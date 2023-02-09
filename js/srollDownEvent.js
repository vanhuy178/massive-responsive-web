let navHeaer = $('header nav');
let resizeWindow = 'scroll-down-window';
let progressBarClass = $('.progressBar');
let active = 'active'

window.addEventListener('scroll', function () {
    if (this.window.scrollY !== 0) {
        navHeaer.addClass(resizeWindow);
        progressBarClass.addClass(active);
    }
    else {
        navHeaer.removeClass(resizeWindow);
        progressBarClass.removeClass(active);
    }
})
