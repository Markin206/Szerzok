//----------------------------------------------------------------------------------------- array of szerzok

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
//----------------------------------------------------------------------------------------- array of form
const formArray = [
    {
        label : "Szerző neve:",
        id: "szerzo_nev",
        input_type: "text"
    },
    {
        label : "Csapat:",
        id: "group",
        input_type: "text"
    },
    {
        label : "Első mű:",
        id: "mu1",
        input_type: "text"
    },
    {
        label : "Szeretnél megadni második művet is?",
        id: "masodik",
        input_type: "checkbox"
    },
    {
        label : "Második mű:",
        id: "mu2",
        input_type: "text"
    },
]

//----------------------------------------------------------------------------------------- table, tbody, thead

const tabla = document.createElement('table')//Létrehozzunk egy table elemet ahová a táblázatott rakjuk
document.body.appendChild(tabla)//hozzáadom a bodyhoz

const thead = document.createElement('thead')//thead elem létrehozása
tabla.appendChild(thead)//thead hozzáadása a táblához

const tbody = document.createElement('tbody')//tbody elem létrehozása
tabla.appendChild(tbody)//tbody hozzáadása a táblához

//----------------------------------------------------------------------------------------- header

renderHeader();
renderTable(array);
createForm();