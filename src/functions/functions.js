export const getRandomBall = ()=>{
    const colorBalls = [
        'url(/cuteContact-greenball.png)',
        'url(/cuteContact-purpleball.png)',
        'url(/cuteContact-rouseball.png)',
        'url(/cuteContact-blueball.png)',
    ]
    const random = Math.floor(Math.random()*colorBalls.length);
    return colorBalls[random];
}