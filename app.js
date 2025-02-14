// var a=10;
// function add ()
// {
//     let b=20;
    
    
//     if(b>a)
//     {
//         let c=a+b
//         console.log(c)
//     }
//     console.log(b);
// }

// add()
// let person={
//     "namee":"kle",
//     "id":1,
//     "place":"knp"
// }
// console.log(person["id"])

let element=document.getElementById('text');
let changetextBtn=document.getElementById('changeTextbtn')
let changeColorBtn=document.getElementById('changeColorBtn')

changetextBtn.addEventListener('click',function(){
element.innerHTML="Text changed using JS"
})
changeColorBtn.addEventListener('click',function()
{
    document.body.style.backgroundColor="blue"
});