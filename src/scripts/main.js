//Imports the function from plan.js that assigns a random row number to an array.
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';
import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantsArray } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { harvest } from './harvester.js'
import { catalog } from './catalog.js'


let yearlyPlan = createPlan()
// console.log(yearlyPlan)


plantSeeds(yearlyPlan)
console.log("Plants Array")
console.log(plantsArray)
// console.log(catalog(harvest))

let harvestedPlants = harvestPlants(plantsArray)
console.log("Harvested Plants")
console.log(harvestedPlants)
// console.log(harvestedPlants)
// console.log(harvest)
// let yourmom = catalog(harvest)
// console.log(yourmom)


const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(harvest)

// console.log(plantsArray)


// let potatoSeed = createPotato()
// console.log(potatoSeed)

// let soybeanSeed= createSoybean()
// console.log(soybeanSeed)

// let sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

// let wheatSeed = createWheat()
// console.log(wheatSeed)

// let yearlyPlan = createPlan()
// console.log(yearlyPlan)

