function shtoLajmin(){
    var createImg = document.createElement('img');
    createImg.setAttribute("src", "UBT-LOGO.png");
    createImg.setAttribute('class','foto-lajmi');

    var createTitle = document.createElement('h3');
    var titulli = document.getElementById('titulli-new').value;
    var titulliPermbajtje = document.createTextNode(titulli);
    createTitle.appendChild(titulliPermbajtje);

    var createParagraf = document.createElement('p');
    var teksti = document.getElementById('permbajtja-new').value;
    var tekstiPermbajtje = document.createTextNode(teksti);
    createParagraf.appendChild(tekstiPermbajtje);

    var createData = document.createElement('h6');
    var ora = new Date().getHours();
    var minuta = new Date().getMinutes();
    var sekonda = new Date().getSeconds();
    var data = ora+'h:'+minuta+'m:'+sekonda+'s';
    var tekstiData = document.createTextNode(data);
    createData.appendChild(tekstiData);

    var divi = document.createElement('div');
    divi.appendChild(createImg);
    divi.appendChild(createTitle);
    divi.appendChild(createParagraf);
    divi.appendChild(createData);
    divi.setAttribute('class','form-group');

    var x = document.getElementsByClassName('right-side')[0];
    x.insertBefore(divi,x.firstChild);
    document.getElementsByClassName('right-side')[0].removeChild(document.getElementsByClassName('form-group')[4]);
}
