let ulParent = document.querySelector("ul");
let list = document.querySelectorAll("li");
let takeOut = document.querySelectorAll("span");
let input = document.querySelector("input[type='text']");

//input adding values to todo list
input.addEventListener("keypress", logKey);

function logKey(e) {
	if (e.which === 13) {
		let inputValue = this.value;
		this.value = "";
		console.log(inputValue);
		ulParent.insertAdjacentHTML(
			"beforeend",
			`<li><span>X</span> ` + inputValue + `</li>`
		);
	}
}
//loop through input
for (let i = 0; i < input.length; i++) {
	input.addEventListener("click", function (e) {
		const target = e.target;
		if (target.matches("input")) {
			input[i].classList.toggle("completed");
		} else {
			console.log("empty");
		}
	});
}
//loop through list
// for (let i = 0; i < list.length; i++) {
// 	list[i].addEventListener("click", function () {
// 		list[i].classList.toggle("completed");
// 	});
// }

for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function (e) {
		console.log(list[i].style.color);
		if (list[i].style.color === "") {
			list[i].classList.toggle("completed");
		} else {
			console.log("empty");
		}
	});
}

//loop through x
for (let i = 0; i < takeOut.length; i++) {
	takeOut[i].addEventListener("click", function (e) {
		e.stopPropagation();
		list[i].classList.add("fadeOut");
		this.parentNode.remove();
	});
}
