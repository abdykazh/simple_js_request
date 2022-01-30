document.getElementById("getPerson").addEventListener("click", (e) => {
	e.preventDefault();
	const nameText = document.getElementById("name");
	const heightText = document.getElementById("height");
	const genderText = document.getElementById("gender");

	nameText.innerHTML = '<em>Loading...</em>'
	heightText.innerHTML = '<em>Loading...</em>'
	genderText.innerHTML = '<em>Loading...</em>'

	const num = Math.floor(Math.random() * 83)
	fetch(`https://swapi.dev/api/people/${num}`)
		.then(response => response.json())
		.then(data => {
			const person = data;
			const { name, height, gender } = person;
			nameText.innerHTML = name;
			heightText.innerHTML = height;
			genderText.innerHTML = gender;
		})
})

