let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let pic4 = document.getElementById('pic4');
let mainPic = document.getElementById('mainPic');
let mainName = document.getElementById('mainName');

function change(){
pic1.addEventListener('click' , changeTo1);
pic2.addEventListener('click' , changeTo2);
pic3.addEventListener('click' , changeTo3);
pic4.addEventListener('click' , changeTo4);}
change();

function changeTo1(e){
    mainPic.src = "./pics/livingroom.jpg";
    mainName.innerHTML = "Living Room";
}
function changeTo2(e){
    mainPic.src = "./pics/diningroom.jpg";
    mainName.innerHTML = "Dining Room";
}
function changeTo3(e){
    mainPic.src = "./pics/bedroom.jpg";
    mainName.innerHTML = "Bedroom";
}
function changeTo4(e){
    mainPic.src = "./pics/livingroom2.jpg";
    mainName.innerHTML = "Living Room II";
}
