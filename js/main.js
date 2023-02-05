$(document).ready(function () {
    //header navbar
    renderNavbarItem();

    // handle active nav header 
    let active = 'active';
    {
        let listNavItem = $('.header-nav-item a');
        listNavItem.on('click', function () {
            listNavItem.removeClass(active)
            $(this).addClass(active)
        })
    }
    renderDesignItem()

    // counter number of skill;
    $('.counter').counterUp({
        delay: 20,
        time: 500
    })
    {
        let htmlContent = '';
        let renderDesignInfo = $('.design-info ');
        let renderShowcaseInfo = $('.showcase-info');
        // rest render method
        LIST__TITLE__CHAPTER.map((item, index) => {
            if (item.title.toLocaleUpperCase() === 'WE LOVE TO DESIGN THE CREATIVE') {
                htmlContent = title(item.title, item.content);
                renderDesignInfo.html(htmlContent);
            }
            else if (item.title.toLocaleUpperCase() === 'CREATIVE SHOWCASE') {
                htmlContent = title(item.title, item.content);
                renderShowcaseInfo.html(htmlContent)
            }
        })
    }


    // rendert nav showcase layout
    renderNavItemOfShowcase()


    // handle nav showcase item 
    {
        let showcaseNavItem = $('.showcase__filter .nav-item');
        showcaseNavItem.on('click', function () {
            showcaseNavItem.removeClass(active)
            $(this).addClass(active)
        })
    }

    // show list image of show case layout
    renderShowCaseContent();

    renderModalShowcase()
}) 
