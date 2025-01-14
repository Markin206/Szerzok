const tabla = document.createElement('table')//Létrehozzunk egy table elemet ahová a táblázatott rakjuk
document.body.appendChild(tabla)//hozzáadom a bodyhoz

const thead = document.createElement('thead')//thead elem létrehozása
tabla.appendChild(thead)//thead hozzáadása a táblához

const tbody = document.createElement('tbody')//tbody elem létrehozása
tabla.appendChild(tbody)//tbody hozzáadása a táblához
//----------------------------------------------------------------------------------------- header
const tablaheader = document.createElement('tr')//Létrehozzunk egy tablerow elemet ahová a táblázat fejlécét rakjuk

const szerzo = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
szerzo.innerHTML = "Vezetéknév";//Megadom a "Vezetéknév" string értéket a szerzo cellának
tablaheader.appendChild(szerzo);//hozzáadom a fejléchez a szerzo cellát

const csapat = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
csapat.innerHTML = "Csapat";//Megadom a "Csapat" string értéket a szerzo cellának
tablaheader.appendChild(csapat)//hozzáadom a fejléchez a szerzo cellát

const muveik = document.createElement('th')//Létrehozzunk egy th elemet ami a fejlécem cellája lesz
muveik.innerHTML = "Műveik";//Megadom a "Vezetéknév" string értéket a szerzo cellának
muveik.colSpan = 2;//a művek oszlopnak colspan értéke 2.
tablaheader.appendChild(muveik)//hozzáadom a fejléchez a műveik cellát
thead.appendChild(tablaheader)//tablaheader sorának hozzáadása
//----------------------------------------------------------------------------------------- 1. row
const tablarow1 = document.createElement('tr')//1. tablerow létrehozása

const szerzo1 = document.createElement('td')//szerzo 1 létrehozzása
szerzo1.innerHTML = "Vörösmarty Mihály"//Megadom a "Vörösmarty Mihály" string értéket a szerzo1 cellának
tablarow1.appendChild(szerzo1)//hozzáadom a szerzo1 cellát a tablerow1-hez

const csapat1 = document.createElement('td')//csapat 1 létrehozása
csapat1.innerHTML = "romantikus triász"//Megadom a "romantikus triász" string értéket a csapat1 cellának
tablarow1.appendChild(csapat1)//hozzáadom a csapat1 cellát a tablerow1-hez

const mu11 = document.createElement('td')// 1. mű létrehozása
mu11.innerHTML = "Zalán futása"//Megadom a "Zalán futása" string értéket a mu11 cellának
tablarow1.appendChild(mu11)//hozzáadom a mu11 cellát a tablerow1-hez

const mu12 = document.createElement('td')// 2. mű létrehozása
mu12.innerHTML = "Szózat"//Megadom a "Szózat" string értéket a mu12 cellának
tablarow1.appendChild(mu12)//hozzáadom a mu12 cellát a tablerow1-hez
//------------------------------------------------------------------------------------------ 2. row
const tablarow2 = document.createElement('tr')//2. sor létrehozása

const szerzo2 = document.createElement('td')//szerzo 2 létrehozzása
szerzo2.innerHTML = "Móricz Zsigmond"//Megadom a "Móricz Zsigmond" string értéket a szerzo2 cellának
tablarow2.appendChild(szerzo2)//szerzo2 hozzáadása 2. sorhoz

const csapat2 = document.createElement('td')//csapat 2 létrehozása
csapat2.innerHTML = "Nyugat I."//Megadom a "Nyugat I." string értéket a csapat2 cellának
tablarow2.appendChild(csapat2)//csapat2 hozzáadása 2. sorhoz

const mu21 = document.createElement('td')// 1. mű létrehozása
mu21.innerHTML = "Hét krajcár"//Megadom a "Hét krajcár" string értéket a mu21 cellának
mu21.colSpan = 2;//A mu colspanjét megnöveljük 2re
tablarow2.appendChild(mu21)//1. mű hozzáadása 2. sorhoz
//------------------------------------------------------------------------------------------ 3. row
const tablarow3 = document.createElement('tr')//3. sor létrehozása

const szerzo3 = document.createElement('td')//szerzo 3 létrehozzása
szerzo3.innerHTML = "Illyés Gyula"//Megadom a "Illyés Gyula" string értéket a szerzo3 cellának
tablarow3.appendChild(szerzo3)//szerzo3 hozzáadása a 3. sorhoz

const csapat3 = document.createElement('td')//csapat 3 létrehozása
csapat3.innerHTML = "Nyugat II."//Megadom a "Nyugat II." string értéket a csapat3 cellának
tablarow3.appendChild(csapat3)//hozzáadom a csapat3 cellát a 3. sorhoz

const mu31 = document.createElement('td')// 1. mű létrehozása
mu31.innerHTML = "Egy mondat a zsarnokságról"//Megadom a "Egy mondat a zsarnokságról" string értéket a mu31 cellának
tablarow3.appendChild(mu31)//hozzáadom a mu31 cellát a 3. sorhoz

const mu32 = document.createElement('td')// 2. mű létrehozása
mu32.innerHTML = "Puszták népe"//Megadom a "Puszták népe" string értéket a mu32 cellának
tablarow3.appendChild(mu32)//hozzáadom a mu32 cellát a 3. sorhoz
//------------------------------------------------------------------------------------------ 4. row
const tablarow4 = document.createElement('tr')//4. sor létrehozása

const szerzo4 = document.createElement('td')//szerzo 4 létrehozzása
szerzo4.innerHTML = "Radnóti Miklós"//Megadom a "Radnóti Miklós" string értéket a szerzo4 cellának
tablarow4.appendChild(szerzo4)//szerzo3 hozzáadása a 4. sorhoz

const csapat4 = document.createElement('td')//csapat 4 létrehozása
csapat4.innerHTML = "Nyugat III."//Megadom a "Nyugat III." string értéket a csapat4 cellának
tablarow4.appendChild(csapat4)//csapat4 hozzáadása a 4. sorhoz

const mu41 = document.createElement('td')// 1. mű létrehozása
mu41.innerHTML = "Pogány köszöntő"//Megadom a "Pogány köszöntő" string értéket a mu41 cellának
tablarow4.appendChild(mu41)//mu41 hozzáadása a 4. sorhoz

const mu42 = document.createElement('td')// 2. mű létrehozása
mu42.innerHTML = "Járkálj csak, halálraítélt"//Megadom a "Járkálj csak, halálraítélt" string értéket a mu42 cellának
tablarow4.appendChild(mu42)//mu42 hozzáadása a 4. sorhoz
//------------------------------------------------------------------------------------------ Row hozzáadása
tbody.appendChild(tablarow1)//1. sor hozzáadása a tbodyhoz
tbody.appendChild(tablarow2)//2. sor hozzáadása a tbodyhoz
tbody.appendChild(tablarow3)//3. sor hozzáadása a tbodyhoz
tbody.appendChild(tablarow4)//4. sor hozzáadása a tbodyhoz