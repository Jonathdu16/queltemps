class DetourageImage{
    constructor(image){
        // Chargement de l'image
        this.img = new Image();
        this.img.src = image;
    }

        // Attendre que l'image soit chargée
    Chargement_Image(){
        // Création du canevas
        var canvas = document.createElement('canvas');
        canvas.width = this.img.width;
        canvas.height = this.img.height;

        // Obtention du contexte 2D du canevas
        var ctx = canvas.getContext('2d');

        // Dessin de l'image sur le canevas
        ctx.drawImage(this.img, 0, 0);

        // Détourage (exemple : rectangle rouge)
        ctx.fillRect(50, 50, 100, 100);

        // Affichage du canevas dans le document
        document.body.appendChild(canvas);
    };
}
