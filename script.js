const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


//képek
const jatekosImg = document.createElement('img');
const tabla = document.createElement('img');
const kincs = document.createElement('img');
const nyil = document.createElement('img');
jatekosImg.src = 'media/jatekos.png';
tabla.src = 'media/tabla.png';
kincs.src = 'media/kincs.png';
nyil.src = 'media/nyil.png';

const egyenes0 = document.createElement('img');
const egyenes1 = document.createElement('img');
egyenes0.src = 'media/utak/egyenes0.png';
egyenes1.src = 'media/utak/egyenes1.png';


const kanyar0 = document.createElement('img');
const kanyar1 = document.createElement('img');
const kanyar2 = document.createElement('img');
const kanyar3 = document.createElement('img');
kanyar0.src =  'media/utak/kanyar0.png';
kanyar1.src =  'media/utak/kanyar1.png';
kanyar2.src =  'media/utak/kanyar2.png';
kanyar3.src =  'media/utak/kanyar3.png';

const harom0 = document.createElement('img');
const harom1 = document.createElement('img');
const harom2 = document.createElement('img');
const harom3 = document.createElement('img');
harom0.src = 'media/utak/harmas0.png';
harom1.src = 'media/utak/harmas1.png';
harom2.src = 'media/utak/harmas2.png';
harom3.src = 'media/utak/harmas3.png';


const nyil0 = document.createElement('img');
const nyil1 = document.createElement('img');
const nyil2 = document.createElement('img');
const nyil3 = document.createElement('img');
nyil0.src = 'media/nyilak/nyil0.png';
nyil1.src = 'media/nyilak/nyil1.png';
nyil2.src = 'media/nyilak/nyil2.png';
nyil3.src = 'media/nyilak/nyil3.png';

const jatekos0 = document.createElement('img');
const jatekos1 = document.createElement('img');
const jatekos2 = document.createElement('img');
const jatekos3 = document.createElement('img');
jatekos0.src = 'media/jatekosok/jatekos0.png';
jatekos1.src = 'media/jatekosok/jatekos1.png';
jatekos2.src = 'media/jatekosok/jatekos2.png';
jatekos3.src = 'media/jatekosok/jatekos3.png';

//kincsek
const kincs0 = document.createElement('img');
const kincs1 = document.createElement('img');
const kincs2 = document.createElement('img');
const kincs3 = document.createElement('img');
const kincs4 = document.createElement('img');
const kincs5 = document.createElement('img');
const kincs6 = document.createElement('img');
const kincs7 = document.createElement('img');
const kincs8 = document.createElement('img');
const kincs9 = document.createElement('img');
const kincs10 = document.createElement('img');
const kincs11 = document.createElement('img');
const kincs12 = document.createElement('img');
const kincs13 = document.createElement('img');
const kincs14 = document.createElement('img');
const kincs15 = document.createElement('img');
const kincs16 = document.createElement('img');
const kincs17 = document.createElement('img');
const kincs18 = document.createElement('img');
const kincs19 = document.createElement('img');
const kincs20 = document.createElement('img');
const kincs21 = document.createElement('img');
const kincs22 = document.createElement('img');
const kincs23 = document.createElement('img');
kincs0.src = 'media/kincsek/kincs0.png';
kincs1.src = 'media/kincsek/kincs1.png';
kincs2.src = 'media/kincsek/kincs2.png';
kincs3.src = 'media/kincsek/kincs3.png';
kincs4.src = 'media/kincsek/kincs4.png';
kincs5.src = 'media/kincsek/kincs5.png';
kincs6.src = 'media/kincsek/kincs6.png';
kincs7.src = 'media/kincsek/kincs7.png';
kincs8.src = 'media/kincsek/kincs8.png';
kincs9.src = 'media/kincsek/kincs9.png';
kincs10.src = 'media/kincsek/kincs10.png';
kincs11.src = 'media/kincsek/kincs11.png';
kincs12.src = 'media/kincsek/kincs12.png';
kincs13.src = 'media/kincsek/kincs13.png';
kincs14.src = 'media/kincsek/kincs14.png';
kincs15.src = 'media/kincsek/kincs15.png';
kincs16.src = 'media/kincsek/kincs16.png';
kincs17.src = 'media/kincsek/kincs17.png';
kincs18.src = 'media/kincsek/kincs18.png';
kincs19.src = 'media/kincsek/kincs19.png';
kincs20.src = 'media/kincsek/kincs20.png';
kincs21.src = 'media/kincsek/kincs21.png';
kincs22.src = 'media/kincsek/kincs22.png';
kincs23.src = 'media/kincsek/kincs23.png';



