const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const btnArrow = document.querySelector('.arrow');
const errInfo = document.createElement('p');

const date = new Date();

const err1 = document.querySelector('.err1');
const err2 = document.querySelector('.err2');
const err3 = document.querySelector('.err3');

const main = () => {
	DOMEvents();
};

const DOMEvents = () => {
	btnArrow.addEventListener('click', pressBtn);
	btnArrow.addEventListener('mouseover', colorBtnStart);
	btnArrow.addEventListener('mouseout', colorBtnEnd);
};

const pressBtn = () => {
	const redD = document.querySelector('.redDay');

	if (day.value > 31 || day.value === '') {
		redD.classList.add('redColor');
		day.classList.add('dayErr');
		errInfo.textContent = 'This field is required';
		errInfo.classList.add('errInfoColor');
		err1.append(errInfo);
	} else if (day.value !== '') {
		day.classList.remove('redErr');
		err1.remove;
		redD.classList.remove('redColor');
	}
};

const colorBtnStart = () => {
	btnArrow.classList.add('active');
};

const colorBtnEnd = () => {
	btnArrow.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', main);
