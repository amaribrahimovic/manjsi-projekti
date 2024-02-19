const tacka = document.querySelector('#tacka');

const stStrani = document.querySelector('h5');
const vprasanje = document.querySelector('h2');
const odg1 = document.querySelector('#odg1');
const odg2 = document.querySelector('#odg2');
const odg3 = document.querySelector('#odg3');
const tacin1 = document.querySelector('.tacin1');
const tacin2 = document.querySelector('.tacin2');
const tacin3 = document.querySelector('.tacin3');

i = 0;

stPO = 0;
vprasanjaCounter = 0;
odgovoriCounter = 0;

const slike = ["Prehrana_1.png" , "Zdravje_1.png", "Dusevno zdravje_2.png", "Vedenje_1.png", "Dom_1.png"];

const vprasanja = [`1. &nbsp;Kdaj pes potrebuje
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;svežo pitno vodo?`, `2. &nbsp;Kakšna hrana je
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;najboljša za mačko?`, `3. &nbsp;Kako pogosto moramo 
        &nbsp; &nbsp; &nbsp;hraniti mlade kužke?`, `4. &nbsp;Koliko hrane ponudimo
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hišnem ljubljenčku?`, `5. &nbsp;Kaj bi storil/-a, če bi pes
        &nbsp;&nbsp;&nbsp;&nbsp; zaužil temno čokolado?`, `6. &nbsp;Katere živali  morajo biti 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obvezno cepljene proti steklini?`, `7. Kdaj jim je potrebno dati &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sredstvo proti parazitom?`, `8. Kaj storimo, če se naš pes &nbsp;&nbsp;&nbsp;&nbsp;ali mačka poškoduje/zboli?`, `9. Kaj storimo z iztrebki &nbsp;&nbsp;&nbsp;&nbsp;živali v njihovih bivališčih?`, `10. Kako prevažamo psa in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mačko v avtomobilu?`, `11. Ali smemo zapreti psa ali &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mačko v škatlo?`, `12. Ali lahko naš pes prosto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;teka po vasi ali po ulici?`, `13. Kaj storimo, če na cesti &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opazimo potepuško žival?`, `14. Kaj storimo, če aktivirajo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;glasen ognjemet?`, `15. Kako poskrbimo za žival, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ko gremo na dopust?`, `16. Kaj mora biti v bivalnem &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; prostoru mačke?`, `17. Ali je bolje, da je v kletki &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;en ali dva morska prašička?`, `18. Kje muce urinirajo, če jih  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imamo v stanovanju?`, `19. Kako pogosto pes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;potrebuje sprehod?`, `20. Ali je lahko kunec ves &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;čas v kletki?`, `21. Kakšen akvarij je najbolj &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primeren za zlato ribico?`, `22. Kako veliko pasjo uto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mora imeti nemški ovčar?`, `23. Kje namestimo kletko &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s činčilo?`, `24. V kakšno kletko &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;namestimo papigo?`, `25. Ali mora imeti zunanje &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bivališče psa streho?`];
const odgovori = [`Poleti, ko je vroče`, `Vsak dan`, `Ko pride s sprehoda`, `Sadje, zelenjava in žitarice`, `Hrana za dojenčke`, `Kakovostno meso in zelenjava`, `10x na dan`, `Vsaj 3x na dan`, `1x na dan`, `Čim več, ko bo sit bo bruhal`, `Preračunamo potrebno količino`, `Čim manj, da se ne bo zredil`, `Ponudil bi mu še en kos`, `Nič ne bi storil`, `Izzval bruhanje in peljal veterniraju`, `Vsi psi`, `Tiste živali, ki se sprehajajo po gozdu`, `Nobena žival, saj inekcija boli`, `Redno`, `Nikoli`, `Samo ko dežuje`, `Nič, saj se lahko sam/a pozdravi`, `Nudimo prvo pomoč in peljemo veterinarju`, `Pomagamo z zdravili za ljudi in božamo`, `Iztrebke živali vsak dan sproti odstranjujemo`, `Iztrebke živali odstranimo vsak teden`, `Iztrebke živali pustimo pri miru, ker smrdijo`, `Žival sedi na sprednjem sedežu`, `Najbolje v boxu ali kletki`, `Na zadnjem sedežu ali pa za zadnjo šipo`, `Da, saj se žival počuti varno`, `Ne, ker ne vidi okolice`, `Se sami odločimo kaj bomo storili`, `Ne, pes mora biti na povodcu`, `Da, ker se pes počuti bolj sproščenega`, `Majhni kužki lahko, veliki pa ne`, `Žival pustimo pri miru`, `Odnesemo v zavetišče`, `Žival nahranimo`, `Žival spustimo ven`, `Odnesemo v zvočno izoliran prostor`, `Počakamo, da se pokanje konča`, `Živali namestimo dovolj hrane in vode`, `Nič, lahko je do enega tedna brez vode in hrane`, `Uredimo oskrbo za žival`, `Praskalnik, posoda, stranišče`, `Mehka posteljica, odejica in igračke`, `Skrivališče, kolo, papir, klobčič volne`, `Dva, ker so družabne živali`, `En, saj niso družabne živali`, `Naj kar prosto teka`, `Kjerkoli`, `Mačjem stranišču, ki je čisto`, `V kopalnici na tla`, `Vsak dan`, `Psi ne marajo sprehodov`, `Ko se nam ljubi`, `Da, saj se počuti varno`, `Ne, potrebno ga je spuščati iz kletke`, `Odvisno od vrste`, `Okrogel`, `Tak, ki posnema njeno naravno okolje`, `Ni pomembno kakšen je`, `Čim manjšo`, `400 cm x 300 cm x 200 cm`, `180 cm x 120 cm x 85 cm`, `Kjer je prepih`, `V dnevno sobo`, `Kjer ni prepiha`, `V čim večjo kletko`, `V okroglo kletko`, `Ni pomembno`, `Da, obvezno`, `Ne, ni potrebno`, `Streha je obvezna samo poleti`];

