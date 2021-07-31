let place_cards = document.getElementById("place_cards");
let bracelet = document.getElementById("bracelet");
let ring = document.getElementById("ring");
let earring = document.getElementById("earring");
let necklace = document.getElementById("necklace");
let jewerly = document.getElementById("jewerly_set");

//appear bracelets
bracelet.addEventListener("click", function(event) {
    place_cards.innerHTML = ` `;
    jewerly.remove();
    bracelets.forEach(function(element){
        place_cards.innerHTML += 
        `<img class="card mb-3" style="width:230px; height: 200px;" src="${element.attachment}" alt="${element.alt}"> `
    })
})


//appear rings
ring.addEventListener("click", function(event) {
    place_cards.innerHTML = ` `;
    jewerly.remove();
    rings.forEach(function(element){
        place_cards.innerHTML += 
        `<img class="card mb-3" style="width:230px; height: 200px;" src="${element.attachment}" alt="${element.alt}"> `
    })


})

//appear earrings
earring.addEventListener("click", function(event) {
    place_cards.innerHTML = ` `;
    jewerly.remove();
    earrings.forEach(function(element){
        place_cards.innerHTML += 
        `<img class="card mb-3" style="width:230px; height: 200px;" src="${element.attachment}" alt="${element.alt}"> `
    })
   
})
//appear necklaces
necklace.addEventListener("click", function(event) {
    place_cards.innerHTML = ` `;
    jewerly.remove();
    necklaces.forEach(function(element){
        place_cards.innerHTML += 
        `<img class="card mb-3" style="width:230px; height: 200px;" src="${element.attachment}" alt="${element.alt}"> `

    })
   
})

//disappear select after 500px
let select = document.getElementById("select")
window.onscroll = function () {
    if(document.documentElement.scrollTop > 40){
        select.style.display = "none";
    } else{
        select.style.display = "flex";
    }
}