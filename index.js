const getcolor =()=>{
    //hex code

    const randomNumber =Math.floor(Math.random()*16777215)
    console.log(randomNumber)

    const randomcode = '#'+ randomNumber.toString(16)
    console.log(randomNumber,randomcode)
    document.body.style.background = randomcode
    document.getElementById('color').innerText= randomcode;

    navigator.clipboard.writeText(randomcode)





}
document.getElementById('btn').addEventListener("click",
getcolor
    
)
getcolor();