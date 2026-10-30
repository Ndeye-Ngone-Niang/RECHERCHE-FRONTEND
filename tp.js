//exercice1
function calculerMoyenne(note1, note2, note3){
    return((note1+note2+note3)/3);
}
//attendue: 14
console.log(calculerMoyenne(12, 14, 16));
//cas limite 
//attendue: 10
console.log(calculerMoyenne(10, 10, 10));

function estAdmis(moyenne){
    return(moyenne>=10);
}
//attendue: false
console.log(estAdmis(9.5));
//cas limite
//attendue: true
console.log(estAdmis(10));

function calculerPrixTTC(prixHT, tauxTVA = 0.18){
    return(prixHT*(1+tauxTVA));
}
//attendue: 1180
console.log(calculerPrixTTC(1000));
//cas limite
//attendue: 1000
console.log(calculerPrixTTC(1000, 0));

const convertirEnMinutes = heures =>
    heures*60;
//attendue: 180
console.log(convertirEnMinutes(3));
//cas limite
//attendue: 90
console.log(convertirEnMinutes(1.5)); 


//exercice2
const etudiant = {
    id: 2026,
    nom: "Ndiaye",
    prenom:"Moussa",
    filiere: "IAGE",    
    niveau: "L2",
    ville: "Dakar"
};
const resultats = [15, 11, 17, 13, 16];

//1_ Extraire nom, prenom et filiere
const { nom, prenom, filiere } = etudiant;
//attendue: Ndiaye Moussa IAGE
console.log(nom, prenom, filiere); 
//2_ Extraire niveau dans une variable appeler classe
const { niveau: classe } = etudiant;
//attendue: L2
console.log(classe);
//3_ Recuperer la premiere, deuxieme et derniere note
const [premiereNote, deuxiemeNote] = resultats;
const derniereNote = resultats[resultats.length - 1];
//attendue: 15
console.log(premiereNote);
//attendue: 11
console.log(deuxiemeNote);
//attendue: 16
console.log(derniereNote);
//4_ Extraire la premiere et la troisieme note
const [note1, , note3] = resultats;
//attendue: 15 17
console.log(note1, note3);
//5_ Extraire email avec une valeur par defaut
const { email = "non renseigné" } = etudiant;
//attendue: Non renseigné
console.log(email);
//6_ Afficher une phrase de presentation
//attendue: Je m'appelle Moussa ?diaye, je suis en filiere IAGE, classe L2.
console.log(`Je m'appelle ${prenom} ${nom}, je suis en filiere ${filiere}, classe ${classe}`);
//attendue: [15, 11, 17, 13, 16]
console.log(resultats);


//exercice3

const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantBase = {
    nom: "Diop",
    filiere: "IAGE",
    niveau: "L2"
};
//1_
const tousLesEtudiants = [...groupeA, ...groupeB];
//attendue: ["Awa", "Moussa", "Fatou", "Ibra", "Mariama"]
console.log(tousLesEtudiants);
//attendue: 5
console.log(tousLesEtudiants.length);
//2_
const copieGroupeA = [...groupeA, "Cheikh"];
//attendue: ["Awa", "Moussa", "Fatou", "Cheikh"]
console.log(copieGroupeA);
//attendue: ["Awa", "Moussa", "Fatou"]
console.log(groupeA);
//3_
const etudiantComplet = {
    ...etudiantBase,
    age: 22,
    ville: "Dakar"
};
//attendue:  {nom: 'Diop', filiere: 'IAGE', niveau: 'L2', age: 22, ville: 'Dakar'}
console.log(etudiantComplet);
//4_
const nouvelEtudiant = {
    ...etudiantBase,
    niveau: "L3"
};
//attendue: {nom: 'Diop', filiere: 'IAGE', niveau: 'L3'}
console.log(nouvelEtudiant);
//attendue: {nom: 'Diop', filiere: 'IAGE', niveau: 'L2'}
console.log(etudiantBase);
//5_
const coordonnees = {
    ville: "Dakar",
    quartier: "Parcelles Assainies",
    pays: "Senegal"   
};
const contact = {
    telephone: "777777777",
    email: "awa@gmail.com",
    ville: "Thies"
};
const profil = {
    ...coordonnees,
    ...contact,
};
/*attendue: {ville: 'Thies',
             quartier: 'Parcelles Assainies',
             pays: 'Senegal', 
             telephone: '777777777', 
             email: 'awa@gmail.com' 
}*/
console.log(profil);


