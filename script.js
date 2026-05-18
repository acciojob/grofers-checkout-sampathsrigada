const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let prices = document.querySelectorAll(".price")


const getSum = () => {
//Add your code here
	let sum = 0
	for(let i of prices){
		sum= sum+Number(i.innerText)
	}
	let row = document.createElement("tr")
	let cell = document.createElement("td")
	cell.innerText = sum;
	row.appendChild(cell)
	document.querySelector("table").appendChild(row)
	return sum
	
  
};

getSumBtn.addEventListener("click", getSum);

