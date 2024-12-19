const headerObj = { // HeaderObj objektum létrehozása
    harcMegnevezese: "Harc megnevezése", // headerObj harcMegnevezese tulajdonságának értékadása
    szembenalloFelek: "Szembenálló felek", // headerObj szembenalloFelek tulajdonságának értékadása
    hadero: "Haderő" // headerObj hadero tulajdonságának értékadása
};

const firstRowElement = { // firstRowElement objektum létrehozása
    harcMegnevezese: "Rákóczi szabadságharc", // harc megnevezése
    szembenalloFelek1: "Kuruc", // első szembenálló fél
    hadero1: "70.000", // első szembenálló fél haderője
    szembenalloFelek2: "Labanc", // második szembenálló fél
    hadero2: "60.000" // második szembenálló fél haderője
};

const secondRowElement = { // secondRowElement objektum létrehozása
    harcMegnevezese: "48-as szabadságharc", // harc megnevezése
    szembenalloFelek1: "Osztrák császárság (+ Orosz birodalom)", // első szembenálló fél
    hadero1: "170.000 (+ 200.000)", // első szembenálló fél haderője
    szembenalloFelek2: "Magyar királyság", // második szembenálló fél
    hadero2: "170.000" // második szembenálló fél haderője
};

const thirdRowElement = { // thirdRowElement objektum létrehozása
    harcMegnevezese: "I. világháború", // harc megnevezése
    szembenalloFelek1: "Antant", // első szembenálló fél
    hadero1: "43 millió", // első szembenálló fél haderője
    szembenalloFelek2: "Központi hatalmak", // második szembenálló fél
    hadero2: "25 millió" // második szembenálló fél haderője
};

const fourthRowElement = { // fourthRowElement objektum létrehozása
    harcMegnevezese: "Bosworthi csata", // harc megnevezése
    szembenalloFelek: "Angolok (York + Lancester)", // szembenálló felek
    hadero: "15.000" // haderő
};



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
headerCell.innerHTML = headerObj.harcMegnevezese;//a cellaban a headerObj harcMegnevezese tulajdonsaganak lesz megjelenitve az erteke
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = headerObj.szembenalloFelek;//a cellaban a headerObj szembenalloFelek tulajdonsaganak lesz megjelenitve az erteke
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = headerObj.hadero;//a cellaban a headerObj hadero tulajdonsaganak lesz megjelenitve az erteke
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

//Első sor létrehozása
const tbodyRow1 = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
tbody.appendChild(tbodyRow1);//hozzaadom a tbody-hoz  

//A sor első cellájának létrehozása
const tbodyRow1Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell1.innerHTML = firstRowElement.harcMegnevezese;//a cellaban a firstRowElement harcMegnevezese tulajdonsaganak lesz megjelenitve az erteke
tbodyRow1.appendChild(tbodyRow1Cell1);//hozzáadja az első sorhoz
tbodyRow1Cell1.rowSpan = "2"//Itt adjuk meg hogy hány sort egyesítsen 

//A sor második cellájának létrehozása
const tbodyRow1Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell2.innerHTML = firstRowElement.szembenalloFelek1;//a cellaban a firstRowElement szembenalloFelek1 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow1.appendChild(tbodyRow1Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow1Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow1Cell3.innerHTML = firstRowElement.hadero1;//a cellaban a firstRowElement hadero1 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow1.appendChild(tbodyRow1Cell3);//hozzáadjuk a cellát a sorhoz 

//Új sor létrehozása
const tbodyRow2 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow2);//hozzáadjuk a sort a tbodyhoz (törzsünkhöz)

//A sor első cellájának létrehozása
const tbodyRow2Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell1.innerHTML = firstRowElement.szembenalloFelek2;//a cellaban a firstRowElement szembenalloFelek2 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow2.appendChild(tbodyRow2Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow2Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow2Cell2.innerHTML = firstRowElement.hadero2;//a cellaban a firstRowElement hadero2 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow2.appendChild(tbodyRow2Cell2);//hozzáadjuk a cellát a sorhoz 

