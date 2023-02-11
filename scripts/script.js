const cast = [
  {
    name: "Michelle Yeoh",
    role: "Evelyn Quang Huang",
    image: "/assets/michelle.png",
    alt: "A Photo of Michelle Yeoh",
  },
  {
    name: "Ke Huy Quan",
    role: "As Waymond Wang",
    image: "/assets/ke.png",
    alt: "A Photo of Ke Huy Quan",
  },
  {
    name: "Stephanie Hsu",
    role: "As Joy Wang",
    image: "/assets/steph.png",
    alt: "A Photo of Stephanie Hsu",
  },
  {
    name: "A Rock",
    role: "As Themselves",
    image: "/assets/rock.png",
    alt: "A Photo of a Rock from the Movie 'Everything, Everywhere, All at Once",
  },
];

const castEl = document.getElementById("cast-container");

cast.forEach((actor) => {
  const actorArticle = document.createElement("article");

  actorArticle.innerHTML = `
    <figure>
      <img src="${actor.image}" alt="${actor.alt}" />
    </figure>
    <div class="michelleInfo">
      <h3>${actor.name}</h3>
      <h4>${actor.role}</h4>
    </div>
  `;

  castEl.appendChild(actorArticle);

  console.log(actorArticle);
});
