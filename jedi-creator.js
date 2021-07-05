// Random jedi character creator that gives a name, lightsaber color, and race.

// Object of Charater traits
const traits = {
    name : ["Lynla'il", "Jorund Tahlee", "Amira Lansford", "Keekool", "Jokin Antran", 
    "Neza Duvall", "Attrayla", "Nora Teeb", "Grale Mithkrre", "Yemlar Unnh"],
    race : ["Mon Calamari", "Rodian", "Cerean", "Togruta", "Kel Dor", "Twi'Lek",
     "Human", "Zabrak", "Zeffo", "Unknown"],
    saberColor : ["blue", "red", "green", "yellow", "purple", "orange", "white"]
};

// Gets three random traits and returns a character statement
const createJedi = () => {
    const randName = traits.name[(Math.floor(Math.random()*traits.name.length))];
    const randRace = traits.race[(Math.floor(Math.random()*traits.race.length))];
    const randSaber = traits.saberColor[(Math.floor(Math.random()*traits.saberColor.length))];
    return `You are Jedi ${randName} of the ${randRace} race. The lightsaber you weild is ${randSaber}.`;
};

console.log(createJedi())