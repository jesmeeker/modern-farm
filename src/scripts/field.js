//define a variable that is an empty array that will house plants from function
export let plantsArray = []

//define and export a function that takes a seed as a parameter and will add the seed to field
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject) === true) {
        for (const seed of seedObject) {
            plantsArray.push(seed)
        }
    }
    else {
        plantsArray.push(seedObject)
    }
}
//function needs to check if the seed is an object or an array (array.isArray)

//define and export a function that returns a copy of the array
export const usePlants = () => {
    return plantsArray
}