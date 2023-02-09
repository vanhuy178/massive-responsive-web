
{
	function renderIntroContent() {
		let classToRenderIcons = $('.intro__nav');
		let responsiveCardbodyClass = $('.card-body');
		let introTextClass = $('.intro__text');
		let htmlContentTextIntro = '';
		let htmlContentCardBody = '';
		let htmlContentForIcons = '';
		let fullTab = ['full', 'work', 'multipurpose', 'sky', 'responsive']
		LIST_INTRO_SECTION.map((item, index) => {
			htmlContentCardBody += `
                        <div class="card" key= ${index}>
						<div class="card-header " id="heading${index}">
							<h2 class="mb-0 text-center collapsed" data-toggle="collapse" data-target="#collapse${index}"
								aria-expanded="true" aria-controls="collapse${index}">
								<button class="btn btn-link py-1 text-center" type="button">
									<i class="fa-solid fa-${item.icon}"></i>
								</button>
								<div class="intro__title">
									<p>${item.desc}</p>
									<h3>${item.headerTitle}</h3>
								</div>
							</h2>
						</div>

						<div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
							data-parent="#accordionExample">
							<div class="card-body">
								<p class="intro__paragraph">${item.content}</p>
							</div>
						</div>
					</div>

        	`
			htmlContentForIcons += `
			<li class="nav-item" role="presentation" key  = ${index}>
			<a class="nav-link ${item.icon === 'mobile' ? 'active' : ''}" id="${fullTab[index]}-tab" data-toggle="pill" data-target="#${fullTab[index]}-tab-pane"
				role="tabpanel" aria-selected="true">
				<i class="fa-solid fa-${item.icon}"></i>
			</a>
			</li>
			`
			htmlContentTextIntro += `
			<div class="tab-pane ${item.desc.toUpperCase() === 'FULL RESPONSIVE' ? 'active show' : ''}" id="${fullTab[index]}-tab-pane" role="tabpanel" aria-labelledby="#${fullTab[index]}-tab">
						<div class="intro__title">
							<p>${item.desc}</p>
							<h3>${item.headerTitle}</h3>
						</div>
						<p class="intro__paragraph">${item.content}</p>
					</div>
			`
		})
		responsiveCardbodyClass.html(htmlContentCardBody);
		classToRenderIcons.html(htmlContentForIcons);
		introTextClass.html(htmlContentTextIntro);
		console.log(htmlContentTextIntro);
	}

}