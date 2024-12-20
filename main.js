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

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

function createTableHeader(){//a függvény definiálása, a fejlécet itt generáljuk
    const header = ["Harc megnevezése", "Szembenálló felek", "Haderő"]//itt definiálom a header tömöt

    //Létrehozunk egy sort a fejlécnek
    const headerRow = document.createElement('tr');//itt hozok létre egy tr elemet 
    thead.appendChild(headerRow);//hozzadaom a theadre

    for(let i = 0; i < header.length; i++){//egy for növekményes cilussal járom be a header tömb elemeit, itt nem kell semmiféle classt vagy ilyesmit adni neki a css-hez mert az nth child az tudja az elemek sorrendjét
        const headerCell = document.createElement('th');//itt egy th elemet hozok letre
        headerCell.innerHTML = header[i];//a cellaban a header tömb aktuális elemének az erteket iratjuk ki
        headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá
    }
}
createTableHeader();//itt hívjuk meg a függvényünket

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


const form = document.getElementById('form');//elékrem az index.html-ből a formomnak az id-ját

form.addEventListener('submit', function(e) {//amikor submitolunk (amikor rányomunk a gombra)akkor hívódik meg ez a függvény és egy új sort tudunk hozzáadni a táblázatunkhoz
    e.preventDefault(); //megakadalyozza hogy a bongeszo alapertelmezetten fusson le
    const harc_nevHtmlElement = document.getElementById('harc_nev');//elkerem azt a htmlelementet aminek az harc_nev az id-ja
    const harcolo1HtmlElement = document.getElementById('harcolo1');//elkerem azt a htmlelementet aminek az harcolo1 az id-ja
    const hadero1HtmlElement = document.getElementById('hadero1');//elkerem azt a htmlelementet aminek az hadero1 az id-ja
    const harcolo2HtmlElement = document.getElementById('harcolo2');//elkerem azt a htmlelementet aminek az harcolo2 az id-ja
    const hadero2HtmlElement = document.getElementById('hadero2');//elkerem azt a htmlelementet aminek az hadero2 az id-ja

    const thisForm = e.currentTarget;//az e.currentTarget tartalmazza a formunkat amit eltarolunk egy valtozoban
    const errorElements = thisForm.querySelectorAll('.error');//az összes olyan elemet elkérjük ami error classal rendelkezik
    for (const errorElement of errorElements){//itt végigiterálunk az imént bekért error classos elemeken ami az errorElements
        errorElement.innerHTML = "";//kitöröljük azt az elemet ami benne van
    }

    let valid = true;//itt megadjuk a valid változónak kezdőérték ként hogy true ezt majd a későbbiekben fogjuk változtatni

    const harc_nevValue = harc_nevHtmlElement.value;//az harc_nevHtmlElement értékét beleteszem egy változóba
    const harcolo1Value = harcolo1HtmlElement.value;//az harcolo1HtmlElement értékét beleteszem egy változóba
    const hadero1Value = hadero1HtmlElement.value;//az hadero1HtmlElement értékét beleteszem egy változóba
    const harcolo2Value = harcolo2HtmlElement.value === '' ? undefined : harcolo2HtmlElement.value;//ha az harcolo2HtmlElement nincsen semmi akkor undefined lesz ha viszont ez nem igaz akkor ugyanúgy eltároljuk az értékét
    const hadero2Value = hadero2HtmlElement.value === '' ? undefined : hadero2HtmlElement.value;//ha az hadero2HtmlElement nincsen semmi akkor undefined lesz ha viszont ez nem igaz akkor ugyanúgy eltároljuk az értékét

    if(!simpleValidation(harc_nevHtmlElement, "Meg kell adnod a harc nevét!")){//itt adunk a simpleValidation függvényünknek bemeneti értéket, és ha a simpleValidation függvény hamis értékkel tér vissza a bemeneti harc_nevHtmlElement esetén
        valid = false;//akkor a valid változót hamisra állítjuk
    }
    if(!simpleValidation(harcolo1HtmlElement, "Meg kell az egyik szemben álló felet")){//itt adunk a simpleValidation függvényünknek bemeneti értéket, és ha a függvény hamis értékkel tér vissza a bemeneti harcolo1HtmlElement esetén
        valid = false;//akkor a valid változót hamisra állítjuk
    }
    if(!simpleValidation(hadero1HtmlElement, "Meg kell adnod a haderő számát")){//itt adunk a simpleValidation függvényünknek bemeneti értéket, és ha a függvény hamis értékkel tér vissza a bemeneti hadero1HtmlElement esetén
        valid = false;//akkor a valid változót hamisra állítjuk
    }
    if(!complexValidation(harcolo2HtmlElement, hadero2HtmlElement, "Add meg a második szembenálló felet", "Add meg a második haderő számát")){//itt adunk a complexValidation függvényünknek bemeneti értéket, és ha a függvény hamis értékkel tér vissza a bemeneti paramétereink esetén:
        valid = false;//akkor a valid változót hamisra állítjuk
    }
    
    if(valid){//ha a valid változónk true maradt a validáció során akkor fut le
        const newElement = {//itt hozok létre egy új objektumot amit később majd hozzáadunk az array-ünkhöz
            harcMegnevezese: harc_nevValue,//az harcMegnevezese erteke az harc_nevValue lesz
            szembenalloFelek1: harcolo1Value,//az szembenalloFelek1 erteke az harcolo1Value lesz
            hadero1: hadero1Value,//az hadero1 erteke az hadero1Value lesz
            szembenalloFelek2: harcolo2Value,//az szembenalloFelek2 erteke az harcolo2Value lesz
            hadero2: hadero2Value//az hadero2 erteke az hadero2Value lesz
        };

    array.push(newElement);//itt adjuk hozzá az array-hez a new elementet(az új objektumunk) amit fentebb hoztunk létre
    tbody.innerHTML = ''; //a meglevo tablazat aktualis tartalmat itt töröljük
    renderTable(); //itt hivjuk meg a renderTable függvényünket ami az új adatokkal együtt fog kirenderelődni
    thisForm.reset();//a beviteli mezők értékét itt állítjuk alapértelmezettre
    }
});

