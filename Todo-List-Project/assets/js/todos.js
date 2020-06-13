let ulParent = document.querySelector("ul");
let list = document.querySelectorAll("li");
let takeOut = document.querySelectorAll("span");
let input = document.querySelector("input[type='text']");

function logKey(e) {
	if (e.which === 13) {
		let inputValue = this.value;
		console.log(inputValue);
		ulParent.append(inputValue);
	}
}

//loop through list
for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function () {
		list[i].classList.toggle("completed");
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
//input adding values to todo list
input.addEventListener("keypress", logKey);