//kezdőképernyő dolgai
const info = document.getElementById('info');
info.addEventListener('click',informacio);

const start = document.getElementById('start');
start.addEventListener('click',mehet);

let jatekosok = new Array();
let jatekosokSzama;
let kincsekSzama;
let elozo;
function mehet(){
    document.getElementById('kezdo').classList.add('hidden');
    jatekosokSzama = document.getElementById('jatekosok').value;
    kincsekSzama = document.getElementById('kincsek').value;
    if(kincsekSzama>(24/jatekosokSzama)){
        kincsekSzama = 24/jatekosokSzama;
    }
    for(let i=0;i<jatekosokSzama;i++){
        jatekosok[i] = new jatekos(i);
    }
    elozo = [-1,-1];
    alapallas();
    tableRajz();
}

function informacio(){
    document.getElementById('informacio').classList.toggle('hidden');
}


//újrakezdő képernyő
//document.getElementById('ujrakezdes').addEventListener('click',ujrakezdes);

/*
function ujrakezdes(){
    location.reload();
}
*/


//általános algoritmusok
let cw = canvas.width;
let ch = canvas.height;


let foglalt = [13,15,6];
let kimaradt;

let osszesKincs = new Array();

class jatekos{
    constructor(n){
        this.talaltKincs = 0;
        this.keresendoKincsek = new Array();
        this.felfedettKincs = 0;
        this.szam = n;
        this.kepSrc = `media/jatekosok/jatekos${n}.png`;
        this.kepHtml = `<img src="media/jatekosok/jatekos${n}.png"
        height="60px" alt="jatekos ${n}"></img>`;
        for(let i=0;i<kincsekSzama;i++){
            let k = Math.floor(Math.random()*24);
            while(osszesKincs.includes(k)){
                k = Math.floor(Math.random()*24);
            }
            osszesKincs.push(k);
            this.keresendoKincsek.push(k);
        }
        switch(n){
            case 0:
                this.ij = [0,0];
                break;
            case 1:
                this.ij = [0,6];
                break;
            case 2:
                this.ij = [6,0];
                break;
            case 3:
                this.ij = [6,6];
                break;
            default:
                this.ij = [-1,-1];
                break;
        }
    }
}

class tile{
    constructor(x,y){
        this.treasure = -1;
        this.treasureSrc = '';
        this.players = new Array();
        for(let i=0;i<jatekosokSzama;i++){
            this.players.push(-1);
        }
        this.rotation = Math.floor(Math.random()*4);
        this.type = 1;
        if(x%2==0 && y%2==0){
            if(x==0 && y==0){
                this.type = 1;
                this.rotation = 1;
            }
            if(x==6 && y==6){
                this.type = 1;
                this.rotation = 3;
            }
            if(x==0 && y==6){
                this.type = 1;
                this.rotation = 2;
            }
            if(x==6 && y==0){
                this.type = 1;
                this.rotation = 0;
            }
            if(x==0 && y==2){
                this.type = 2;
                this.rotation = 1;
            }
            if(x==0 && y==4){
                this.type = 2;
                this.rotation = 1;
            }
            if(x==6 && y==2){
                this.type = 2;
                this.rotation = 3;
            }
            if(x==6 && y==4){
                this.type = 2;
                this.rotation = 3;
            }
            if(x==2 && y==0){
                this.type = 2;
                this.rotation = 0;
            }
            if(x==4 && y==0){
                this.type = 2;
                this.rotation = 0;
            }
            if(x==2 && y==6){
                this.type = 2;
                this.rotation = 2;
            }
            if(x==4 && y==6){
                this.type = 2;
                this.rotation = 2;
            }
        }else{
            let n = Math.floor(Math.random()*3);
            while(foglalt[n]==0){
                n = Math.floor(Math.random()*3);
            }
            this.type = n;
            foglalt[n]--;
        }
    }
}

let rows = document.querySelector('table').getElementsByTagName('tr');
let cells;

