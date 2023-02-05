renderTheMemberOfTheTeam = () => {
    let htmlContent = '';
    let outputTheMemberOfTeam = $('.team-content');
    htmlContent = LIST_MEMBER_OF_TEAM.map((item, index) => {
        const { name, job, title, content } = item
        return (
            `
                    <div class="col-lg-4 col-12">
                    <div class="team-item">
                        <div class="team-photo">
                            <img src="./assets/img/team-member-${index + 1}.jpeg" alt="member-${index}">
                            <div class="team-name">
                                <h3>${name}</h3>
                                <p>${job}</p>
                            </div>
                        </div>
                        <div class="team-info-item">
                            <div class="team-text">
                                <h3>${title}</h3>
                                <p>
                                    ${content}
                                </p>
                            </div>
                            <div class="team-social">
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    })
    outputTheMemberOfTeam.html(htmlContent);
}