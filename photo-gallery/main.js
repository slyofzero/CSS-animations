const track = document.querySelector("#image-track");
const images = document.querySelectorAll(".image");

window.onmousedown = (event) => {
  track.dataset.mouseDownAt = event.clientX;
};

window.onmousemove = (event) => {
  if (track.dataset.mouseDownAt === "0") return;

  const move = parseFloat(track.dataset.mouseDownAt) - event.clientX;
  const maxMove = window.innerWidth / 2;

  const moveBy = (move / maxMove) * 100 + parseFloat(track.dataset.prevMove);

  if (moveBy <= 0 && moveBy >= -100) {
    track.animate(
      { transform: `translate(${moveBy}%, -50%)` },
      { duration: 1200, fill: "forwards" }
    );
    track.dataset.move = moveBy;

    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      image.animate(
        {
          objectPosition: `${-moveBy}% 50%`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  }
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevMove = track.dataset.move;
};
