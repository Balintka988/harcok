let array = [//itt hozom létre az array tömböt minden értékadásnál egy string típusú értéket adok meg az éppen aktuális tulajdonságnak
    //a számolás az arrayen belül 0-ról indulnak szóval ebben az eseben a fejlécet így tudom majd meghívni: array[0].aktualis elem
    {//első sor az objektum fejléce (headerObj)
        harcMegnevezese: "Harc megnevezése", //fejléc mezője a harc megnevezésére
        szembenalloFelek: "Szembenálló felek", //fejléc mezője a szembenálló felekhez
        hadero: "Haderő" // fejléc mezője a haderőhöz
    },
    {//második sor az első harc adatai (firstRowElement)
        harcMegnevezese: "Rákóczi szabadságharc", // harc megnevezése
        szembenalloFelek1: "Kuruc", //első szembenálló fél
        hadero1: "70.000", // első szembenálló fél haderője
        szembenalloFelek2: "Labanc", //második szembenálló fél
        hadero2: "60.000" // második szembenálló fél haderője
    },
    {//harmadik sor a második harc adatai (secondRowElement)
        harcMegnevezese: "48-as szabadságharc", //harc megnevezése
        szembenalloFelek1: "Osztrák császárság (+ Orosz birodalom)", //első szembenálló fél
        hadero1: "170.000 (+ 200.000)", //első szembenálló fél haderője
        szembenalloFelek2: "Magyar királyság", //második szembenálló fél
        hadero2: "170.000" //második szembenálló fél haderője
    },
    {//negyedik sor a harmadik harc adatai (thirdRowElement)
        harcMegnevezese: "I. világháború",//harc megnevezése
        szembenalloFelek1: "Antant", //első szembenálló fél
        hadero1: "43 millió", //első szembenálló fél haderője
        szembenalloFelek2: "Központi hatalmak", //második szembenálló fél
        hadero2: "25 millió" //második szembenálló fél haderője
    },
    {//ötödik sor a negyedik harc adatai (fourthRowElement)
        harcMegnevezese: "Bosworthi csata", //harc megnevezése
        szembenalloFelek: "Angolok (York + Lancester)", //szembenálló felek
        hadero: "15.000" //haderő
    }
];

//Itt hozzuk létre a táblázatot
const table = document.createElement('table');//létrehozok egy table elemet, ami majd a tablazatomat fogja tartalmazni
document.body.appendChild(table);//Hozzáadom a bodyhoz
//A colgroup elemek szabályozzák a táblázatunk oszlopainak stílusát

//A colgroup elemet hozzuk it létre
const colgroup = document.createElement('colgroup');//itt hozom létre a colgroup elemet
table.appendChild(colgroup);//hozzáadjuk a tablehoz

//itt definiálom az első oszlopot 
const col1 = document.createElement('col');//itt hozom letre a col elemet
col1.className = "column";//itt adok neki egy className-t ez alapjan talalja meg a css
colgroup.appendChild(col1);//a colgrouphoz adom hozzá

//itt definiálom a második oszlopot, nem adok neki semmit mert nem kell semmit megjelenítenie
const col2 = document.createElement('col');//itt hozom letre a col elemet
colgroup.appendChild(col2);//a colgrouphoz adom hozzá

//itt definiálom a harmadik oszlopot 
const col3 = document.createElement('col');//itt hozom letre a col elemet
col3.className = "column";//itt adok neki egy className-t 
colgroup.appendChild(col3);//a colgrouphoz adom hozzá

//A táblázat fejlécének létrehozása
const thead = document.createElement('thead');//thead elem letrehozasa itt tortenik ez lesz a fejlec
table.appendChild(thead);//hozzáadom a tablehez

//Létrehozunk egy sort a fejlécnek
const headerRow = document.createElement('tr');//itt hozok létre egy tr elemet 
thead.appendChild(headerRow);//hozzadaom a theadre

//Az első cella létrehozása a fejléc sorában
const headerCell = document.createElement('th');//itt egy th elemet hozok letre
headerCell.innerHTML = array[0].harcMegnevezese;//a cellaban az array 0.tagjanak a harcMegnevezese tulajdonsaganak az erteke lesz megjelenitve 
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = array[0].szembenalloFelek;//a cellaban az array 0.tagjanak a szembenalloFelek tulajdonsaganak az erteke lesz megjelenitve 
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = array[0].hadero;//a cellaban az array 0.tagjanak a hadero tulajdonsaganak az erteke lesz megjelenitve 
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

//Első sor létrehozása
const tbodyRow1 = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
tbody.appendChild(tbodyRow1);//hozzaadom a tbody-hoz  

