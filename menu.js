
const dishes = [

  
  { cat: 'entree',  nom: 'salade',               prix: 4,     description: 'Salade composé de legume et d\'oeuf.',                                                image: 'https://img.freepik.com/photos-gratuite/vue-dessus-delicieuse-salade-faite-maison-nombreux-ingredients-dans-assiette-fond-couleurs-melange-vert-noir_179666-20005.jpg?semt=ais_hybrid&w=740&q=80',                                                                                                                                   tags: ['vege', 'sg'] },
  { cat: 'entree',  nom: 'Soupe aux légumes',    prix: 8,     description: 'À base de poireaux, carottes et pommes de terre, douce et réconfortante.',                image: 'https://cdn.pixabay.com/photo/2016/06/01/21/40/soup-1429793_1280.jpg',                                                                                                                                          tags: ['vege', 'sg'] },
  { cat: 'entree',  nom: 'Bruschetta',      prix: 9,     description: 'Une tranche de pain grillé, frottée à l\'ail et arrosée d\'un filet d\'huile d\'olive.',                       image: 'https://media.istockphoto.com/id/481765835/fr/photo/la-bruschetta-italienne-maison-hors-d%C5%93uvre.jpg?s=612x612&w=0&k=20&c=MeTT33w8BRCgxeW1B-4VTYAh5lhoQ1P-XHycCBon1_0=',                                                                                                                tags: ['vege'] },
  { cat: 'entree', nom:'Rouleaux de printemps aux crevettes', prix: 10,  description:'Rouleaux de printemps aux crevettes, présentés en bouchées élégantes',  image: 'https://img.freepik.com/photos-gratuite/high-angle-view-vegan-salad-with-avocat_176474-2671.jpg?semt=ais_hybrid&w=740&q=80' ,   tags:['sg']},
  {cat: 'entree', nom:'Une assiette d\'antipasti',   prix:13,   description:'composé de jambon cru, fromage grillé,une salade avec tomates cerises et feuilles vertes', image:'https://previews.123rf.com/images/sergeybogachuk/sergeybogachuk1710/sergeybogachuk171000053/88231618-appetizing-dish-of-meat-and-cheese-with-greens-on-a-wooden-background.jpg',   tags:['sg']},  

  { cat: 'plat',    nom: 'Spaghettis bolognaise',prix: 10,    description: 'Pâtes accompagnées d\'une sauce tomate à la viande. Classique Italien.',                  image: 'https://tse4.mm.bing.net/th/id/OIP.k8XKkoMFZl8x7c64r6k5FQHaE9?rs=1&pid=ImgDetMain&o=7&rm=3',                                                                                                             tags: [] },
  { cat: 'plat',    nom: 'Poulet braisé',        prix: 12,    description: 'Poulet mariné aux épices puis grillé lentement au feu de bois.',                          image: 'https://tse1.mm.bing.net/th/id/OIP.l9O74_wCNuF8QIt7_BTB6wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',                                                                                                                tags: ['sg', 'epice'] },
  { cat: 'plat',    nom: 'Couscous',             prix: 12,    description: 'Semoule de blé dur arrosée de bouillon, garnie de viande et de légumes.',                 image: 'https://th.bing.com/th/id/R.e1231bc8ce01255d3a6df94d6050a6b0?rik=4C0f9YvyvcDN5g&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0006%2f2701%2f5745%2farticles%2fcouscous-algerien-marocain-tunisien-recette-preparation_1024x1024.jpg%3fv%3d1679757149&ehk=Q4myebqN8z8LhBdKB8Vut9NKK9k4g64EzrAU4ShXIEg%3d&risl=&pid=ImgRaw&r=0', tags: [] },
  { cat: 'plat',    nom: 'garba',   prix: 15,    description: 'Semoule de manioc avec poison frit , plat populaire Ivoirien.',                                        image: 'https://i.pinimg.com/474x/0a/e7/36/0ae73658a88fac1c18211c498a9009e3.jpg',                                                                               tags: ['sg', 'epice'] },
  { cat: 'plat',    nom: 'ndolé',   prix: 14,    description: 'Plat préparé à base d\'une plante légumière dont les feuilles sont consommées fraîche.',                  image: 'https://thumbs.dreamstime.com/b/plat-dole-avec-crevettes-et-miondo-compos%C3%A9-de-l%C3%A9gumes-morceaux-viande-poisson-fum%C3%A9-national-du-cameroun-274355856.jpg',                                                                                                                tags: ['sg', 'epice'] },
  { cat: 'plat',    nom: 'Steak Frites',      prix: 13,    description: 'Steak grillé servi avec des frites croustillantes.',                                          image: 'https://www.rockrecipes.com/wp-content/uploads/2018/02/Steak-Frites-close-up-photo-of-single-serving-on-white-plate.jpg',                                                                                                                                    tags: ['sg','vege'] },
  { cat: 'plat',    nom: 'Foutou banane',        prix: 11,    description: 'pâte lisse et élastique préparée à partir de banane plantain, d\'igname ou de manioc, souvent servie avec une sauce riche et épicée comme la sauce graine, la sauce arachide ou la sauce gombo.',               image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrWx-rCPLeQV3gJbdZJ7rZovR8sSVtmPSbw&s',                                                                                                                                   tags: ['vege', 'sg'] },
  {cat: 'plat',  nom:'Paella',   prix: 12,  description: 'plat de riz cuisiné avec des fruits de mer, du poulet, des légumes et du safran',     image:'https://assets.afcdn.com/recipe/20190827/96838_w1024h1024c1cx2100cy1400cxt0cyt0cxb4200cyb2800.jpg',   tags:['sg']},
   

  { cat: 'dessert', nom: 'Dégué',                prix: 10,    description: 'Dessert West-Africain à base de couscous de mil, yaourt et sucre.',                       image: 'https://img.freepik.com/photos-gratuite/vue-face-du-delicieux-dessert-sain_23-2148579386.jpg?semt=ais_hybrid&w=740&q=80',                                                                               tags: ['vege', 'sg'] },
  { cat: 'dessert', nom: 'Gnonmi',               prix: 5.60,  description: 'Galettes à base de farine de riz ou mil, accompagnées de lait sucré.',                   image: 'https://kelianfood.com/wp-content/uploads/2022/09/Gnomi-by-kelianfood.png',                                                                                                                                  tags: ['vege', 'sg'] },
  { cat: 'dessert', nom: 'Tiramisu fruits rouges',prix: 18,   description: 'Biscuits imbibés, crème mascarpone vanillée, framboises et fraises.',                     image: 'https://media.houra.fr/images/widget/recette/gd_recette_TiramisuFruit.jpg',                                                                                                                                  tags: ['vege'] },
  { cat: 'dessert', nom: 'Panna cotta mangue',   prix: 11,    description: 'Panna cotta au lait de coco, onctueuse, recouverte d\'un coulis de mangue fraîche.',      image: 'https://kara-coconut.fr/wp-content/uploads/2019/04/Panna-Cotta-exotique-noix-de-coco-et-mangue.jpg',                                                                                                           tags: ['vege', 'sg'] },


  { cat: 'boisson', nom: 'Jus de bissap',        prix: 2.5,   description: 'Boisson rafraîchissante à base de fleurs d\'hibiscus séchées.',                           image: 'https://cdn.aistoucuisine.com/assets/5524ef09-bb82-4de2-908f-040f2b1614d0/jus-bissap',                                                                                                                tags: ['vege', 'sg'] },
  { cat: 'boisson', nom: 'Gnamankoudji',         prix: 2.5,   description: 'Boisson tonique et épicée à base de gingembre frais.',                                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEizJXNKQkuIEBQnpEUHRM-hRRL8IEBIRKWsOy2uvrBSK23jeQIaPkTp8Zc9X5Ouyz3gL6NhIPRWsqvO5wS3y16ZhwOpt6V53mOGRjF8&s=10',                            tags: ['vege', 'sg', 'epice'] },
  { cat: 'boisson', nom: 'Menthe au lait',       prix: 2.5,   description: 'Boisson douce et fraîche à base de menthe et de lait.',                                   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuPMD25DvQ9eaFK_xo_rjzhY_XjGfy7WjDQ&s',                                                                                                           tags: ['vege'] },
  { cat: 'boisson', nom: 'Champagne',   prix: 25,  description:'Pol Roger',   image:'https://le-parvis.fr/wp-content/uploads/2025/03/brut-reserve-pol-roger-600x600.png.webp',  tags:['sg', 'vege']},
  { cat:'boisson', nom: 'Eau', prix:2, description:'eau mnérale',  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXNlNqrmJzcjbOH5PP0gPVpPpf7XlBDbhcg&s', tags:[]},
];


let activeCat  = 'all';
let filterVege = false;
let filterSG   = false;


function buildUI() {
  const container = document.getElementById('menu');
  container.innerHTML = `

    <!-- Barre de filtres -->
    <div class="filter-bar">
      <div class="cat-buttons" id="cat-buttons">
        <button class="cat-btn active" data-cat="all">Tout</button>
        <button class="cat-btn" data-cat="entree">Entrées</button>
        <button class="cat-btn" data-cat="plat">Plats</button>
        <button class="cat-btn" data-cat="dessert">Desserts</button>
        <button class="cat-btn" data-cat="boisson">Boissons</button>
      </div>
      <div class="tag-checks">
        <label class="check-label">
          <input type="checkbox" id="filter-vege"> 🌿 Végétarien
        </label>
        <label class="check-label">
          <input type="checkbox" id="filter-sg"> 🌾 Sans gluten
        </label>
      </div>
    </div>

    <!-- Compteur -->
    <p class="compteur"><span id="compteur-num">${dishes.length}</span> plats correspondent à votre sélection</p>

    <!-- Sections -->
    <div class="section-group" data-section="entree">
      <h2 class="section-title"> Entrées</h2>
      <div class="grille" id="grid-entree"></div>
    </div>
    <div class="section-group" data-section="plat">
      <h2 class="section-title"> Plats</h2>
      <div class="grille" id="grid-plat"></div>
    </div>
    <div class="section-group" data-section="dessert">
      <h2 class="section-title"> Desserts</h2>
      <div class="grille" id="grid-dessert"></div>
    </div>
    <div class="section-group" data-section="boisson">
      <h2 class="section-title"> Boissons</h2>
      <div class="grille" id="grid-boisson"></div>
    </div>

    <!-- État vide -->
    <div id="empty-state" style="display:none; text-align:center; padding:3rem;">
      <p style="font-size:2rem">🍽</p>
      <p>Aucun plat ne correspond à votre sélection.</p>
    </div>
  `;
}


function renderTags(tags) {
  return (tags || []).map(t => {
    if (t === 'vege')  return `<span class="tag tag-vege">🌿 Végé</span>`;
    if (t === 'sg')    return `<span class="tag tag-sg">🌾 Sans gluten</span>`;
    if (t === 'epice') return `<span class="tag tag-epice">🌶 Épicé</span>`;
    return '';
  }).join('');
}

function buildCard(dish) {
  const card = document.createElement('div');
  card.className   = 'card';
  card.dataset.cat  = dish.cat;
  card.dataset.tags = (dish.tags || []).join(',');
  card.innerHTML = `
    <img src="${dish.image}" alt="${dish.nom}">
    <div class="card-content">
      <div class="card-top">
        <h3>${dish.nom}</h3>
        <span class="prix">${dish.prix} €</span>
      </div>
      <p class="description">${dish.description || ''}</p>
      <div class="card-tags">${renderTags(dish.tags)}</div>
    </div>
  `;
  return card;
}

function populateGrids() {
  const grids = {
    entree:  document.getElementById('grid-entree'),
    plat:    document.getElementById('grid-plat'),
    dessert: document.getElementById('grid-dessert'),
    boisson: document.getElementById('grid-boisson'),
  };
  dishes.forEach(dish => grids[dish.cat].appendChild(buildCard(dish)));
}


function applyFilters() {
  const cards = document.querySelectorAll('.card');
  let visible = 0;

  cards.forEach(card => {
    const cat  = card.dataset.cat;
    const tags = card.dataset.tags.split(',');

    const catMatch  = activeCat === 'all' || cat === activeCat;
    const vegeMatch = !filterVege || tags.includes('vege');
    const sgMatch   = !filterSG   || tags.includes('sg');
    const show = catMatch && vegeMatch && sgMatch;

    if (show) {
      card.classList.remove('card-hidden');
      
      card.style.animation = 'none';
      card.offsetHeight; // reflow
      card.style.animation = '';
      visible++;
    } else {
      card.classList.add('card-hidden');
    }
  });

  
  const num = document.getElementById('compteur-num');
  num.classList.remove('bounce');
  num.offsetHeight;
  num.classList.add('bounce');
  num.textContent = visible;

  
  document.querySelectorAll('.section-group').forEach(sec => {
    const a = sec.querySelectorAll('.card:not(.card-hidden)').length > 0;
    sec.style.display = a ? '' : 'none';
  });

  document.getElementById('empty-state').style.display = visible === 0 ? 'block' : 'none';
}


function bindEvents() {
  
  document.getElementById('cat-buttons').addEventListener('click', e => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    applyFilters();
  });

  
  document.getElementById('filter-vege').addEventListener('change', e => {
    filterVege = e.target.checked;
    applyFilters();
  });
  document.getElementById('filter-sg').addEventListener('change', e => {
    filterSG = e.target.checked;
    applyFilters();
  });
}

function init() {
  buildUI();
  populateGrids();
  bindEvents();
  applyFilters();
}

init();