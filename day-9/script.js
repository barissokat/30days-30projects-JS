const size = 16;
window.onload = () => {
	addItemsToGrid(size);
	setItemsDimension(size);
	addMouseOverListener();
	reload();
	clearGridColor();
}

function addItemsToGrid(size) {
	const container = document.querySelector('.container');
	const gridItemCount = size * size;
	for (i = 1; i <= gridItemCount; i++) {
		const box = document.createElement('div');
		box.classList.add('box');
		container.appendChild(box);
	}
}

function setItemsDimension(size) {
	const container = document.querySelector('.container');
	let edgeAuto = '';
	let count = 0;
	do {
		if (count < size) {
			edgeAuto += 'auto ';
		}
		count++;
	} while(count < size);
	container.style.cssText = `grid-template-rows: ${edgeAuto}; grid-template-columns: ${edgeAuto};`;
}

function addMouseOverListener() {
	const gridItems = document.querySelectorAll('.container > div');
	gridItems.forEach((item) => {
		item.addEventListener('mouseover', (e) => {
			item.style.backgroundColor = `rgb(${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)})`;
		});
	});
}

function reload() {
	const reloadButton = document.getElementById('reload');
	reloadButton.addEventListener('click', (e) => {
		var newSize = prompt("Enter new size (16 to 160)", "16");
		if (newSize >= 16 && newSize <= 160) {
			clearGrid();
			addItemsToGrid(newSize);
			setItemsDimension(newSize);
			addMouseOverListener();
		} else if (newSize == "") {
			alert("You didn't enter a value");
		} else {
			alert("You have to enter a value between 16 and 160");
		}
	});
}

function clearGrid() {
	const container = document.querySelector('.container');
	while(container.firstChild){
		container.removeChild(container.firstChild);
	}
}

function clearGridColor() {
	const gridItems = document.querySelectorAll('.container > div');
	const clearButton = document.getElementById('clear');
	clearButton.addEventListener('click', (e) => {
		gridItems.forEach((item) => {
			item.style.backgroundColor = '';
		});
	});
}

//Credits go to -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}