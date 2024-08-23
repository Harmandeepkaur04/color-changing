document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
  
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
  
    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#00bfff';
      ctx.fill();
      ctx.closePath();
    }
  
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      x += dx;
      y += dy;
  
      if (x + dx > canvas.width - 10 || x + dx < 10) {
        dx = -dx;
      }
      if (y + dy > canvas.height - 10 || y + dy < 10) {
        dy = -dy;
      }
  
      requestAnimationFrame(update);
    }
  
    update();
  });
