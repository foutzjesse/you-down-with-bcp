function setBorderImage(now) {
  if (now.getMonth() === 7 || now.getMonth() === 6 && now.getDate() > 25 || now.getMonth() === 8 && now.getDate() < 29) { //Serotinal: St. James to Michaelmas
    document.querySelectorAll('.tiled-border').forEach(element => {
      if (isFast(now))
        element.style.backgroundImage = 'url("gillsandberries.png")';
      else
        element.style.backgroundImage = 'url("blackberries.png")';
    });
  }
}
