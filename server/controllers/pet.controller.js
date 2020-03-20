const Pet = require("../models/pet.model")

module.exports.allPets = (req, res) =>{
    Pet.find().sort('type')
        .then(allPets => res.json(allPets))
        .catch(err => res.json(err))
}
module.exports.createPet = (req,res) =>{
    Pet.create(req.body)
        .then(success => res.json(success))
        .catch(err => res.status(400).json(err))
}
module.exports.getPet = (req, res) =>{
    const {id} = req.params;
    Pet.findOne({_id:id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}
module.exports.updatePet = (req, res) =>{
    const {id} = req.params;
    Pet.findOneAndUpdate({_id:id} , req.body,{runValidators:true})
        .then(success => res.json(success))
        .catch(err => res.status(400).json(err))
}
module.exports.deletePet = (req, res) =>{
    Pet.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
}