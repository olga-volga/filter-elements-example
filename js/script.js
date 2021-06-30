"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const list = document.querySelector('.filter__list'),
    	  listItem = document.querySelectorAll('.item'),
      	  itemCar = document.querySelectorAll('.item__car'),
	      itemAnimal = document.querySelectorAll('.item__animal'),
	      button = document.querySelectorAll('.btn'),
	      btnAll = document.querySelector('#all'),
	      btnCars = document.querySelector('#cars'),
	      btnAnimals = document.querySelector('#animals');

	function showItem(item) {
		item.forEach(elem => {
	    	elem.style.display = 'block';
		});
	}

	function hideItem(item) {
		item.forEach(elem => {
	    	elem.style.display = 'none';
		});
	}

	function activeBtn(btn) {
		inactiveBtn();
		btn.classList.toggle('active');
	}

	function inactiveBtn() {
		button.forEach(btn => {
			btn.classList.remove('active');
		});
	}
	
	btnCars.addEventListener('click', (e) => {
		activeBtn(e.target);
		hideItem(itemAnimal);
		showItem(itemCar);
	});

	btnAnimals.addEventListener('click', (e) => {
		activeBtn(e.target);
		hideItem(itemCar);
		showItem(itemAnimal);
	});

	btnAll.addEventListener('click', (e) => {
		activeBtn(e.target);
		showItem(listItem);
	});

});
