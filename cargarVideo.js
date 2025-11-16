fetch("./videos.json")
  .then(res => res.json())
  .then(data => {
    const player = document.getElementById("videoPlayer");
    const lista = document.getElementById("chapterList");

    // Cargar el primer capítulo automáticamente
    player.src = data[0].url;

    // Generar lista de capítulos
    data.forEach((cap, index) => {
      const item = document.createElement("div");
      item.className = "capitulo-item";
      item.textContent = cap.title;

      // Al hacer clic, cambiar video
      item.addEventListener("click", () => {
        player.src = cap.url;
        document.getElementById("capituloTitulo").textContent = cap.title;
      });

      lista.appendChild(item);
    });

    // Colocar título del primer capítulo
    document.getElementById("capituloTitulo").textContent = data[0].title;
  })
  .catch(err => console.error("Error cargando videos.json:", err));

