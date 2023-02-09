
// RENDER NAV SHOWCASE
renderNavItemOfShowcase = () => {
    let idPillTab = $('#pills-tab');
    let htmlContent = '';

    htmlContent = LIST_NAV_SHOWCASE.map((item, index) => {
        return (
            `
            <li class="nav-item ${item === 'all' ? 'active' : ''}" role="presentation" data-toggle="pill" data-target="#pills-${item}">
                <a class="nav-link ">${item.toLocaleUpperCase()}</a>
            </li>
            `
        )
    });
    return idPillTab.html(htmlContent.join(''));
}

// CREATE AN OBJECT
let lightboxHrefItem = {
    dataToggle: '',
    idElement: '',
    href: ''
}
let linkHref = '';
let linkYoutobe = './assets/videos/showcase-9.mp4'

// RENDER IMAGE ELEMENT OF THE SHOWCASE
renderShowCaseContent = () => {
    let arrayOfImageShowcase;
    let linkIcons = '<i class="fa-solid fa-link"></i>';
    let youtobeIcons = '<i class="fa-brands fa-youtube"></i>';
    let searchIcons = '<i class="fa-solid fa-magnifying-glass"></i>';
    let renderContentOfShowcase = $('.showcase__content');
    let htmlContent = '';


    arrayOfImageShowcase = []
    for (let i = 0; i < 8; i++) {
        let setupVariable = `showcase-${i}`;
        arrayOfImageShowcase.push(setupVariable);
    }

    // TÙY BIẾN RENDER LINK ICON, LINK REF, LINK VIDEO, LINK IMAGE CHO CÁC TRỊ TRÍ TRONG SHOWCAE IMAGE 
    arrayOfImageShowcase.map((item, index) => {
        lightboxHrefItem = {
            dataToggle: ' data-toggle="modal"',
            idElement: `id = "light-box-${index}"`,
            href: `./assets/img/showcase-${index + 1}.jpg`,
            dataTarget: `data-target = #light-box-${index}`
        }
        linkHref = 'href = "#"'
        htmlContent += (
            `
            <div class="showcase__item tab-pane fade show active col-sm-6 col-md-4 col-xl-3" id="pills-all">
            <div class="showcase__photo">
                <img src="./assets/img/showcase-${index + 1}.jpg" alt="showcase-${index + 1}" style="width: 100%">
                <div class="showcase__info">
                    <div class="showcase__btn">
                        <a class="popup-link" 
                        ${index === 0 || index === 2 || index === 4 || index === 5 ? lightboxHrefItem.dataToggle + ' ' + lightboxHrefItem.dataTarget : ''}
                        ${index === 1 || index === 7 || index === 6 ? linkHref : ''}
                        ${index === 3 ? lightboxHrefItem.dataToggle + ' ' + lightboxHrefItem.dataTarget : ''}
                        >
                            ${index === 0 || index === 2 || index === 4 || index === 5 ? searchIcons : ''}
                            ${index === 3 ? youtobeIcons : ''}
                            ${index === 1 || index === 7 || index === 6 ? linkIcons : ''}
                        </a>
                    </div>
                    <div class="showcase__desc">
                <h4>
                    <a ${index === 0 || index === 2 || index === 4 || index === 5 ? lightboxHrefItem.dataToggle + ' ' + lightboxHrefItem.dataTarget : ''}
                        ${index === 1 || index === 7 || index === 6 ? linkHref : ''}>
                        ${index === 3 ? 'VIDEO LIGHTBOX' : ''}
                        ${index === 0 || index === 2 || index === 4 || index === 5 ? 'lightbox view' : ''}
                        ${index === 1 || index === 7 || index === 6 ? 'link Icons' : ''}
                    </a>
                </h4>
                <p>
                    <a href="#">${item}</a>
                </p>
                        </div>
                    </div >
                 </div>
            </div>

    `
        )
        // TÙY VÀO ĐIỀU KIỆN MÀ TRUYỀN VÀO HÀM ĐỂ RENDER LÊN GIAO DIỆN
        if (lightboxHrefItem.idElement === 'id = "light-box-0"' || lightboxHrefItem.idElement === 'id = "light-box-2"' || lightboxHrefItem.idElement === 'id = "light-box-4"' || lightboxHrefItem.idElement === 'id = "light-box-5"') {
            renderModalShowcase(lightboxHrefItem.idElement, lightboxHrefItem.href)
        }
        if (lightboxHrefItem.idElement === 'id = "light-box-3"') {
            renderYoutobeShowCase()
        }
    })

    return renderContentOfShowcase.html(htmlContent)
}

// FUNTION FOR RENDER IMGAGE
renderModalShowcase = (id, href) => {
    let htmlContent = (
        `
                <div class="modal fade" ${id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" style = "max-width: 750px">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body p-0">
                        <img src="${href}" alt="${id}" style = "width: 100%"/>
                    </div>
                </div>
                </div>
            </div>
            `
    )
    // });
    $('.showcase').append(htmlContent)
}
// FUNTION FOR RENDER YOUTBE VIDEO
renderYoutobeShowCase = () => {
    let videoContent = (
        `
            <div class="modal fade" id="light-box-3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" style = "max-width: 750px">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body" style = 'width: 100%'>
                <video width="100%" height="550px" controls autoplay>
                <source src="${linkYoutobe}" type="video/mp4">
                </video>
                </div>
            </div>
            </div>
        </div>        
        `
    )
    $('.showcase').append(videoContent)

}