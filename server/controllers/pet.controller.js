//import model
const Pet = require("../models/pet.model");

//create
module.exports.createPet = async (req, res) => {
  try {
    let createdPet = await Pet.create(req.body);
    res.json(createdPet);
  } catch (err) {
    res.status(400).json(err.errors);
  }
};

//read
module.exports.findPetById = async (req, res) => {
  try {
    let foundPet = await Pet.findOne({ _id: req.params.id });
    res.json(foundPet);
  } catch (err) {
    res.status(400).json(err.errors);
  }
};

//read by name
module.exports.findPetByName = async (req, res) => {
  try {
    let foundPet = await Pet.findOne({ name: req.params.name });
    res.json(foundPet);
  } catch (err) {
    res.status(400).json(err.errors);
  }
};

//read all
module.exports.findAllPets = async (req, res) => {
  try {
    let pets = await Pet.find({});
    res.json(pets);
  } catch (err) {
    res.status(400).json(err.errors);
  }
};

//update
module.exports.updatePetById = async (req, res) => {
  const validatePet = (petInfo) => {
    let errors = [];
    for (field in petInfo) {
      if (field == "likes") {
        continue;
      }
      if (petInfo[field].length < 3 && field !== "skills") {
        errors.push({ message: `Pet ${field} must be at least 3 characters` });
      } else if (field == "skills") {
        for (skill in petInfo[field]) {
          if (petInfo[field][skill].length < 3) {
            errors.push({
              message: `Pet skills are optional but must be at least 3 characters (${petInfo[field][skill]})`,
            });
          }
        }
      }
    }
    return errors;
  };
  try {
    if (validatePet(req.body).length > 0) {
      res.status(400).json(validatePet(req.body));
    } else {
      let updatedPet = await Pet.updateOne({ _id: req.params.id }, req.body);
      res.json(updatedPet);
    }
  } catch (err) {
    res.status(400).json(err.errors);
  }
};

//delete
module.exports.deletePetById = async (req, res) => {
  try {
    let deletedPet = await Pet.deleteOne({ _id: req.params.id });
    res.json(deletedPet);
  } catch (err) {
    res.status(400).json(err.errors);
  }
};
