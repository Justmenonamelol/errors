let list = document.querySelectorAll("li");
// loop through list
for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function () {
		console.log(list.color);
		// if (list.color === "#000000") {
		// 	list[i].style.color = "rgb(128, 128, 128)";
		// 	list[i].style.textDecoration = "line-through";
		// } else {
		// 	list[i].style.color = "rgb(128, 128, 128)";
		// 	list[i].style.textDecoration = "line-through";
		// }
	});
}