function simpleValidation(htmlElement, errormessage){//itt adjuk meg a simpleValidation függvényünknek hogy milyen bemeneti elemet(htmlelement) és hibaüzenetet (string)varunk
    let valid = true;//a valid változónknak true értéket adunk
    if(htmlElement.value === ''){//abban az esetben fut le ha  a bemeneti elem(htmlelement) értéke üres
        const parentElement = htmlElement.parentElement;//megkeressük az aktuális htmlelementnek az input mezőjének parentElement tulajdonságát és ezt eltároljuk egy változóba 
        const errorPlace = parentElement.querySelector('.error');//az aktuális htmlel elem parentElementeben keresünk egy olyan elemet ami rendelkezik az error classal
        if(errorPlace !== undefined){//ha van ilyen hely ahova majd tudja rakni a hibaüzenetet és nem undefined akkor:
            errorPlace.innerHTML = errormessage;//megadjuk neki a bemeneti paraméerünkből a hiaüzenetet (stringet) és itt is iratjuk ki
        }
        valid = false;//a valid változónkat false-ra állítjuk 
    }
    return valid;//visszatértünk a valid változónk értékével (bool)
}

function complexValidation(inputHarcField2, inputhaderoField2, errormessage1, errormessage2){//itt hozzuk létre az új függvényünket és itt adjuk meg hogy milyen bemeneti paramétereket vár, kettő htmlelementet és kettő stringet
    let valid = true;//valid változónak true érték adása
    if(inputHarcField2.value === '' && inputhaderoField2.value !== ''){//ez az elágazás csak akkor fut le hogyha a harcolo2 mező üres és az hadero2 meg nem
        const parentElement = inputHarcField2.parentElement;//megkeressük az éppen aktuális htmlelementnek a parentElement propertyét és ezt eltároljuk egy változóba
        const errorLocation = parentElement.querySelector('.error');//a harcolo2HtmlElement beviteli mezőjének parentElementjében keresünk egy olyan elemet amely rendelkezik az "error" osztállyal
        if (errorLocation != undefined){//hogyha van ilyen mező(van ilyen htmlelement) (nem undefined) akkor
            errorLocation.innerHTML = errormessage1;//megadjuk neki a bemeneti paraméerünkből az első (errormessage1) hiaüzenetet (stringet) és itt is iratjuk ki
        }
        valid = false;//a valid változó értékét hamisra állítjuk
    };
    if(inputhaderoField2.value === '' && inputHarcField2.value !== ''){//ez az elágazás csak akkor fut le hogyha a hadero2 mező üres és a harcolo2 meg nem
        const parentElement = inputhaderoField2.parentElement;//megkeressük az éppen aktuális htmlelementnek a parentElement propertyét és ezt eltároljuk egy változóba
        const errorLocation = parentElement.querySelector('.error');//a hadero2HtmlElement beviteli mezőjének parentElementjében keresünk egy olyan elemet amely rendelkezik az "error" osztállyal
        if (errorLocation != undefined){//hogyha van ilyen mező(van ilyen htmlelement) (nem undefined) akkor
            errorLocation.innerHTML = errormessage2;//megadjuk neki a bemeneti paraméerünkből a második (errormessage2) hiaüzenetet (stringet) és itt is iratjuk ki
        }
        valid = false;//a valid változó értékét hamisra állítjuk
    };
    return valid;//visszatértünk a valid változónk értékével (bool)
}