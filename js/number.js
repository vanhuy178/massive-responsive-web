
const renderNumberSection = () => {
    let htmlContent = '';
    let renderNumberContent = $('.number_content');
    LIST_NUMBER_SECTION.map(item => {
        htmlContent += `
        <div class="col-6 col-sm-6 col-lg-3">
        <div class="number_item">
            <i class="fa-solid ${item.icon}"></i>
            <p class="number__counter">${item.number}</p>
            <h3>${item.title}</h3>
        </div>
        </div>
        `
    })

    renderNumberContent.html(htmlContent)
}