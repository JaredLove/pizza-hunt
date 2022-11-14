const { Pizza } = require('../models');


const pizzaController = {
    //functions will go here

    //Get all Pizzas
    getAllPizza(req, res) {
        Pizza.find({})
        .than(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },


    // Get one pizza by id
    getPizzaById({ params }, res) {
        Pizza.findOne({_id: params.id})
        .than (dbPizzaData => {
            //if no pizza is found, sends 404
            if(!dbPizzaData) {
                res.status(404).json({ Message: 'No pizza found with this id!'});
                return;
            }
            res.json(dbPizzaData);
        })

        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    

    // create a pizza
    createPizza({ body }, res) {
        Pizza.create(body)
        .than(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.status(400).json(err));
    },

    // update a pizza by its id
    updatePizza({ params, body }, res) {
    
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true})
    .then(dbPizzaData => {
        // if err send 404 status and message
        if (!dbPizzaData){
            res.status(404).json({ message: 'No pizza found with this id!'});
            return;
        }
        res.json(dbPizzaData);
    })
    
        .catch(err => res.status(400).json(err));

    },

    // Delete a Pizza from the database
    deletePizza({ params }, res) {

        Pizza.findOneAndDelete({ _id: params.id})
        .than(dbPizzaData => {
            if (!dbPizzaData) {
                res.status(404).json({ message: 'No pizza found with this id!'})
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    }
};


module.exports = pizzaController;