//exercice4
//1_
function additionner(...nombres){
    const total = nombres.reduce((accumulateur, valeur) =>{
        return accumulateur + valeur;
    }, 0);
    return total;
}
//attendue: 5
console.log(additionner(2, 3));
//attendue: 12
console.log(additionner(3, 4, 5));
//attendue: 47
console.log(additionner(21, 10, 7, 8, 1));
//attendue: 0
console.log(additionner());
//2_
function afficherPremierEtAutres(premier, ...autres){
    console.log(premier);
    console.log(autres);
}
//attendue: a 
//          ['b', 'c']
afficherPremierEtAutres("a", "b", "c");
//attendue: a 
//          [ ]
afficherPremierEtAutres("a"); 
//3_
function creerFiche(nom, filiere, ...competences){
    return {
        nom,
        filiere,
        competences
    };
}
//attendue:
 /*  
{
        nom: 'Awa', filiere: 'IAGE', competences: ['JavaScript', 'SQL']
}
 */ 
console.log(creerFiche("Awa", "IAGE", "JavaScript", "SQL"));
//attendue:
 /*  
{
        nom: 'Awa', filiere: 'IAGE', competences: []
}
 */ 
console.log(creerFiche("Awa", "IAGE"));

//4_Le parametre  REST doit etre place a la fin parce qu'il récupère tous les arguments qui restent, si on le place avant un autre paramètre il va prendre tous les arguments et il ne restera rien pour ce dernier.


//exercice5
//1_
const etudiantL2 = {
    id: 104,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
}
function extraireIdentite(etudiant){
    const {prenom, nom, filiere } = etudiant;
    return {
        prenom,
        nom,
        filiere 
    };
}
//attendue
/*
{ 
    prenom: 'Aminata', 
    nom: 'Fall',
    filiere: 'IAGE'
}
*/
console.log(extraireIdentite(etudiantL2));
const etudiantSansFiliere = {
    prenom: "Moussa", 
    nom: "Diop"
};
//attendue
/*
{ 
    prenom: 'Moussa', 
    nom: 'Diop',
    filiere: 'Undefined'
}
*/
console.log(extraireIdentite(etudiantSansFiliere));
//2_
function calculerMoyenneNotes(notes){
    if(notes.length == 0){
        return 0;
    }
    const somme = notes.reduce((total, note) =>{ 
        return total + note;
    }, 0);
    return somme / notes.length;
}
//attendue: 13.66666666666666666
console.log(calculerMoyenneNotes(etudiantL2.notes));
//attendue: 0
console.log(calculerMoyenneNotes([]));
//3_
function ajouterNote(etudiant, nouvelleNote){
    return {
        ...etudiant,
        notes: [...etudiant.notes, nouvelleNote]
    };
}
//attendue:
/* 
{
    id: 104,
    prenom:'Aminata',
    nom: 'Fall',
    notes: [13, 16, 12, 18],
    filiere: 'IAGE'
}
*/
console.log(ajouterNote(etudiantL2, 18));
//attendue:
/* 
{
    id: 104,
    prenom:'Aminata',
    nom: 'Fall',
    notes: [13, 16, 12],
    filiere: 'IAGE'
}
*/
console.log(etudiantL2);
const etudiantSansNotes = {
    id: 105,
    prenom: "Moussa",
    nom: "Diop",
    notes: [],
    filiere: "IAGE"
};
//attendue:
/* 
{
    id: 105,
    prenom:'Moussa',
    nom: 'Diop',
    notes: [15],
    filiere: 'IAGE'
}
*/
console.log(ajouterNote(etudiantSansNotes, 15));
//attendue:
/* 
{
    id: 105,
    prenom:'Moussa',
    nom: 'Diop',
    notes: [],
    filiere: 'IAGE'
}
*/
console.log(etudiantSansNotes);
//4_
function creerResume(etudiant, ...options){
    const identite = extraireIdentite(etudiant);
    const moyenne = calculerMoyenneNotes(etudiant.notes);
    return {
        ...identite,
        moyenne,
        options 
    };
}
//attendue: 
/*
{
    prenom: 'Aminata',
    nom: 'Fall',
    filiere: 'IAGE',
    moyenne:13.66666666666666666,
    option: [ 'diplome', 'stage' ]
}
*/
console.log(creerResume(etudiantL2, "diplome", "stage"));
//attendue: 
/*
{
    prenom: 'Aminata',
    nom: 'Fall',
    filiere: 'IAGE',
    moyenne:13.666666666666666,
    option: []
}
*/
console.log(creerResume(etudiantL2));
//5_
const etudiantL2Avant = JSON.stringify(etudiantL2);
const etudiantSansNotesAvant = JSON.stringify(etudiantSansNotes)
console.log("Etudiant initial :", etudiantL2);
console.log("Notes initiales :", etudiantL2.notes);
console.log("Etudiant sans note :", etudiantSansNotes);
//attendue: True
console.log(
    "etudiant L2 inchangé :",
    JSON.stringify(etudiantL2) == etudiantL2Avant
);
//attendue: True
console.log(
    "etudiant sans notes inchangé :",
    JSON.stringify(etudiantSansNotes) == etudiantSansNotesAvant
);

