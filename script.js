function changeColor() {
	var colors = ['#f1c40f', '#e67e22', '#16a085', '#2980b9', '#8e44ad', '#2c3e50', '#c0392b', '#7f8c8d'];
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundColor = randomColor;
}
