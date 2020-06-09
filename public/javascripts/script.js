$(document).ready(function(){
    $.get('/all-players')
    .then(function(players){
        let lastUpdated = moment(players[0].updatedAt).format('MMMM Do YYYY, hh:mm:ss a');
        players.forEach(player => {
            let row = $("<tr>");
            if(player.data){
                let playerData = JSON.parse(player.data);
            let rowData = $(`<td>${player.id}</td><td>${player.name}</td><td>${playerData.br.wins}</td>
            <td>${playerData.br.kills}</td><td>${playerData.br.kdRatio}</td> <td>${playerData.br.downs}</td> <td>${playerData.br.gamesPlayed}</td>
            <td>${playerData.br.topTen}</td><td>${playerData.br.topFive}</td>`);
            }
            row.append(rowData);
            $('tbody').append(row);
        })
    })
    .catch(function(error){
        console.log(error)
    })
})