// Привязка к мышке
// навешиваем слушатель событий mousemove - движение мыши на весь сайт
document.addEventListener("mousemove", (e) => {
  // Добавляем в объект Сайт(Наш документ) поле style с переменными --move-x и --move-y
  Object.assign(document.documentElement, {
    style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;

        `,
  });
});
