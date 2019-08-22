import '../scss/style.scss';

const searchBtn = document.querySelector('.search__btn');
const sidebar = document.querySelector('.sidebar');
const searchResetBtn = document.querySelector('.search__reset');

searchBtn.addEventListener('click', () => {
	sidebar.classList.add('sidebar-active');
})
searchResetBtn.addEventListener('click', () => {
	sidebar.classList.remove('sidebar-active');
})

// Tabs

const tabsLink = document.querySelectorAll('.tabs__item');
const tabsContent = document.querySelectorAll('.feedback__content')
const moreLink = document.querySelectorAll('.feedback__more');
const feedbackText = document.querySelectorAll('.feedback__text');

for (let i = 0; i < tabsLink.length; i++) {
	tabsLink[i].addEventListener('click', () => {		
		tabsLink.forEach(elem => {
			elem.classList.remove('tabs__item-active');
		})
		tabsContent.forEach(el => {
			el.classList.remove('feedback__content-active');
		})
		feedbackText.forEach(el => {
			el.classList.remove('feedback__text-active')
		})
		moreLink.forEach(el => {
			el.classList.remove('feedback__more-active')
		})
		tabsLink[i].classList.add('tabs__item-active');
		tabsContent[i].classList.add('feedback__content-active');
	})
}

moreLink.forEach((el, i) => {
	el.addEventListener('click', () => {
		feedbackText[i].classList.toggle('feedback__text-active');
		el.classList.toggle('feedback__more-active');
	})
})
