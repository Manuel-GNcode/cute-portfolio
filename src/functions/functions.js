export const getRandomString = (array)=>{
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}