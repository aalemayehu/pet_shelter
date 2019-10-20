const Pets = require ('../controllers/pets');

module.exports = function(app){ // exports routes to server.js and also exports app. 
    app.get ("/api/pet", Pets.GetAll);
    app.get ("/api/pet/:_id", Pets.GetOne);
    app.post("/api/pet",Pets.Create);
    app.put ("/api/pet/:_id", Pets.Update);
    app.delete("/api/pet/:_id", Pets.Delete);
}