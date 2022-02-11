module.exports = {
    getCompliment: (req, res) => {
        const compliments = [
            "Gee, you're a smart cookie!",
            "Cool shirt!",
            "Your Javascript skills are stellar.",
        ];
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunes = [
            "Help! I’m being held prisoner in a chinese bakery!",
            "How many of you believe in psycho-kinesis? Raise my hand.",
            "How you look depends on where you go.",
            "Go where you have to go."
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
      }
}