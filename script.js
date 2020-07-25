function changeImage() {
   var image = document.getElementById('player');
   if (image.src.match("play.png")) {
     image.src = "pause.png";
   } else {
     image.src = "play.png";
   }
 }

 var playing = false;

 function action() {
   var audio = document.getElementById("audio");
   if (playing === false) {
     audio.play();
     playing = true;
   } else {
     audio.pause();
     playing = false;
   }
 }

//generator list

var starters = ["Organic","Sea salted","Pesto", "Crunchy","Fermented","Yuzu","Toasted","Chili","Oven-roasted","Buffalo-Style","Pizza Flavored","Herbed","Matcha","Lemony","Gourmet","Gluten-free","Coconut","Unsalted","Pickled","Tempura","Cauliflower","Sour Cream","Cheddar","Garlic","Honey","Soy","Crunchy","Turmeric","Roasted","Grilled","Mini","Pineapple","Strawberry","Maple-sugar","Pesto","Watermelon","Mango","Matcha","Sesame","Microwaveable","Vegan"];
var adjectives = ["Birthday-Cake","Mochi","Garlic","Chicken-less","Gin-Infused","Potato","Lime","Avocado","Flavored","Truffled","Pickle","Mac & Cheese","Spinich","Onion Seasoned","Honey Mustard","Caramel","Portobello","and Cream","and Nuts","Shrimp","Yam Flavored","Indian Style","Kimchi Flavored","Ginger","Hibiscus","Mexican Style","Chinese Style","French Style","Japanese Style","Laotian Style","Vodka","Chilli Lime","Matcha","Scallion","Kale"];
var nouns = ["Cottage Cheese","Naan","Cake","Chocolate Bar","Chips","Ice Cream","Fruit Spread","Pancake Mix","Sauce with Truffle","Salad","Focaccia Bread","Pretzel","Juice","Popcorn","Potato Tots","Falafels","Stir Fry","Dumplings","Hot Dog","Bowl","Kringle","Prawns","Pasta","Rice","Quinoa","Seafood Stew","Nuts","Tortellini","Kunefe","Tempeh","Muffin Mix","Sauteed Beets","Mochi Balls","Tamales","Bread","Fried Rice","Pizza","Bagels","Shwarma","Wrap","Burrito","Acai Bowl","Asparagus"];
var shownText = document.getElementById("generator");

function generateIdea() {
  document.getElementById("generator").style.color = "#767576";
  var starter1 = starters[Math.floor(Math.random()*starters.length)];
  var adjective1 = adjectives[Math.floor(Math.random()*adjectives.length)];
  var noun1 = nouns[Math.floor(Math.random()*nouns.length)];

  var sentence = ['<span onclick="generateDiff(0)">', starter1, '</span> <span onclick="generateDiff(1)">', adjective1, '</span> <span onclick="generateDiff(2)">', noun1, '</span>'];
  document.getElementById("generator").innerHTML = sentence.join("");
}


function generateDiff(x) {
  switch (x) {
    case 0:
       shownText.getElementsByTagName('span')[0].innerHTML = starters[Math.floor(Math.random()*starters.length)];
      break;

    case 1:
      shownText.getElementsByTagName('span')[1].innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)];
      break;


    case 2:
      shownText.getElementsByTagName('span')[2].innerHTML = nouns[Math.floor(Math.random()*nouns.length)];
  
    }
  }
