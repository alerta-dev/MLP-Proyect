fetch("./videos.json")
  .then(res => res.json())
  .then(data => {
    const player = document.getElementById("videoPlayer");
    player.src = data[0].url;
  })
  .catch(err => console.error("Error cargando videos.json:", err));
