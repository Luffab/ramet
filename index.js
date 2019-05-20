const Discord = require('discord.js');
const bot = new Discord.Client();

const random = [
    "Galeries Api",
    "Test Staph Kit",
    "Test Strepto Kit",
    "Listeria",
    "Heamophilus",
    "Neisseria",
    "Aspergillus",
    "Mycoses",
    "Candida albicans",
    "Penicillium",
    "Entamoeba",
    "Ascaris",
    "Amibe",
    "Liquides d'épanchements",
    "Vibrio",
    "Aeromonas",
    "Rôles des antibiotiques",
    "Oxyure",
    "Trichocéphale",
    "Anguillules",
    "Grande douve du foie",
    "Taenia",
    "Paludisme",
    "Toxoplasmose",
    "Schistosoma",
    "Trichomonas",
    "Giardia",
    "Staphylococcus",
    "Streptococcus",
    "Gélose choco + PVX",
    "Gélose au sang + ANC",
    "Gélose VCA3",
    "Gélose HAE",
    "Géloses pour prélèvements génitaux",
    "Géloses pour coproculture",
    "Géloses pour LCR",
    "Géloses pour expectoration",
    "Enterobactéries",
    "Pseudomonas",
    "Enterococcus",
    "Géloses Drigalski",
    "Treponema"
];

const help = [
    "**Putain de bordel de merde, ca en fait des mots. Tape ces commandes et tu sauras tout de ce que tu as choisi**",
    "+random --> Te donne un mot au pif. Sauras-tu le définir ?",
    "+api",
    "+listeria",
    "+heamophilus",
    "+neisseria",
    "+aspergillus",
    "+mycoses",
    "+candida albicans",
    "+penicillium",
    "+entamoeba",
    "+ascaris",
    "+amibe",
    "+epanchements",
    "+vibrio",
    "+aeromonas",
    "+antibiotiques",
    "+oxyure",
    "+trichocéphale",
    "+anguillules",
    "+grande douve du foie",
    "+taenia",
    "+paludisme",
    "+toxoplasmose",
    "+schistosoma",
    "+trichomonas",
    "+giardia",
    "+staphylococcus",
    "+streptococcus",
    "+pvx",
    "+anc",
    "+vca3",
    "+hae",
    "+prelevgénitaux",
    "+coproculture",
    "+lcr",
    "+expectoration",
    "+enterobactéries",
    "+pseudomonas",
    "+enterococcus",
    "+drigalski",
    "+treponema"
];

bot.on('ready', function() {
    bot.user.setActivity("+help");
})

