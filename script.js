document.getElementById("getPerson").addEventListener("click", function () {
	myFunction();
})

function myFunction() {
	const num = Math.floor(Math.random() * 83)
	fetch(`https://swapi.dev/api/people/${num}`)
		.then(response => response.json())
		.then(data => {
			const person = data;
			const { name, height, gender } = person;
			document.getElementById("name").innerHTML = name;
			document.getElementById("height").innerHTML = height;
			document.getElementById("gender").innerHTML = gender;
		})
}