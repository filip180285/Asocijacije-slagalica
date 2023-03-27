$(document).ready(function () {
    let igrac1, igrac2, igracNaPotezu;
    let vremePoteza, vremePotezaConst = 10;
    let ukupnoVreme, ukupnoVremeConst = 240;;
    let handlerPotez, handlerUkupnoVreme;
    let daljeKlik = false;

    let nizAsocijacija = [];
    let asocijacija;

    let otvorenoPolje = false, polje;

    let brojac = {
        "a": 4, "b": 4, "c": 4, "d": 4
    };
    let pogodjeno = {
        "a": false, "b": false, "c": false, "d": false, "k": false
    };

    let igrac1Poeni = 0, igrac2Poeni = 0;

    function napraviAsocijaciju() {
        let asocijacije = localStorage.getItem("asocijacije");
        nizAsocijacija = JSON.parse(asocijacije);
        asocijacija = nizAsocijacija[Math.floor(Math.random()*10)];
    }

    function imaJosNeotvorenihPolja() {
        return brojac.a > 0 || brojac.b > 0 || brojac.c > 0 || brojac.d > 0;
    }

    function barJednaPogodjenaKolona() {
        return pogodjeno.a || pogodjeno.b || pogodjeno.c || pogodjeno.d;
    }

    function izbaciResenjaIzFokusa() {
        $(".resenje").blur();
        if (!pogodjeno.a) {
            $("#resenjeA").val("A");
        }
        $("#resenjeA").attr("disabled", true);
        if (!imaJosNeotvorenihPolja() && !pogodjeno.a) $("#resenjeA").attr("disabled", false);

        if (!pogodjeno.b) {
            $("#resenjeB").val("B");
        }
        $("#resenjeB").attr("disabled", true);
        if (!imaJosNeotvorenihPolja() && !pogodjeno.b) $("#resenjeB").attr("disabled", false);

        if (!pogodjeno.c) {
            $("#resenjeC").val("C");
        }
        $("#resenjeC").attr("disabled", true);
        if (!imaJosNeotvorenihPolja() && !pogodjeno.c) $("#resenjeC").attr("disabled", false);

        if (!pogodjeno.d) {
            $("#resenjeD").val("D");
        }
        $("#resenjeD").attr("disabled", true);
        if (!imaJosNeotvorenihPolja() && !pogodjeno.d) $("#resenjeD").attr("disabled", false);

        if (!pogodjeno.k) {
            $("#resenjeK").val("KONAČNO REŠENJE");
        }
        $("#resenjeK").attr("disabled", true);
        if (!imaJosNeotvorenihPolja() && !pogodjeno.k) $("#resenjeK").attr("disabled", false);
    }

    function zameniIgrace() {
        if ((vremePoteza == 0 && igracNaPotezu == igrac1) || (daljeKlik == true && igracNaPotezu == igrac1)) {
            igracNaPotezu = igrac2;
            vremePoteza = vremePotezaConst;
            otvorenoPolje = false;
            izbaciResenjaIzFokusa();
            $("#igrac1Ime").css("background-color", "inherit");
            $("#igrac1Poeni").css("background-color", "inherit");
            $("#igrac2Ime").css("background-color", "lightgreen");
            $("#igrac2Poeni").css("background-color", "lightgreen");
        }
        else if (vremePoteza == 0 && igracNaPotezu == igrac2 || (daljeKlik == true && igracNaPotezu == igrac2)) {
            igracNaPotezu = igrac1;
            vremePoteza = vremePotezaConst;
            otvorenoPolje = false;
            izbaciResenjaIzFokusa();
            $("#igrac2Ime").css("background-color", "inherit");
            $("#igrac2Poeni").css("background-color", "inherit");
            $("#igrac1Ime").css("background-color", "lightgreen");
            $("#igrac1Poeni").css("background-color", "lightgreen");
        }
        daljeKlik = false;
        if (vremePoteza != 10 && vremePoteza - 1 < 10)
            $("#potez").text("0" + vremePoteza--);
        else $("#potez").text(vremePoteza--);
    }

    function otvoriPreostalaPolja(){
        let kol;
                for (let i = 0; i <= 4; i++) {
                    if (i == 0) kol = "a"; else if (i == 1) kol = "b";
                    else if (i == 2) kol = "c"; else if (i == 3) kol = "d";
                    for (let i = 1; i <= 4; i++) {
                        let polje = kol + i;
                        $("#" + polje).text(asocijacija[polje]);
                    }
                }
                brojac.a = brojac.b = brojac.c = brojac.d = 0;
                pogodjeno.a = pogodjeno.b = pogodjeno.c = pogodjeno.d = pogodjeno.k = true;
                $("#resenjeA").val(asocijacija.resenjeA);
                $("#resenjeB").val(asocijacija.resenjeB);
                $("#resenjeC").val(asocijacija.resenjeC);
                $("#resenjeD").val(asocijacija.resenjeD);
                $("#resenjeK").val(asocijacija.resenjeK);
    }

    function krajIgre(){
        clearInterval(handlerPotez);
        clearInterval(handlerUkupnoVreme);
        if(!pogodjeno.k) otvoriPreostalaPolja();
        let tekst;
        if(igrac1Poeni > igrac2Poeni)
        tekst = "Pobednik je " + igrac1 + " sa rezultatom " + igrac1Poeni + ":" + igrac2Poeni;
        else if(igrac1Poeni < igrac2Poeni)
        tekst = "Pobednik je " + igrac2 + " sa rezultatom " + igrac2Poeni + ":" + igrac1Poeni;
        else tekst = "Igra je završena nerešenim rezultatom!";
       setTimeout(function(){
        alert(tekst);
        let ponovo = confirm("Da li zelite da igrate ponovo?");
        if(ponovo) window.location.href = "asocijacije-igra.html";
       },300);

       $("#dalje").prop('disabled', true);
       $(".resenje").prop('disabled', true);

       $("body").click(function(){
       alert("Igra je završena! Osvežite stranicu da biste ponovo igrali!");
       });
    }

    function inicijalizujStranicu() {
        igrac1 = localStorage.getItem("igrac1");
        igrac2 = localStorage.getItem("igrac2");
        igracNaPotezu = igrac1;

        $("#igrac1Ime").text(igrac1); $("#igrac2Ime").text(igrac2);
        $("#potez").text(vremePotezaConst);
        vremePoteza = vremePotezaConst;

        ukupnoVreme = ukupnoVremeConst;
        let sekunde = ukupnoVreme % 60;
        if (sekunde < 10) sekunde = "0" + sekunde;
        $("#ukupnoVreme").text(("0" + Math.floor(ukupnoVreme / 60) + ":") + sekunde);

        $("#igrac1Ime").css("background-color", "lightgreen");
        $("#igrac1Poeni").css("background-color", "lightgreen");

        vremePoteza--;
        handlerPotez = setInterval(zameniIgrace, 1000);

        handlerUkupnoVreme = setInterval(function () {
            ukupnoVreme--;
            let sekunde = ukupnoVreme % 60;
            if (sekunde < 10) sekunde = "0" + sekunde;
            $("#ukupnoVreme").text(("0" + Math.floor(ukupnoVreme / 60) + ":") + sekunde);
            if (ukupnoVreme == 0) {
                krajIgre();
            }
        }, 1000);

        $("#dalje").click(function () {
            daljeKlik = true;
            zameniIgrace();
        });

        napraviAsocijaciju();
    }

    function proveriKolone() {
        if (brojac.a < 4 && !pogodjeno.a) $("#resenjeA").attr("disabled", false);
        if (brojac.b < 4 && !pogodjeno.b) $("#resenjeB").attr("disabled", false);
        if (brojac.c < 4 && !pogodjeno.c) $("#resenjeC").attr("disabled", false);
        if (brojac.d < 4 && !pogodjeno.d) $("#resenjeD").attr("disabled", false);
        if (barJednaPogodjenaKolona() && !pogodjeno.k) $("#resenjeK").attr("disabled", false);
    }

    function dodajDogadjajePoljima() {
        $(".polje").click(function () {
            let id = $(this).attr("id");
            let kolona = id.charAt(0);
            if (otvorenoPolje || brojac[kolona] == 0) return;
            otvorenoPolje = true;
            $(".prozor").hide();
            polje = id;
            $(this).text(asocijacija[id]);
            brojac[kolona]--;
            proveriKolone();
        });

        $('#a,#b,#c,#d,#konacno').click(function () {
            if (!otvorenoPolje && imaJosNeotvorenihPolja()) {
                izbaciResenjaIzFokusa();
                $(".prozor").show();
                return;
            }
            else{
                let indeks =  ($(this).attr("id")).charAt(0);
                if(!pogodjeno.indeks && $(this).find("input").prop("disabled") == false)
                $(this).find("input").val("");
            }
        });

        function otvoriKolonu(kolona) {
            if (kolona != "k") {
                brojac[kolona] = 0;
                for (let i = 1; i <= 4; i++) {
                    let polje = kolona + i;
                    $("#" + polje).text(asocijacija[polje]);
                }
            }
            else {
                let kol;
                for (let i = 0; i <= 4; i++) {
                    if (i == 0) kol = "a"; else if (i == 1) kol = "b";
                    else if (i == 2) kol = "c"; else if (i == 3) kol = "d";
                    for (let i = 1; i <= 4; i++) {
                        let polje = kol + i;
                        $("#" + polje).text(asocijacija[polje]);
                    }
                }
                $("#resenjeA").val(asocijacija.resenjeA);
                $("#resenjeB").val(asocijacija.resenjeB);
                $("#resenjeC").val(asocijacija.resenjeC);
                $("#resenjeD").val(asocijacija.resenjeD);
            }
        }

        function obojiKolonu(kolona) {
            let boja;
            if (igracNaPotezu == igrac1) boja = "blue";
            else boja = "red";
            if (kolona != "K") {
                $("." + kolona).css("background-color", boja);
                $("." + kolona).css("color", "white");
            }
            else {
                let kol;
                for (let i = 0; i <= 3; i++) {
                    if (i == 0) kol = "A"; else if (i == 1) kol = "B";
                    else if (i == 2) kol = "C"; else if (i == 3) kol = "D";
                    if (!pogodjeno[kol.toLowerCase()]) {
                        $("." + kol).css("background-color", boja);
                        $("." + kol).css("color", "white");
                    }
                }
                $(".K").css("background-color", boja);
                $(".K").css("color", "white");
                pogodjeno.a = pogodjeno.b = pogodjeno.c = pogodjeno.d = true;
                krajIgre();
            }
        }

        function azurirajPoene(kolona) { //dopuniti
            if (kolona != "k") {
                if (igracNaPotezu == igrac1) {
                    igrac1Poeni += 5;
                    igrac1Poeni += brojac[kolona]
                    $("#igrac1Poeni").text(igrac1Poeni);
                }
                else {
                    igrac2Poeni += 5;
                    igrac2Poeni += brojac[kolona]
                    $("#igrac2Poeni").text(igrac2Poeni);
                }
            }
            else {
                if (igracNaPotezu == igrac1) {
                    igrac1Poeni += 10;
                    if (!pogodjeno.a) igrac1Poeni += 5 + brojac.a;
                    if (!pogodjeno.b) igrac1Poeni += 5 + brojac.b;
                    if (!pogodjeno.c) igrac1Poeni += 5 + brojac.c;
                    if (!pogodjeno.d) igrac1Poeni += 5 + brojac.d;
                    $("#igrac1Poeni").text(igrac1Poeni);
                }
                else {
                    igrac2Poeni += 10;
                    if (!pogodjeno.a) igrac2Poeni += 5 + brojac.a;
                    if (!pogodjeno.b) igrac2Poeni += 5 + brojac.b;
                    if (!pogodjeno.c) igrac2Poeni += 5 + brojac.c;
                    if (!pogodjeno.d) igrac2Poeni += 5 + brojac.d;
                    $("#igrac2Poeni").text(igrac2Poeni);
                }
            }
        }

        $('.resenje').keyup(function (e) {
            if (e.keyCode === 13) {
                let odgovorIgraca = $(this).val();
                let kolona = $(this).attr("id");
                let resenje = asocijacija[kolona];
                if (odgovorIgraca.toUpperCase() == resenje) {
                    let pogodjenoIndeks = (kolona.charAt(7)).toLowerCase();
                    pogodjeno[pogodjenoIndeks] = true;
                    azurirajPoene(pogodjenoIndeks);
                    otvoriKolonu(pogodjenoIndeks);
                    $(this).attr("disabled", true);
                    $(this).blur();
                    $(this).val(odgovorIgraca.toUpperCase());
                    obojiKolonu(kolona.charAt(7));
                    if (pogodjenoIndeks != "k") $("#resenjeK").attr("disabled", false);
                }
                else {
                    daljeKlik = true;
                    zameniIgrace();
                }
            }
        })

        $(".close").click(function () {
            $(".prozor").hide();
        });
    }

    let uvod = "Levim tasterom miša birate željeno polje. " +
    "Nakon otkrivanja pojma u nekom polju možete "
    + "pokušati da pogodite rešenje neke od kolona (ukoliko je neki pojam u toj koloni otkriven) "
     + "ili glavno rešenje (ukoliko je neka od kolona rešena). " +
     "Tekst unosite sa karakterima ščćžđ. Nije bitno da li unosite tekst malim ili velikim slovima. " +
     "Svetlozelenom pozadinom je označen igrač koji ima pravo na potez. U slučaju promašaja ili isteka predviđenog vremena za potez, " +
     "drugi igrač dobija pravo na isti.";
     setTimeout(function(){
        alert(uvod);
       },200);

    inicijalizujStranicu();
    dodajDogadjajePoljima();

})