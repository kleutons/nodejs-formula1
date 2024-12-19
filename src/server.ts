import fastify from "fastify";

const server = fastify({logger:true});

const teams = [
    { id: "redbull", name: "Red Bull Racing", base_city: "Milton Keynes", base_country: "United Kingdom" },
    { id: "mercedes", name: "Mercedes-Benz", base_city: "Brackley", base_country: "United Kingdom" },
    { id: "ferrari", name: "Ferrari", base_city: "Maranello", base_country: "Italy" },
    { id: "astonmartin", name: "Aston Martin", base_city: "Silverstone", base_country: "United Kingdom" },
    { id: "mclaren", name: "McLaren", base_city: "Woking", base_country: "United Kingdom" },
    { id: "alpine", name: "Alpine", base_city: "Enstone", base_country: "United Kingdom" },
    { id: "williams", name: "Williams", base_city: "Grove", base_country: "United Kingdom" },
    { id: "alfaromeo", name: "Alfa Romeo", base_city: "Hinwil", base_country: "Switzerland" },
    { id: "haas", name: "Haas", base_city: "Kannapolis", base_country: "United States" },
    { id: "alphatauri", name: "AlphaTauri", base_city: "Faenza", base_country: "Italy" }
];


const drivers = [
    { id: 1, name: "Max Verstappen", team_id: "redbull", team_name: "Red Bull Racing", country: "Netherlands" },
    { id: 2, name: "Lewis Hamilton", team_id: "mercedes", team_name: "Mercedes-Benz", country: "United Kingdom" },
    { id: 3, name: "Charles Leclerc", team_id: "ferrari", team_name: "Ferrari", country: "Monaco" },
    { id: 4, name: "Lando Norris", team_id: "mclaren", team_name: "McLaren", country: "United Kingdom" },
    { id: 5, name: "Sebastian Vettel", team_id: "astonmartin", team_name: "Aston Martin", country: "Germany" },
    { id: 6, name: "Daniel Ricciardo", team_id: "alphatauri", team_name: "AlphaTauri", country: "Australia" },
    { id: 7, name: "Fernando Alonso", team_id: "alpine", team_name: "Alpine", country: "Spain" },
    { id: 8, name: "Valtteri Bottas", team_id: "alfaromeo", team_name: "Alfa Romeo", country: "Finland" },
    { id: 9, name: "George Russell", team_id: "mercedes", team_name: "Mercedes-Benz", country: "United Kingdom" },
    { id: 10, name: "Kimi Räikkönen", team_id: "alfaromeo", team_name: "Alfa Romeo", country: "Finland" },
    { id: 11, name: "Nicholas Latifi", team_id: "williams", team_name: "Williams", country: "Canada" },
    { id: 12, name: "Mick Schumacher", team_id: "haas", team_name: "Haas", country: "Germany" },
    { id: 13, name: "Pierre Gasly", team_id: "alphtauri", team_name: "AlphaTauri", country: "France" },
    { id: 14, name: "Esteban Ocon", team_id: "alpine", team_name: "Alpine", country: "France" },
    { id: 15, name: "Yuki Tsunoda", team_id: "alphatauri", team_name: "AlphaTauri", country: "Japan" },
    { id: 16, name: "Robert Kubica", team_id: "alfaromeo", team_name: "Alfa Romeo", country: "Poland" },
    { id: 17, name: "Sergio Pérez", team_id: "redbull", team_name: "Red Bull Racing", country: "Mexico" },
    { id: 18, name: "Zhou Guanyu", team_id: "alfaromeo", team_name: "Alfa Romeo", country: "China" },
    { id: 19, name: "Latifi Nicholas", team_id: "williams", team_name: "Williams", country: "Canada" },
    { id: 20, name: "Jack Aitken", team_id: "williams", team_name: "Williams", country: "United Kingdom" }
];


server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200);
    return {teams};
})

server.get("/drivers", async(req, res)=>{
    res.type("application/json").code(200);
    return { drivers }
})

server.listen({port: 3333}, ()=>{
    console.log("Server init");
})
