const {planets} = require("../../models/planets.model")
function getPlanets(req,res){
    return res.status(200).json(planets)
}

function getDefaultRoute(req,res){
    return res.send(`<h1>Home</h1>`)
}

module.exports={
    getPlanets,
    getDefaultRoute
}