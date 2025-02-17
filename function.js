//----------------------------------------------------------------------------------------- renderheader függvény 
/**
 * Létrehozunk egy header sort amelybe bele rakjuk a 3 cellát és aztán hozzáadjuk a fejléchez
 * @param {HTMLTableRowElement} tableheader 
 */
function renderHeader(tableheader){
    const headerObj = {
    //array tömb első elemnek létrehozása(header)
        szerzo: "Szerző",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
        csapat: "Csapat",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
        muveik: "Műveik"//hozzáadjuk a muveik tulajdonságot és értéket adunk neki
    }
    
    const szerzo = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
    szerzo.innerHTML = headerObj.szerzo;//A cella tartalma az headerobj elem szerzo tulajdonságának értéke lesz
    tableheader.appendChild(szerzo);//hozzáadom a fejléchez a szerzo cellát
    
    const csapat = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
    csapat.innerHTML = headerObj.csapat;//A cella tartalma az headerobj elem csapat tulajdonságának értéke lesz
    tableheader.appendChild(csapat)//hozzáadom a fejléchez a szerzo cellát
    
    const muveik = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
    muveik.innerHTML = headerObj.muveik;//A cella tartalma az headerobj elem muveik tulajdonságának értéke lesz
    muveik.colSpan = 2;//a művek oszlopnak colspan értéke 2.
    tableheader.appendChild(muveik)//hozzáadom a fejléchez a műveik cellát
    thead.appendChild(tableheader)//tablaheader sorának hozzáadása
    }
//----------------------------------------------------------------------------------------- rendertable függvény    
/**
 * 
 * @param {Array} arrays ez lesz az a tömb amelyen végig iterálunk és a benne lévő adatokat kiiratjuk a függvényel
 */
function renderTable(arrays){//definiálom a renderTable függvényt amelynek paramétere a globális array lesz
    for(const currentElement of arrays){//végigiterálunk a cikluson a ciklusváltozó az aktuális elem
        const tablebody = document.querySelector('tbody')
        const row = document.createElement('tr');//létrehozzuk a row elemet
        tablebody.appendChild(row);//a sort hozzá adjuk a táblához

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
            mu1.colSpan = 2;//ha nem akkor a mu1 colspan-je 2 lesz
        }
    }
}
//----------------------------------------------------------------------------------------- createForm és form függvények
/**
 * Létrehozzuk a formot a függvény által
 * @param {Array} formArrays az a array amely tartalmazza a formhoz szükséges elemeket
 */
function createForm(formArrays) {//létrehozzuk a függvényt
    const form = document.createElement('form'); //létrehozunk egy form elemet
    const button = document.createElement('button')//létrehozunk egy gomb elemet
    button.innerHTML = "Hozzáadás";//gombnak innerhtml-nek adunk értéket
    for(const formElement of formArrays) {//végig iterálunk a formArrayen
        const formDiv = document.createElement('div');//létrehozunk egy div elemet
        const formLabel = document.createElement('label');//létrehozunk egy label elemet
        const formInput = document.createElement('input');//létrehozunk egy input elemet
        const formError = document.createElement('div');//létrehozunk egy div elemet

        formLabel.innerHTML = formElement.label;//a létrehozott labelnek innerhtml-nek megadjuk a formElement objektum label tulajdonságát
        formInput.type = formElement.input_type;//a létrehozott input type-ját megadjuk a formElement objektum input_type tulajdonságát
        formInput.name = formElement.id;//a létrehozott input name-jét megadjuk a formElement objektum id tulajdonságát
        formInput.id = formElement.id;//a létrehozott input id-ját megadjuk a formElement objektum id tulajdonságát
        formError.classList.add("error");//az error div elemnek megadjuk az error osztályt

        formDiv.appendChild(formLabel);//a létrehozzot divhez hozzáadjuk a létrehozott label
        formDiv.appendChild(document.createElement('br'));//a létrehozzot divhez hozzáadjuk a létrehozott break line
        formDiv.appendChild(formInput);//a létrehozzot divhez hozzáadjuk a létrehozott input
        formDiv.appendChild(document.createElement('br'));//a létrehozzot divhez hozzáadjuk a létrehozott break line
        formDiv.appendChild(formError);//a létrehozzot divhez hozzáadjuk a létrehozott error
        formDiv.appendChild(document.createElement('br'));//a létrehozzot divhez hozzáadjuk a létrehozott break line
        form.appendChild(formDiv);//hozzáadjuk a létrehozott div-et a létrehozott form elementhez
    }
    form.appendChild(button)//hozzáadjuk a létrehozott gombot a létrehozott form elementhez
    document.body.appendChild(form);//hozzáadjuk a weboldal body elemhez a form-ot
}
//------------------------------------------------------------------------------------------------
/**
 * ezzel a függvényel nézzük végig a különböző inputokat ha esetleg üresek akkor hibát add ki
 * @param {string} HtmlElementSzerzo szerzo input a formból
 * @param {string} HtmlElementGroup a csoportok input a formból
 * @param {string} HtmlElementMu1 az 1. mű input a formból
 * @returns {boolean} ez a valid lesz amely majd engedélyezni fogja hogy egyáltalán hozzá lehesen adni egy új sort vagy sem
 */
    function simpleValidation(HtmlElementSzerzo,HtmlElementGroup,HtmlElementMu1){//létrehozzuk a függvényt
    let valid = true; // a valid valtozo erteke igaz

    if(!validationFormHTMLField(HtmlElementSzerzo, "Kötelező a szerző neve megadása")){ // Ha a validateFormHtmlField fuggveny hamissal ter vissza a bementei lastName htmlElement eseten
        valid = false; // a valid valtozo erteket false-ra allitjuk
    }

    if(!validationFormHTMLField(HtmlElementGroup, "Kötelező a csoport megadása")){ // Ha a validateFormHtmlField fuggveny hamissal ter vissza a bementei lastName htmlElement eseten
        valid = false;  // a valid valtozo erteket false-ra allitjuk
    }
    if(!validationFormHTMLField(HtmlElementMu1, "Kötelező megadni a mű címét")){ // Ha a validateFormHtmlField fuggveny hamissal ter vissza a bementei lastName htmlElement eseten
        valid = false;  // a valid valtozo erteket false-ra allitjuk
    }
    return valid//vissza adja a valid értékét
}

