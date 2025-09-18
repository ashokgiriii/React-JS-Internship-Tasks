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

const container = document.querySelector(".imageContainer");

// container.innerHTML = mobsImageArray.map(
//   (mob) => `
//   <div class="img-with-info">
//     <div class="info">
//       <span class="title">${mob.name}</span>
//       <p class="title-info">
//         This is a ${mob.name} from Minecraft.
//       </p>
//     </div>
//     <div class="img">
//       <img class="image" src="./images/${mob.src}" alt="${mob.name}" />
//     </div>
//   </div>
// `
// );

let currentIndex = 0;
let arrayLength = mobsImageArray.length;

function renderMob(index) {
  container.innerHTML = `
    <div class="img-with-info">
      <div class="info">
        <span class="title">${mobsImageArray[index].name}</span>
        <p class="title-info">
          This is a ${mobsImageArray[index].name} from Minecraft.
        </p>
      </div>
      <div class="img">
        <img class="image" src="./images/${mobsImageArray[index].src}" alt="${mobsImageArray[index].src}" />
      </div>
    </div>
  `;
}

// function to show the image of mob
renderMob(currentIndex);

// clikcing next button to show the next image
const nextButton = document.querySelector("button.next");
// console.log(currentIndex);
nextButton.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= arrayLength) {
    currentIndex = 0;
  }

  // console.log(currentIndex);

  renderMob(currentIndex);
});

// clikcing next button to show the next image
const prevButton = document.querySelector("button.prev");
// console.log(currentIndex);
prevButton.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex <= 0) {
    // this will make teh last elem of array to current index
    currentIndex = arrayLength - 1;
  }

  // console.log(currentIndex);

  renderMob(currentIndex);
});

setInterval(() => {
  currentIndex++;

  if (currentIndex >= arrayLength) {
    currentIndex = 0;
  }

  // console.log(currentIndex);

  renderMob(currentIndex);
}, 2000);
