let list = document.querySelectorAll("li");

//loop through list
for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function () {
		// list[i].classList.toggle(".completed");
		console.log(list[i].style.color);

		if (list[i].style.color === "") {
			list[i].style.color = "rgb(128, 128, 128)";
			list[i].style.textDecoration = "line-through";
		} else if (list[i].style.color === "rgb(0, 0, 0)") {
			list[i].style.color = "rgb(128, 128, 128)";
			list[i].style.textDecoration = "line-through";
		} else {
			list[i].style.color = "rgb(0, 0, 0)";
			list[i].style.textDecoration = "none";
		}
	});
}
