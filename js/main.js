// MAIN JS FILE

$(document).ready(function () {
    //CALL TO HEADER JS
    renderNavbarItem();

    // HANDLE ACTIVE EVENT IN ITEM OF NAVBAR HEADER
    let active = 'active';
    {
        let listNavItem = $('.header-nav-item a');
        listNavItem.on('click', function () {
            listNavItem.removeClass(active)
            $(this).addClass(active)
        })
    }

    // CALL TO DESIGN JS
    renderDesignItem()

    // COUNTER THE NUMBER OF THE SKILL SECTION;
    $('.counter').counterUp({
        delay: 20,
        time: 500
    })


    // RENDER TITLE FOR EACH SECTION HAS TITLE AND DESCRIPTION MINI
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


    // RENDER NAVBAR FOR THE SHOWCASE
    renderNavItemOfShowcase()


    // HANDLE ELEMENTS OF THE SHOWCASE 
    {
        let showcaseNavItem = $('.showcase__filter .nav-item');
        showcaseNavItem.on('click', function () {
            showcaseNavItem.removeClass(active)
            $(this).addClass(active)
        })
    }

    // CALL LIST OF IMAGE'S SHOWCASE 
    renderShowCaseContent();

    // RENDER MODAL OF THE SHOWCASE
    renderModalShowcase()


    // RENDER THE MEMBER OF THE TEAM JS
    renderTheMemberOfTheTeam()
    // SETTING CAROUSEL FOR THE MEMBER OF TEAM
    $('.number-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 5
            }
        }
    })

    // SETTING TIME FOR BLOG SECTION 
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

    // COUNTERT THE NUMBER OF THE NUMBER SECTION 
    renderNumberSection()
    $('.number__counter').counterUp({
        delay: 20,
        time: 500
    })

    // RENDER INTRO CONTENT
    renderIntroContent()


    // SHOW OWL CAROUSEL AT FEEDBACK SECTION
    $('.feedback-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplayTimeout: 1000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            }
            // ,
            // 600: {
            //     items: 1
            // }

            ,
            1000: {
                items: 1
            }
        }
    })



    // SHOW CAROUSEL AT THE PARTNER SECTION
    $(".partners___carousel").owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            }
            ,
            784: {
                items: 4
            }
            ,
            1215: {
                items: 6
            }
        }
    });


})
