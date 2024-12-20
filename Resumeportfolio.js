const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    console.log(card);
    projectCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.style.transform = "scale(0.9)";
        otherCard.style.background = "lightgreen";
        otherCard.style.transition = "all 0.5s";
      }
    });
  });

  card.addEventListener("mouseout", () => {
    projectCards.forEach((otherCard) => {
      otherCard.style.transform = "scale(1)";
      otherCard.style.background = "transparent";
    });
  });
});

const listItems = document.querySelectorAll("ul li");

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    listItems.forEach((otherlistItem) => {
      otherlistItem.style.cursor = "pointer";
      if (item !== otherlistItem) {
        otherlistItem.style.background = "lightgrey";
        otherlistItem.style.scale = "0.9";
        otherlistItem.style.transition = "all 0.3s";
      } else {
        item.style.background = "crimson";
        item.style.fontWeight = "bold";
        item.style.scale = "1";
      }
    });

    item.addEventListener("mouseout", () => {
      listItems.forEach((li) => {
        li.style.scale = "1";
        li.style.background = "transparent";
        li.style.transition = "all 0.3s";
        item.style.fontWeight = "normal";
      });
    });
  });
});
