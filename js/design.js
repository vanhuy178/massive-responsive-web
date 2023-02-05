let htmlContent = '';
let renderDesignClass = $('.design__content');
const renderDesignItem = () => {
    htmlContent = LIST_DESIGN.map((item, index) => {
        return (
            `
            <div class="col-12 col-lg-4">
                <div class="design__item design-item-${index}">
                <div class="design__icon">
                    ${item.icon}
                </div>
                <h2 class="font-size-20">${item.title.toLocaleLowerCase()}</h2>
                <p>${item.content}</p>
            </div>
        </div>
            `
        )
    })
    return renderDesignClass.html(htmlContent)
}