function milyenUt(){
    let utFajta = '';
    switch(kimaradt.type){
        case 0:
            utFajta = 'egyenes';
            kimaradt.rotation = kimaradt.rotation%2;
            break;
        case 1:
            utFajta = 'kanyar';
            break;
        case 2:
            utFajta = 'harmas';
            break;
        default:
            utFajta = 'egyenes';
            break;
    }
    return utFajta;
}

function tableRajz(){
    let utFajta = milyenUt();
    rows[0].getElementsByTagName('td')[1].innerHTML =
    `<img src="media/utak/${utFajta}${kimaradt.rotation}.png" height="60px" alt="kimaradt ut"></img>`;
    rows[0].getElementsByTagName('td')[0].innerHTML = 'kimaradt csempe:';
    if(kimaradt.treasure!=-1){
        rows[0].getElementsByTagName('td')[1].innerHTML +=
        `<img src="media/kincsek/kincs${kimaradt.treasure}.png" height="60px" alt="leesett kincs"></img>`;
        rows[0].getElementsByTagName('td')[0].innerHTML += '<br>és leesett kincs:';
    }
    for(let i=0;i<jatekosokSzama;i++){
        cells = rows[i+1].getElementsByTagName('td');
        cells[0].innerHTML = jatekosok[i].kepHtml;
        cells[1].innerHTML = `<abbr title='keresendő kincs'><img
        src="media/kincsek/kincs${jatekosok[i].keresendoKincsek[0]}.png" height="60px" alt="összes kincs megtalálva!"></img></abbr>`;
        cells[2].innerHTML = `<abbr title='talált/összeskincs'>
        ${jatekosok[i].talaltKincs}/${kincsekSzama}</abbr>`;
    }
}

rows[0].getElementsByTagName('td')[1].addEventListener('contextmenu',kimaradtForgatas);

function kimaradtForgatas(event){
    event.preventDefault();
    if(kimaradt.rotation<3){
        kimaradt.rotation++;
    }else{
        kimaradt.rotation = 0;
    }
    tableRajz();
}

const utak = [];

