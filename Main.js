const tabla = document.createElement('table')//Létrehozzunk egy table elemet ahová a táblázatott rakjuk
document.body.appendChild(tabla)//hozzáadom a bodyhoz

const thead = document.createElement('thead')//thead elem létrehozása
tabla.appendChild(thead)//thead hozzáadása a táblához

const tbody = document.createElement('tbody')//tbody elem létrehozása
tabla.appendChild(tbody)//tbody hozzáadása a táblához
//----------------------------------------------------------------------------------------- header
const szerzovalue = "Szerzo";//változó létrehozása mely tartalmazza a Szerzo string értékét
const csapatvalue = "Csapat";//változó létrehozása mely tartalmazza a Csapat string értékét
const muveikvalue = "Műveik";//változó létrehozása mely tartalmazza a Műveik string értékét

const tablaheader = document.createElement('tr')//Létrehozzunk egy tablerow elemet ahová a táblázat fejlécét rakjuk

const szerzo = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
szerzo.innerHTML = szerzovalue;//Megadom a "Vezetéknév" string értéket a szerzo cellának
tablaheader.appendChild(szerzo);//hozzáadom a fejléchez a szerzo cellát

const csapat = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
csapat.innerHTML = csapatvalue;//Megadom a "Csapat" string értéket a szerzo cellának
tablaheader.appendChild(csapat)//hozzáadom a fejléchez a szerzo cellát

const muveik = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
muveik.innerHTML = muveikvalue;//Megadom a "Vezetéknév" string értéket a szerzo cellának
muveik.colSpan = 2;//a művek oszlopnak colspan értéke 2.
tablaheader.appendChild(muveik)//hozzáadom a fejléchez a műveik cellát
thead.appendChild(tablaheader)//tablaheader sorának hozzáadása
//----------------------------------------------------------------------------------------- 1. row
const szerzo1value = "Vörösmarty Mihály";//változó létrehozása mely tartalmazza a Vörösmarty Mihály string értékét
const csapat1value ="romantikus triász";//változó létrehozása mely tartalmazza a romantikus triász string értékét
const mu11value ="Zalán futása";//változó létrehozása mely tartalmazza a Zalán futása string értékét
const mu12value= "Szózat";//változó létrehozása mely tartalmazza a Szózat string értékét


const tablarow1 = document.createElement('tr')//1. tablerow létrehozása

const szerzo1 = document.createElement('td')//szerzo 1 létrehozzása
szerzo1.innerHTML = szerzo1value//Megadom a szerzo1value értékét a szerzo1 cellának
tablarow1.appendChild(szerzo1)//hozzáadom a szerzo1 cellát a tablerow1-hez

const csapat1 = document.createElement('td')//csapat 1 létrehozása
csapat1.innerHTML = csapat1value//Megadom a csapat1value értékét a csapat1 cellának
tablarow1.appendChild(csapat1)//hozzáadom a csapat1 cellát a tablerow1-hez

const mu11 = document.createElement('td')// 1. mű létrehozása
mu11.innerHTML = mu11value//Megadom a mu11value értékét a mu11 cellának
tablarow1.appendChild(mu11)//hozzáadom a mu11 cellát a tablerow1-hez

const mu12 = document.createElement('td')// 2. mű létrehozása
mu12.innerHTML = mu12value//Megadom a mu12value értékét a mu12 cellának
tablarow1.appendChild(mu12)//hozzáadom a mu12 cellát a tablerow1-hez
//------------------------------------------------------------------------------------------ 2. row
const szerzo2value = "Móricz Zsigmond";//változó létrehozása mely tartalmazza a Móricz Zsigmond string értékét
const csapat2value ="Nyugat I.";//változó létrehozása mely tartalmazza a Nyugat I. string értékét
const mu21value ="Hét krajcár";//változó létrehozása mely tartalmazza a Hét krajcár string értékét


const tablarow2 = document.createElement('tr')//2. sor létrehozása

const szerzo2 = document.createElement('td')//szerzo 2 létrehozzása
szerzo2.innerHTML = szerzo2value//Megadom a szerzo2value értékét a szerzo2 cellának
tablarow2.appendChild(szerzo2)//szerzo2 hozzáadása 2. sorhoz

