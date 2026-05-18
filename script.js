const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");

document.body.appendChild(getSumBtn);

let prices = document.querySelectorAll(".price");

const getSum = () => {

	let sum = 0;

	for(let i of prices){

		sum += Number(i.innerText);

	}

	let row = document.createElement("tr");

	let cell = document.createElement("td");

	cell.colSpan = 2;

	cell.innerText = sum;

	row.appendChild(cell);

	document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);