const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

class PetController {
    GetAll(req, res) {
        Pet.find().sort('Type').exec()
            .then(pets => res.json(pets))
            .catch (err => res.json(err));
    }
    GetOne(req, res) {
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch (err => res.json(err));
    }
    Create(req, res) {
       let pet = new Pet (req.body); //  res.body refers to request.post type of information from the form. 
          pet.save()
            .then(() => res.json ({status:"ok"}))
            .catch (err => res.json(err));
    }
    Update(req, res) {
        Pet.findOneAndUpdate({_id: req.params._id}, req.body,{uniqueValidator:false})
            .then(() => res.json ({status:"ok"}))
            .catch (err => res.json(err));
    }
    Delete (req, res) {
        Pet.deleteOne ({_id: req.params._id})
            .then(() => res.json ({status:"deleted"}))
            .catch (err => res.json(err));
    }
}

module.exports = new PetController();

// let pet = new Pet (req.body); //  res.body refers to request.post type of information from the form. 
// pet.save()
//     .then(() => res.json ({status:"ok"}))
//     .catch (err => res.json(err));

// Pet.find({Name: req.body.Name})
// .then(pet => {
//     if (pet.length > 0) {
//     return Promise.reject('Name already exists');
//      }
//         return Pet.create(req.body);
//     })
// .then(saveResult => res.json(saveResult))
// .catch(err => res.json(err));
// {runValidators:true}, {uniqueValidator:false}