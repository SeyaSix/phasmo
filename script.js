var entite = [
  {
    id: "esprit",
    contenu: [
      {
        nom: "Esprit",
        preuves: ["EMF 5, Spirit box, Écriture fantomatique"],
        faiblesse: [
          "Un esprit peut être temporairement repoussé en brûlant un bâton d'encens, et ne pourra pas chasser avant 1 minute 30.",
          "L'esprit est la seule entité qui n'a pas de force.",
        ],
        force: ["L'esprit est la seule entité qui n`a pas de force."],
        attaque: ["à partir de 50% de Santé Mentale (basé sur la moyenne des joueurs)."],
  
        test: ["Claquer un encens proche de lui ou dans sa salle, empêchera l'esprit d'attaquer pendant 180 secondes soit 3 minutes."],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "spectre",
    contenu: [
      {
        nom: "Spectre",
        preuves: ["EMF 5, Spirit Box, Projecteur D.O.T.S"],
        faiblesse: [
          "les spectres ont une réaction toxique au sel.",
          "les spectres ne touchent presque jamais le sol et on ne peut par conséquent pas avoir leur trace de pas, et ne marchent jamais dans le sel.",
        ],
        force: [
          "le spectre peut se téléporter sur vous, et si vous avez un détecteur EMF sur vous, il sonnera au niveau deux si ça ce produit.",
        ],
        attaque: ["à partir de 50% de Santé Mentale (basé sur la moyenne des joueurs)."],
        
        test: ["Posez du sel proche de sa salle, si il n'y marche jamais c'est que c'est un spectre.",],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "fantome",
    contenu: [
      {
        nom: "Fantôme",
        preuves: ["Spirit Box, Ultraviolet, Projecteur D.O.T.S"],
        faiblesse: [
          "prendre un fantôme en photo le fera disparaître instantanément.",
        ],
        force: [
          "Le Fantôme clignote plus lentement que les autres fantômes (les fantômes sont invisibles au minimum une seconde).",
          "Si le joueur est loin de la salle de l'entité, le Fantôme peut se déplacer jusqu'au joueur, et une fois proche du joueur peut faire des interactions aléatoires (jet d'objet..).",
        ],
        attaque: ["à partir de 50% de Santé Mentale (basé sur la moyenne des joueurs)"],
        info:["",],
        test: [
          "placer des capteurs qui vont de sa salle, a une autre et ce poster a l'opposé derrière un capteur, pour voir s'il fait le chemin jusqu'à vous et repartir (comme la Banshee), arrivé sur vous il y a possibilité qu'il fasse des interactions.", 
          "pendant une chasse regarder son clignotement.",
          "prendre un fantôme en photo le fera disparaître instantanément. Pour être sûr que c'est pas une coïncidence, ouvrir le journal et onglet photo, si jamais vous avez une photo avec marqué fantôme qu'il n'y a pas de glitch sur la photo et que vous ne voyez pas de fantôme alors c'est un fantôme. (mieux vaut être proche pour prendre la photo, pour être sûr que cette technique fonctionne (NE FONCTIONNE PAS PENDANT UNE CHASSE))."
        
        ],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "poltergeist",
    contenu: [
      {
        nom: "Poltergeist",
        preuves: ["Spirit Box, Ultraviolet, Écriture Fantomatique"],
        faiblesse: [
          "Lorsqu'ils n'ont rien a jeté, les poltergeist sont considérablement affaibli.",
        ],
        force: [
          "Le poltergeist est la seule entité qui peut bouger plusieurs objets en même temps.",
          "Le poltergeist peut jeter des objet plus fort que les autres entités (entre 2m et 6m).",
          "En chasse, le poltergeist jette des objets toutes les 0.5 secondes.",
        ],
        attaque: ["à partir de 50% de Santé Mentale (basé sur la moyenne des joueurs)."],
        info:["",],
        test: ["faire un tas d'objets pour voir si tout vol en même temps.(chaque objet représente un emf 2 ou 3, et chaque objet envoyer proche de vous enlève 2% de santé mentale par objet jeté ).",],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "banshee",
    contenu: [
      {
        nom: "Banshee",
        preuves: ["Ultraviolet, Orbes fantomatique, Projecteur D.O.T.S"],
        faiblesse: [
          " On a 33% de chance de l'entendre crier avec un microphone parabolique.",
        ],
        force: [
          "La Banshee choisit sa cible au début de la game de manière aléatoire, et changera de cible seulement quand la première meurt. Si sa cible sort de la maison, elle se comportera comme une entité lambda.",
          "Comme le fantôme, la banshee peut se déplacer jusqu'au joueur, et une fois proche du joueur repartir vers sa salle préférée. Si une chasse se déclenche, et que sa cible est dans la map, les autres joueurs peuvent se balader et traverser la banshee sans mourir. En revanche en cauchemar il vaut mieux être caché parce que si la banshee tue sa cible, elle continuera à chasser et essaiera de tuer sa cible suivante. La banshee a plus de chance de chanter pendant les événement paranormaux (chasse et apparition).",
        ],
        attaque: ["à partir de 50% de Santé Mentale (basé sur sa cible)."],
        info:[""],
        test: [
          "Placer des capteurs qui vont de sa salle, a une autre et ce poster a l'opposé derrière un capteur, pour voir si elle fait le chemin jusqu'à vous puis le chemin inverse (seulement vers sa cible).", 
          "Se placer en face de la salle préférée de l'entité avec un micro parabolique pour entendre son cri. (33% de chance de l'entendre par essaies).",
          "Si la banshee fait un événement paranormal chantant (chasse et apparition) proche des joueurs groupés et qu' un des joueurs a perdu plus de santé mentale que les autres, alors c'est surement un banshee."
        ],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "djinn",
    contenu: [
      {
        nom: "Djinn",
        preuves: ["EMF 5, Ultraviolet, Températures Glaciales"],
        faiblesse: [
          "Couper le courant empêchera le Djinn d'utiliser ses pouvoirs.",
        ],
        force: [
          "Loin de vous, il marche à vitesse normale, mais dès qu'il voit un joueur de loin, il accélère d'un coup pour arriver à 2.5m/s.",
          "Quand vous êtes dans la même salle ou à moins de 3m de lui, le djinn a une chance de manière aléatoire de vous enlever 25% de santé mentale d'un coup (quand ça arrive le compteur électrique fera un emf).",
        ],
        attaque: ["à partir de 50% de Santé Mentale (basé sur la moyenne des joueurs)."],
        info:[""],
        test: [
          "Le Djinn ne coupera jamais le courant.", 
          "Pendant une attaque faire en sorte que le djinn vous voit de moins et écoutez ses bruits de pas quand il vous a vu (il vaut mieux le faire avec un encens dans la main)."
        ],
        vitesse: [
          "1,7m/s en chasse.",
          "2.5m/s en poursuite, loins du joueur.",
          "2.8m/s en poursuite proche du joueur.",
        ],
        son: {
          pouvoir_a_3m_de_toi: "asset/audio/autres/2.5ms.mp3",
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "cauchemar",
    contenu: [
      {
        nom: "Cauchemar",
        preuves: ["Spirit Box, Orbes Fantomatique, Écriture Fantomatiques"],
        faiblesse: [
          "Allumer des lumières autour du cauchemar réduira ses chances d'attaquer.",
        ],
        force: [
          "Un cauchemar aura une chance accrue d'attaquer dans l'obscurité.",
        ],
        attaque: [
          "Dans l'obscurité il attaquera à partir de 60% de Santé Mentale (basé sur la moyenne des joueurs).",
          "Dans la lumière il attaquera à partir de 40% de Santé Mentale (basé sur la moyenne des joueurs)."
        ],
        info:[
          "Le cauchemar ne peut pas allumer de lumière.",
          "le cauchemar a plus tendance a faire plus d'interaction dans les salles qui sont dans le noir.",
          "Le Cauchemar privilégiera l'interaction où il casse les ampoules."
        ],
        test: ["Si vous allumez une lumière dans sa pièce et que l'interrupteur s'éteint instantanément c'est que c'est un cauchemar (a tester de préférence plus d'une fois)."],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "revenant",
    contenu: [
      {
        nom: "Revenant",
        preuves: [
          "Orbes Fantomatique, Écriture fantomatique, Température glaciales",
        ],
        faiblesse: ["Se cacher d'un Revenant le fera se déplacer lentement."],
        force: [
          "Un Revenant se déplacera très vite lorsqu'il poursuivra sa proie.",
        ],
        attaque: ["à partir de 50% de Santé Mentale (basé sur la moyenne des joueurs)."],
        info:[
          "En chasse il entend et détecte très bien les objets electronique (torche..).",
          "Pour  utiliser la boite a musique face a un revenant, toujours éteindre sa torche et couper son micro sinon il vous tuera très vite."
        ],
        test: [
          "Écouter ses pas quand il vous poursuit (avec un encens en main).", 
          "Écouter ses pas en chasse aussi."
        ],
        vitesse: ["1m/s en chasse.", "3m/s en poursuite max."],
        son: {
          chasse: "asset/audio/autres/1ms.mp3",
          poursuite_max: "asset/audio/autres/3ms.mp3",
        },
      },
    ],
  },
  {
    id: "ombre",
    contenu: [
      {
        nom: "Ombre",
        preuves: ["Écriture fantomatique, Températures glaciales, EMF 5"],
        faiblesse: [
          "Une ombre à moins de chance de déclencher une chasse si des joueurs sont à proximité de sa salle.",
        ],
        force: ["l'ombre est plus difficile a trouver."],
        attaque: ["à partir de 35% de santé mentale (basé sur la moyenne des joueurs)."],
        info:[
          "L'Ombre ne peut pas bouger d'objet quand vous êtes dans sa salle.",
          "Elle peut faire des interaction de maximum emf 2 quand vous êtes dans sa salle (bouger une porte, éteindre la lumière, écrire dans le livre).",
          "L'Ombre ne peut pas faire d'événement paranormal quand le joueur est à 100% de santé mentale.",
          "Entre 100% et 50% de santé mentale, l'ombre a énormément moins de chance de vous faire des événements paranormaux que les autres entités.",
          "Elle est aussi beaucoup moins active quand la lumière est allumée."
        ],
        test: [
          "Lorsqu'elle fait une apparition l'ombre a beaucoup plus de chance de se montrer comme  l'ombre d'un skin d'entité.", 
          "L'Ombre a énormément de chance de vous faire un Mist (une boule blanche qui vous suit et une fois qu'elle vous touche vous entendez un souffle). ",
          "il a plus de chance de voir une ombre sous forme d'ombre noir en utilisant le cercle d'invocation ou la boite a musique comme objets Maudits.",
          "Pour voir si l'ombre fait un emf 5 la meilleure technique c'est de quitter sa pièce, écouter de loin si elle bouge un objet, et de foncer dans sa pièce pour voir si y'a un emf 5, ou alors regarder les courbes sur le tableau du camion, pareil pour l'écriture."
        ],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "demon",
    contenu: [
      {
        nom: "Démon",
        preuves: [
          " Ultraviolet, Écriture Fantomatique, Températures Glaciales",
        ],
        faiblesse: ["Le Démon craint les Crucifixs."],
        force: [
          "Le Démon chasse plus que les autres entités",
          "Avec son pouvoir, le démon peut attaquer à n'importe quel niveau de santé mentale de manière aléatoire (quand il veut).",
          "Après avoir mis un encens soit en chasse, soit dans la pièce du démon l'oblige à ne pas pouvoir attaquer pendant 60 secondes, donc l'entité attaque avant 1 minute 30 secondes c'est que c'est un démon.",
        ],
        attaque: ["à partir de 70% de santé mentale (basé sur la moyenne des joueurs)."],
        info:[
          "Après une chasse, si une chasse se déclenche 22 secondes après la précédente, c'est que c'est un démon.",
          "Pour le Démon le crucifix prend 2m de rayon en plus (donc avec un t2 au lieu de couvrir 3m pour le démon ça en couvre 5m (invisible))."
        ],
        test: [
          "chronométrer le temps entre les attaques de l'entité (toute les 22 secondes~).", 
          "Faire le test de l'encens, si l'entité attaque 60 secondes après le brûlage de l'encens, c'est que c'est un démon."
        ],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "yurei",
    contenu: [
      {
        nom: "Yurei",
        preuves: [
          "Orbes Fantomatique, Températures Glaciales, Projecteur D.O.T.S",
        ],
        faiblesse: [
          "Brûler de l'encens sur le lieu de son décès piégera le Yurei temporairement (60 secondes).",
        ],
        force: [
          "Le Yurei a une forte influence sur la santé mentale, 15% de santé mentale d'un coup (en claquant une porte à côté de vous).",
        ],
        attaque: ["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)."],
        info:[
          "En ce moment, pour trouver un yurei bugged, il touche la même porte deux fois d'affilée très vite.",
          "La technique de l'encens dans la pièce du yurei, ne sert pas a validé le yurei, elle sert seulement à l'invalidité, les autres entités peuvent très bien rester dans leurs pièces pendant 60 secondes, la coïncidence est possible."
        ],
        test: ["Quand le Yurei claque une porte devant vous, il vous enlève forcement 15% de santé mentale, mais surtout quand il claque la porte, le son de la porte qui se ferme “le clac” arrive environ 1 seconde après l'animation de la porte qui se ferme."],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "oni",
    contenu: [
      {
        nom: "Oni",
        preuves: ["EMF 5, Températures Glaciales, Projecteur D.O.T.S"],
        faiblesse: [
          "Le clignotement de l'Oni est très rapide en chasse il peut rester invisible pendant maximum 0,5 secondes. (il est donc très reconnaissable en chasse).",
        ],
        force: [
          "L'Oni vous enlèvera 20% de santé mentale a chaque fois qu'il vous fera un événement Paranormal (s'il vous touche).",
          "L'Oni fait plus d'événements paranormaux que les autres entités.",
        ],
        attaque: ["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)."],
        info:["L'Oni ne fait jamais de Mist."],
        test: ["En attaque l'Oni a un clignotement très rapide (invisible pendant maximum 0.5s)."],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "yokai",
    contenu: [
      {
        nom: "Yokai",
        preuves: ["Spirit Box, Orbes Fantomatique, Projecteur D.O.T.S"],
        faiblesse: [
          "Pendant une chasse le Yokai n'entendra que les voix proches de lui.",
          "le Yokai est sourd comme un pot, il n'entendra pas votre voix a plus de 2m50 autour de lui.",
        ],
        force: [
          "Parler près d'un Yokai augmentera ses chance d'attaquer",
          "Avec son pouvoir, le Yokai peut attaquer à partir de 80% de santé mentale(si vous parlez à côté de lui).",
        ],
        attaque: ["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)."],
        info:["si l'entité attaque parce que vous lui avait parler parce qu'il est à côté de vous, mais qu'il spawn loin de vous c'est que c'est pas un yokai, a l'inverse si il spawn a max 2m de vous c'est surement un yokai."],
        test: ["cachez vous à l'abri de sa vu pendant une chasse, et criez comme un bœuf dans votre micro, si le l'entité ne vient pas, c'est surement un Yokai (a tester plus d'une fois, attention aux coïncidences)."],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "hantu",
    contenu: [
      {
        nom: "Hantu",
        preuves: ["Ultraviolet, Orbes Fantomatique, Températures Glaciales"],
        faiblesse: [
          "L'Hantu ne peut pas allumer le courant.",
          "il est lent dans les pièces chaudes > 15°C 1.4m/s",
        ],
        force: [
          "Les basses températures permettent au Hantu de se déplacer plus rapidement.",
          "L'Hantu peut faire descendre la température d'une pièce quand il est en chasse pour pouvoir se déplacer plus vite.",
          "L'Hantu à 50% de chance en plus que les autres entités de couper le courant.",
        ],
        attaque: ["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)."],
        info:[
          "L'Hantu n'accélère pas à la vue du joueur (sa vitesse est basée sur la température).",
          "en chasse quand la map est froide, courant coupé ou cassé lorsque le hantu se déplace dans la maison il a une boule de vapeur qui sort de la bouche comme le joueur quand il fait froid (les joueurs morts ne peuvent pas le constater).",
          "sur les map en extérieur l'Hantu est très dangereux."
        ],
        test: ["Écouter ses pas, courant allumé puis éteint pour entendre la différence.",],
        vitesse: ["> 15°C 1.4m/s", "< 3°C   2.7m/s."],
        son: {
          chasseAuDessusDe3C: "asset/audio/autres/1.4ms.mp3",
          poursuiteEnDessousDe3C: "asset/audio/autres/2.7ms.mp3",
        },
      },
    ],
  },
  {
    id: "goryo",
    contenu: [
      {
        nom: "Goryo",
        preuves: ["Projecteur D.O.T.S, Ultraviolet, EMF 5"],
        faiblesse: [
          "Le Goryo ne se déplace jamais très loin du lieu de son décès.",
        ],
        force: [
          "Le Goryo ne se montrera habituellement qu'à travers une caméra lorsqu'il n'y a personne à proximité.",
        ],
        attaque: ["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)"],
        info:[
          "Le Goryo ne peut pas changer de salle favorite de toute la partie.",
          "Hors événement paranormal le goryo ne se déplace jamais à plus de 5m de sa pièce."
        ],
        test: [
          "Avec une caméra dans la main quand vous regardez un DOTS, que l'entité passe dans le dots et que vous le voyez seulement à travers la caméra et pas sans la caméra, c'est que c'est forcément un Goryo.", 
          "Si l'entité n'a jamais changé de salle y'a de grande chance que ce soit un Goryo."
        ],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "myling",
    contenu: [
      {
        nom: "Myling",
        preuves: ["Ultraviolet, EMF 5, Ecriture Fantomatique"],
        faiblesse: [
          "Le Myling émet très souvent des sons d'origine paranormal (30% plus avec la parabole).",
        ],
        force: [
          "Les bruits de pas du myling sont audibles à seulement 12m du joueur.",
        ],
        attaque: ["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)"],
        info:["Le test du bruit des pas et de la torche qui clignote ne fonctionne que si l'entité est au même étage que vous.",],
        test: [
          "Lors d'une chasse poser votre torche au sol allumé près de vous, si vous entendez ses bruits de pas seulement quand la torche clignote c'est que c'est un myling.", 
          "Si vous avez pas de torche proche, en chasse, si vous entendez l'entité chanter mais que vous n'entendez pas de bruit de pas, c'est aussi un myling.",
          "Pareil, jet d'objet mais pas de bruit de pas en chasse, c'est que c'est un myling."
      ],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "onryo",
    contenu: [
      {
        nom: "Onryo",
        preuves: ["pirit box, Orbes Fantomatique, Températures Glaciales"],
        faiblesse: ["Une flamme agit comme un crucifix pour l'onryo."],
        force: ["éteindre une flamme peut pousser un Onryo à attaquer."],
        attaque: ["à partir de 60% de santé mentale (basé sur la moyenne des joueurs)"],
        info:["les deux premiers souffles de bougies sont safe, 3ème souffle chasse."],
        test: [
          "Si l'Onryo souffle 3 bougies, il a 100% de chance de lancer une chasse.",
          "Posez une bougie collée au crucifix, si le crucifix est bouffé avant que la bougie soit éteinte c'est que c'est pas un Onryo.",
        ],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
        },
      },
    ],
  },
  {
    id: "jumeaux",
    contenu: [
      {
        nom: "Les Jumeaux",
        preuves: ["EMF 5, Spirit Box, Températures Glaciales"],
        faiblesse: [
          "Les jumeaux interagissent souvent avec l'environnement en même temps.",
        ],
        force: [
          "Chaque jumeau peut s'énerver et lancer une attaque sur sa proie.",
        ],
        attaque:["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)"],
        info:["l'entité des jumeaux peut faire une double interaction, pas en même temps mais a très peu de temps d'intervalle."],
        test:["Visibilité de la double interaction sur le tableau du camion, direction de la courbe change sans plat, et dans la même case."],
        vitesse: [
          "Jumeaux lent 1.5m/s en chasse, et 2.28m/s en poursuite max.",
          "Jumeaux rapide 1.9m/s en chasse, et 3.14m/s en poursuite max.",
        ],
        son: {
          jumeaux_lent_chasse: "asset/audio/autres/1.5ms.mp3",
          jumeaux_lent_poursuite_max: "asset/audio/autres/2.28ms.mp3",
          jumeaux_rapide_chasse: "asset/audio/autres/1.9ms.mp3",
          jumeaux_rapide_poursuite_max: "asset/audio/autres/3.14ms.mp3",
        },
      },
    ],
  },
  {
    id: "raiju",
    contenu: [
      {
        nom: "Raiju",
        preuves: ["EMF 5, Orbes Fantomatique, Projecteur D.O.T.S"],
        faiblesse: ["En attaque les équipements électroniques sont perturbé."],
        force: [
          "Le Raiju est plus rapide à proximité d'équipement électronique.",
        ],
        attaque: [" à partir de 65% de santé mentale (basé sur la moyenne des joueurs)"],
        info:["Si il y a des équipements électroniques à 6m autour du raiju il ira a 2.5m/s (qu'il voit un joueur ou pas).",],
        test: ["mettre des équipements électroniques seulement dans un couloir, si en passant dans ce couloir en chasse il est très rapide, et que hors de ce couloir il ne l'est pas c'est que c'est un raiju.",],
        vitesse: [
          "Sans électronique : chasse 1.7m/s et 2.8 en poursuite max.",
          "Avec électronique : chasse  2.5 m/s.",
        ],
        son: {
          chasse_sans_electronique: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max_sans_electronique:
            "asset/audio/poursuite max 2.8ms.mp3",
          chasse_avec_electronique: "asset/audio/autres/2.5ms.mp3",
        },
      },
    ],
  },
  {
    id: "obake",
    contenu: [
      {
        nom: "Obake",
        preuves: ["EMF 5, Ultraviolet, Orbes Fantomatique"],
        faiblesse: [
          "Parfois l'entité se transforme, laissant derrière elle une preuve unique.",
        ],
        force: [
          "Lorsqu'il interagit avec l'environnement, l'Obake laisse rarement de trace (75% du temps).",
          "Il peut diviser les timer des empreintes par 2 (exemple : au lieu de 120s ça sera visible que 60s).",
        ],
        attaque: ["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)"],
        info:[
          "l'Obake peut cacher ses empreintes digitales.",
          "25% de chance de laisser une empreinte a 6 doigts.",
          "Sur un interrupteur au lieu de voir 1 doigt à l'uv on en verra 2."],
        test: ["En chasse/poursuite il change de skin minimum une fois par chasse (a chaque clignotement il a 6% de chance de changer de skin)."],
        vitesse: ["1,7m/s en chasse.", "2.8m/s en poursuite max."],
        son: {
          chasse: "asset/audio/chasse 1.7ms.mp3",
          poursuite_max: "asset/audio/poursuite max 2.8ms.mp3",
          pouvoir_des_pas_dissimule:
            "asset/audio/autres/1.7ms dissimulation.mp3",
        },
      },
    ],
  },
  {
    id: "mimic",
    contenu: [
      {
        nom: "Le Mimic",
        preuves: ["Spirit Box, Ultraviolet, Températures glaciales"],
        faiblesse: ["il y a toujours un orbe dans sa salle."],
        force: ["il peut imiter le comportement de n'importe quelle entité."],
        attaque:["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)."],
        info:[
          "l'orbe du mimic n'est pas une preuve",
          "le mimic peut tout imiter sauf les DOTS du Goryo",
          "quand il imitera un thayé, il le copiera à un stade aléatoire."],
          test:["Toujours vérifier la 4 eme preuves."],
        vitesse: ["La vitesse du Mimic, dépend de l'entité qu'il imite."],
      },
    ],
  },
  {
    id: "moroi",
    contenu: [
      {
        nom: "Moroï",
        preuves: ["Spirit Box, Écriture Fantomatique, Températures Glaciales"],
        faiblesse: [
          "Les Moroï souffrent d'hypersomnie, ce qui les affaiblit pendant de longue durée.",
        ],
        force: [
          "Plus faible sont leurs victimes, plus fort sont les Moroï.",
          "Si le moroi vous répond à la spirit box ou que vous entendez un bruit au micro parabolique, le Moroï peut vous maudir, quand vous êtes maudit vous perdez 14% de santé mentale par minutes.",
        ],
        attaque: ["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)"],
        info:[
          "Il peut changer de vitesse de course pendant une chasse si votre santé mentale monte ou descend.",
          "La malédiction ne peut pas être contrée avec une bougie dans la main.",
          "En chasse quand vous brûler un encens dans la tête d'un Moroï au lieu d'être aveugle pendant 6 secondes comme les autres entités, il le sera pendant 12 secondes."],
        test: ["Pour trouver le moroï facilement, pendant une chasse avec peu de santé mentale, prendre des pilules le fera ralentir instantanément."],
        vitesse: [
          "entre 100% et 50% de santé mentale 1.5m/s.",
          "entre 50% et 0% de santé mentale 3.7m/s.",
        ],
        son: {
          chasse_50_sante_mentale: "asset/audio/autres/1.5ms.mp3",
          chasse_0_sante_mentale: "asset/audio/autres/3.7ms.mp3",
        },
      },
    ],
  },
  {
    id: "deogen",
    contenu: [
      {
        nom: "Deogen",
        preuves: ["Spirit Box, Écriture Fantomatique, Projecteur D.O.T.S"],
        faiblesse: ["Le Deogen est tres lent a 3m de sa victime."],
        force: ["Le Deogen sent ses victimes, ça ne sert a rien de se cacher."],
        attaque: ["à partir de 50% de santé mentale (basé sur la moyenne des joueurs)"],
        info:["Peu importe si vous êtes caché le Deogen vous trouvera toujours."],
        test: ["Le plus intelligent c'est de le confronter, lorsqu'il est a 3m de vous il est très lent."],
        vitesse: ["3m/s en chasse.", "1m/s à 3m de sa victime."],
        son: {
          Chasse_loin_de_toi: "asset/audio/autres/3ms.mp3",
          Poursuite_proche_de_toi: "asset/audio/autres/0.4ms.mp3",
        },
      },
    ],
  },
  {
    id: "thayé",
    contenu: [
      {
        nom: "Thayé",
        preuves: [
          "Orbes Fantomatique, Écriture Fantomatique, Projecteur D.O.T.S",
        ],
        faiblesse: [
          "Plus vous resterez dans sa salle plus il vieillira et sera moins dangereux.",
        ],
        force: [
          "En entrant dans ses lieux le Thayé deviendra actif, agile et sera sur la défensive.",
        ],
        attaque: ["à partir de 75% de santé mentale quand il est jeune (basé sur la moyenne des joueurs)."],
        info:[
          "Au tout début de la partie le Thayé sera très actif",
          "Il a plus de 200% de chance de vous faire des interactions quand il est jeune (donc dès le début de partie).",
          "Le Thayé peut changer d'âge 10 fois.",
          "si il y a la ouija dans la partie lui demander son âge au début de partie et la fin peut vous aider."
      ],
        test: ["Après une chasse ou vous avez entendu qu'il se deplacer tres vite sans voir personne, avant la chasse suivante essayer de rester un maximum de temps dans sa salle pour le faire vieillir puis relancer une chasse (attendez dans sa salle avec un encens pour votre sécurité au cas ou il décide d'attaquer quand vous êtes la)."],
        vitesse: [
          "Thayé jeune chasse à 2.75m/s.",
          "Thayé vieux chasse à 1m/s.",
        ],
        son: {
          Chasse_jeune: "asset/audio/autres/2.75ms.mp3",
          Chasse_vieux: "asset/audio/autres/1ms.mp3",
        },
      },
    ],
  },
];

function toggleDetails(event) {
  var content = event.target.nextElementSibling;
  content.style.display = content.style.display === "none" ? "block" : "none";
}

function createEntityElement(entity) {
  var entityDiv = document.createElement("div");
  entityDiv.classList.add("entity");

  if (entity.contenu && entity.contenu.length > 0) {
    entity.contenu.forEach(function (details) {
      var entityName = document.createElement("h2");
      entityName.textContent = details.nom;
      entityName.addEventListener("click", toggleDetails);
      entityDiv.appendChild(entityName);

      var contentDiv = document.createElement("div");
      contentDiv.style.display = "none";

      if (details.preuves) {
        var evidenceList = document.createElement("ul");
        details.preuves.forEach(function (evidence) {
          var evidenceItem = document.createElement("li");
          evidenceItem.textContent = evidence;
          evidenceList.appendChild(evidenceItem);
        });
        contentDiv.appendChild(evidenceList);
      }

      if (details.faiblesse && details.faiblesse.length > 0) {
        const faiblessesTitle = document.createElement("h3");
        faiblessesTitle.textContent = "Faiblesses:";
        contentDiv.appendChild(faiblessesTitle);

        const faiblessesList = document.createElement("ul");
        details.faiblesse.forEach((faiblesse) => {
          const faiblesseItem = document.createElement("li");
          faiblesseItem.textContent = faiblesse;
          faiblessesList.appendChild(faiblesseItem);
        });
        contentDiv.appendChild(faiblessesList);
      }

      // Afficher les forces
      if (details.force && details.force.length > 0) {
        const forcesTitle = document.createElement("h3");
        forcesTitle.textContent = "Forces:";
        contentDiv.appendChild(forcesTitle);

        const forcesList = document.createElement("ul");
        details.force.forEach((force) => {
          const forceItem = document.createElement("li");
          forceItem.textContent = force;
          forcesList.appendChild(forceItem);
        });
        contentDiv.appendChild(forcesList);
      }

      if (details.attaque) {
        var attaqueParagraph = document.createElement("p");
        attaqueParagraph.textContent = "Attaque: " + details.attaque;
        contentDiv.appendChild(attaqueParagraph);
      }

      if (details.vitesse) {
        var vitesseParagraph = document.createElement("p");
        vitesseParagraph.textContent = "Vitesse: " + details.vitesse;
        contentDiv.appendChild(vitesseParagraph);
      }

      if (details.info) {
        var infoParagraph = document.createElement("p");
        infoParagraph.textContent = "Info: " + details.info;
        contentDiv.appendChild(infoParagraph);
      }

      if (details.test) {
        var testParagraph = document.createElement("p");
        testParagraph.textContent = "Test: " + details.test;
        contentDiv.appendChild(testParagraph);
      }

      if (details.son) {
        var audioContainer = document.createElement("div");
        audioContainer.classList.add("audio-container");

        if (details.son.chasse) {
          var audioElementChasse = document.createElement("audio");
          audioElementChasse.src = details.son.chasse;
          audioElementChasse.controls = true;

          var audioLabelChasse = document.createElement("p");
          audioLabelChasse.textContent = "Chasse";
          audioContainer.appendChild(audioLabelChasse);
          audioContainer.appendChild(audioElementChasse);
        }

        if (details.son.poursuite_max) {
          var audioElementPoursuiteMax = document.createElement("audio");
          audioElementPoursuiteMax.src = details.son.poursuite_max;
          audioElementPoursuiteMax.controls = true;

          var audioLabelPoursuiteMax = document.createElement("p");
          audioLabelPoursuiteMax.textContent = "Poursuite Max";
          audioContainer.appendChild(audioLabelPoursuiteMax);
          audioContainer.appendChild(audioElementPoursuiteMax);
        }

        if (details.son.pouvoir_a_3m_de_toi) {
          var audioElementPouvoir = document.createElement("audio");
          audioElementPouvoir.src = details.son.pouvoir_a_3m_de_toi;
          audioElementPouvoir.controls = true;

          var audioLabelPouvoir = document.createElement("p");
          audioLabelPouvoir.textContent = "Pouvoir à 3m de toi";
          audioContainer.appendChild(audioLabelPouvoir);
          audioContainer.appendChild(audioElementPouvoir);
        }

        if (details.son.Chasse_loin_de_toi) {
          var audioElementChasseLoin = document.createElement("audio");
          audioElementChasseLoin.src = details.son.Chasse_loin_de_toi;
          audioElementChasseLoin.controls = true;

          var audioLabelChasseLoin = document.createElement("p");
          audioLabelChasseLoin.textContent = "Chasse Loin de Toi";
          audioContainer.appendChild(audioLabelChasseLoin);
          audioContainer.appendChild(audioElementChasseLoin);
        }

        if (details.son.chasseAuDessusDe3C) {
          var audioElementChasseAuDessusDe3C = document.createElement("audio");
          audioElementChasseAuDessusDe3C.src = details.son.chasseAuDessusDe3C;
          audioElementChasseAuDessusDe3C.controls = true;

          var audioLabelChasseAuDessusDe3C = document.createElement("p");
          audioLabelChasseAuDessusDe3C.textContent = "Chasse au-dessus de 3°C";
          audioContainer.appendChild(audioLabelChasseAuDessusDe3C);
          audioContainer.appendChild(audioElementChasseAuDessusDe3C);
        }

        if (details.son.poursuiteEnDessousDe3C) {
          var audioElementPoursuiteEnDessousDe3C =
            document.createElement("audio");
          audioElementPoursuiteEnDessousDe3C.src =
            details.son.poursuiteEnDessousDe3C;
          audioElementPoursuiteEnDessousDe3C.controls = true;

          var audioLabelPoursuiteEnDessousDe3C = document.createElement("p");
          audioLabelPoursuiteEnDessousDe3C.textContent =
            "Poursuite en-dessous de 3°C";
          audioContainer.appendChild(audioLabelPoursuiteEnDessousDe3C);
          audioContainer.appendChild(audioElementPoursuiteEnDessousDe3C);
        }

        if (details.son.jumeaux_lent_chasse) {
          var audioElementJumeauxLentChasse = document.createElement("audio");
          audioElementJumeauxLentChasse.src = details.son.jumeaux_lent_chasse;
          audioElementJumeauxLentChasse.controls = true;

          var audioLabelJumeauxLentChasse = document.createElement("p");
          audioLabelJumeauxLentChasse.textContent = "Jumeaux Lent - Chasse";
          audioContainer.appendChild(audioLabelJumeauxLentChasse);
          audioContainer.appendChild(audioElementJumeauxLentChasse);
        }

        if (details.son.jumeaux_lent_poursuite_max) {
          var audioElementJumeauxLentPoursuiteMax =
            document.createElement("audio");
          audioElementJumeauxLentPoursuiteMax.src =
            details.son.jumeaux_lent_poursuite_max;
          audioElementJumeauxLentPoursuiteMax.controls = true;

          var audioLabelJumeauxLentPoursuiteMax = document.createElement("p");
          audioLabelJumeauxLentPoursuiteMax.textContent =
            "Jumeaux Lent - Poursuite Max";
          audioContainer.appendChild(audioLabelJumeauxLentPoursuiteMax);
          audioContainer.appendChild(audioElementJumeauxLentPoursuiteMax);
        }

        if (details.son.jumeaux_rapide_chasse) {
          var audioElementJumeauxRapideChasse = document.createElement("audio");
          audioElementJumeauxRapideChasse.src =
            details.son.jumeaux_rapide_chasse;
          audioElementJumeauxRapideChasse.controls = true;

          var audioLabelJumeauxRapideChasse = document.createElement("p");
          audioLabelJumeauxRapideChasse.textContent = "Jumeaux Rapide - Chasse";
          audioContainer.appendChild(audioLabelJumeauxRapideChasse);
          audioContainer.appendChild(audioElementJumeauxRapideChasse);
        }

        if (details.son.jumeaux_rapide_poursuite_max) {
          var audioElementJumeauxRapidePoursuiteMax =
            document.createElement("audio");
          audioElementJumeauxRapidePoursuiteMax.src =
            details.son.jumeaux_rapide_poursuite_max;
          audioElementJumeauxRapidePoursuiteMax.controls = true;

          var audioLabelJumeauxRapidePoursuiteMax = document.createElement("p");
          audioLabelJumeauxRapidePoursuiteMax.textContent =
            "Jumeaux Rapide - Poursuite Max";
          audioContainer.appendChild(audioLabelJumeauxRapidePoursuiteMax);
          audioContainer.appendChild(audioElementJumeauxRapidePoursuiteMax);
        }

        if (details.son.chasse_sans_electronique) {
          var audioElementChasseSansElectronique =
            document.createElement("audio");
          audioElementChasseSansElectronique.src =
            details.son.chasse_sans_electronique;
          audioElementChasseSansElectronique.controls = true;

          var audioLabelChasseSansElectronique = document.createElement("p");
          audioLabelChasseSansElectronique.textContent =
            "Chasse sans électronique";
          audioContainer.appendChild(audioLabelChasseSansElectronique);
          audioContainer.appendChild(audioElementChasseSansElectronique);
        }

        if (details.son.poursuite_max_sans_electronique) {
          var audioElementPoursuiteMaxSansElectronique =
            document.createElement("audio");
          audioElementPoursuiteMaxSansElectronique.src =
            details.son.poursuite_max_sans_electronique;
          audioElementPoursuiteMaxSansElectronique.controls = true;

          var audioLabelPoursuiteMaxSansElectronique =
            document.createElement("p");
          audioLabelPoursuiteMaxSansElectronique.textContent =
            "Poursuite Max sans électronique";
          audioContainer.appendChild(audioLabelPoursuiteMaxSansElectronique);
          audioContainer.appendChild(audioElementPoursuiteMaxSansElectronique);
        }

        if (details.son.chasse_avec_electronique) {
          var audioElementChasseAvecElectronique =
            document.createElement("audio");
          audioElementChasseAvecElectronique.src =
            details.son.chasse_avec_electronique;
          audioElementChasseAvecElectronique.controls = true;

          var audioLabelChasseAvecElectronique = document.createElement("p");
          audioLabelChasseAvecElectronique.textContent =
            "Chasse avec électronique";
          audioContainer.appendChild(audioLabelChasseAvecElectronique);
          audioContainer.appendChild(audioElementChasseAvecElectronique);
        }

        if (details.son.chasse_50_sante_mentale) {
          var audioElementChasse50SanteMentale =
            document.createElement("audio");
          audioElementChasse50SanteMentale.src =
            details.son.chasse_50_sante_mentale;
          audioElementChasse50SanteMentale.controls = true;

          var audioLabelChasse50SanteMentale = document.createElement("p");
          audioLabelChasse50SanteMentale.textContent =
            "Chasse 50% Santé Mentale";
          audioContainer.appendChild(audioLabelChasse50SanteMentale);
          audioContainer.appendChild(audioElementChasse50SanteMentale);
        }

        if (details.son.chasse_0_sante_mentale) {
          var audioElementChasse0SanteMentale = document.createElement("audio");
          audioElementChasse0SanteMentale.src =
            details.son.chasse_0_sante_mentale;
          audioElementChasse0SanteMentale.controls = true;

          var audioLabelChasse0SanteMentale = document.createElement("p");
          audioLabelChasse0SanteMentale.textContent =
            "Chasse - 0% Santé Mentale";
          audioContainer.appendChild(audioLabelChasse0SanteMentale);
          audioContainer.appendChild(audioElementChasse0SanteMentale);
        }

        if (details.son.Poursuite_proche_de_toi) {
          var audioElementPoursuiteProche = document.createElement("audio");
          audioElementPoursuiteProche.src = details.son.Poursuite_proche_de_toi;
          audioElementPoursuiteProche.controls = true;

          var audioLabelPoursuiteProche = document.createElement("p");
          audioLabelPoursuiteProche.textContent = "Poursuite Proche de Toi";
          audioContainer.appendChild(audioLabelPoursuiteProche);
          audioContainer.appendChild(audioElementPoursuiteProche);
        }

        if (details.son.Chasse_jeune) {
          var audioElementChasseJeune = document.createElement("audio");
          audioElementChasseJeune.src = details.son.Chasse_jeune;
          audioElementChasseJeune.controls = true;

          var audioLabelChasseJeune = document.createElement("p");
          audioLabelChasseJeune.textContent = "Chasse Jeune";
          audioContainer.appendChild(audioLabelChasseJeune);
          audioContainer.appendChild(audioElementChasseJeune);
        }

        if (details.son.Chasse_vieux) {
          var audioElementChasseVieux = document.createElement("audio");
          audioElementChasseVieux.src = details.son.Chasse_vieux;
          audioElementChasseVieux.controls = true;

          var audioLabelChasseVieux = document.createElement("p");
          audioLabelChasseVieux.textContent = "Chasse Vieux";
          audioContainer.appendChild(audioLabelChasseVieux);
          audioContainer.appendChild(audioElementChasseVieux);
        }

        contentDiv.appendChild(audioContainer);
      }

      entityDiv.appendChild(contentDiv);
    });
  }

  document.querySelector(".entities-container").appendChild(entityDiv);
}

entite.forEach(createEntityElement);

var darkModeEnabled = false;

function toggleDarkMode() {
  var body = document.body;
  darkModeEnabled = !darkModeEnabled;

  if (darkModeEnabled) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }

  updateDarkModeButton();
}

function updateDarkModeButton() {
  var toggleButton = document.querySelector(".toggleButton");
  toggleButton.innerHTML = darkModeEnabled ? "Light Mode" : "Dark Mode";
}

// var playButtons = document.querySelectorAll(".lecture");
// var audioElements = document.querySelectorAll("audio");

// for (var i = 0; i < playButtons.length; i++) {
//   playButtons[i].addEventListener("click", function () {
//     var audioId = this.getAttribute("data-audio");
//     var audioElement = document.querySelector("." + audioId);

//     if (audioElement) {
//       audioElement.play().catch(function (error) {
//         console.error("Erreur de lecture :", error);
//       });
//     }
//   });
// }

// var entiteNoms = document.querySelectorAll(".entite-nom");

// entiteNoms.forEach(function (entiteNom) {
//   entiteNom.addEventListener("click", function () {
//     var article = this.parentElement;
//     toggleArticle(article.id);
//   });
// });

// function toggleArticle(articleId) {
//   var article = document.getElementById(articleId);
//   var entiteArticle = article.querySelector(".entite-article");

//   var closeButton = entiteArticle.querySelector(".close-button");
//   if (!closeButton) {
//     closeButton = document.createElement("button");
//     closeButton.className = "close-button";
//     closeButton.innerHTML = "&times;";
//     closeButton.onclick = function () {
//       toggleArticle(articleId);
//     };
//     entiteArticle.appendChild(closeButton);
//   }

//   entiteArticle.style.display =
//     entiteArticle.style.display === "none" || entiteArticle.style.display === ""
//       ? "block"
//       : "none";
// }

// function toggleRapid() {
//   var entitesARendreRapides = [
//     "Les-Jumeaux",
//     "Raiju",
//     "Moroi",
//     "Deogen",
//     "Thaye",
//   ];
//   entitesARendreRapides.forEach(function (entiteId) {
//     var entiteNom = document.querySelector("#" + entiteId + " .entite-nom h2");
//     if (entiteNom) {
//       if (entiteNom.style.color === "red") {
//         entiteNom.style.color = "";
//       } else {
//         entiteNom.style.color = "red";
//       }
//     }
//   });
// }

// function toggleLente() {
//   var entitesARendreLentes = ["Revenant", "Hantu"];
//   entitesARendreLentes.forEach(function (entiteId) {
//     var entiteNom = document.querySelector("#" + entiteId + " .entite-nom h2");
//     if (entiteNom) {
//       if (entiteNom.style.color === "green") {
//         entiteNom.style.color = "";
//       } else {
//         entiteNom.style.color = "green";
//       }
//     }
//   });
// }

// function toggleNormal() {
//   var entitesARendreNormal = [
//     "Esprit",
//     "Spectre",
//     "Fantome",
//     "Poltergeist",
//     "Banshee",
//     "Djin",
//     "Cauchemar",
//     "Ombre",
//     "Demon",
//     "Yurei",
//     "Oni",
//     "Yokai",
//     "Goryo",
//     "Myling",
//     "Onryo",
//     "Obake",
//   ];
//   entitesARendreNormal.forEach(function (entiteId) {
//     var entiteNom = document.querySelector("#" + entiteId + " .entite-nom h2");
//     if (entiteNom) {
//       if (entiteNom.style.color === "blue") {
//         entiteNom.style.color = "";
//       } else {
//         entiteNom.style.color = "blue";
//       }
//     }
//   });
// }
