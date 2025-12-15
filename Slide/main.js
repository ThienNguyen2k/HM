const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  const mainImage = $("#main_image");
  const caption = $("#caption");

  const links = document.querySelectorAll("#image_list a"); 

  const imageCache = [];

  for (const link of links) {
    const img = new Image();
    img.src = link.href;
    img.alt = link.title || "";
    imageCache.push(img);
  }

  if (imageCache.length === 0) return;

  mainImage.src = imageCache[0].src;
  mainImage.alt = imageCache[0].alt;
  caption.textContent = imageCache[0].alt;

  let imageCounter = 0;
  setInterval(() => {
    imageCounter = (imageCounter + 1) % imageCache.length;
    const img = imageCache[imageCounter];

    mainImage.src = img.src;
    mainImage.alt = img.alt;
    caption.textContent = img.alt;
  }, 2000);
});