const csapat2 = document.createElement('td')//csapat 2 létrehozása
csapat2.innerHTML = csapat2value//Megadom a csapat2value értékét a csapat2 cellának
tablarow2.appendChild(csapat2)//csapat2 hozzáadása 2. sorhoz

const mu21 = document.createElement('td')// 1. mű létrehozása
mu21.innerHTML = mu21value//Megadom a mu21value értékét a mu21 cellának
mu21.colSpan = 2;//A mu colspanjét megnöveljük 2re
tablarow2.appendChild(mu21)//1. mű hozzáadása 2. sorhoz
//------------------------------------------------------------------------------------------ 3. row
const szerzo3value = "Illyés Gyula";//változó létrehozása mely tartalmazza a Illyés Gyula string értékét
const csapat3value ="Nyugat II.";//változó létrehozása mely tartalmazza a Nyugat II. string értékét
const mu31value ="Egy mondat a zsarnokságról";//változó létrehozása mely tartalmazza a Egy mondat a zsarnokságról string értékét
const mu32value ="Puszták népe";//változó létrehozása mely tartalmazza a Puszták népe string értékét

const tablarow3 = document.createElement('tr')//3. sor létrehozása

const szerzo3 = document.createElement('td')//szerzo 3 létrehozzása
szerzo3.innerHTML = szerzo3value//Megadom a szerzo3value értékét a szerzo3 cellának
tablarow3.appendChild(szerzo3)//szerzo3 hozzáadása a 3. sorhoz

const csapat3 = document.createElement('td')//csapat 3 létrehozása
csapat3.innerHTML = csapat3value//Megadom a csapat3value értékét a csapat3 cellának
tablarow3.appendChild(csapat3)//hozzáadom a csapat3 cellát a 3. sorhoz

const mu31 = document.createElement('td')// 1. mű létrehozása
mu31.innerHTML = mu31value//Megadom a mu31value értékét a mu31 cellának
tablarow3.appendChild(mu31)//hozzáadom a mu31 cellát a 3. sorhoz

const mu32 = document.createElement('td')// 2. mű létrehozása
mu32.innerHTML = mu32value//Megadom a mu32value értékét a mu32 cellának
tablarow3.appendChild(mu32)//hozzáadom a mu32 cellát a 3. sorhoz
//------------------------------------------------------------------------------------------ 4. row
const szerzo4value = "Radnóti Miklós";//változó létrehozása mely tartalmazza a Radnóti Miklós string értékét
const csapat4value ="Nyugat III.";//változó létrehozása mely tartalmazza a Nyugat III. string értékét
const mu41value ="Pogány köszöntő";//változó létrehozása mely tartalmazza a Pogány köszöntő string értékét
const mu42value ="Járkálj csak, halálraítélt";//változó létrehozása mely tartalmazza a Járkálj csak, halálraítélt string értékét


const tablarow4 = document.createElement('tr')//4. sor létrehozása

const szerzo4 = document.createElement('td')//szerzo 4 létrehozzása
szerzo4.innerHTML = szerzo4value//Megadom a szerzo4value értékét a szerzo4 cellának
tablarow4.appendChild(szerzo4)//szerzo3 hozzáadása a 4. sorhoz

const csapat4 = document.createElement('td')//csapat 4 létrehozása
csapat4.innerHTML = csapat4value//Megadom a csapat4value értékét a csapat4 cellának
tablarow4.appendChild(csapat4)//csapat4 hozzáadása a 4. sorhoz

const mu41 = document.createElement('td')// 1. mű létrehozása
mu41.innerHTML = mu41value//Megadom a mu41value értékét a mu41 cellának
tablarow4.appendChild(mu41)//mu41 hozzáadása a 4. sorhoz

const mu42 = document.createElement('td')// 2. mű létrehozása
mu42.innerHTML = mu42value //Megadom a mu42value értékét a mu42 cellának
tablarow4.appendChild(mu42)//mu42 hozzáadása a 4. sorhoz
//------------------------------------------------------------------------------------------ Row hozzáadása
tbody.appendChild(tablarow1)//1. sor hozzáadása a tbodyhoz
tbody.appendChild(tablarow2)//2. sor hozzáadása a tbodyhoz
tbody.appendChild(tablarow3)//3. sor hozzáadása a tbodyhoz
tbody.appendChild(tablarow4)//4. sor hozzáadása a tbodyhoz