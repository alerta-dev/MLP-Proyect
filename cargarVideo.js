fetch("videos.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("videoPlayer").src = data.video;
  });
