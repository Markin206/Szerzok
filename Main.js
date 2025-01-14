const tabla = document.createElement('table')//Létrehozzunk egy table elemet ahová a táblázatott rakjuk
document.body.appendChild(tabla)//hozzáadom a bodyhoz

const thead = document.createElement('thead')//thead elem létrehozása
tabla.appendChild(thead)//thead hozzáadása a táblához

const tbody = document.createElement('tbody')//tbody elem létrehozása
tabla.appendChild(tbody)//tbody hozzáadása a táblához
//----------------------------------------------------------------------------------------- header
const headerObj = {//létrehozzuk a headerObj objektumot
    szerzo: "Szerző",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
    csapat: "Csapat",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
    muveik: "Műveik"//hozzáadjuk a muveik tulajdonságot és értéket adunk neki
}

const tablaheader = document.createElement('tr')//Létrehozzunk egy tablerow elemet ahová a táblázat fejlécét rakjuk

const szerzo = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
szerzo.innerHTML = headerObj.szerzo;//A cella tartalma a headerObj szerzo tulajdonsága lesz
tablaheader.appendChild(szerzo);//hozzáadom a fejléchez a szerzo cellát

const csapat = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
csapat.innerHTML = headerObj.csapat;//A cella tartalma a headerObj csapat tulajdonsága lesz
tablaheader.appendChild(csapat)//hozzáadom a fejléchez a szerzo cellát

const muveik = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
muveik.innerHTML = headerObj.muveik;//A cella tartalma a headerObj muveik tulajdonsága lesz
muveik.colSpan = 2;//a művek oszlopnak colspan értéke 2.
tablaheader.appendChild(muveik)//hozzáadom a fejléchez a műveik cellát
thead.appendChild(tablaheader)//tablaheader sorának hozzáadása
//----------------------------------------------------------------------------------------- 1. row
const tablerow1Obj={//létrehozzuk a tablerow1Obj objektumot
    szerzo:"Vörösmarty Mihály",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
    csapat:"romantikus triász",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
    mu1:"Zalán futása",//hozzáadjuk az 1. mu tulajdonságot és értéket adunk neki
    mu2:"Szózat"//hozzáadjuk az 2. mu tulajdonságot és értéket adunk neki
}



const tablarow1 = document.createElement('tr')//1. tablerow létrehozása

const szerzo1 = document.createElement('td')//szerzo 1 létrehozzása
szerzo1.innerHTML = tablerow1Obj.szerzo//A cella tartalma a tablerow1Obj szerző tulajdonsága lesz
tablarow1.appendChild(szerzo1)//hozzáadom a szerzo1 cellát a tablerow1-hez

const csapat1 = document.createElement('td')//csapat 1 létrehozása
csapat1.innerHTML = tablerow1Obj.csapat//A cella tartalma a tablerow1Obj csapat tulajdonsága lesz
tablarow1.appendChild(csapat1)//hozzáadom a csapat1 cellát a tablerow1-hez

const mu11 = document.createElement('td')// 1. mű létrehozása
mu11.innerHTML = tablerow1Obj.mu1//A cella tartalma a tablerow1Obj 1. mű tulajdonsága lesz
tablarow1.appendChild(mu11)//hozzáadom a mu11 cellát a tablerow1-hez

const mu12 = document.createElement('td')// 2. mű létrehozása
mu12.innerHTML = tablerow1Obj.mu2//A cella tartalma a tablerow1Obj 2. mű tulajdonsága lesz
tablarow1.appendChild(mu12)//hozzáadom a mu12 cellát a tablerow1-hez
//------------------------------------------------------------------------------------------ 2. row
const tablerow2Obj={//létrehozzuk a tablerow2Obj objektumot
    szerzo:"Móricz Zsigmond",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
    csapat:"Nyugat I.",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
    mu1:"Hét krajcár",//hozzáadjuk az 1. mu tulajdonságot és értéket adunk neki
}

const tablarow2 = document.createElement('tr')//2. sor létrehozása

const szerzo2 = document.createElement('td')//szerzo 2 létrehozzása
szerzo2.innerHTML = tablerow2Obj.szerzo//A cella tartalma a tablerow2Obj szerző tulajdonsága lesz
tablarow2.appendChild(szerzo2)//szerzo2 hozzáadása 2. sorhoz

const csapat2 = document.createElement('td')//csapat 2 létrehozása
csapat2.innerHTML = tablerow2Obj.csapat//A cella tartalma a tablerow2Obj csapat tulajdonsága lesz
tablarow2.appendChild(csapat2)//csapat2 hozzáadása 2. sorhoz