//új sort hozunk létre
const tbodyRow3 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow3);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow3Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell1.innerHTML = secondRowElement.harcMegnevezese;//a cellaban a secondRowElement harcMegnevezese tulajdonsaganak lesz megjelenitve az erteke
tbodyRow3.appendChild(tbodyRow3Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow3Cell1.rowSpan = "2";

//A sor második cellájának létrehozása
const tbodyRow3Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell2.innerHTML = secondRowElement.szembenalloFelek1;//a cellaban a secondRowElement szembenalloFelek1 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow3.appendChild(tbodyRow3Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow3Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow3Cell3.innerHTML = secondRowElement.hadero1;//a cellaban a secondRowElement hadero1 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow3.appendChild(tbodyRow3Cell3);//hozzáadjuk a cellát a sorhoz 

const tbodyRow4 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow4);//hozzáadjuk a sort a törzsönkhöz

const tbodyRow4Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell1.innerHTML = secondRowElement.szembenalloFelek2;//a cellaban a heasecondRowElementderObj szembenalloFelek2 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow4.appendChild(tbodyRow4Cell1);//hozzáadjuk a cellát a sorhoz 

const tbodyRow4Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow4Cell2.innerHTML = secondRowElement.hadero2;//a cellaban a secondRowElement hadero2 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow4.appendChild(tbodyRow4Cell2);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow5 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow5);//hozzáadjuk a sort a törzsönkhöz

//A sor első cellájának létrehozása rowspannal
const tbodyRow5Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell1.innerHTML = thirdRowElement.harcMegnevezese;//a cellaban a thirdRowElement harcMegnevezese tulajdonsaganak lesz megjelenitve az erteke
tbodyRow5.appendChild(tbodyRow5Cell1);//hozzáadjuk a cellát a sorhoz 
tbodyRow5Cell1.rowSpan = "2";//Itt adjuk meg hogy hány sort egyesítsen

//A sor második cellájának létrehozása
const tbodyRow5Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell2.innerHTML = thirdRowElement.szembenalloFelek1;//a cellaban a thirdRowElement szembenalloFelek1 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow5.appendChild(tbodyRow5Cell2);//hozzáadjuk a cellát a sorhoz 

//A sor harmadik cellájának létrehozása
const tbodyRow5Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow5Cell3.innerHTML = thirdRowElement.hadero1;//a cellaban a thirdRowElement hadero1 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow5.appendChild(tbodyRow5Cell3);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow6 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow6);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása
const tbodyRow6Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell1.innerHTML = thirdRowElement.szembenalloFelek2;//a cellaban a thirdRowElement szembenalloFelek2 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow6.appendChild(tbodyRow6Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow6Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow6Cell2.innerHTML = thirdRowElement.hadero2;//a cellaban a thirdRowElement hadero2 tulajdonsaganak lesz megjelenitve az erteke
tbodyRow6.appendChild(tbodyRow6Cell2);//hozzáadjuk a cellát a sorhoz 

//új sor létrehozása
const tbodyRow7 = document.createElement('tr');//itt egy uj sort adok hozza egy tr elemet
tbody.appendChild(tbodyRow7);//hozzáadjuk a sort a törzsönkhüz

//A sor első cellájának létrehozása rowspannal
const tbodyRow7Cell1 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell1.innerHTML = fourthRowElement.harcMegnevezese;//a cellaban a fourthRowElement harcMegnevezese tulajdonsaganak lesz megjelenitve az erteke
tbodyRow7.appendChild(tbodyRow7Cell1);//hozzáadjuk a cellát a sorhoz 

//A sor második cellájának létrehozása
const tbodyRow7Cell2 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell2.innerHTML = fourthRowElement.szembenalloFelek;//a cellaban a fourthRowElement szembenalloFelek tulajdonsaganak lesz megjelenitve az erteke
tbodyRow7.appendChild(tbodyRow7Cell2);//hozzáadjuk a cellát a sorhoz 

////A sor harmadik cellájának létrehozása
const tbodyRow7Cell3 = document.createElement('td');//letrehozok egy td elemet
tbodyRow7Cell3.innerHTML = fourthRowElement.hadero;//a cellaban a fourthRowElement hadero tulajdonsaganak lesz megjelenitve az erteke
tbodyRow7.appendChild(tbodyRow7Cell3);//hozzáadjuk a cellát a sorhoz 
