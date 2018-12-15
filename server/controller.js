let houseList = [];
let id = 0;
module.exports = {
    createHouse: (req,res) => {

    },

    readHouses: (req,res) => {
        const database = req.app.get('db');
        const {params} = req;

        database.read_houses() 
        .then((houses) => {
            
            console.log(houses)
            res.status(200).send(houses)})

        .catch(error => {
            res.status(500).send({errorMessage: "READ_HOUSES error"});
            console.log(error)
        })
    },

    updateHouse: (req,res) => {
        const database = req.app.get('db');
        const {params} = req;

        database.update_house([params.id,query.desc]
            .then(() => res.sendStatus(200))
            .catch(error => {
                res.status(500).send({errorMessage: "UPDATE ERROR"});
                console.log(error)
            }))

    },

    deleteHouse: (req,res) => {
       const database = req.app.get('db');
       const {params} = req;

       database.delete_house([params.id])
       .then(() => res.sendStatus(200))
       .catch(error => {
           res.status(500).send({errorMessage: "DELETE error"});
           console.log(error);
       });

    }
}