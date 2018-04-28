function changeAll() {
	var node = document.createElement("div");
	var pi = document.createElement("p");
	var textnode = document.createTextNode("More");
	node.appendChild(pi);
	pi.appendChild(textnode);
	document.getElementById("buttons").appendChild(node);
	
}
function changeText(el) {
	el.style.height = "40",
	el.style.width = "100",
	el.style.color = "blue",
	el.style.background = "black",
	el.innerHTML = "BTN"
}

function changeTextE(el) {
	el.style.background = "auto",
	el.innerHTML = "Clic"
}