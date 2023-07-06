let image = document.querySelector("#image_sec");
let nameCar = document.querySelector(".car_name_sec");
let btn = document.querySelector("#button");

let color1 = document.querySelector(".color1_sec");
let color2 = document.querySelector(".color2_sec");
let color3 = document.querySelector(".color3_sec");

color1.addEventListener("click", function (values) {
    nameCar.style.backgroundColor = "black";
    btn.style.backgroundColor = "black";
    image.style.backgroundImage = 'url("https://stimg.cardekho.com/images/car-images/930x620/Toyota/Fortuner/8241/1609933145105/221_attitude-black_141314.jpg")';
});
color2.addEventListener("click", function (values) {
    nameCar.style.backgroundColor = "white";
    nameCar.style.color = "black";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    image.style.backgroundImage = 'url("https://stimg.cardekho.com/images/car-images/930x620/Toyota/Fortuner/8241/1609933145105/224_white-pearl-crystal-shine-metallic_d9dce2.jpg")';
});
color3.addEventListener("click", function (values) {
    nameCar.style.backgroundColor = "brown";
    nameCar.style.color = "white";
    btn.style.backgroundColor = "brown";
    btn.style.color = "white";
    image.style.backgroundImage = 'url("https://stimg.cardekho.com/images/car-images/930x620/Toyota/Fortuner/8241/1609933145105/225_phantom-brown-metallic_4b403e.jpg")';
});