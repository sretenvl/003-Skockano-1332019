window.onload = function(){
    proizvodi();
	dohvatiSveProizvode();
    listaProizvoda();
};
var nizPrikazanihProizvoda = [];

//ISPISIVANJE DROPDOWN LISTE MARKI
function proizvodi(){
    $.ajax({
        url : "json/tipoviProizvoda.json",
        method : "GET",
        type : "json",
        success : function(tipP) {
            let select = "<select id='proizvodDrop'><option value='0'>Sve kategorije</option>";


            for(let m of tipP) {
                select += `<option value='${m.id}'>${m.naziv}</option>`;
            }
            select += "</select>";
            document.querySelector("#tipProizvoda").innerHTML = select;
            document.getElementById("proizvodDrop").addEventListener("change", function(){
                filtrirajPoTipu(this.value);
            });

            document.getElementById("sortirajRastuce").addEventListener("click", sortirajSveRastuce);
            document.getElementById("sortirajOpadajuce").addEventListener("click", sortirajSveOpadajuce);
            document.getElementById("sortirajImeRastuce").addEventListener("click", sortirajImeRastuce);
            document.getElementById("sortirajImeOpadajuce").addEventListener("click", sortirajImeOpadajuce);
        },
        error : function(xhr, error, status) {
            alert(status);
        }
    });
}

function listaProizvoda(){
    $.ajax({
        url : "json/listaProizvoda.json",
        method : "GET",
        type : "json",
        success : function(data) {
            nizPrikazanihProizvoda = data;
        },
        error : function(xhr, error, status) {
            alert(status);
        }
    });
}

//FILTRIRANJE PO MARKI
function filtrirajPoTipu(vrednost) {
    $.ajax({
        url : "json/listaProizvoda.json",
        method : "GET",
        type : "json",
        success : function(data) {
            let izabranaMarka = vrednost;
            nizPrikazanihProizvoda = [];

            if(izabranaMarka != '0'){
                data.forEach(proizvod => {
                    if(proizvod.tipProizvoda.id == izabranaMarka){
                        nizPrikazanihProizvoda.push(proizvod);
                    }
                });
            }
            else { 
                nizPrikazanihProizvoda = data;
                dohvatiSveProizvode();
            }
            prikaziProizvode(nizPrikazanihProizvoda);
        },
        error : function(xhr, error, status) {
            alert(status);
        }
    });
}

//OSNOVNO SORTIRANJE PO CENI OD MANJE KA VECE
function sortirajSveRastuce() {
    console.log("SORTIRANJE");
    console.log(nizPrikazanihProizvoda);
    let tempNiz = nizPrikazanihProizvoda;
    tempNiz.sort((a,b) => {
        if(a.cena == b.cena)
            return 0;
        return a.cena < b.cena ? -1 : 1;
    });
    prikaziProizvode(tempNiz);
}

//OSNOVNO SORTIRANJE PO CENI OD VECE KA MANJE
function sortirajSveOpadajuce() {
    console.log("SORTIRANJE");
    console.log(nizPrikazanihProizvoda);
    let tempNiz = nizPrikazanihProizvoda;
    tempNiz.sort((a,b) => {
        if(a.cena == b.cena)
            return 0;
        return a.cena > b.cena ? -1 : 1;
    });
    prikaziProizvode(tempNiz);
}

//OSNOVNO SORTIRANJE A-Z
function sortirajImeRastuce() {
    console.log("SORTIRANJE");
    console.log(nizPrikazanihProizvoda);
    let tempNiz = nizPrikazanihProizvoda;
    tempNiz.sort((a,b) => {
        if(a.naziv == b.naziv)
            return 0;
        return a.naziv < b.naziv ? -1 : 1;
    });
    prikaziProizvode(tempNiz);
}

//OSNOVNO SORTIRANJE Z-A
function sortirajImeOpadajuce() {
    console.log("SORTIRANJE");
    console.log(nizPrikazanihProizvoda);
    let tempNiz = nizPrikazanihProizvoda;
    tempNiz.sort((a,b) => {
        if(a.naziv == b.naziv)
            return 0;
        return a.naziv > b.naziv ? -1 : 1;
    });
    prikaziProizvode(tempNiz);
}

//ISPISUJE SVE PROIZVODE
function dohvatiSveProizvode() {
    $.ajax({
        url : "json/listaProizvoda.json",
        method : "GET",
        type : "json",
        success : function(data) {
            prikaziProizvode(data);
        },
        error : function(xhr, error, status) {
            alert(status);
        }
    });
}

//PROIZVODI ISPIS
function prikaziProizvode(products) {
    
    document.querySelector("#proizvodi").innerHTML = pripremiDiv();

    function pripremiDiv() {
        let html = "";
        products.forEach(p => {
            html += 
            `<div class="proizvod">
                <img src="${p.slika}" alt="${p.naziv}"/>
                <h3>${p.tipProizvoda.naziv} - ${p.naziv}</h3>
                <div class = "zvezde">` + rejting(p.ocena) + `</div>
                <p class = "opisP">Opis: ${p.opis} </p>
                <div class="cenaW">
                    <span>Cena:</span>
                    <span class = "cena">${p.cena} RSD</span>
                </div>
            </div>`
        });
        return html;
    }
}

function rejting(brojac){
    var text = "";
    for(var i = 1; i <= 5; i++){
        if(i <= brojac){
            text += `<i class="fas fa-star"></i>`;
        }
        else{
            text += `<i class="far fa-star"></i>`;
        }
    }
    return text;
}