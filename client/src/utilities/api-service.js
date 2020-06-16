import axios from 'axios';

export default {
    allPlayers: function(){
        return new Promise(function(resolve, reject){
            axios.get('/api/all-players')
            .then(res => {
                localStorage.setItem("players", JSON.stringify(res.data))
                return resolve(res.data);
            })
            .catch(err => {
                return reject(err);
            })
        })
    }
}