//----------------------------------------------------------------------------------------- array

const array = [
    {//array tömb első elemnek létrehozása(1st row)
        szerzo:"Vörösmarty Mihály",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
        csapat:"romantikus triász",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
        mu1:"Zalán futása",//hozzáadjuk az 1. mu tulajdonságot és értéket adunk neki
        mu2:"Szózat"//hozzáadjuk az 2. mu tulajdonságot és értéket adunk neki
    },
    {//array tömb második elemnek létrehozása(2nd row)
        szerzo:"Móricz Zsigmond",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
        csapat:"Nyugat I.",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
        mu1:"Hét krajcár",//hozzáadjuk az 1. mu tulajdonságot és értéket adunk neki
    },
    {//array tömb harmadik elemnek létrehozása(3rd row)
        szerzo:"Illyés Gyula",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
        csapat:"Nyugat II.",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
        mu1:"Egy mondat a zsarnokságról",//hozzáadjuk az 1. mu tulajdonságot és értéket adunk neki
        mu2:"Puszták népe"//hozzáadjuk az 2. mu tulajdonságot és értéket adunk neki
    },
    {//array tömb negyedik elemnek létrehozása(4th row)
        szerzo:"Radnóti Miklós",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
        csapat:"Nyugat III.",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
        mu1:"Pogány köszöntő",//hozzáadjuk az 1. mu tulajdonságot és értéket adunk neki
        mu2:"Járkálj csak, halálraítélt"//hozzáadjuk az 2. mu tulajdonságot és értéket adunk neki
    }
]

//----------------------------------------------------------------------------------------- table, tbody, thead

const tabla = document.createElement('table')//Létrehozzunk egy table elemet ahová a táblázatott rakjuk
document.body.appendChild(tabla)//hozzáadom a bodyhoz

const thead = document.createElement('thead')//thead elem létrehozása
tabla.appendChild(thead)//thead hozzáadása a táblához

const tbody = document.createElement('tbody')//tbody elem létrehozása
tabla.appendChild(tbody)//tbody hozzáadása a táblához

//----------------------------------------------------------------------------------------- header
const headerObj = {
//array tömb első elemnek létrehozása(header)
    szerzo: "Szerző",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
    csapat: "Csapat",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
    muveik: "Műveik"//hozzáadjuk a muveik tulajdonságot és értéket adunk neki
}
const tablaheader = document.createElement('tr')//Létrehozzunk egy tablerow elemet ahová a táblázat fejlécét rakjuk

const szerzo = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
szerzo.innerHTML = headerObj.szerzo;//A cella tartalma az headerobj elem szerzo tulajdonságának értéke lesz
tablaheader.appendChild(szerzo);//hozzáadom a fejléchez a szerzo cellát

const csapat = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
csapat.innerHTML = headerObj.csapat;//A cella tartalma az headerobj elem csapat tulajdonságának értéke lesz
tablaheader.appendChild(csapat)//hozzáadom a fejléchez a szerzo cellát

const muveik = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
muveik.innerHTML = headerObj.muveik;//A cella tartalma az headerobj elem muveik tulajdonságának értéke lesz
muveik.colSpan = 2;//a művek oszlopnak colspan értéke 2.
tablaheader.appendChild(muveik)//hozzáadom a fejléchez a műveik cellát
thead.appendChild(tablaheader)//tablaheader sorának hozzáadása

//----------------------------------------------------------------------------------------- ciklus

function renderTable(){//definiálom a renderTable függvényt
    for(const currentElement of array){//végigiterálunk a cikluson a ciklusváltozó az aktuális elem
        const row = document.createElement('tr');//létrehozzuk a row elemet
        tabla.appendChild(row);//a sort hozzá adjuk a táblához

        const szerzo = document.createElement('td');//létrehozzuk a szerzo cellát
        szerzo.innerHTML = currentElement.szerzo;//a szerzo cella tartalmaza a ciklusváltozó objektumnak szerző tulajdonságát
        row.appendChild(szerzo);//a szerző cella hozzáfűzzűk a rowhoz

        const csapat = document.createElement('td');
        csapat.innerHTML = currentElement.csapat;//a csapat cella tartalmaza a ciklusváltozó objektumnak csapat tulajdonságát
        row.appendChild(csapat);//a csapat cella hozzáfűzzűk a rowhoz

        const mu1 = document.createElement('td');
        mu1.innerHTML = createElement.mu1;//a mu1 cella tartalmaza a ciklusváltozó objektumnak mu1 tulajdonságát
        row.appendChild(mu1);//a mu1 cella hozzáfűzzűk a rowhoz
        if(currentElement.mu2 !== undefined){// vizsgalom a mu2 erteket a ciklusvaltozo objektumanak, ha az nem egyenlo undefineddel, akkor vegrehajtja az elagazason beluli utasitasokat 
            const mu2 = document.createElement('td');//létrehozzuk a mu2 elemet
            mu2.innerHTML = currentElement.mu2;//a mu2 cella tartalmaza a ciklusváltozó objektumnak mu2 tulajdonságát
            row.appendChild(mu2);//a mu2 cella hozzáfűzzűk a rowhoz
        }
    }
}
renderTable()//meghívjuk a függvényt