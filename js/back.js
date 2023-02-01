function backPage()
{
    document.getElementById('array').style.display = 'none';
    document.getElementById('init').style.display = 'block';
   
    document.getElementById('simpleh').style.display = 'block';
    let cont = document.getElementById('array');
    while (cont.hasChildNodes()) {
        cont.removeChild(cont.firstChild);
        document.getElementById('array').style.display = 'block';
    }
}

function backPage2()
{
    document.getElementById('array').style.display = 'block';
    document.getElementById('table').style.display = 'none';
    let sys = document.getElementById('simp_sys');
    while (sys.hasChildNodes()) {
        sys.removeChild(sys.firstChild);
    }
    let tab = document.getElementById('table');
    while (tab.hasChildNodes()) {

            tab.removeChild(tab.firstChild);
    }
    let tit = document.createElement('h1');
    tit.appendChild(document.createTextNode('Méthode Simplexe'));
    tab.appendChild(tit);
    let div = document.createElement('div');
    div.setAttribute('id', 'simp_sys');
    tab.appendChild(div);
}

