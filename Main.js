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

//----------------------------------------------------------------------------------------- függvény

function renderTable(){//definiálom a renderTable függvényt
    for(const currentElement of array){//végigiterálunk a cikluson a ciklusváltozó az aktuális elem
        const row = document.createElement('tr');//létrehozzuk a row elemet
        tbody.appendChild(row);//a sort hozzá adjuk a táblához

        const szerzo = document.createElement('td');//létrehozzuk a szerzo cellát
        szerzo.innerHTML = currentElement.szerzo;//a szerzo cella tartalmaza a ciklusváltozó objektumnak szerző tulajdonságát
        row.appendChild(szerzo);//a szerző cella hozzáfűzzűk a rowhoz

        const csapat = document.createElement('td');
        csapat.innerHTML = currentElement.csapat;//a csapat cella tartalmaza a ciklusváltozó objektumnak csapat tulajdonságát
        row.appendChild(csapat);//a csapat cella hozzáfűzzűk a rowhoz

        const mu1 = document.createElement('td');
        mu1.innerHTML = currentElement.mu1;//a mu1 cella tartalmaza a ciklusváltozó objektumnak mu1 tulajdonságát
        row.appendChild(mu1);//a mu1 cella hozzáfűzzűk a rowhoz
        if(currentElement.mu2 !== undefined){// vizsgalom a mu2 erteket a ciklusvaltozo objektumanak, ha az nem egyenlo undefineddel, akkor vegrehajtja az elagazason beluli utasitasokat 
            const mu2 = document.createElement('td');//létrehozzuk a mu2 elemet
            mu2.innerHTML = currentElement.mu2;//a mu2 cella tartalmaza a ciklusváltozó objektumnak mu2 tulajdonságát
            row.appendChild(mu2);//a mu2 cella hozzáfűzzűk a rowhoz
        }
        else{
            mu1.colSpan = 2;
        }
    }
}
renderTable()//meghívjuk a függvényt

//----------------------------------------------------------------------------------------- form

const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();//megakadalyozom, hogy a bongeszo alapertelmezett mukodese lefusson submit eseten
    const HtmlElementSzerzo = document.getElementById('szerzo_nev');//elkerem a htmlelementet, amely a szerzo_nev id-val van definialva
    const HtmlElementGroup = document.getElementById('group');//elkerem a htmlelementet, amely a group id-val van definialva
    const HtmlElementMu1 = document.getElementById('mu1');//elkerem a htmlelementet, amely a mu1 id-val van definialva
    const HtmlElementMasodik = document.getElementById('masodik');//elkerem a htmlelementet, amely a masodik id-val van definialva
    const HtmlElementMu2 = document.getElementById('mu2');//elkerem a htmlelementet, amely a mu2 id-val van definialva

    const thisForm = e.currentTarget; // Az event currentTarget tulajdonsaga a formunkat tartalmazza, ezt eltaroljuk egy lokalis valtozoba 
    const errorHtmlElements = thisForm.querySelectorAll('.error'); // A formon beluli osszes error classal rendelkezo html elementet elkerjuk
    for(const errorElement of errorHtmlElements){ // Vegigiteralunk a visszakapott errorhtmlelementeken
        errorElement.innerHTML = ''; // toroljuk az aktualis elem tartalmat
    }
    
    const szerzo_value = HtmlElementSzerzo.value;//a HtmlElementSzerzo.value erteket beleteszem egy lokalis valtozoba
    const group_value = HtmlElementGroup.value;//a HtmlElementGroup.value erteket beleteszem egy lokalis valtozoba
    const Mu1_value = HtmlElementMu1.value;//a HtmlElementMu1.value erteket beleteszem egy lokalis valtozoba
    const masodik_value = HtmlElementMasodik.checked;
    let Mu2_value = HtmlElementMu2.value ;//a HtmlElementMu2.value erteket beleteszem egy lokalis valtozoba

    if (!masodik_value) {
        Mu2_value = undefined;
    }


    /**
     * létrehozunk egy tömböt amely 4. sor lesz, amely 4 tulajdonsága lesz és hozzá adjuk
     * a hozzájuk tartozó értékeiket
     */
    const newElement = {
        szerzo: szerzo_value,
        csapat: group_value,
        mu1: Mu1_value,
        mu2: Mu2_value
    }

    /**
     * ha validáció igaz akkor kitöltjük az újsort
     * és kiürítjuk a tablet hogy ne renderelje be újból
     * és miután kiürítettük újra meghívjuk a tablet
     * aztán a formra nyomunk egy resetet
     */
    if(validatefield(HtmlElementMu2,HtmlElementMasodik)){
    array.push(newElement);
    tbody.innerHTML = "";
    renderTable();
    form.reset()
    }
})

function validatefield(HtmlElementMu2,HtmlElementMasodik){//létrehozzuk a validációs functiont
    let valid = true;//létrehozzunk egy booleant változót és megadjuk az értéket truera

    /**
     * kiüríti a error innerhtml-t
     */
    const error = form.querySelectorAll('.error');
    for(const errors of error)
    {
    errors.innerHTML = "";
    }

    /**
     * ha a doboz ki van pipálva de nem adtuk meg a 2. mű címét akkor egy errort ír ki
     */
    if (HtmlElementMasodik.checked && HtmlElementMu2.value === '') {
        const parentElement = HtmlElementMu2.parentElement;
        const error = parentElement.querySelector('.error');
        if (error !== null) {
            error.innerHTML = "Kötelező a második mű megadása!";
        }
        valid = false;
    }

    /**
     * ha a doboz nincs ki pipálva de meg adtuk a 2. mű címét akkor egy errort ír ki
     */
    if (HtmlElementMu2.value !== '' && !HtmlElementMasodik.checked) {
        const parentElement = HtmlElementMasodik.parentElement;
        const error = parentElement.querySelector('.error');
        if (error !== null) {
            error.innerHTML = "A második műhöz ki kell pipálni a dobozt!";
        }
        valid = false;
    }
    return valid//vissza adjuk a valid értékét
}