const odgClass = ["n1", "p", "n2", "n1", "n2", "p", "n1", "p", "n2", "n1", "p", "n2", "n1", "n2", "p", "p", "n1", "n2", "p", "n1", "n2", "n1", "p", "n2", "p", "n1", "n2", "n1", "p", "n2", "n1", "p", "n2", "p", "n1", "n2", "n1", "p", "n2", "n1", "p", "n2", "n1", "n2", "p", "p", "n1", "n2", "p", "n1", "n2", "n1", "p", "n2", "p", "n1", "n2", "n1", "p", "n2", "n1", "p", "n2", "n1", "n2", "p", "n1", "n2", "p", "p", "n1", "n2", "p", "n1", "n2"];

p.addEventListener('click', ()=>{
    const p = document.querySelector('#p');
    const n1 = document.querySelector('#n1');
    const n2 = document.querySelector('#n2');
    n1.classList.add('n');
    
    setTimeout(() => {
        n2.classList.add('n');
    }, 1000);

    setTimeout(() => {
        p.classList.add('p');
    }, 2000);  

    stPO++;
    console.log(stPO);

    setTimeout(() => {
        vprasanjaCounter++;
        odgovoriCounter+= 3;
        p.classList.remove('p');
        n1.classList.remove('n');
        n2.classList.remove('n');

        vprasanje.innerHTML = vprasanja[vprasanjaCounter];
        odg1.innerHTML = odgovori[odgovoriCounter];
        odg2.innerHTML = odgovori[odgovoriCounter + 1];
        odg3.innerHTML = odgovori[odgovoriCounter + 2];
        tacin1.removeAttribute('id');
        tacin1.id = odgClass[odgovoriCounter];
        tacin2.removeAttribute('id');
        tacin2.id = odgClass[odgovoriCounter + 1];
        tacin3.removeAttribute('id');
        tacin3.id = odgClass[odgovoriCounter + 2];
    }, 4000);  
});

n1.addEventListener('click', ()=>{
    const p = document.querySelector('#p');
    const n1 = document.querySelector('#n1');
    const n2 = document.querySelector('#n2');
    n1.classList.add('n');
    
    setTimeout(() => {
        n2.classList.add('n');
    }, 1000);

    setTimeout(() => {
        p.classList.add('p');
    }, 2000);  

    console.log(stPO);

    setTimeout(() => {
        vprasanjaCounter++;
        odgovoriCounter+= 3;
        p.classList.remove('p');
        n1.classList.remove('n');
        n2.classList.remove('n');

        vprasanje.innerHTML = vprasanja[vprasanjaCounter];
        odg1.innerHTML = odgovori[odgovoriCounter];
        odg2.innerHTML = odgovori[odgovoriCounter + 1];
        odg3.innerHTML = odgovori[odgovoriCounter + 2];
        tacin1.removeAttribute('id');
        tacin1.id = odgClass[odgovoriCounter];
        tacin2.removeAttribute('id');
        tacin2.id = odgClass[odgovoriCounter + 1];
        tacin3.removeAttribute('id');
        tacin3.id = odgClass[odgovoriCounter + 2];
    }, 4000);  
});

n2.addEventListener('click', ()=>{
    const p = document.querySelector('#p');
    const n1 = document.querySelector('#n1');
    const n2 = document.querySelector('#n2');
    n1.classList.add('n');
    
    setTimeout(() => {
        n2.classList.add('n');
    }, 1000);

    setTimeout(() => {
        p.classList.add('p');
    }, 2000);  

    console.log(stPO);

    setTimeout(() => {
        vprasanjaCounter++;
        odgovoriCounter+= 3;
        p.classList.remove('p');
        n1.classList.remove('n');
        n2.classList.remove('n');

        vprasanje.innerHTML = vprasanja[vprasanjaCounter];
        odg1.innerHTML = odgovori[odgovoriCounter];
        odg2.innerHTML = odgovori[odgovoriCounter + 1];
        odg3.innerHTML = odgovori[odgovoriCounter + 2];
        tacin1.removeAttribute('id');
        tacin1.id = odgClass[odgovoriCounter];
        tacin2.removeAttribute('id');
        tacin2.id = odgClass[odgovoriCounter + 1];
        tacin3.removeAttribute('id');
        tacin3.id = odgClass[odgovoriCounter + 2];
    }, 4000);  
});