var Personi= {
    emer:"arber",
    mbiemer:"kadriu",
    mosha:22,
}
// console.log(Personi);
// console.log(Personi.emer);

var Useri={
    emer:'',
    mbiemri:'',
    mosha:'',
    email:''
}

window.onload=hello();

var btns;
function hello(){
    btns=document.getElementsByTagName('button');
    console.log(btns)
    for(var element in btns) {
        console.log(element);
    }
    for(var elem of btns) {
        console.log(elem);
    }
}

function modifyDOM(){
    var createTitle=document.createElement('h1');
    var nodeText = document.createTextNode('Ky eshte nje titull');
    createTitle.appendChild(nodeText);
    document.getElementsByTagName('body')[0].appendChild(createTitle);
    var titulli = document.getElementsByTagName('h1')[0];

    //titulli.classList+='titulli';
    titulli.setAttribute('class','titulli');


}
modifyDOM();