export class SceneMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMenu" }); // Clé de la scène pour l'identifier
  }
  preload(){
    this.load.audio('titleMusic', 'src/assets/sounds/bgm_titlescreen.mp3'); // Remplacez par le chemin de votre son
  }

  create() {
    // Ajouter l'image d'accueil
    const imageAccueil = this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "accueil"
    );
    // Jouer la musique du titre
    this.titleMusic = this.sound.add('titleMusic', { loop: true });
    this.titleMusic.play();
    // Créer le bouton Start
    const startButton = this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY - 50, "start")
      .setInteractive()
      .setScale(1.5); // Taille du bouton Start

    // Ajouter un événement au clic sur le bouton Start
    startButton.on("pointerdown", () => {
      this.sound.play('buttonClick'); // Joue le son
      this.scene.start("Controle"); // Lance la scène du scénario
    });

    // Ajouter un curseur pour le bouton Start
    startButton.on("pointerover", () => {
      this.tweens.add({
        targets: startButton,
        scale: 1.6, // Agrandir légèrement le bouton au survol
        duration: 300, // Durée de l'animation en millisecondes
        ease: "Power2", // Type d'animation
      });
    });

    startButton.on("pointerout", () => {
      this.tweens.add({
        targets: startButton,
        scale: 1.5, // Revenir à la taille réduite
        duration: 300, // Durée de l'animation en millisecondes
        ease: "Power2", // Type d'animation
      });
    });

    // Créer le bouton Controls
    const controlsButton = this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 85,
        "controls"
      )
      .setInteractive()
      .setScale(1.3); // Taille du bouton Controls

    // Ajouter un événement au clic sur le bouton Controls
    controlsButton.on("pointerdown", () => {
      this.sound.play('buttonClick'); // Joue le son
      this.scene.start("Controle"); // Lance la scène des contrôles
    });

    // Ajouter un curseur pour le bouton Controls
    controlsButton.on("pointerover", () => {
      this.tweens.add({
        targets: controlsButton,
        scale: 1.4, // Agrandir légèrement le bouton au survol
        duration: 300, // Durée de l'animation en millisecondes
        ease: "Power2", // Type d'animation
      });
    });

    controlsButton.on("pointerout", () => {
      this.tweens.add({
        targets: controlsButton,
        scale: 1.3, // Revenir à la taille réduite
        duration: 300, // Durée de l'animation en millisecondes
        ease: "Power2", // Type d'animation
      });
    });

    // Créer le bouton Credits avec la même taille que le bouton Controls
    const creditsButton = this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 245, // Positionné 50 pixels en dessous du bouton Controls
        "credits"
      )
      .setInteractive()
      .setScale(1.3); // Taille du bouton Credits

    // Ajouter un événement au clic sur le bouton Credits
    creditsButton.on("pointerdown", () => {
      this.sound.play('buttonClick'); // Joue le son
      this.scene.start("Credits"); // Lance la scène des crédits
    });

    // Ajouter un curseur pour le bouton Credits
    creditsButton.on("pointerover", () => {
      this.tweens.add({
        targets: creditsButton,
        scale: 1.4, // Agrandir légèrement le bouton au survol
        duration: 300, // Durée de l'animation en millisecondes
        ease: "Power2", // Type d'animation
      });
    });

    creditsButton.on("pointerout", () => {
      this.tweens.add({
        targets: creditsButton,
        scale: 1.3, // Revenir à la taille réduite
        duration: 300, // Durée de l'animation en millisecondes
        ease: "Power2", // Type d'animation
      });
    });
  }
}
