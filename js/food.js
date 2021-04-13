var imgs = [
  {
    img: "images/veg1.jpg",
    title: `Mâche, Beet, and Orange Salad`,
    txt: `A hearty salad with just the right hint of sweetness.
     You'll barely need any dressing.`,
  },
  {
    img: "images/veg2.jpg",
    title: `Mustardy Potato Salad With Watercress`,
    txt: `Swap out meat for potatoes in this delicious mix. 
    The mustard dressing has a peppery kick to it that perfectly 
    compliments the potatoes and greens.`,
  },
  {
    img: "images/veg3.jpg",
    title: "Warm Roasted Cauliflower and Spinach Salad",
    txt: `Unexpected pumpkin pie spice adds a tasty component 
    to this dish, with fresh pomegranate seeds bringing a sweet
    component.`,
  },
  {
    img: "images/veg4.jpg",
    title: "Ricotta- and Goat Cheese- Stuffed Zucchini",
    txt: `Everything tastes better with cheese, including
     these savory stuffed zucchinis. Loaded with spring peas
     and two kinds of cheese, this dish is great served alone
     or can be eaten with a salad.`,
  },
  {
    img: "images/veg5.jpg",
    title: "Brown Butter and Corn Pasta",
    txt: `This dish combines fresh summery corn with the
    luxuriousness of the buttery sauce for an amazing meal that 
    will have you drooling for more.`,
  },
];

var link = "Click this to view the recipe!";
window.onload = function () {
  document.getElementById("img1").src = imgs[0].img;
  document.getElementById("title").innerHTML = imgs[0].title;
  document.getElementById("text").innerHTML = imgs[0].txt;
  document.getElementById("nju").innerHTML = 1 + " of 5";
  document.getElementById("link1").innerHTML = link;
  document.getElementById("image").src = this.imgs1[0].img1;
  document.getElementById("title1").innerHTML = this.imgs1[0].title1;
  document.getElementById("tekst").innerHTML = imgs1[0].txt;
  document.getElementById("count").innerHTML = 1 + " of 5";
  document.getElementById("link2").innerHTML = link;
  document.getElementById("img-1").src = images[0].img;
  document.getElementById("dessert-title").innerHTML = images[0].title;
  document.getElementById("dessert-text").innerHTML = images[0].txt;
  document.getElementById("pages").innerHTML = 1 + " of 5";
  document.getElementById("link3").innerHTML = link;
  document.getElementById("btn2").onclick = function () {
    ChangeImage();
  };
  document.getElementById("btn1").onclick = function () {
    PrevImage();
  };
  document.getElementById("secondbtn").onclick = function () {
    ChangeImagee();
  };
  document.getElementById("firstbtn").onclick = function () {
    PrevImagee();
  };
  document.getElementById("btn-next").onclick = function () {
    ChangeImage1();
  };
  document.getElementById("btn-prev").onclick = function () {
    PrevImage1();
  };
};
var i = 0;
function ChangeImage() {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  document.getElementById("img1").src = imgs[i].img;
  document.getElementById("title").innerHTML = imgs[i].title;
  document.getElementById("text").innerHTML = imgs[i].txt;
  document.getElementById("nju").innerHTML = i + 1 + " of 5";
}
function PrevImage() {
  if (i > 0) {
    i--;
  } else {
    i = 4;
  }
  document.getElementById("img1").src = imgs[i].img;
  document.getElementById("title").innerHTML = imgs[i].title;
  document.getElementById("text").innerHTML = imgs[i].txt;
  document.getElementById("nju").innerHTML = i + 1 + " of 5";
}
var text = new Array();

var imgs1 = [
  {
    img1: "images/meat1.jpg",
    title1: "Roast beef with red wine & banana shallots",
    txt: `Succulent roast topside of beef, made especially irresistible
     with a mustard crust, piquant shallots and red wine enriched gravy`,
  },
  {
    img1: "images/meat2.jpg",
    title1: "Roast beef sirloin & béarnaise dauphinoise",
    txt: `Wow guests with an intensely flavoursome, peppered sirloin joint. 
    Serve alongside our potatoes dauphinoise, enriched with tarragon, shallots
     and gruyère`,
  },
  {
    img1: "images/meat3.jpg",
    title1: "Beef & vegetable casserole",
    txt: `Cook our healthy chicken Madras curry and ditch the takeaway menu.
     This simple family dinner is full of fragrant spices and tender pieces
      of chicken`,
  },
  {
    img1: "images/meat4.jpg",
    title1: "Oregano chicken & squash traybake",
    txt: `Try this low-calorie chicken, butternut squash and artichoke
     traybake as an easy dinner during busy weekdays. It takes just five 
     minutes to prepare`,
  },
  {
    img1: "images/meat5.jpg",
    title1: "Bacon Bolognese",
    txt: `A family spaghetti supper tailored for kids who don't like mince –
   packed with vegetables and flavoured with pesto`,
  },
];

var n = 0;
function ChangeImagee() {
  if (n < 4) {
    n++;
  } else {
    n = 0;
  }
  document.getElementById("image").src = imgs1[n].img1;
  document.getElementById("title1").innerHTML = imgs1[n].title1;
  document.getElementById("tekst").innerHTML = imgs1[n].txt;
  document.getElementById("count").innerHTML = n + 1 + " of 5";
}
function PrevImagee() {
  if (n > 0) {
    n--;
  } else {
    n = 4;
  }
  document.getElementById("image").src = imgs1[n].img1;
  document.getElementById("title1").innerHTML = imgs1[n].title1;
  document.getElementById("tekst").innerHTML = imgs1[n].txt;
  document.getElementById("count").innerHTML = n + 1 + " of 5";
}
var text1 = new Array();

var images = [
  {
    img: "images/des1.jpg",
    title: "Skinny Pineapple Cheesecake Bars",
    txt: `The best news we've heard so far this year is that
     these bars are only 130 calories.`,
  },
  {
    img: "images/des2.jpg",
    title: "Sweet 'N Salty Chocolate Bark",
    txt: `This pretty bark is just as healthy as it is satisfying.`,
  },
  {
    img: "images/des3.jpg",
    title: "Chia Pudding",
    txt: `The healthier way to do pudding.`,
  },
  {
    img: "images/des4.jpg",
    title: "Cinnamon Sugar Vegan Donuts",
    txt: `Dairy-free donuts that you'll drool over.`,
  },
  {
    img: "images/des5.jpg",
    title: "Keto Cheesecake",
    txt: `So creamy and smooth.`,
  },
];

var j = 0;

function ChangeImage1() {
  if (j < 4) {
    j++;
  } else {
    j = 0;
  }

  document.getElementById("img-1").src = images[j].img;
  document.getElementById("dessert-title").innerHTML = images[j].title;
  document.getElementById("dessert-text").innerHTML = images[j].txt;
  document.getElementById("pages").innerHTML = j + 1 + " of 5";
}
function PrevImage1() {
  if (j > 0) {
    j--;
  } else {
    j = 4;
  }
  document.getElementById("img-1").src = images[j].img;
  document.getElementById("dessert-title").innerHTML = images[j].title;
  document.getElementById("dessert-text").innerHTML = images[j].txt;
  document.getElementById("pages").innerHTML = j + 1 + " of 5";
}

var tekst = new Array();