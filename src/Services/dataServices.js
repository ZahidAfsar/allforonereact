const addNumbers = async (numOne, numTwo) => {
    const promise = await fetch(`https://afsarzallforone.azurewebsites.net/Adding/NumReturn/${numOne}/${numTwo}`)
    const response = await promise.text();
    return response;
}
const SayHello = async (user) => {
    const promise = await fetch(`https://afsarzallforone.azurewebsites.net/SayHello/${user}`)
    const response = await promise.text();
    return response;
}
const askingQuestion = async (name, time) => {
    const promise = await fetch(`https://afsarzallforone.azurewebsites.net/Adding/NameReturn/${name}/${time}`)
    const response = await promise.text();
    return response;
}
const Compare = async (numOneString, numTwoString) => {
    const promise = await fetch(`https://afsarzallforone.azurewebsites.net/Adding/NumCompare/${numOneString}/${numTwoString}`)
    const response = await promise.text();
    return response;
}

const Madlib = async (name, username, verb, name2, noun, noun2, verb2, noun3, noun4, creatureName, weaponName) => {
    const promise = await fetch (`https://afsarzallforone.azurewebsites.net/ChallengeFive/MadLib/${name}/${username}/${verb}/${name2}/${noun}/${noun2}/${verb2}/${noun3}/${noun4}/${creatureName}/${weaponName}`)
    const response = await promise.text();
    return response;
}

const OddOrEven = async (numOne) => {
    const promise = await fetch (`https://afsarzallforone.azurewebsites.net/ChallengeSix/ODDorEven/${numOne}`);
    const response = await promise.text();
    return response;
}

const IntReverse = async (numOne) => {
    const promise = await fetch (`https://afsarzallforone.azurewebsites.net/ChallengeSevenInt/IntReverse/${numOne}`)
    const response = await promise.text()
    return response;
}

const StringReverse = async (wordOne) => {
    const promise = await fetch (`https://afsarzallforone.azurewebsites.net/ChallengeSevenString/${wordOne}`)
    const response = await promise.text()
    return response;
}

const Magic8ball = async (Question) => {
    const promise = await fetch (`https://afsarzallforone.azurewebsites.net/YesOrNoQuestion/${Question}`)
    const response = await promise.text()
    return response;
}

const RestaurantPicker = async (choice) => {
    const promise = await fetch (`https://afsarzallforone.azurewebsites.net/fastfoodORpizzaORmexican/${choice}`)
    const response = await response.text()
    return response;    
}

export {SayHello, addNumbers, askingQuestion, Compare, OddOrEven, Madlib, IntReverse, StringReverse, Magic8ball, RestaurantPicker}

    
