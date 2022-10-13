import { plantsArray } from './field.js'

//define and export harvestPlants() with an array as the parameter (plantsArray[])

export let harvest = []

export const harvestPlants = (plantsAsAnArray) => {
    for (const plants of plantsAsAnArray) {
    let plantOutput = plants.output 
    let halfPlantOutput = plantOutput / 2
        if (plants.type === "Corn") {
            for (let i=0; i < halfPlantOutput; i++)
            harvest.push(plants)
        } else {
            for (let i=0; i < plants.output; i++)
            harvest.push(plants)
        } 
    }
    return harvest
 }

// let harvestedPlants = harvestPlants(plantsArray)
// console.log(harvestedPlants)