const mu21 = document.createElement('td')// 1. mű létrehozása
mu21.innerHTML = tablerow2Obj.mu1//A cella tartalma a tablerow2Obj 1. mű tulajdonsága lesz
mu21.colSpan = 2;//A mu colspanjét megnöveljük 2re
tablarow2.appendChild(mu21)//1. mű hozzáadása 2. sorhoz
//------------------------------------------------------------------------------------------ 3. row

const tablerow3Obj={//létrehozzuk a tablerow2Obj objektumot
    szerzo:"Illyés Gyula",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
    csapat:"Nyugat II.",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
    mu1:"Egy mondat a zsarnokságról",//hozzáadjuk az 1. mu tulajdonságot és értéket adunk neki
    mu2:"Puszták népe"//hozzáadjuk az 2. mu tulajdonságot és értéket adunk neki
}

const tablarow3 = document.createElement('tr')//3. sor létrehozása

const szerzo3 = document.createElement('td')//szerzo 3 létrehozzása
szerzo3.innerHTML = tablerow3Obj.szerzo//A cella tartalma a tablerow3Obj szerző tulajdonsága lesz
tablarow3.appendChild(szerzo3)//szerzo3 hozzáadása a 3. sorhoz

const csapat3 = document.createElement('td')//csapat 3 létrehozása
csapat3.innerHTML = tablerow3Obj.csapat//A cella tartalma a tablerow3Obj csapat tulajdonsága lesz
tablarow3.appendChild(csapat3)//hozzáadom a csapat3 cellát a 3. sorhoz

const mu31 = document.createElement('td')// 1. mű létrehozása
mu31.innerHTML = tablerow3Obj.mu1//A cella tartalma a tablerow3Obj 1. mű tulajdonsága lesz
tablarow3.appendChild(mu31)//hozzáadom a mu31 cellát a 3. sorhoz

const mu32 = document.createElement('td')// 2. mű létrehozása
mu32.innerHTML = tablerow3Obj.mu2//A cella tartalma a tablerow3Obj 2. mű tulajdonsága lesz
tablarow3.appendChild(mu32)//hozzáadom a mu32 cellát a 3. sorhoz
//------------------------------------------------------------------------------------------ 4. row
const tablerow4Obj={//létrehozzuk a tablerow2Obj objektumot
    szerzo:"Radnóti Miklós",//hozzáadjuk a szerző tulajdonságot és értéket adunk neki
    csapat:"Nyugat III.",//hozzáadjuk a csapat tulajdonságot és értéket adunk neki
    mu1:"Pogány köszöntő",//hozzáadjuk az 1. mu tulajdonságot és értéket adunk neki
    mu2:"Járkálj csak, halálraítélt"//hozzáadjuk az 2. mu tulajdonságot és értéket adunk neki
}

const tablarow4 = document.createElement('tr')//4. sor létrehozása

const szerzo4 = document.createElement('td')//szerzo 4 létrehozzása
szerzo4.innerHTML = tablerow4Obj.szerzo//A cella tartalma a tablerow4Obj szerző tulajdonsága lesz
tablarow4.appendChild(szerzo4)//szerzo3 hozzáadása a 4. sorhoz

const csapat4 = document.createElement('td')//csapat 4 létrehozása
csapat4.innerHTML = tablerow4Obj.csapat//A cella tartalma a tablerow4Obj csapat tulajdonsága lesz
tablarow4.appendChild(csapat4)//csapat4 hozzáadása a 4. sorhoz

const mu41 = document.createElement('td')// 1. mű létrehozása
mu41.innerHTML = tablerow4Obj.mu1//A cella tartalma a tablerow4Obj 1. mű tulajdonsága lesz
tablarow4.appendChild(mu41)//mu41 hozzáadása a 4. sorhoz

const mu42 = document.createElement('td')// 2. mű létrehozása
mu42.innerHTML = tablerow4Obj.mu2 //A cella tartalma a tablerow4Obj 2. mű tulajdonsága lesz
tablarow4.appendChild(mu42)//mu42 hozzáadása a 4. sorhoz
//------------------------------------------------------------------------------------------ Row hozzáadása
tbody.appendChild(tablarow1)//1. sor hozzáadása a tbodyhoz
tbody.appendChild(tablarow2)//2. sor hozzáadása a tbodyhoz
tbody.appendChild(tablarow3)//3. sor hozzáadása a tbodyhoz
tbody.appendChild(tablarow4)//4. sor hozzáadása a tbodyhoz