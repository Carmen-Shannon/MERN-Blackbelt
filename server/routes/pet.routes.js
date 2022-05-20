const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/pets', PetController.findAllPets);

    app.get('/pets/:id', PetController.findPetById);

    app.get('/pets/name/:name', PetController.findPetByName);

    app.post('/pets/create/new', PetController.createPet);

    app.patch('/pets/:id/update', PetController.updatePetById);

    app.delete('/pets/:id/delete', PetController.deletePetById);
}