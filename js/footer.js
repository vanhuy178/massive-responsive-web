// CUSTOM FOOTER
{
    const recentPost = 'recent posts';
    const followUs = 'follow us';
    const recentWork = 'recent work';
    let footerList1 = $('.footer-list-1');
    let footerList2 = $('.footer-list-2');
    let footerWork = $('.footer__work')

    let htmlContentFooterList1 = '';
    let htmlContentFooterList2 = '';
    let htmlContentFooterWork = '';
    const customToRenderFooter = (valuedWasReceived) => {
        if (valuedWasReceived.title.toLocaleLowerCase().trim() === recentPost.toLocaleLowerCase().trim()) {
            valuedWasReceived.content.map((item, index) => {
                htmlContentFooterList1 += (
                    `
                <li key = ${index}>
                    <a href="#">${item}</a>
                </li>                
                `
                )
            })

            return footerList1.html(htmlContentFooterList1)
        }
        else if (valuedWasReceived.title.toLocaleLowerCase().trim() === recentWork.toLocaleLowerCase().trim()) {
            valuedWasReceived.content.map((item, index) => {
                htmlContentFooterWork += `
                    <li key = ${index}>
                        <a class="footer__photo" href="#">
                            <img src="./assets/img/footer-photo-${item}.jpeg" alt="Footer photo ${index}">
                        </a>
                    </li>
                    `
            })

            return footerWork.html(htmlContentFooterWork)
        }

        else if (valuedWasReceived.title.toLocaleLowerCase().trim() === followUs.toLocaleLowerCase().trim()) {
            valuedWasReceived.content.map((item, index) => {
                htmlContentFooterList2 += (
                    `
                    <li key = ${index}>
                        <a href="#">${item}</a>
                    </li>                
                    `
                )
            })

            return footerList2.html(htmlContentFooterList2)
        }
    }
    Object.values(LIST_VARIABLE_OF_FOOTER).forEach(item => customToRenderFooter(item))

}