//A sor első cellájának létrehozása
const tbodyRow1Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell1.innerHTML = array[1].harcMegnevezese;//a cellaban az array 1.tagjanak a harcMegnevezese tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow1.appendChild(tbodyRow1Cell1);//hozzáadja az első sorhoz
tbodyRow1Cell1.rowSpan = "2"//Itt adjuk meg hogy hány sort egyesítsen 

//A sor második cellájának létrehozása
const tbodyRow1Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell2.innerHTML = array[1].szembenalloFelek1;//a cellaban az array 1.tagjanak a szembenalloFelek1 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow1.appendChild(tbodyRow1Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow1Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell3.innerHTML = array[1].hadero1;//a cellaban az array 1.tagjanak a hadero1 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow1.appendChild(tbodyRow1Cell3);//hozzáadjuk a cellát a sorhoz 

//Új sor létrehozása
const tbodyRow2 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow2);//hozzáadjuk a sort a tbodyhoz (törzsünkhöz)

//A sor első cellájának létrehozása
const tbodyRow2Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell1.innerHTML = array[1].szembenalloFelek2;//a cellaban az array 1.tagjanak a szembenalloFelek2 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow2.appendChild(tbodyRow2Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow2Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell2.innerHTML = array[1].hadero2;//a cellaban az array 1.tagjanak a hadero2 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow2.appendChild(tbodyRow2Cell2);//hozzáadjuk a cellát a sorhoz 

//új sort hozunk létre
const tbodyRow3 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow3);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow3Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell1.innerHTML = array[2].harcMegnevezese;//a cellaban az array 2.tagjanak a harcMegnevezese tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow3.appendChild(tbodyRow3Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow3Cell1.rowSpan = "2";

//A sor második cellájának létrehozása
const tbodyRow3Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell2.innerHTML = array[2].szembenalloFelek1;//a cellaban az array 2.tagjanak a szembenalloFelek1 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow3.appendChild(tbodyRow3Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow3Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell3.innerHTML = array[2].hadero1;//a cellaban az array 2.tagjanak a hadero1 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow3.appendChild(tbodyRow3Cell3);//hozzáadjuk a cellát a sorhoz 

const tbodyRow4 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow4);//hozzáadjuk a sort a törzsönkhöz

const tbodyRow4Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell1.innerHTML = array[2].szembenalloFelek2;//a cellaban az array 2.tagjanak a szembenalloFelek2 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow4.appendChild(tbodyRow4Cell1);//hozzáadjuk a cellát a sorhoz 

const tbodyRow4Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell2.innerHTML = array[2].hadero2;//a cellaban az array 2.tagjanak a hadero2 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow4.appendChild(tbodyRow4Cell2);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow5 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow5);//hozzáadjuk a sort a törzsönkhöz

//A sor első cellájának létrehozása rowspannal
const tbodyRow5Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell1.innerHTML = array[3].harcMegnevezese;//a cellaban az array 3.tagjanak a harcMegnevezese tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow5.appendChild(tbodyRow5Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow5Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow5Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell2.innerHTML = array[3].szembenalloFelek1;//a cellaban az array 3.tagjanak a szembenalloFelek1 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow5.appendChild(tbodyRow5Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow5Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell3.innerHTML = array[3].hadero1;//a cellaban az array 3.tagjanak a hadero1 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow5.appendChild(tbodyRow5Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow6 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow6);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow6Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell1.innerHTML = array[3].szembenalloFelek2;//a cellaban az array 3.tagjanak a szembenalloFelek2 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow6.appendChild(tbodyRow6Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow6Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell2.innerHTML = array[3].hadero2;//a cellaban az array 3.tagjanak a hadero2 tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow6.appendChild(tbodyRow6Cell2);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow7 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow7);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow7Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell1.innerHTML = array[4].harcMegnevezese;//a cellaban az array 4.tagjanak a harcMegnevezese tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow7.appendChild(tbodyRow7Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow7Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell2.innerHTML = array[4].szembenalloFelek;//a cellaban az array 4.tagjanak a szembenalloFelek tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow7.appendChild(tbodyRow7Cell2);//hozzáadjuk a cellát a sorhoz 

////A sor harmadik cellájának létrehozása
const tbodyRow7Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell3.innerHTML = array[4].hadero;//a cellaban az array 4.tagjanak a hadero tulajdonsaganak az erteke lesz megjelenitve 
tbodyRow7.appendChild(tbodyRow7Cell3);//hozzáadjuk a cellát a sorhoz 
