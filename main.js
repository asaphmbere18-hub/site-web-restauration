//================ MENU (Ne pas supprimer, utilisez le et ecrivez votre code en dessous de celui-ci!) =======================
const menu = [
  {
    id: 1,
    nom: "Pizza Margherita",
    categorie: "Pizza",
    description: "Sauce tomate, mozzarella, basilic frais",
    prix: 10,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&q=80",
  },
  {
    id: 2,
    nom: "Pizza Pepperoni",
    categorie: "Pizza",
    description: "Sauce tomate, mozzarella, pepperoni",
    prix: 12,
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80",
  },
  {
    id: 3,
    nom: "Pizza 4 Fromages",
    categorie: "Pizza",
    description: "Mozzarella, gorgonzola, parmesan, emmental",
    prix: 13,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1573821663912-6dfc63f9c046?w=500&q=80",
  },
  {
    id: 4,
    nom: "Burger Classique",
    categorie: "Burger",
    description: "Bœuf, cheddar, salade, tomate, sauce maison",
    prix: 11,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
  },
  {
    id: 5,
    nom: "Burger Fromager",
    categorie: "Burger",
    description: "Double cheddar, bœuf, sauce fromage",
    prix: 12,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80",
  },
  {
    id: 6,
    nom: "Burger Végétarien",
    categorie: "Burger",
    description: "Galette de légumes, salade, tomate",
    prix: 11,
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80",
  },
  {
    id: 7,
    nom: "Pâtes Carbonara",
    categorie: "Pâtes",
    description: "Crème, lardons, parmesan",
    prix: 12,
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80",
  },
  {
    id: 8,
    nom: "Pâtes Bolognaise",
    categorie: "Pâtes",
    description: "Sauce tomate, bœuf mijoté",
    prix: 11,
    stock: 7,
    image:
      "https://img.cuisineaz.com/660x660/2016/07/29/i84653-spaghettis-bolognaise-rapides.jpg",
  },
  {
    id: 9,
    nom: "Salade César",
    categorie: "Salade",
    description: "Poulet, parmesan, croûtons",
    prix: 9,
    stock: 9,
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80",
  },
  {
    id: 10,
    nom: "Salade Végétarienne",
    categorie: "Salade",
    description: "Légumes frais, vinaigrette maison",
    prix: 8,
    stock: 3,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
  },
  {
    id: 11,
    nom: "Tiramisu",
    categorie: "Dessert",
    description: "Café, mascarpone, cacao",
    prix: 6,
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80",
  },
  {
    id: 12,
    nom: "Fondant au chocolat",
    categorie: "Dessert",
    description: "Cœur coulant au chocolat noir",
    prix: 7,
    stock: 2,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80",
  },
  {
    id: 13,
    nom: "Cheesecake",
    categorie: "Dessert",
    description: "Fromage frais, biscuit croquant",
    prix: 7,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80",
  },
  {
    id: 14,
    nom: "Eau minérale",
    categorie: "Boisson",
    description: "Eau plate 50cl",
    prix: 3,
    stock: 20,
    image:
      "https://lecheverny.fr/wp-content/uploads/2021/03/bouteille-eau-cristaline.webp",
  },
  {
    id: 15,
    nom: "Soda",
    categorie: "Boisson",
    description: "Cola, orange ou citron",
    prix: 4,
    stock: 15,
    image:
      "https://www.bzzz-fastandfab.fr/wp-content/uploads/2024/06/sodas-bzzz-restaurant-les-deux-alpe_0547.jpg",
  },
  {
    id: 16,
    nom: "Café",
    categorie: "Boisson",
    description: "Café expresso",
    prix: 2,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80",
  },
];

// ================= VOTRE CODE ICI =======================
let selectedDishId = null;
let showOnlyAvailable = false;

function renderMenu() {
  let menuContainer = document.getElementById("menu-container");
  menuContainer.innerHTML = "";

  let filteredMenu = showOnlyAvailable
    ? menu.filter((item) => item.stock > 0)
    : menu;

  filteredMenu.forEach((item) => {
    let card = document.createElement("div");
    card.className = `dish-card ${item.stock === 0 ? "out-of-stock" : ""}`;
    if (selectedDishId === item.id) card.classList.add("selected");

    card.innerHTML = `
    <div class="card-image-container">
    <img src="${item.image}" alt="Photo de ${item.nom}" loading="lazy">
    ${item.stock === 0 ? '<span class="rupture-badge">Rupture</span>' : ""}
    </div>
    <div class="card-content">
    <div class="card-header">
    <h3>${item.nom}</h3>
    <span class="category-tag">${item.categorie}</span>
    </div>
    <p class="card-desc">${item.description}</p>
    <div class="footer">
    <span class="price">${item.prix.toFixed(2)} €</span>
    <span class="stock-info">Stock:<span class="${item.stock < 5 ? "low-stock" : ""}">${item.stock}</span></span>
    </div>
    </div>`;

    card.addEventListener("click", () => {
      if (item.stock > 0) {
        selectDish(item.id);
      }
    });
    menuContainer.appendChild(card);
  });
}

function selectDish(id) {
  selectedDishId = id;
  let Dish = menu.find((d) => d.id === id);
  document.getElementById("selected-item-display").innerText =
    `Sélection : ${Dish.nom}`;
  renderMenu();
}
document.getElementById("order-button").addEventListener("click", () => {
  let messageElement = document.getElementById("order-message");

  if (!selectedDishId) {
    messageElement.innerText = "Veuillez d'abord choisir un plat.";
    messageElement.style.color = "orange";
    return;
  }
  let dish = menu.find((d) => d.id === selectedDishId);

  if (dish && dish.stock > 0) {
    dish.stock--;
    messageElement.innerText = `Commande validée pour : ${dish.nom} !`;
    messageElement.style.color = "green";

    if (dish.stock === 0) {
      selectedDishId = null;
      document.getElementById("selected-item-display").innerText =
        "Aucun plat sélectionné";
    }
  } else {
    messageElement.innerText = "Désolé, ce produit n'est plus en stock.";
    messageElement.style.color = "red";
  }
  renderMenu();
});
document.getElementById("filter-available").addEventListener("click", () => {
  showOnlyAvailable = true;
  renderMenu();
});
document.getElementById("reset-filter").addEventListener("click", () => {
  showOnlyAvailable = false;
  renderMenu();
});
renderMenu();
