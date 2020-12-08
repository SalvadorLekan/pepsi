const images = document.getElementById("images");
const boom = (color) => {
  document.body.classList.remove("bg-gray-400", "bg-blue-400", "bg-red-400");
  document.body.classList.add("bg-" + color + "-400");
  for (image of images.children) {
    image.classList = "hidden";
    if (image.id === color) image.classList = "";
  }
};
boom("blue");
