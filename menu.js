
const menu = {
    entrees: [
        {
            nom: "Alloco",
            prix: 4,
            description: "Banane plantain frit, croustillante",
            image: "https://i.pinimg.com/originals/dc/84/93/dc849346deecc3bbbab289531523486a.jpg"
        },
        {
            nom: "garba",
            prix: 15,
            description: "Semoule de manioc avec poisson frit",
            image: "https://i.pinimg.com/474x/0a/e7/36/0ae73658a88fac1c18211c498a9009e3.jpg"
        },
        {
            nom:" spaghettis bolognaise",
            prix: 10,
            description: "Pates accompagnées d'une sauce tomate à la viande.Classique Italien",
            image:"https://tse4.mm.bing.net/th/id/OIP.k8XKkoMFZl8x7c64r6k5FQHaE9?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            nom:"Steak Frites",
            prix: 11.80,
            description:"Steak grillé servi avec des frites croustillantes",
            image:"https://www.rockrecipes.com/wp-content/uploads/2018/02/Steak-Frites-close-up-photo-of-single-serving-on-white-plate.jpg"
        },
        {
            nom:"Poulet braisé",
            prix:12,
            description:"Poulet mariné aux epices puis grillé",
            image:"https://tse1.mm.bing.net/th/id/OIP.l9O74_wCNuF8QIt7_BTB6wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            nom:"soupe aux légumes",
            prix: 8,
            description:"à base de poireaux, carottes et pommes de terre",
            image:"https://cdn.pixabay.com/photo/2016/06/01/21/40/soup-1429793_1280.jpg"
        },
        {
            nom:"Couscous",
            prix: 12,
            description:"semoule de blé dur arrosée de bouillon , garnie de viande et de légumes",
            image:"https://th.bing.com/th/id/R.e1231bc8ce01255d3a6df94d6050a6b0?rik=4C0f9YvyvcDN5g&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0006%2f2701%2f5745%2farticles%2fcouscous-algerien-marocain-tunisien-recette-preparation_1024x1024.jpg%3fv%3d1679757149&ehk=Q4myebqN8z8LhBdKB8Vut9NKK9k4g64EzrAU4ShXIEg%3d&risl=&pid=ImgRaw&r=0"

        },
        {
            nom:"Salade",
            prix:20,
            description:" salade composé de poulet accompagné et des frites",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWG03yJiw12v1IVKK8GntbAMtleJjSn9vfA&s"
        }

    ],
    desserts: [
        {
            nom: "Dégué",
            prix: 10,
            description: "Dessert Westaf à base de couscous de mil, yaourt et sucre",
            image: "https://img.freepik.com/photos-gratuite/vue-face-du-delicieux-dessert-sain_23-2148579386.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            nom:"Tiramisu aux fruits rouges",
            prix:18,
            description:"Biscuits imbibés légèrement sucreés , crème mascarpone vanillée et un mélange de framboises et fraises",
            image:"https://media.houra.fr/images/widget/recette/gd_recette_TiramisuFruit.jpg"
        },
        {
            nom:"verrine chocolat-crème",
            prix:13 ,
            description:"des couches de biscuit chocolaté émietté avec crème blanche",
            image:"https://t3.ftcdn.net/jpg/02/83/75/90/360_F_283759099_6dKKjPSCGKCR0hHgFkzvEd0JqH9baN0W.jpg"
        },
        {
            nom:"Tartelette citron meringuée",
            prix:19.99,
            description:"fond de pate sablée croustillante avec une crème citron bien acidulée et une meringue dorée au chalumeau",
            image:"https://files.meilleurduchef.com/mdc/photo/recette/tartelette-citron-meringuee/tartelette-citron-meringuee-2-640.jpg"
        
        },
        {
            nom:"Panna cotta mangue-coco",
            prix:11,
            description:"Une panna cotta au lait de coco, douce et onctueuse, recouverte d'un coulis de mangue fraîche. Un dessert exotique et très parfumé.",
            image:"https://kara-coconut.fr/wp-content/uploads/2019/04/Panna-Cotta-exotique-noix-de-coco-et-mangue.jpg"
        },
        {
            nom:"cookie cup chocolat-noisette",
            prix: 9,
            description:"Un petit “gobelet” en pâte à cookie garni d'une ganache chocolat-noisette fondante. Gourmandise maximale.",
            image:"https://image.over-blog.com/m19rpIvY6pOIlAFLOQF7ZVUA3Q8=/filters:no_upscale()/image%2F1044325%2F20220210%2Fob_368968_mini-cookies-cup-195.jpg"
        },
        {
            nom:"Gnonmi",
            prix: 5.60,
            description:"Galettes à base de farine de riz ou mil fortement accompagné avec du lait",
            image:"https://kelianfood.com/wp-content/uploads/2022/09/Gnomi-by-kelianfood.png"

 
        }

    ],
    boissons: [
        {
            nom: "Jus de bissap",
            prix: 2.5,
            description: "Boisson à base d'hibiscus",
            image: "https://cdn.aistoucuisine.com/assets/5524ef09-bb82-4de2-908f-040f2b1614d0/jus-bissap"
        },

        {
            nom:"gnamankoudji",
            prix:2.5,
            description:"Boisson à base de gingembre",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEizJXNKQkuIEBQnpEUHRM-hRRL8IEBIRKWsOy2uvrBSK23jeQIaPkTp8Zc9X5Ouyz3gL6NhIPRWsqvO5wS3y16ZhwOpt6V53mOGRjF8&s=10"
        },
        {
            nom:"Menthe au lait",
            prix: 2.5,
            description:"Boisson à base de menthe et du lait",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuPMD25DvQ9eaFK_xo_rjzhY_XjGfy7WjDQ&s"
        },
        {
            nom:"coca",
            prix:2.43,
            image:"https://souriredessaveurs.com/2977-large_default/coca-cola-boite-metal-33-cl.jpg"
        },
        {
            nom:"cocktailde fruit",
            prix:10,
            image:"https://www.shutterstock.com/image-photo/drinks-alcoholic-mocktail-tragos-fotos-600nw-2597330015.jpg"
        },
        {
            nom:"champagne",
            prix: 25.50,
            image:"https://media.istockphoto.com/id/1178741587/fr/photo/toast-de-c%C3%A9l%C3%A9bration-avec-le-champagne.jpg?s=612x612&w=0&k=20&c=AkA33mknYGxUcH2dceintrviYoRMwGWAl-w1EKup6ww="
        }




    ]
};


