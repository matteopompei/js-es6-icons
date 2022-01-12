let iconsArr = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let container = document.getElementsByTagName("main")[0];
let filter = document.getElementById("filtri");
let animalArr = iconsArr.filter((element) => element.type == "animal");
let vegetableArr = iconsArr.filter((element) => element.type == "vegetable");
let userArr = iconsArr.filter((element) => element.type == "user");

function genSchede(array) {
	array.forEach((icon, i) => {
		container.innerHTML += ` 
		<div>
		<i class="${array[i].family} ${array[i].prefix}${array[i].name} ${array[i].type}" style="color:${array[i].color}"></i>
		<span class="icon-title">${array[i].name}</span>
		</div>
		`;
	});
}

genSchede(iconsArr);

filter.addEventListener("change", function(){
	console.log(filter.value);
	switch (filter.value) {
		case "all":
			container.innerHTML = "";
			genSchede(iconsArr);
			break;
		case "animal":
			container.innerHTML = "";
			genSchede(animalArr);
			break;
		case "vegetable":
			container.innerHTML = "";
			genSchede(vegetableArr);
			break;
		case "user":
			container.innerHTML = "";
			genSchede(userArr);
			break;
	}
});



