const array = [//itt hozom létre az array tömböt minden értékadásnál egy string típusú értéket adok meg az éppen aktuális tulajdonságnak
    {//első sor az első harc adatai (firstRowElement)
        harcMegnevezese: "Rákóczi szabadságharc", // harc megnevezése
        szembenalloFelek1: "Kuruc", //első szembenálló fél
        hadero1: "70.000", // első szembenálló fél haderője
        szembenalloFelek2: "Labanc", //második szembenálló fél
        hadero2: "60.000" // második szembenálló fél haderője
    },
    {//második sor a második harc adatai (secondRowElement)
        harcMegnevezese: "48-as szabadságharc", //harc megnevezése
        szembenalloFelek1: "Osztrák császárság (+ Orosz birodalom)", //első szembenálló fél
        hadero1: "170.000 (+ 200.000)", //első szembenálló fél haderője
        szembenalloFelek2: "Magyar királyság", //második szembenálló fél
        hadero2: "170.000" //második szembenálló fél haderője
    },
    {//harmadik sor a harmadik harc adatai (thirdRowElement)
        harcMegnevezese: "I. világháború",//harc megnevezése
        szembenalloFelek1: "Antant", //első szembenálló fél
        hadero1: "43 millió", //első szembenálló fél haderője
        szembenalloFelek2: "Központi hatalmak", //második szembenálló fél
        hadero2: "25 millió" //második szembenálló fél haderője
    },
    {//negyedik sor a negyedik harc adatai (fourthRowElement)
        harcMegnevezese: "Bosworthi csata", //harc megnevezése
        szembenalloFelek1: "Angolok (York + Lancester)", //szembenálló felek
        hadero1: "15.000" //haderő
    }
];
const header = {//itt hozok létre egy objetumot a táblázatunk fejlécének
    harcMegnevezese: "Harc megnevezése", //fejléc mezője a harc megnevezésére
    szembenalloFelek: "Szembenálló felek", //fejléc mezője a szembenálló felekhez
    hadero: "Haderő" // fejléc mezője a haderőhöz
}


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
headerCell.innerHTML = header.harcMegnevezese;//a cellaban a header objektum harcMegnevezese tulajdonsaganak az erteket iratjuk ki
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = header.szembenalloFelek;//a cellaban a header objektum szembenalloFelek tulajdonsaganak az erteket iratjuk ki
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = header.hadero;//a cellaban a header objektum hadero tulajdonsaganak az erteket iratjuk ki
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

function renderTable(){//itt definiálom a renderTable függvényemet
    for(const currentElement of array){//itt a ciklusunk végigiterál az array tömbünk elemein és a currentElement lesz az aktuális elem

        //sor létrehozása
        const tbodyRow = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
        tbody.appendChild(tbodyRow);//hozzaadom a tbody-hoz  
        
        const harcMegnevezes = document.createElement('td');//letrehozok egy td elemet
        harcMegnevezes.innerHTML = currentElement.harcMegnevezese;//az aktuális elem (currentElement) harcMegnevezese tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(harcMegnevezes);//hozzáadja az első sorhoz
        
        const szembenalloFelek1 = document.createElement('td');//letrehozok egy td elemet
        szembenalloFelek1.innerHTML = currentElement.szembenalloFelek1;//az aktuális elem (currentElement) szembenalloFelek1 tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(szembenalloFelek1);//hozzáadjuk a cellát a sorhoz 
        
        const hadero1 = document.createElement('td');//letrehozok egy td elemet
        hadero1.innerHTML = currentElement.hadero1;//az aktuális elem (currentElement) hadero1 tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(hadero1);//hozzáadjuk a cellát a sorhoz 
        
        if(currentElement.szembenalloFelek2 !== undefined && currentElement.hadero2 !== undefined){//itt ellenőrizzük azt hogy az aktuális szembealloFelek2 és a hadero2 nem egyenlő-e undefineddel, és ha egyik sem az, csak akkor fut le tovább a kód
        
        //második sor létrehozása
        const tbodyRow2 = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
        tbody.appendChild(tbodyRow2);//hozzaadom a tbody-hoz  
        
        harcMegnevezes.rowSpan = "2"//Ha idáig lefutott a kódunk akkor biztosan szükség lesz soregyesítés és azt pedig itt adjuk meg
        
        const szembenalloFelek2 = document.createElement('td');//letrehozok egy td elemet
        szembenalloFelek2.innerHTML = currentElement.szembenalloFelek2;//az aktuális elem (currentElement) szembenalloFelek2 tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow2.appendChild(szembenalloFelek2);//hozzáadja a második sorhoz
        
        const hadero2 = document.createElement('td');//letrehozok egy td elemet
        hadero2.innerHTML = currentElement.hadero2;//az aktuális elem (currentElement) hadero2 tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow2.appendChild(hadero2);//hozzáadja a második sorhoz
        }
    }
}

renderTable();//a rendeTable függvényt itt hívom meg