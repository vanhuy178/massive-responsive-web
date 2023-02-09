// CREATE ELEMENT IN HEADER NAV
let rederNavItemClass = $('.render-nav-item');
let cartIcon = '<i class="fa-solid fa-cart-shopping mr-1"></i>';
let searchIcon = '<i class="fa-solid fa-magnifying-glass mr-1"></i>';
let borderRightCustom = '<span class ="pl-3 customBorderRight">|</span>';
let defaultValue = ''
const renderNavbarItem = () => {
    let htmlContent = '';
    htmlContent = LIST_TITLE_HEADER.map((item, index) => {
        return (
            `
                <li class="nav-item header-nav-item header-nav-item-${index} py-0 active"
                >
                <a class="nav-link ml-1 font-size-13 font-weight-600 ${item.toLocaleLowerCase() === 'home' ? 'active' : defaultValue}" href="#" >
                    ${item.toLocaleLowerCase() === 'cart' ? cartIcon : defaultValue}
                    ${item.toLocaleLowerCase() === 'search' ? searchIcon : defaultValue}
                   <span class = 'res res-${index}'>
                        ${item.toUpperCase()}  <span class = 'ml-1 plus'>+</span>
                   </span>
                   ${item.toLocaleLowerCase() === 'shops' ? borderRightCustom : defaultValue}
                    </a>
                 </li >
            `
        )
    })
    return rederNavItemClass.html(htmlContent);
}

