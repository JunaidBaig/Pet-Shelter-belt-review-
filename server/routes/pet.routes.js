const Pet = require("../controllers/pet.controller")

module.exports = app =>{
    app.get("/api/pets", Pet.allPets)
    app.post("/api/pets", Pet.createPet)
    app.get("/api/pets/:id", Pet.getPet)
    app.put("/api/pets/:id/edit", Pet.updatePet)
    app.delete("/api/pets/:id", Pet.deletePet)
}