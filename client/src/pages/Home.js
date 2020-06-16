import React, {useState, useEffect} from 'react';
import API from '../utilities/api-service';
import {Table, thead, tr, th, td } from 'reactstrap';
function Home () {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        API.allPlayers()
        .then(function(data){
            let tempPlayers = data.map((player)=>{
                player.data = JSON.parse(player.data)
                return player
            });
            console.log(tempPlayers);
            setPlayers(tempPlayers);
        })
    },[])
    
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player</th>
                        <th scope="col"> Wins</th>
                        <th scope="col"> Kills</th>
                        <th scope="col"> KD Ratio</th>
                        <th scope="col"> Downs</th>
                        <th scope="col"> Games Played</th>
                        <th scope="col"> Top 10</th>
                        <th scope="col"> Top 5</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players ? players.map((player) => 
                        {
                            return(
                                <tr>
                                    <td>{player.id}</td>
                                    <td>{player.name}</td>
                                    <td>{player.data.br.wins}</td>
                                    <td>{player.data.br.kills}</td>
                                    <td>{player.data.br.kdRatio}</td>
                                    <td>{player.data.br.downs}</td>
                                    <td>{player.data.br.gamesPlayed}</td>
                                    <td>{player.data.br.topTen}</td>
                                    <td>{player.data.br.topFive}</td>
                                </tr>
                            )
                        }
                    ):`No Players`
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Home;