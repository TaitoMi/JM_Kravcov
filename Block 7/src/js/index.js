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

let linkMore = function(item1, className1, item2, className2) {
	item1.addEventListener('click', (e) => {
		e.preventDefault();
		e.target.classList.toggle(`${className1}-active`);
		item2.classList.toggle(`${className2}-active`)
	})
}

moreLink.forEach((el, i) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		feedbackText[i].classList.toggle('feedback__text-active');
		el.classList.toggle('feedback__more-active');
	})
})

const brandsMore = document.querySelector('.brands__more');
const brandsContent = document.querySelector('.brands__items');

linkMore(brandsMore, 'brands__more', brandsContent, 'brands__items');

const repairMore = document.querySelector('.repair__more');
const repairContent = document.querySelector('.repair__items');

linkMore(repairMore, 'repair__more', repairContent, 'repair__items');

if (window.innerWidth <= 668) {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}

/// ymaps
ymaps.ready(init);
function init(){ 
	var myMap = new ymaps.Map("map", {
			center: [55.76, 37.64],
			zoom: 7
	});
}