
fetch("https://v3.football.api-sports.io/standings?league=239&season=2023", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "400bd206fa9de4ffc482147d7efa0416"
	}
})
	.then(response => response.json())
	.then(data => mostrarTablaA(data))
	.catch(err => console.log(err))

//const mostrarD = data.find(i=>i.standings===3);
const mostrarTablaA = (data) =>{
	tApertura = data.response[0].league.standings[3];
	console.log(tApertura)
	let body = ""
        for (var i = 0; i < tApertura.length; i++) {      
            body+=`<tr>
			       	<td>${tApertura[i].rank}</td>
			       	<td>${tApertura[i].team.name}</td>
				   	<td>${tApertura[i].points}</td>
					<td>${tApertura[i].all.played}</td>
					<td>${tApertura[i].all.win}</td>
					<td>${tApertura[i].all.draw}</td>
					<td>${tApertura[i].all.lose}</td>
					<td>${tApertura[i].all.goals.for}</td>
					<td>${tApertura[i].all.goals.against}</td>
					<td>${tApertura[i].goalsDiff}</td>
					<td>${tApertura[i].form}</td>
					   
				   </tr>`
        }
        document.getElementById('Apertura').innerHTML = body
}



fetch("https://v3.football.api-sports.io/standings?league=239&season=2023", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "400bd206fa9de4ffc482147d7efa0416"
	}
})
	.then(response => response.json())
	.then(data => mostrarTablaC(data))
	.catch(err => console.log(err))

const mostrarTablaC = (data) =>{
	cudrglr = data;
	console.log(cudrglr)}
