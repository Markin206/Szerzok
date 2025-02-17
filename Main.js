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
const formArray = [//létrehozunk egy tömböt amely nek 3 tulajdonsága lesz. label, id, input_type
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
createForm();//létrehozzuk a form-ot a createForm függvény segítségével
renderHeader();//meghívjuk a renderHeader függvényt amely létrehozza a headert
renderTable(array);//meghívjuk a rendertablet és létrehozzuk a tablet

const form = document.querySelector('form');//kiválasztjuk a form osztályal rendelkező HTML elemet

form.addEventListener('submit', function(e){//létrehozunk egy addEventListener-t amely a submit típust figyeli
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
    if(simpleValidation(HtmlElementSzerzo,HtmlElementGroup,HtmlElementMu1)){
    const szerzo_value = HtmlElementSzerzo.value;//a HtmlElementSzerzo.value erteket beleteszem egy lokalis valtozoba
    const group_value = HtmlElementGroup.value;//a HtmlElementGroup.value erteket beleteszem egy lokalis valtozoba
    const Mu1_value = HtmlElementMu1.value;//a HtmlElementMu1.value erteket beleteszem egy lokalis valtozoba
    let Mu2_value = HtmlElementMu2.value ;//a HtmlElementMu2.value erteket beleteszem egy lokalis valtozoba


    /**
     * létrehozunk egy tömböt amely 4. sor lesz, amely 4 tulajdonsága lesz és hozzá adjuk
     * a hozzájuk tartozó értékeiket
     */
    const newElement = {
        szerzo: szerzo_value,//szerzo a szerzo_valuet tartalmazza
        csapat: group_value,//csapat a group_value tartalmazza
        mu1: Mu1_value,//mu1 a Mu1_value tartalmazza
        mu2: Mu2_value//mu2 a Mu2_value tartalmazza
    }
    console.log(newElement)
    /**
     * ha validáció igaz akkor kitöltjük az újsort
     * és kiürítjuk a tablet hogy ne renderelje be újból
     * és miután kiürítettük újra meghívjuk a tablet
     * aztán a formra nyomunk egy resetet
     */
    if(validatefield(HtmlElementMu2,HtmlElementMasodik)){//ha a validáció igaz akkor végrehajtódik a sor hozzáadás
    array.push(newElement);//felpusholjuk az új sort az arraybe
    tbody.innerHTML = "";//kiürítjük a tbody-t hogy amikor létrehozunk egy új sort ne az egész tbody-t hozza létre
    renderTable(array);//meghívjuk a renderTable függvényt ezáltal frissítjük a table-t
    form.reset()//a form-ot reseteli
    }
    }
})
