let globalID = 4;

let allArr = [
    {
        id: 1,
        item: `Add items to this list`
    },
    {
        id: 2,
        item: `It's really easy to do`
    },
    {
        id: 3,
        item: `You can also remove items from the list`
    }
];

module.exports = {
    getCompliment: (req, res) => {
        const complimentsArr = [
            "Gee, you're a smart cookie!",
            "Cool shirt!",
            "Your Javascript skills are stellar."
        ];
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * complimentsArr.length);
        let randomCompliment = complimentsArr[randomIndex];
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunesArr = [
            "Help! I’m being held prisoner in a chinese bakery!",
            "How many of you believe in psycho-kinesis? Raise my hand.",
            "How you look depends on where you go.",
            "Go where you have to go."
        ];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunesArr.length);
        let randomFortune = fortunesArr[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getAll: (req, res) => {
        res.status(200).send(allArr)
    },

    submitItem: (req, res) => {     
        const {item} = req.body
        
        let newItem = {
            id: globalID,
            item
        }
        allArr.push(newItem)
        res.status(200).send(allArr)
        globalID++
    },
    
    deleteItem: (req, res) => {
        let itemID = +req.params.id
        const removeIndex = allArr.findIndex(e => e.id === itemID)
            allArr.splice(removeIndex, 1)
            res.status(200).send(allArr)
            return   
    }    
}