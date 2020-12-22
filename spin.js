const rotate = {
    header: document.getElementById('spinspin'),
    deg: 0,
    startRotate: () => {
      rotate.deg = (rotate.deg + 1) % 360;
      rotate.header.style.transform = `rotateY(${rotate.deg}deg)`;
      if (90 <= rotate.deg && rotate.deg <=270) {
        rotate.header.className = 'back';
      } else {
        rotate.header.className = 'face';
      }
    }
  }
  setInterval(rotate.startRotate,20);