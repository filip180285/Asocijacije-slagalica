$(document).ready(function () {

    function napraviAsocijacije() {
        let nizAsocijacija = [{
            a1:"SALATA",a2:"JUG",a3:"KIVI",a4:"MANGO",resenjeA:"VOĆE",
            b1:"INDUSTRIJA",b2:"PRERAĐIVAČ",b3:"KOREN",b4:"GRAĐA",resenjeB:"DRVO",
            c1:"BEOGRAD",c2:"NOVI SAD",c3:"NIŠ",c4:"ZBOGOM",resenjeC:"SRBIJA",
            d1:"MALI",d2:"UNIJA",d3:"KUP NACIJA",d4:"KRALJICA",resenjeD:"AFRIKA",
            resenjeK:"ŠLJIVA"
        },
        {
            a1:"KUHINJA",a2:"SLANO",a3:"NATRIJUM",a4:"HLOR",resenjeA:"SO",
            b1:"KISEONIK",b2:"VODONIK",b3:"ŽEĐ",b4:"ČAŠA",resenjeB:"VODA",
            c1:"NOĆ",c2:"UDOVICA",c3:"ZLATO",c4:"HUMOR",resenjeC:"CRNO",
            d1:"PESAK",d2:"SUNCOBRAN",d3:"ODBRANA",d4:"ODBOJKA",resenjeD:"PLAŽA",
            resenjeK:"MORE"
        },
        {
            a1:"PENA",a2:"LAV",a3:"CRVENO",a4:"PLOD",resenjeA:"MORE",
            b1:"DEKA",b2:"CRVENKAPA",b3:"STARA",b4:"KOLAČ",resenjeB:"BAKA",
            c1:"OTROV",c2:"JEŽ",c3:"ŽICA",c4:"KAKTUS",resenjeC:"BODLJA",
            d1:"JERARH",d2:"TENOR",d3:"ŽELJA",d4:"SESTRA",resenjeD:"TRI",
            resenjeK:"PRASE"
        },
        {
            a1:"MORE",a2:"REKA",a3:"STRAŽA",a4:"SLONOVAČA",resenjeA:"OBALA",
            b1:"BRISANJE",b2:"BACANJE",b3:"RUKE",b4:"LICE",resenjeB:"PEŠKIR",
            c1:"FUDBAL",c2:"RUKOMET",c3:"PILATES",c4:"OKRUGLA",resenjeC:"LOPTA",
            d1:"PERO",d2:"RVANJE",d3:"KABINA",d4:"HLADAN",resenjeD:"TUŠ",
            resenjeK:"PLAŽA"
        },
        {
            a1:"NOĆ",a2:"LET",a3:"PEVAČICA",a4:"PERSPEKTIVA",resenjeA:"PTICA",
            b1:"KĆI",b2:"ČIZME",b3:"MREŽA",b4:"LOLA",resenjeB:"RIBAR",
            c1:"RATOVI",c2:"POHODI",c3:"KK RADNIČKI",c4:"PAUK",resenjeC:"KRSTAŠ",
            d1:"LUK",d2:"RUM",d3:"DVOR",d4:"LAVOVI",resenjeD:"BELI",
            resenjeK:"ORAO"
        },
        {
            a1:"PROMENE",a2:"UREĐAJ",a3:"SERVIS",a4:"PLANINA",resenjeA:"KLIMA",
            b1:"MARIO",b2:"LEPAK",b3:"LIGA",b4:"NOVA",resenjeB:"SUPER",
            c1:"RADOST",c2:"UNIJA",c3:"KOMISIJA",c4:"PARLAMENT",resenjeC:"EVROPA",
            d1:"JUŽNI POL",d2:"PINGVIN",d3:"EREBUS",d4:"VINSON",resenjeD:"ANTARKTIK",
            resenjeK:"KONTINENT"
        },
        {
            a1:"NOVAC",a2:"SRBIJA",a3:"ALŽIR",a4:"KUVAJT",resenjeA:"DINAR",
            b1:"LJUBAVNI",b2:"RASKID",b3:"HAJDUČKI",b4:"OPROŠTAJ",resenjeB:"RASTANAK",
            c1:"TIMOK",c2:"HADŽI PRODAN",c3:"SELJAK",c4:"REKA",resenjeC:"BUNA",
            d1:"OMLADINA",d2:"SKUPSTINA",d3:"SINDIKAT",d4:"ZDRAVLJE",resenjeD:"DOM",
            resenjeK:"ĐAK"
        },
        {
            a1:"SAOBRAĆAJ",a2:"FAUL",a3:"POSTUPAK",a4:"PRAVILA",resenjeA:"PREKRŠAJ",
            b1:"OPŠTINA",b2:"STARCI",b3:"NASTAVNIK",b4:"TUŽILAC",resenjeB:"VEĆE",
            c1:"SRETENJE",c2:"VIDOVDAN",c3:"BRANITELJ",c4:"PRAVO",resenjeC:"USTAV",
            d1:"SESTRA",d2:"OBRAZ",d3:"KRST",d4:"REČ",resenjeD:"ČAST",
            resenjeK:"SUD"
        },
        {
            a1:"PANDA",a2:"TORINO",a3:"FABRIKA",a4:"BRAVO",resenjeA:"FIJAT",
            b1:"VESELJE",b2:"RUZMARIN",b3:"KUM",b4:"ZLATNA",resenjeB:"SVADBA",
            c1:"TEMPERATURA",c2:"ZEMLJA",c3:"STEPEN",c4:"OPERA",resenjeC:"SKALA",
            d1:"SVETI SAVA",d2:"DRŽAVNA",d3:"STAJANJE",d4:"SVEČANOST",resenjeD:"HIMNA",
            resenjeK:"ZASTAVA"
        },
        {
            a1:"OFICIR",a2:"AKT",a3:"SVRŠEN",a4:"RITUAL",resenjeA:"ČIN",
            b1:"DRVO",b2:"SAPUTNIK",b3:"SREDINA",b4:"VEK",resenjeB:"ŽIVOT",
            c1:"PREOKRET",c2:"KAPITAL",c3:"MOMENT",c4:"KOPERNIK",resenjeC:"OBRT",
            d1:"CIGARETA",d2:"RUČAK",d3:"PREDAH",d4:"DOM ZDRAVLJA",resenjeD:"PAUZA",
            resenjeK:"DRAMA"
        }

    ];
        localStorage.setItem("asocijacije", JSON.stringify(nizAsocijacija));
    }


    $("button").click(function () {
        let ime1 = $("#ime1").val();
        let ime2 = $("#ime2").val();
        if (ime1 == "" || ime2 == "") {
            alert("Unesite imena igrača da biste započeli igru!");
            return;
        }
        else {
            localStorage.setItem("igrac1", ime1);
            localStorage.setItem("igrac2", ime2);
            window.location.href = "asocijacije-igra.html";
        }
    });

    napraviAsocijacije();

});