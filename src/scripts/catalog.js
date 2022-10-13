
import { harvest } from './harvester.js'
//define and expoort a function catalog() that takes in the harvested food array as input

export const catalog = (foodObjects) => {
//define an empty string for HTML
    let HTMLString = ''
//iterated through the array and 
    for (const food of foodObjects) {
        HTMLString += `<section class="plant">${food.type}</section>`
    }
    return HTMLString

}
