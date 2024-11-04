// Project 1
const regions = ["Forest", "Desert", "Ocean"];
const names = ["Pixie", "Dragon", "Mermaid"];
const types = ["Fairy", "Reptile", "Aquatic"];
const abilities = ["Invisibility", "Fire Breath", "Water Control"];

const creatures = [
    { name: "Pixie", type: "Fairy", region: "Forest", abilities: ["Invisibility"] },
    { name: "Dragon", type: "Reptile", region: "Desert", abilities: ["Fire Breath"] },
    { name: "Mermaid", type: "Aquatic", region: "Ocean", abilities: ["Water Control"] },
];

function searchByType(type) {
    return creatures.filter(creature => creature.type === type);
}

console.log(searchByType("Fairy")); 
