const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById('btn')
var color = document.querySelector('.color')

btn.addEventListener('click',function(){
    var mycolor = '#'
    for(let i = 0 ; i< 6;i++){ 
        mycolor += hex[GenerateRandomNumber()]
       
    }
    document.body.style.backgroundColor = mycolor 
    color.textContent = mycolor

})



function GenerateRandomNumber(){
    return Math.floor(Math.random()*hex.length )
}




