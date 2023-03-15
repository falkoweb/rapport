content_page1 = [
    `<h3><strong>Falko Saltman</strong></h3><br><br><br><img src="public/img/Apparence.png" style="width: auto;height: 75%;" alt="">`,
    
    `
        <h3><strong>Rapport :</strong></h3>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <img
            src="public/img/1.png"
            class="lazyload"
            alt=""
            style="max-width: 100%; height: auto; display: block; margin: 0 auto; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);"
            width="732"
            height="494"
            data-sizes="auto"
        >

        <br>
        <br>
        <br>
        <br>
        <br>
        <button onclick="PageSuivante(1)">Page Précedente</button></div>
    `,

    `
    <h3><strong>15 Février 788</strong></h3>
    <h3>Objet : Assasinat du marquis</h3>
    <p>Durant ce jour, nous avons vécu un jour tragique. En effet le marquis a été assasiné par un membre du culte du mur infiltré à une fête organisé par plusieurs nobles. L'homme a été abbatus et j'ai trainé le corps jusqu'à l'infirmerie de la caserne. Une autopsie a été effectué sur le corps par l'adjudant Erley Engelhart.</p> 

    <button onclick="PageSuivante(2)">Page Précedente</button></div>
    `,
];
content_page2 = [
    `<h3><strong>Identité</strong></h3>
    <br>
    <p>Nom : Saltman</p>
    <p>Prenom : Falko</p>
    <br>
    <p>Lieux de Naissance : Shiganshina</p>
    <p>Date de Naissance : 22 Avril 768</p>
    <p>Age : 20 ans</p><br><p>Lieux de Résidence : Shiganshina</p>
    <p>Evenement Notable :</p>
    <dd> - Réussi à rejoindre les brigades spéciales</dd>
    <br>
    <br>
    <br>
    <br>
    <img style="width: auto; height: 30%;"  src="public/img/Tampon-BS.jpg" alt="">
    <div class="flex-box"><button onclick="PageSuivante(2)">Page Suivante</button></div>`,
    `
    <h3><strong>13 Février 788</strong></h3>
    <h3>Objet : Patrouille et garde de la caserne en sous-effectif</h3>
    <p>En ce jour, d'après les ordres du SGT-C Gunther Genzo. Nous avons dû sécuriser la caserne en l'absence de la garnison. J'ai été en binôme avec le 2nd Classe Codd Hellsteiner.</p> 

    <h3><strong>14 Février 788</strong></h3>
        <h3>Objet : Enquête sur un potentiel cadet asiatique</h3>
        <p>Aujourd’hui, avec le 2nd Classe Codd Hellsteiner, on à entendu parler d'un cadet nommé Rin qui serait asiatique. Donc nous sommes partis au camp d'entrainement pour questionner les instructeurs. Un instructeur avoue connaitre l'individu. Cependant l'instructeur Ludwig nie les faits, pourtant un cadet présent à coté de l'instructeur à avoué que Rin était présent dans les rangs. En inspectant l'individu, j'ai pu en conclure qu'il n'était pas asiatique.</p> 
        <button onclick="PageSuivante(3)">Page Suivante</button></div>
    `,

    `
    
    `,
];

function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);
