
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
let listlightBoxItem = []
let lightboxHrefItem = {
    dataToggle: '',
    idElement: '',
    href: ''
}
let linkHref = '';
let linkYoutobe = ''

renderShowCaseContent = () => {
    let linkIcons = '<i class="fa-solid fa-link"></i>';
    let youtobeIcons = '<i class="fa-brands fa-youtube"></i>';
    let searchIcons = '<i class="fa-solid fa-magnifying-glass"></i>';
    let htmlContent = '';
    let renderContentOfShowcase = $('.showcase__content');
    let arrayOfImageShowcase = [];
    for (let i = 0; i < 8; i++) {
        let setupVariable = `showcase-${i}`;
        arrayOfImageShowcase.push(setupVariable);
    }

    htmlContent = arrayOfImageShowcase.map((item, index) => {
        lightboxHrefItem = {
            dataToggle: ' data-toggle="modal"',
            idElement: `id = "light-box-${index}"`,
            href: `./assets/img/showcase-${index + 1}.jpg`,
            dataTarget: `data-target = #light-box-${index}`
        }

        if (index === 0 || index === 2 || index === 4 || index === 5) {
            listlightBoxItem.push(lightboxHrefItem);
        }
        linkHref = 'href = "#"'
        return (
            `
            <div class="showcase__item tab-pane fade show active col-xl-3" id="pills-all">
            <div class="showcase__photo">
                <img src="./assets/img/showcase-${index + 1}.jpg" alt="showcase-${index + 1}" style="width: 100%">
                <div class="showcase__info">
                    <div class="showcase__btn">
                        <a class="popup-link" 
                        ${index === 0 || index === 2 || index === 4 || index === 5 ? lightboxHrefItem.dataToggle + ' ' + lightboxHrefItem.dataTarget : ''}
                        ${index === 1 || index === 7 || index === 6 ? linkHref : ''}
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
    })

    return renderContentOfShowcase.html(htmlContent.join(''))
}


renderModalShowcase = () => {
    let htmlContent = listlightBoxItem.map(item => {
        return (
            `
                <div class="modal fade" ${item.idElement} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" style = "max-width: 750px">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    ${item.idElement === 'id = "light-box-3"' ? 'hi' : ""}
                        <img src="${item.href}" alt="${item.idElement}" style = "width: 100%"/>
                    </div>
                </div>
                </div>
            </div>
            `
        )
    });
    console.log(htmlContent);
    $('.showcase').append(htmlContent)
}