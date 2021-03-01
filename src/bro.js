const bro = (nice) => {
    const axios = require('axios')

    const proxy_url = "http://localhost:3000/server-info/posts/1"
    
    axios.get(proxy_url).then(response => {
        document.getElementById('players').innerHTML = response.data.response.servers[0].players;
        return console.log(`${response.data.response.servers[0].players}/${response.data.response.servers[0].max_players} currently playing on ${response.data.response.servers[0].name}`)
    })
}

export { bro }