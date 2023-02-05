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

    // design.js 
    renderDesignItem()

    // counter number of skill;
    $('.counter').counterUp({
        delay: 20,
        time: 500
    })


    // render infor title of each section
    {
        let htmlContent = '';
        let renderDesignInfo = $('.design-info ');
        let renderShowcaseInfo = $('.showcase-info');
        let renderFabulousTeam = $('.team-info');
        let renderBlogInfo = $('.blog-info');
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
            else if (item.title.toLocaleUpperCase() === 'WE HAVE A FABULOUS TEAM') {
                htmlContent = title(item.title, item.content);
                renderFabulousTeam.html(htmlContent)
            }
            else {
                htmlContent = title(item.title, item.content);
                renderBlogInfo.html(htmlContent);
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


    // render the member of team team.js
    renderTheMemberOfTheTeam()


    // setting time for blog section 
    let timeSetting = $('#time');
    // take realtime
    const dayRealtime = new Date();
    const year = dayRealtime.getFullYear();
    const month = dayRealtime.getMonth()
    const date = dayRealtime.getDate();
    // const date = dayRealtime.getDate();
    const hour = dayRealtime.getHours();
    let ampm = hour > 12 ? 'PM' : 'AM';
    const minute = dayRealtime.getMinutes();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let renderTimeNow = ` ${months[month].slice(0, 3)} ${date}, ${year}`;
    // let renderTimeNow = `${hour}:${minute} ${ampm} - ${date}/${months[month].slice(0, 3)}/${year}`;

    timeSetting.html(renderTimeNow);
}) 