bot.on('message', function(message) {
    if(message.content === "+help") {
        message.reply("Va voir tes messages privés");
        message.author.send(help);
    }
    /*
    Corps du if que tu copieras proprement à la suite à chaque nouvelle définition.
    if(message.content === "+lemotadefinirenminuscule") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Tu mets la définition la") 
        .setImage("Tu mets le lien de l'image la")
        .setFooter("Tu mets le mot à définir la")
        .setTimestamp()
        message.channel.send({embed})
    } */

    /*
    A copier coller a chaque occurence du if et a compléter.
    Bien etendu, tu ne copies pas ces phrases ni les /*
    if(message.content === "") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("")
        .setImage("")
        .setFooter("")
        .setTimestamp()
        message.channel.send({embed})
    }*/

    if(message.content === "+random") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription(random[Math.floor(Math.random() * random.length)])
        .setFooter("A définir")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+api") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Ensemble de petits tubes prêts à l’emploi permettant l'identification de micro-organismes par la réalisation rapide et facile de tests biochimiques miniaturisés.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Api20e.jpg/500px-Api20e.jpg")
        .setFooter("Galerie API")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+listeria") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Bacilles de petite taille, mobiles à 20 °C (grâce à des flagelles), gram positif. Toutes les espèces sont catalases positives, non sporulées, et anaérobies facultatifs. Ce sont des bactéries ubiquistes qu’on trouve presque partout ; dans le sol, en épiphyte sur les végétaux, l’eau, etc. Très résistantes, elles peuvent survivre aux traitements de nettoyage-désinfection et ainsi persister dans les ateliers de production de l’industrie agroalimentaire.")
        .setImage("https://previews.123rf.com/images/drmicrobe/drmicrobe1702/drmicrobe170200184/71355402-illustration-3d-de-la-bact%C3%A9rie-listeria-monocytogenes-bact%C3%A9rie-gram-positive-avec-flagelles-qui-provoque.jpg")
        .setFooter("Listeria")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+haemophilus") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Les bactéries sont des coccobacilles ou de petits bâtonnets immobiles à Gram négatif. Elles sont très exigeantes et peuvent être sélectionnées sur la gélose chocolat + PVX + Bacitracine")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Haemophilus_influenzae_01.jpg/290px-Haemophilus_influenzae_01.jpg")
        .setFooter("Haemophilus")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+neisseria") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Coques le plus souvent par paire (diplocoques) ressemblant à des grains de café. Ce sont des bactéries immobiles, aérobie strict, chimiohétérotrophe et oxydase positive. Les différentes espèces peuvent être différenciables entre elles par des tests d'utilisation des sucres (selon leur capacité à utiliser le glucose, le maltose, le lactose et le saccharose).")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Neisseria_gonorrhoeae_02.png/290px-Neisseria_gonorrhoeae_02.png")
        .setFooter("Neisseria")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+aspergillus") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Champignons filamenteux, de type moisissure, dont la colonie se présente sous forme duveteuse.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/4/4f/Aspergillus.jpg")
        .setFooter("Aspergillus")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+mycoses") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Infection provoquée par une ou plusieurs espèces de micro-champignons parasites ou saprophytes.")
        .setImage("https://mobile.allodocteurs.fr/media/largerMobile/une_dossier_mycoses_301018.jpg")
        .setFooter("Mycoses")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+candida albicans") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Organisme vivant à l'état naturel dans les muqueuses de l'être humain. On le retrouve dans 80 % de la population, et il n'entraîne habituellement aucune maladie ou symptôme en particulier. C'est un organisme commensal saprophyte.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Candida_albicans.jpg/290px-Candida_albicans.jpg")
        .setFooter("Candida albicans")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+penicillium") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Champignons filamenteux. Le conidiophore ramifié possède une forme ressemblant à celle d’un pinceau. Les conidies sont disposées en longues chaînes. Le thalle est vert ou blanc. Ce genre comprend entre 100 et 250 espèces.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Penicillium.jpg/290px-Penicillium.jpg")
        .setFooter("Penicillium")
        .setTimestamp()
        message.channel.send({embed})
    }
    
    if(message.content === "+entamoeba") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Parasite qui infecte le gros intestin provoquant une infection amibienne, produisant l'amibiase, une maladie parasitaire qui sévit en Amérique latine.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Entamoeba_histolytica_01.jpg/290px-Entamoeba_histolytica_01.jpg")
        .setFooter("Entamoeba")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+ascaris") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Ver nématode (genre des ascarides) parasite intestinal qui provoque l’ascaridiose, maladie strictement humaine. C’est le plus grand des nématodes, et la plus fréquente des helminthiases, qui concernent l'homme.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ascaris_lumbricoides.jpeg/290px-Ascaris_lumbricoides.jpeg")
        .setFooter("Ascaris")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+amibe") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Microorganisme appartenant à divers groupes de cellules complexes eucaryotes. Dans l'usage du terme, amibe désigne en fait des organismes membres de nombreux groupes de protistes amiboïdes de différents taxons eucaryotes : Amoebozoa, Rhizaria, Heterokonta, Excavata et Opisthokonta1 : il ne s'agit donc pas d'un groupe monophylétique mais polyphylétique.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Amoebas_from_Ehrenberg.jpg/220px-Amoebas_from_Ehrenberg.jpg")
        .setFooter("Amibe")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+epanchements") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Accumulation gazeuse ou liquide. Les pathologies pleurales se manifestent par des épanchements liquidiens ou gazeux.")
        .setFooter("Epanchements")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+vibrio") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Appartiennent à la famille des Vibrionaceae. Ce sont de petits bacilles, de formes fréquemment incurvées dites « en virgule », extrêmement mobiles.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Vibrio_cholerae.jpg/290px-Vibrio_cholerae.jpg")
        .setFooter("Vibrio")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+aeromonas") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Regroupe des bactéries de la classe des Gammaproteobacteria appartenant à la famille des Aeromonadaceae. Ce sont des bacilles droits à extrémités arrondies, à coccoïdes, à coloration Gram négatif, mobiles, anaérobies facultatifs, chimioorgano-hétérotrophes, oxydase positive et catalase positive.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Aeromonas_hydrophila.jpg/290px-Aeromonas_hydrophila.jpg")
        .setFooter("Aeromonas")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+antibiotiques") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Substance naturelle ou synthétique qui détruit ou bloque la croissance des bactéries. Dans le premier cas, on parle d'antibiotique bactéricide et dans le second cas d'antibiotique bactériostatique.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Medication_amoxycillin_capsule.JPG/220px-Medication_amoxycillin_capsule.JPG")
        .setFooter("Antibiotiques")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+oxyure") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Espèce de vers parasitaires de la classe des Secernentea. C'est la seule espèce du genre Enterobius qui parasite l'homme. Il s'agit d'un parasite cosmopolite du gros intestin chez l'homme.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/7/7b/Threadworm.jpg")
        .setFooter("Oxyure")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+trichocéphale") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Maladie parasitaire humaine due à Trichuris trichiura, nématode ou ver rond (le trichocéphale) de 40 à 50 mm. C'est une parasitose mineure mais cosmopolite, extrêmement répandue. Elle est le plus souvent asymptomatique et donc non traitée.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Trichuriasis_lifecycle.jpg/260px-Trichuriasis_lifecycle.jpg")
        .setFooter("Trichocéphale")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+anguillules") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Nom vernaculaire donné à plusieurs nématodes, vers ronds, qui vivent dans le sol et sur certaines plantes. Ils sont souvent minuscules, microscopiques. Ils ne dépassent pas en général 0,2 à 1 mm de longueur, mais quelques espèces atteignent cependant 5 à 10 mm. Ils sont filiformes, incolores et transparents, vivant dans le sol, dans les plantes et les matières animales en décomposition.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Strongyloides_stercoralis_larva.jpg/220px-Strongyloides_stercoralis_larva.jpg")
        .setFooter("Anguillules")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+grande douve du foie") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Trématode de grande taille. C'est un ver plat parasite infectant les organes hépatobiliaires - plus particulierement le foie - des herbivores ruminants, particulièrement les ovins, souvent les bovins L'homme est un hôte le plus souvent accidentel, en tant que mauvais hôte définitif.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Fasciola-hepatica-adults.jpg/290px-Fasciola-hepatica-adults.jpg")
        .setFooter("Grande douve du foie")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+taenia") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Cestode très voisin du Taenia saginata (ténia du bœuf). Dans leur forme adulte, ils parasitent l'intestin de l'homme, réalisant un taeniasis, maladie le plus souvent bénigne.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Taenia_solium_scolex.JPG/290px-Taenia_solium_scolex.JPG")
        .setFooter("Taenia")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+paludisme") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("maladie infectieuse due à un parasite du genre Plasmodium, propagée par la piqûre de certaines espèces de moustiques anophèles.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Plasmodium.jpg/220px-Plasmodium.jpg")
        .setFooter("Paludisme")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+toxoplasmose") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Infection parasitaire dont l'agent est le protozoaire Toxoplasma gondii1. Le parasite infecte le plus souvent des animaux à sang chaud, y compris l’être humain, mais son hôte définitif est un félidé (dont le chat fait partie).")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/3/39/Toxoplasma_gondii_tachy.jpg")
        .setFooter("Toxoplasmose")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+schistosoma") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Genre de trématodes parasitaires. En général, ces vers plats sont accouplés en permanence. En tant que parasites de l'homme et des animaux ils sont responsables des bilharzioses. Les signes cliniques durant la phase d'état sont dus à la formation de granulomes dans les tissus.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Schistosoma_mansoni_trematodes.jpg/290px-Schistosoma_mansoni_trematodes.jpg")
        .setFooter("Schistosoma")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+trichomonas") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Espèce de flagellés du genre Trichomonas, dont la présence sur les muqueuses génito-urinaires détermine la trichomonose urogénitale. C'est un parasite de l'être humain. Sa transmission est sexuelle (infection sexuellement transmissible ou IST) car il est très sensible à la dessiccation (il a donc besoin de milieux humides).")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Trichomonas_vaginalis_01.jpg/290px-Trichomonas_vaginalis_01.jpg")
        .setFooter("Trichomonas")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+giardia") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Espèce de protozoaires flagellés responsable d'une parasitose intestinale, la giardiase (aussi appelée giardiose ou lambliase), dans les espèces humaine, canine et féline.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/c/c0/Giardia_lamblia.jpg")
        .setFooter("Giardia")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+staphylococcus") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Coques, Gram positifs, coagulase positive pour Staphylococcus aureus, Staphylococcus intermedius, Staphylococcus pseudintermedius, Staphylococcus delphini et certains Staphylococcus schleiferi, négatif pour les autres.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Staphylococcus_aureus_Gram.jpg/290px-Staphylococcus_aureus_Gram.jpg")
        .setFooter("Staphylococcus")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+streptococcus") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Vaste ensemble de micro-organismes ubiquitaires et qui comprend de nombreuses espèces. En raison de leur nombre, on distingue les espèces pathogènes des espèces commensales et saprophytes.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Streptococcus_pyogenes.jpg/290px-Streptococcus_pyogenes.jpg")
        .setFooter("Streptococcus")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+pvx") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Milieu d'isolement plus particulièrement destiné à la croissance des souches exigeantes appartenant aux genres Neisseria, Haemophilus, Streptococcus pneumoniae")
        .setImage("https://www.biomerieux.fr/sites/subsidiary_fr/files/styles/large/public/chocolat_haemophilus_2.jpg")
        .setFooter("Gélose Chocolat PolyViteX")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+anc") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Milieu de culture sélectif des bactéries à gram positif.")
        .setImage("http://www.bio-rad.com/webroot/web/images/cdg/products/microbiology/sku_view/global/cmd_63954_view.jpg")
        .setFooter("Gélose au sang Acide Nalidixique")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+vca3") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Gélose enrichie et selective des Neisseiria patogènes")
        .setImage("https://www.biomerieux.fr/sites/subsidiary_fr/files/styles/large/public/columbia_anc_5pc_sang_mouton.jpg")
        .setFooter("Gélose VCA3")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+hae") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Gélose chocolat + PVX + Bacitracines. Sélectif des Haemophilus")
        .setImage("http://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CPSE_kESC2.JPG/440px-CPSE_kESC2.JPG")
        .setFooter("Gélose HAE")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+prelevgenitaux") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Consiste à prélever quelques cellules ou des sécrétions génitales, le plus souvent dans le but de déceler une infection uro-génitale (notamment une infection sexuellement transmissible).")
        .setFooter("Prélèvements génitaux")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+coproculture") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Culture bactériologique de selles qui, via une coproscopie, décèle la présence de germes pathogènes normalement absents du tube digestif ou anormalement nombreux.")
        .setImage("https://resize.prod.docfr.doc-media.fr/img/var/doctissimo/storage/images/fr/www/sante/analyses-medicales/coproculture-examen-bacteriologique-des-selles/317434-2-fre-FR/coproculture-examen-bacteriologique-des-selles.jpg")
        .setFooter("Coproculture")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "expectoration") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Expulsion par la bouche, au cours d'effort de toux, de produits pathologiques provenant des voies broncho-pulmonaires et aériennes supérieures.")
        .setImage("https://www.santescience.fr/wp-content/uploads/2018/03/Expectoration-1.jpg")
        .setFooter("Géloses pour expectorations")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "enterobactéries") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Bacilles Gram négatif retrouvés partout dans le sol, dans l’eau, et surtout dans l’intestin (entéro-) de l’homme et des animaux. Ils constituent l'une des plus importantes familles de bactéries, autant du point de vue quantitatif (plus d'une quarantaine de genres) que du point de vue qualitatif.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/EscherichiaColi_NIAID.jpg/290px-EscherichiaColi_NIAID.jpg")
        .setFooter("Enterobactéries")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "pseudomonas") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Bacilles à Gram négatif, oxydase +")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pseudomonas_aeruginosa_gram.jpg/290px-Pseudomonas_aeruginosa_gram.jpg")
        .setFooter("Pseudomonas")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+enterococcus") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Bactérie commensale à Gram positif, habitant le tube digestif des humains et d'autres mammifères.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Enterococcus_faecalis_SEM_01.png/290px-Enterococcus_faecalis_SEM_01.png")
        .setFooter("Enterococcus")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+drigalski") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Isolement des bacilles et colibacilles Gram- de culture facile (enterobactéries).")
        .setImage("https://www.biomerieux.fr/sites/subsidiary_fr/files/styles/original/public/blse_0.jpg")
        .setFooter("Géloses Drigalski")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+treponema") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Genre de bactéries hélicoïdales et motiles appartenant à la famille des Spirochaetaceae.")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TreponemaPallidum.jpg/290px-TreponemaPallidum.jpg")
        .setFooter("Treponema")
        .setTimestamp()
        message.channel.send({embed})
    }

    if(message.content === "+lcr") {
        const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setDescription("Mdr je sais pas")
        .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdEDQ9U3qpDL3qrGlqqGob_byxMwjb7lXPi2LOt1onq1-cdeW")
        .setFooter("Géloses pour LCR")
        .setTimestamp()
        message.channel.send({embed})
    }
})

bot.login('NTc4NTA0NTI0OTIzMjczMjE2.XN0mlA.U4IBUzLSavMPJ-mXbigLCLcidFw');