function utLerakas(i,j){
    let ut = utak[i-1][j-1];
    switch(ut.type){
        case 0:
            switch(ut.rotation){
                case 0:
                    context.drawImage(egyenes0,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                case 1:
                    context.drawImage(egyenes1,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                case 2:
                    context.drawImage(egyenes0,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                case 3:
                    context.drawImage(egyenes1,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                default:
                    context.drawImage(tabla,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
            }
            break;
        case 1:
            switch(ut.rotation){
                case 0:
                    context.drawImage(kanyar0,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                case 1:
                    context.drawImage(kanyar1,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                case 2:
                    context.drawImage(kanyar2,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;    
                case 3:
                    context.drawImage(kanyar3,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                default:
                    context.drawImage(tabla,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
            }
            break;
        case 2:
            switch(ut.rotation){
                case 0:
                    context.drawImage(harom0,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                case 1:
                    context.drawImage(harom1,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                case 2:
                    context.drawImage(harom2,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;    
                case 3:
                    context.drawImage(harom3,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
                default:
                    context.drawImage(tabla,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                    break;
            }
            break;
        default:
            context.drawImage(tabla,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
            break;
    }
    if(ut.treasure!=-1){
        let kep = document.createElement('img');
        kep.src = ut.treasureSrc;
        context.drawImage(kep,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
    }
    let tumotus = 0;
    for(let m=0;m<jatekosokSzama;m++){
        if(ut.players[m]!=-1){
            tumotus++
        }
    }
    if(tumotus>=2){
        for(let m=0;m<jatekosokSzama;m++){
            if(ut.players[m]!=-1){
                let kep = document.createElement('img');
                kep.src = ut.players[m].kepSrc;
                switch(m){
                    case 0:
                        context.drawImage(kep,j*(cw/9),i*(ch/9),(cw/18),(ch/18));
                        break;
                    case 1:
                        context.drawImage(kep,j*(cw/9)+(cw/18),i*(ch/9),(cw/18),(ch/18));
                        break;
                    case 2:
                        context.drawImage(kep,j*(cw/9),i*(ch/9)+(ch/18),(cw/18),(ch/18));
                        break;
                    case 3:
                        context.drawImage(kep,j*(cw/9)+(cw/18),i*(ch/9)+(ch/18),(cw/18),(ch/18));
                        break;
                    default:
                        context.drawImage(kep,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                        break;
                }
            }
        }
    }
    else{
        for(let m=0;m<jatekosokSzama;m++){
            if(ut.players[m]!=-1){
                let kep = document.createElement('img');
                kep.src = ut.players[m].kepSrc;
                context.drawImage(kep,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
            }
        }
    }
}

function kincsLerakas(){
    for(i in osszesKincs){
        let x = Math.floor(Math.random()*7);
        let y = Math.floor(Math.random()*7);
        while((x==0&&y==0)||(x==6&&y==6)||(x==0&&y==6)||(x==6&&y==0)||utak[x][y].treasure!=-1){
            x = Math.floor(Math.random()*7);
            y = Math.floor(Math.random()*7);
        }
        utak[x][y].treasure = osszesKincs[i];
        utak[x][y].treasureSrc = `media/kincsek/kincs${osszesKincs[i]}.png`;
    }
}

function jatekosElhelyezes(){
    for(let i=0;i<jatekosokSzama;i++){
        utak[jatekosok[i].ij[0]][jatekosok[i].ij[1]].players[i] = jatekosok[i];
    }
}

function alapallas(){

    for(let i=0;i<7;i++){
        utak[i]=new Array;
        for(let j=0;j<7;j++){
            utak[i][j]=new tile(i,j);
        }
    }

    kimaradt = new tile(-1,-1);

    kincsLerakas();
    jatekosElhelyezes();

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(i%2==0 && j%2==0 && (i==0 || j==0 || i==8 || j==8) && i!=j  && (i+j)!=8){
                if(i==0){
                    context.drawImage(nyil0,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                }
                if(i==8){
                    context.drawImage(nyil2,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                }
                if(j==0){
                    context.drawImage(nyil3,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                }
                if(j==8){
                    context.drawImage(nyil1,j*(cw/9),i*(ch/9),(cw/9),(ch/9));
                }
            }
            if((i>0 && i<8)&&(j>0 && j<8)){
                utLerakas(i,j);
            }
        }
    }
}

let kattintas = 0;
let tmp = true;
canvas.addEventListener('click',dontes);

let jarhato;
let tmpJarhato;

function dontes(e){
    tmp = true;
    tableRajz()
    let aktualisSzelesseg = Math.floor(visualViewport.width-10);
    if(aktualisSzelesseg>600){
        aktualisSzelesseg = 600;
    }
    let i = Math.floor(((e.x-8)/aktualisSzelesseg)*9);
    let j = Math.floor(((e.y-8)/aktualisSzelesseg)*9);
    if(elozo[0]==i&&elozo[1]==j){
        tmp = false;
    }
    
    if(kattintas==0&&tmp){
        if(i%2==0 && j%2==0 && (i==0 || j==0 || i==8 || j==8) && i!=j  && (i+j)!=8){
        switch(i){
            case 0:
                elozo[0] = 8;
                break;
            case 8:
                elozo[0] = 0;
                break;
            default:
                elozo[0] = i;
                break;
        }
        switch(j){
            case 0:
                elozo[1] = 8;
                break;
            case 8:
                elozo[1] = 0;
                break;
            default:
                elozo[1] = j;
                break;
        }
            eltolas(j,i,elozo);
            kattintas++;
            context.clearRect((cw/9), (ch/9), (7*cw/9),(7*ch/9));
            for(let i=1;i<8;i++){
                for(let j=1;j<8;j++){
                    utLerakas(i,j);
                    if(utak[i-1][j-1].players[soronLevo-1]!=-1){
                        jatekosok[soronLevo-1].ij[0] = i-1;
                        jatekosok[soronLevo-1].ij[1] = j-1;
                    }
                    
                }
            }

            let x = jatekosok[soronLevo-1].ij[0];
            let y = jatekosok[soronLevo-1].ij[1];
            utak[x][y].players[soronLevo-1] = -1;
            let jarhato = new Array();
            for(let k=0;k<7;k++){
                jarhato[k] = new Array();
                for(let l=0;l<7;l++){
                    jarhato[k][l] = false;
                }
            }

            jarhato[x][y] = true;
            ellenorzes(x,y,jarhato);
            context.fillStyle = 'rgba(255, 165, 0, 0.5)';
            for(let p=1;p<8;p++){
                for(let q=1;q<8;q++){
                    if(jarhato[p-1][q-1]){
                        context.fillRect(q*cw/9,p*ch/9,cw/9,ch/9);
                    }
                }
            }
            tmpJarhato = jarhato;
            
        }
    }
    if(kattintas==1&&tmp){
        
        if((i>0 && i<8)&&(j>0 && j<8)&&tmpJarhato[j-1][i-1]){
            utak[jatekosok[soronLevo-1].ij[0]][jatekosok[soronLevo-1].ij[1]].players[soronLevo-1] = -1;
            jatekosok[soronLevo-1].ij = [j-1,i-1];
            utak[j-1][i-1].players[soronLevo-1] = jatekosok[soronLevo-1];
            for(let i=1;i<8;i++){
                for(let j=1;j<8;j++){
                    utLerakas(i,j);
                }
            }
            kattintas=0;
            kincsenAllE();
            tableRajz();
            if(jatekosok[soronLevo-1].keresendoKincsek.length==0){
                let tmpSoronLevo = soronLevo-1;
                switch(tmpSoronLevo){
                    case 0:
                        if(jatekosok[soronLevo-1].ij[0]==0&&jatekosok[soronLevo-1].ij[1]==0){
                            canvas.removeEventListener('click',dontes);
                            document.getElementById('befejezo').classList.toggle('hidden');
                            document.getElementById('gyoztes').innerText = 'győztes: 1!';
                            return;
                        }
                        break;
                    case 1:
                        if(jatekosok[soronLevo-1].ij[0]==0&&jatekosok[soronLevo-1].ij[1]==6){
                            canvas.removeEventListener('click',dontes);
                            document.getElementById('befejezo').classList.toggle('hidden');
                            document.getElementById('gyoztes').innerText = 'győztes: 2!';
                            return;
                        }
                        break;
                    case 2:
                        if(jatekosok[soronLevo-1].ij[0]==6&&jatekosok[soronLevo-1].ij[1]==0){
                            canvas.removeEventListener('click',dontes);
                            document.getElementById('befejezo').classList.toggle('hidden');
                            document.getElementById('gyoztes').innerText = 'győztes: 3!';
                            return;
                        }
                        break;
                    case 3:
                        if(jatekosok[soronLevo-1].ij[0]==6&&jatekosok[soronLevo-1].ij[1]==6){
                            canvas.removeEventListener('click',dontes);
                            document.getElementById('befejezo').classList.toggle('hidden');
                            document.getElementById('gyoztes').innerText = 'győztes: 4!';
                            return;
                        }
                        break;
                    default:
                        break;
                }
            }
            aktualisJatekos();

            for(let i=1;i<=jatekosokSzama;i++){
                rows[i].classList.remove('aktualis');
            }
            rows[soronLevo].classList.add('aktualis');
        }
        else{
        }
    }
}

function kincsenAllE(){
    if(utak[jatekosok[soronLevo-1].ij[0]][jatekosok[soronLevo-1].ij[1]].treasure==jatekosok[soronLevo-1].keresendoKincsek[0]){
        let tmpkincs = jatekosok[soronLevo-1].keresendoKincsek.shift();
        jatekosok[soronLevo-1].talaltKincs++
        jatekosok[soronLevo-1].felfedettKincs = tmpkincs;
        utak[jatekosok[soronLevo-1].ij[0]][jatekosok[soronLevo-1].ij[1]].treasure=-1;
    }
}

let soronLevo = 1;
function aktualisJatekos(){
    if(soronLevo==jatekosokSzama){
        soronLevo=1;
    }else{
        soronLevo++;
    }
}

function eltolas(i,j,elozo){
    let kep = document.createElement('img');
    kep.src = `media/utak/${milyenUt()}${kimaradt.rotation}.png`;
    if(i==0){
        j--;
        let tmp = kimaradt;
        kimaradt = utak[6][j];
        for(let k=0;k<6;k++){
            utak[6-k][j] = utak[5-k][j];
        }
        for(let m=0;m<jatekosokSzama;m++){
            if(kimaradt.players[m]!=-1){
                tmp.players[m] = kimaradt.players[m];
                kimaradt.players[m] = -1;
                jatekosok[m].ij = [0,j];
            }
        }
        utak[0][j] = tmp;

    }
    if(i==8){
        j--;
        let tmp = kimaradt;
        kimaradt = utak[0][j];
        for(let k=0;k<6;k++){
            utak[k][j] = utak[k+1][j];
        }
        for(let m=0;m<jatekosokSzama;m++){
            if(kimaradt.players[m]!=-1){
                tmp.players[m] = kimaradt.players[m];
                kimaradt.players[m] = -1;
                jatekosok[m].ij = [6,j];
            }
        }
        utak[6][j] = tmp;
    }
    if(j==0){
        i--;
        let tmp = kimaradt;
        kimaradt = utak[i][6];
        for(let k=0;k<6;k++){
            utak[i][6-k] = utak[i][5-k];
        }
        for(let m=0;m<jatekosokSzama;m++){
            if(kimaradt.players[m]!=-1){
                tmp.players[m] = kimaradt.players[m];
                kimaradt.players[m] = -1;
                jatekosok[m].ij = [i,0];
            }
        }
        utak[i][0] = tmp;
    }
    if(j==8){
        i--;
        let tmp = kimaradt;
        kimaradt = utak[i][0];
        for(let k=0;k<6;k++){
            utak[i][k] = utak[i][k+1];
        }
        for(let m=0;m<jatekosokSzama;m++){
            if(kimaradt.players[m]!=-1){
                tmp.players[m] = kimaradt.players[m];
                kimaradt.players[m] = -1;
                jatekosok[m].ij = [i,6];
            }
        }
        utak[i][6] = tmp;
    }
}

function ellenorzes(x,y,jarhato){
    for(let m=0;m<4;m++){
        switch(m){
            case 0:
                if(x!=0){
                    if(kikereses(utak[x][y],0) && kikereses(utak[x-1][y],2) && !jarhato[x-1][y]){
                        jarhato[x-1][y] = true;
                        ellenorzes(x-1,y,jarhato);
                    }
                }
                break;
            case 1:
                if(y!=0){
                    if(kikereses(utak[x][y],3) && kikereses(utak[x][y-1],1) && !jarhato[x][y-1]){
                        jarhato[x][y-1] = true;
                        ellenorzes(x,y-1,jarhato);
                    }
                }
                break;
            case 2:
                if(x!=6){
                    if(kikereses(utak[x][y],2) && kikereses(utak[x+1][y],0) && !jarhato[x+1][y]){
                        jarhato[x+1][y] = true;
                        ellenorzes(x+1,y,jarhato);
                    }
                }
                break;
            case 3:
                if(y!=6){
                    if(kikereses(utak[x][y],1) && kikereses(utak[x][y+1],3) && !jarhato[x][y+1]){
                        jarhato[x][y+1] = true;
                        ellenorzes(x,y+1,jarhato);
                    }
                }
                break;
            default:
                break;
        }
    }
}

function kikereses(ut,irany){
    switch(ut.type){
        case 0:
            switch(ut.rotation){
                case 0:
                case 2:
                    if(irany%2==0){
                        return true;
                    }else{
                        return false;
                    }
                    break;
                case 1:
                case 3:
                    if(irany%2==0){
                        return false;
                    }else{
                        return true;
                    }
                    break;
            }
            break;
        case 1:
            switch(ut.rotation){
                case 0:
                    if(irany==0 || irany==1){
                        return true;
                    }else{
                        return false;
                    }
                    break;
                case 1:
                    if(irany==1 || irany==2){
                        return true;
                    }else{
                        return false;
                    }
                    break;
                case 2:
                    if(irany==2 || irany==3){
                        return true;
                    }else{
                        return false;
                    }
                    break;
                case 3:
                    if(irany==3 || irany==0){
                        return true;
                    }else{
                        return false;
                    }
                    break;
            }
            break;
        case 2:
            switch(ut.rotation){
                case 0:
                    if(irany==3){
                        return false;
                    }else{
                        return true;
                    }
                    break;
                case 1:
                    if(irany==0){
                        return false;
                    }else{
                        return true;
                    }
                    break;
                case 2:
                    if(irany==1){
                        return false;
                    }else{
                        return true;
                    }
                    break;
                case 3:
                    if(irany==2){
                        return false;
                    }else{
                        return true;
                    }
                    break;
            }
            break;
    }
}