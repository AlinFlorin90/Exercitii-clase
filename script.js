class utilizatori{
    constructor(nume, prenume, varsta, hobiuri){
        this.nume=nume;
        this.prenume=prenume;
        this.varsta=varsta;
        this.hobiuri=hobiuri;
    }
}

let arrayUtilizatori=[];

var utilizator1 = new utilizatori("Albastroiu","Alin", 30, "Fotbal, Computer, Excursii");
var utilizator2 = new utilizatori("Popescu", "Andrei", 18, "Volei, Muzica, Computer, Innot");
var utilizator3 = new utilizatori("Ionescu", "Mihai", 22, "Excursii, Parasutism, Baschet, Gatit");
var utilizator4 = new utilizatori("Marincescu", "Mihai", 14, "Front-end Developer, Fotbal");
var utilizator5 = new utilizatori("Bravo", "Johnny", 24, "Innot, Front-end Developer, Handbal");

arrayUtilizatori.push(utilizator1,utilizator2,utilizator3,utilizator4,utilizator5);

console.log(arrayUtilizatori);


/* Prima cerinta */

for(let i=0; i<arrayUtilizatori.length; i++){
    let array1=[];
    if (arrayUtilizatori[i].prenume === "Mihai"){
        array1.push(arrayUtilizatori[i]);
        console.log(array1);
    }    
}

/* A doua cerinta */

for(let i=0; i<arrayUtilizatori.length; i++){
    let array2=[];
    if (arrayUtilizatori[i].varsta >=18){
        array2.push(arrayUtilizatori[i]);
        console.log(array2);
    }
}

/* A treia cerinta */ 

for(let i=0; i<arrayUtilizatori.length; i++){
    let array3=[];
    if (arrayUtilizatori[i].hobiuri === "Front-end Developer"){
    array3.push(arrayUtilizatori[i]);
    console.log(array3);
    }
}


/* A patra cerinta */

for(let i=0; i<arrayUtilizatori.length; i++){
    let array4=[];
    array4.push(arrayUtilizatori[i].prenume);
    console.log(array4);
}