//------------------------------------------------------------------------------------------------ validációs függvények
/**
 * a validate field azt nézi hogy a checkbox checkolva van és a mu2 üres márha a felhasználó nem add meg mu2
 * ha add de nem pipálja ki a check boxot akkor hibát jelez
 * ha nem add de ki pipálta a check boxot akkor is hibát jelez
 * @param {string} HtmlElementMu2 a 2. mű elem
 * @param {boolean} HtmlElementMasodik a checkbox input a formból
 * @returns {boolean}//ez ugyan úgy a valid lesz amely engedélyezi vagy sem hogy hozzá lehesen adni a 2.műt vagy sem
 */
function validatefield(HtmlElementMu2,HtmlElementMasodik){//létrehozzuk a validációs functiont
    let valid = true;//létrehozzunk egy booleant változót és megadjuk az értéket truera
    /**
     * kiüríti a error innerhtml-t
     */
    const error = form.querySelectorAll('.error');//kiválasztjuk az összes div-et amely error osztályt tartalmaz
    for(const errors of error)//végig iterálunk az összes error div-en
    {
    errors.innerHTML = "";//kiürítjük a divet
    }
    /**
     * ha a doboz ki van pipálva de nem adtuk meg a 2. mű címét akkor egy errort ír ki
     */
    if (HtmlElementMasodik.checked && HtmlElementMu2.value === '') {//ha a doboz ki van pipálva de a mu2 input üres akkor belép
        const parentElement = HtmlElementMu2.parentElement;//példányosítjuk a mu2-nak parent elemét
        const error = parentElement.querySelector('.error');//kiválasztjuk az error osztályal rendelkező div-et
        if (error !== null) {//ha error nem null akkor belép
            error.innerHTML = "Kötelező a második mű megadása!";//kiírja az error szöveget
        }
        valid = false;//valid értéke false lesz mivel errort kaptunk
    }
    /**
     * ha a doboz nincs ki pipálva de meg adtuk a 2. mű címét akkor egy errort ír ki
     */
    if (HtmlElementMu2.value !== '' && !HtmlElementMasodik.checked) {//ha a mu2 nem üres de a doboz ki van pipálva akkor bemegy
        const parentElement = HtmlElementMasodik.parentElement;//példányosítjuk a masodik-nak parent elemét
        const error = parentElement.querySelector('.error');//kiválasztjuk az error osztályal rendelkező div-et
        if (error !== null) {//ha error nem null akkor belép
            error.innerHTML = "A második műhöz ki kell pipálni a dobozt!";//kiírja az error szöveget
        }
        valid = false;//valid értéke false lesz mivel errort kaptunk
    }
    return valid//vissza adjuk a valid értékét
}

/**
 * ezzel a field-el nézzük meg hogyha a megadott input üres vagy sem,
 * ha üres akkor hibát add ki és ki írja,
 * azt a szöveget amelyt még meghiváskor megadunk
 * @param {HTMLTableCellElement} cellElement egy cella element amelyt majd megadunk a meghívásnál
 * @param {string} message a szöveg amelyt majd kiiratunk meghívásnál
 * @returns {boolean} a valid amelyt vissza adunk a simpleValidation függvénynek
 */
function validationFormHTMLField(cellElement, message){//létrehozunk egy validációs függvény amelynek kettő paramétere lesz. Az 1. amely a megadott cellát tartalmazza és a 2. amely a szöveget tartalmazza
    let valid = true//létrehozzunk egy booleant változót és megadjuk az értéket truera
    if(cellElement.value === ""){//ha a megadott cella/input üres és tipusa megegyezik akkor belép
        const parentElement = cellElement.parentElement;//ugyanúgy meghívjuk a parent elemet mint a szimpla validációnál
        const error = parentElement.querySelector('.error');//kiválasztjuk az error osztályal rendelkező div-et
        if (error !== null) {//ha error nem null akkor belép
            error.innerHTML = message;//az error divnek innerhtml-be a majd megadott szöveget kapja meg
        }
        valid = false;//valid értéke false lesz mivel errort kaptunk
    }
    return valid//vissza adjuk a valid értékét
}