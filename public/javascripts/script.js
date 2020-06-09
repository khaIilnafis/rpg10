$(document).ready(function(){
    $.get('/all-players')
    .then(function(players){
        console.log(players)
        players.forEach(player => {
            let row = $("<tr>");
            let playerData = JSON.parse(player.data);
            let rowData = $(`<td>${player.id}</td><td>${player.name}</td><td>Wins: ${playerData.br.wins}</td>
            <td>${playerData.br.kills}</td><td>${playerData.br.kdRatio}</td> <td>${playerData.br.downs}</td> <td>${playerData.br.gamesPlayed}</td>`);
            row.append(rowData);
            $('tbody').append(row);
        })
    })
    .catch(function(error){
        console.log(error)
    })
})