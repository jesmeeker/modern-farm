//define and export a function plantSeeds with yearsPlanting array as a parameter

import { addPlant } from './field.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';
import { createCorn } from './seeds/corn.js';




export const plantSeeds = (yearsPlanting) => {

//create a nexted for loop to iterate main array and the arrays within it
    for (let i=0; i < yearsPlanting.length; i++) {
        const plantTypes = yearsPlanting[i];
    
//for each item in each nested array use a conditional statement to check for which type of plant and invoke the corresponding factory function 'example createAsparagus()' to return a seed
        for (const plant of plantTypes) {
            if (plant === 'Asparagus') {
            let asparagusSeed = createAsparagus()
            addPlant(asparagusSeed)
            }
        else if (plant === 'Potato') {
            let potatoSeed = createPotato()
            addPlant(potatoSeed)
            }
        else if (plant === 'Soybean') {
            let soybeanSeed = createSoybean()
            addPlant(soybeanSeed)
            }
        else if (plant === 'Sunflower') {
            let sunflowerSeed = createSunflower()
            addPlant(sunflowerSeed)
            }
        else if (plant === 'Wheat') {
            let wheatSeed = createWheat()
            addPlant(wheatSeed)
            }
        else if (plant === 'Corn') {
            let cornSeed = createCorn()
            addPlant(cornSeed)
            }
        else {
            console.log(`The farm doesn't have this type of seed.`)
        }
    }

    
    //add that seed to the plantsArray
    }
}