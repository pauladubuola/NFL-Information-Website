var name = prompt("What is your name?");
console.log(name);
alert("Hi " + name);

var name_change = document.getElementById("page");
name_change.textContent = "Hey " + name + "!";

/*used ChatGPT to discover/asist how to add images onto javascript*/
const images = [
    "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_MIA_wbg.png",
    "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "https://s.yimg.com/cv/apiv2/default/20240610/500px/Jets_wbg.png",
    "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/bal.png",
    "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_CLE_wbg.png",
    "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_PIT_wbg.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/hou.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ind.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/jax.png",
    "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_TEN_wbg.png",
    "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_DEN_wbg.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kc.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lv.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lac.png",
    "https://s.yimg.com/it/api/res/1.2/zr7qwz9AEPasIn9XGbF1gw--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_NYG_wbg.png",
    "https://a.espncdn.com/guid/d1a9b001-1df7-fbd7-ae4c-6ca7065286ec/logos/primary_logo_on_white_color.png",
    "https://b.fssta.com/uploads/application/nfl/team-logos/Panthers.png",
    "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_MIN_wbg.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/tb.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lar.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sf.pnghttps://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sea.png",
    "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ari.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cin.png",
    "https://logos-world.net/wp-content/uploads/2021/07/Washington-Redskins-Logo.png",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/no.png",
    "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_GB_wbg.png",
];

/* Most of this javascript code was asisted with ChatGPT when I wanted to add an
interactive image generator*/
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  document.getElementById('randomizeButton').addEventListener('click', () => {
    const imageElement = document.getElementById('teamImage');
    const randomImage = getRandomImage();
    imageElement.src = randomImage;
    imageElement.style.display = 'block';
  });

/*this part of javascript was all based off previous assignments but with my own tweak to them*/
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

function changeTeam(squareId) {
    var square = document.getElementById(squareId);
    const randomImage = getRandomImage();
    imageElement.src = randomImage;
    square.setAttribute("style", randomTeam);
    }

/* used chat to help debug, I need to change "box.style.right to box.style.left"*/
    var box = document.getElementById("move");
    var container = document.getElementById("container");
var boxRight = 0;
function slide(){
    console.log(box.style.left);
    console.log('is this working');
    box.style.left = boxRight + "px";
    boxRight++;
    if(boxRight > 1400 - 50){
        clearInterval(timer);
    }
}
var timer = setInterval(slide, 10);




var button = document.createElement("button");
button.textContent = "Tom Brady?";

button.addEventListener("click", function(){
    var p = document.getElementById("increase");
    p.setAttribute(
        "font-size: 50px"
    );
})
document.body.appendChild(button);


var break1 = document.createElement("br");
document.body.appendChild(break1);

var button2 = document.createElement("button");
button2.textContent = "Patrick Mahomes?";

button2.addEventListener("click", function(){
    var p2 = document.getElementById("increase");
    p2.setAttribute(
        "font-size: 50px"
    );
})
document.body.appendChild(button2);

