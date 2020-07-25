// La Classe Personnage
class Personnage {
    // Constructeur
    constructor(speudo, classe, sante, attaque, niveau) {
        this.speudo     = speudo;
        this.classe     = classe;
        this.sante      = sante;
        this.attaque    = attaque;
        this.niveau     = 1;
    }

    // Méthodes evoluier() et verifierSante()
    evoluer() {
        this.niveau++;
        console.log(this.speudo + " passe au niveau " + this.niveau + " !");
    }
    verifierSante() {
        if (this.sante <= 0) {
            this.sante = 0
            console.log(this.speudo + " s'est fait terrasser !");
        }
    } 

    // Getter informations()
    get informations() {
        return this.speudo + ' , ' + this.classe + ' a ' + this.sante + ' points de vie et est au niveau ' + this.niveau + ' .';
    }

}
   
// La classe Magicien
class Magicien extends Personnage {
     //constructeur (hérite de Personnage)
    constructor(speudo, classe, sante, attaque) {
        super(speudo);
        this.classe  = "magicien";
        this.sante   = 170;
        this.attaque = 90;
    }
   
    attaquer(Personnage) {
    // Réduit la santé du personnage advers selon le nombre de degats que fait le personnage en cours  
    Personnage.sante = (Personnage.sante - this.attaque);
   
    console.log(this.speudo + ' attaque ' + Personnage.speudo + ' en lançant un sort de feu (' + this.attaque + ' dégats).');
   
    this.evoluer();
    this.verifierSante();
    console.log('Il reste à ' + Personnage.speudo + ' ' + Personnage.sante + ' points de vie.');
    }

}

var perso1 = new Magicien("gandalf");
var perso2 = new Magicien("Sarouman");

console.log(perso1.attaquer(perso2));
console.log(perso1.attaquer(perso2));



    // Méthodes attaquer(personnage) coupSpecial(personnage) 


// La classe Guerrier
    //constructeur (hérite de Personnage)

    // Méthodes attaquer(personnage) coupSpecial(personnage) 



