fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const abilities = data;
    const container = document.getElementById("abilities-container");
    abilities.map((item) => {
      const div = document.createElement(`div.abilities__${item.category}`);
      div.innerHTML = `
      <div class="ability-wrapper ${item.category.toLowerCase()}">
            <div class="abilities__name">
              <img id="visualIcon" src="${item.icon}" alt="${
        item.category
      } icon">
              <h3>${item.category}</h3>
            </div>
            <p class="abillities__score"><span>${
              item.score
            }</span> <span>/ 100</span></p>
          </div>
      `;
      const button = document.getElementById("button");
      container.insertBefore(div, button);
    });
  })
  .catch((error) => console.error(error));
