const tabla = document.createElement('table')//Létrehozzunk egy table elemet ahová a táblázatott rakjuk
document.body.appendChild(tabla)//hozzáadom a bodyhoz
//----------------------------------------------------------------------------------------- header
const tablaheader = document.createElement('tr')//Létrehozzunk egy tablerow elemet ahová a táblázat fejlécét rakjuk
tabla.appendChild(tablaheader)//hozzáadom a fejlécet a tábla divhez

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
//----------------------------------------------------------------------------------------- 1. row
const tablarow1 = document.createElement('tr')//tablerow létrehozása
tabla.appendChild(tablarow1)

const szerzo1 = document.createElement('td')//szerzo 1 létrehozzása
szerzo1.innerHTML = "Vörösmarty Mihály"
tablarow1.appendChild(szerzo1)

const csapat1 = document.createElement('td')//csapat 1 létrehozása
csapat1.innerHTML = "romantikus triász"
tablarow1.appendChild(csapat1)

const mu01 = document.createElement('td')// 1. mű létrehozása
mu01.innerHTML = "Zalán futása"
tablarow1.appendChild(mu01)

const mu02 = document.createElement('td')
mu02.innerHTML = "Szózat"
tablarow1.appendChild(mu02)
//------------------------------------------------------------------------------------------ 2. row
const tablarow2 = document.createElement('tr')
tabla.appendChild(tablarow2)

const szerzo2 = document.createElement('td')//szerzo 2 létrehozzása
szerzo2.innerHTML = "Móricz Zsigmond"
tablarow2.appendChild(szerzo2)

const csapat2 = document.createElement('td')//csapat 2 létrehozása
csapat2.innerHTML = "Nyugat I."
tablarow2.appendChild(csapat2)

const mu11 = document.createElement('td')// 2. mű létrehozása
mu11.innerHTML = "Hét krajcár"
mu11.colSpan = 2;
tablarow2.appendChild(mu11)
//------------------------------------------------------------------------------------------ 3. row
const tablarow3 = document.createElement('tr')
tabla.appendChild(tablarow3)

const szerzo3 = document.createElement('td')//szerzo 3 létrehozzása
szerzo3.innerHTML = "Illyés Gyula"
tablarow3.appendChild(szerzo3)

const csapat3 = document.createElement('td')//csapat 3 létrehozása
csapat3.innerHTML = "Nyugat II."
tablarow3.appendChild(csapat3)

const mu21 = document.createElement('td')// 3. mű létrehozása
mu21.innerHTML = "Egy mondat a zsarnokságról"
tablarow3.appendChild(mu21)

const mu22 = document.createElement('td')// 3. mű létrehozása
mu22.innerHTML = "Puszták népe"
tablarow3.appendChild(mu22)
//------------------------------------------------------------------------------------------ 4. row
const tablarow4 = document.createElement('tr')
tabla.appendChild(tablarow4)

const szerzo4 = document.createElement('td')//szerzo 4 létrehozzása
szerzo4.innerHTML = "Radnóti Miklós"
tablarow4.appendChild(szerzo4)

const csapat4 = document.createElement('td')//csapat 4 létrehozása
csapat4.innerHTML = "Nyugat III."
tablarow4.appendChild(csapat4)

const mu41 = document.createElement('td')// 4. mű létrehozása
mu41.innerHTML = "Pogány köszöntő"
tablarow4.appendChild(mu41)

const mu42 = document.createElement('td')// 4. mű létrehozása
mu42.innerHTML = "Járkálj csak, halálraítélt"
tablarow4.appendChild(mu42)