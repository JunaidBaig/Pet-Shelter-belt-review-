const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/pet-shelter",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO Pet Shelter DB"))
.catch(err => console.log("ERROR: ", err))