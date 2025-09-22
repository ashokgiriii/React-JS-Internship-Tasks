const mobsImageArray = [
  { src: "Axolotl.webp", name: "Axolotl" },
  { src: "Cat.webp", name: "Cat" },
  { src: "Chicken.png", name: "Chicken" },
  { src: "Fox.png", name: "Fox" },
  { src: "MC_Cod.webp", name: "Cod" },
  { src: "MC_Horse.webp", name: "Horse" },
  { src: "MC_Ocelot.webp", name: "Ocelot" },
  { src: "MC_Parrot-1.webp", name: "Parrot" },
  { src: "MC_Pig.webp", name: "Pig" },
  { src: "MC_Pufferfish.webp", name: "Pufferfish" },
  { src: "MC_Salmon.png", name: "Salmon" },
  { src: "MC_Sheep.webp", name: "Sheep" },
  { src: "MC_Snow_Golem.webp", name: "Snow Golem" },
  { src: "MC_Squid.webp", name: "Squid" },
  { src: "MC_Strider.png", name: "Strider" },
  { src: "MC_Tropical.webp", name: "Tropical Fish" },
  { src: "MC_Turtle.webp", name: "Turtle" },
  { src: "MC_Villager.webp", name: "Villager" },
  { src: "MC_Wandering.webp", name: "Wandering Trader" },
  { src: "MC-Allay.webp", name: "Allay" },
  { src: "MC-Bat.webp", name: "Bat" },
  { src: "MC-Donkey.webp", name: "Donkey" },
  { src: "MC-Frog.webp", name: "Frog" },
  { src: "MC-Glow-Squid.webp", name: "Glow Squid" },
  { src: "MC-Mooshroom.webp", name: "Mooshroom" },
  { src: "MC-Mule.webp", name: "Mule" },
  { src: "MC-Rabbit.webp", name: "Rabbit" },
  { src: "MC-Tadpole.webp", name: "Tadpole" },
];

// swiper container
const swiperWrapper = document.querySelector(".swiper-wrapper");

// dynamic mob maping
mobsImageArray.forEach((mob) => {
  swiperWrapper.innerHTML += `
    <div class="swiper-slide">
      <div class="img">
        <img src="./images/${mob.src}" alt="${mob.name}" />
      </div>
      <div class="info">
        <span>${mob.name}</span>
        <p>This is ${mob.name} from Minecraft</p>
      </div>
    </div>
  `;
});

const swiper = new Swiper(".swiper", {
  loop: true,

  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