let commande = [];
let total = 0;

function init() {
    afficherEtape("Entrées", menu.entrees, passerAuxDesserts);
}


function passerAuxDesserts() {
    afficherEtape("Desserts", menu.desserts, passerAuxBoissons);
}

function passerAuxBoissons() {
    afficherEtape("Boissons", menu.boissons, afficherResume);
}


function afficherEtape(titre, items, prochaineEtape) {
    const container = document.getElementById("menu");

    
    container.innerHTML = "";


    const h2 = document.createElement("h2");
    h2.textContent = titre;
    container.appendChild(h2);


    const section = document.createElement("div");
    section.classList.add("section");

    
    items.forEach(item => {
        const card = creerCard(item, prochaineEtape);
        section.appendChild(card);
    });

    container.appendChild(section);
}

function creerCard(item, prochaineEtape) {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <img src="${item.image}" alt="${item.nom}">
        <div class="card-content">
            <h3>${item.nom}</h3>
            <p class="description">${item.description}</p>
            <p class="price">${item.prix}€</p>
            <button>Choisir</button>
        </div>
    `;


    const bouton = div.querySelector("button");
    bouton.addEventListener("click", () => {
        ajouterACommande(item);
        prochaineEtape();
    });

    return div;
}

function ajouterACommande(item) {
    commande.push(item.nom);
    total += item.prix;
}

function afficherResume() {
    const container = document.getElementById("menu");

    container.innerHTML = `
        <h2> Votre commande</h2>
        <p>${commande.join(" + ")}</p>
        <h3>Total : ${total}€</h3>
        <button onclick="location.reload()">commender</button>
    `;
}

init();