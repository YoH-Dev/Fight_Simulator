//***********************************  Class principale "Personnage"
class Personnage {
    constructor(speudo, classe, sante, attaque) {
        this.speudo     = speudo;
        this.classe     = classe;
        this.sante      = sante;
        this.attaque    = attaque;
        this.niveau     = 1;
    }

    evoluer() {
        this.niveau++;
        console.log(this.speudo + " passe au niveau " + this.niveau + " !");
    }

    verifierSante() {
        if (this.sante <= 0) {
            this.sante == 0;
            console.log(this.speudo + " s'est fait terrasser !");
        }
    }

    // Getter
    get informations() {
        return this.speudo + ', ' + this.classe + ' a ' + this.sante + ' points de vie et est au niveau ' + this.niveau + ' .';
    }
}

//*********************************** Class secondaire "Magicien" => Hérite de Personnage
class Magicien extends Personnage {
    constructor(speudo) {
        super(speudo, "Magicien", 170, 90);
    }

    attaquer(adversaire) {
    // Réduit la santé du personnage adverse selon le nombre de degats que fait le personnage en cours  
    adversaire.sante = (adversaire.sante - this.attaque);
    console.log(this.speudo + ' attaque ' + adversaire.speudo + ' en lançant un sort de feu (' + this.attaque + ' dégats).');
    // Lance les méthodes evoluer() et verifierSante() apres chaque attaque pour MAJ du perso
    this.evoluer();
    adversaire.verifierSante();
    }
    
    coupSpecial(adversaire) {
    // Réduit la santé du Personnage adverse selon le nb de dégats que fait le personnage en cours, fois 5
    adversaire.sante = adversaire.sante - (this.attaque * 5);
    console.log(this.speudo + ' attaque ' + adversaire.speudo + ' avec son attaque ultime "Puissance des Arcanes" (' + (this.attaque * 5)+ ' dégats).');
    // Lance les méthodes evoluer() et verifierSante() apres chaque attaque pour MAJ du perso
    this.evoluer();
    adversaire.verifierSante();
    }
}

//*********************************** Class secondaire "Guerrier" => Hérite de Personnage
class Guerrier extends Personnage {
    constructor(speudo) {
        super(speudo, "Guerrier", 350, 50);
    }

    attaquer(adversaire) {
    // Réduit la santé du personnage adverse selon le nombre de degats que fait le personnage en cours  
    adversaire.sante = (adversaire.sante - this.attaque);
    console.log(this.speudo + ' attaque ' + adversaire.speudo + ' avec son épée (' + this.attaque + ' dégats).');
    // Lance les méthodes evoluer() et verifierSante() apres chaque attaque pour MAJ du perso
    this.evoluer();
    adversaire.verifierSante();
    }
    
    coupSpecial(adversaire) {
    // Réduit la santé du Personnage adverse selon le nb de dégats que fait le personnage en cours, fois 5
    adversaire.sante = adversaire.sante - (this.attaque * 5);
    console.log(this.speudo + ' attaque ' + adversaire.speudo + ' avec son attaque spéciale "Double Taillade (' + (this.attaque * 5) + ' dégats).');
    // Lance les méthodes evoluer() et verifierSante() apres chaque attaque pour MAJ du perso
    this.evoluer();
    adversaire.verifierSante();
    }
}


var gandalf = new Magicien('Gandalf');
var aragorn = new Guerrier('Aragorn');

console.log(aragorn.informations);
console.log(gandalf.informations);

gandalf.attaquer(aragorn);
console.log(aragorn.informations);

aragorn.attaquer(gandalf);
console.log(gandalf.informations);

gandalf.coupSpecial(aragorn);