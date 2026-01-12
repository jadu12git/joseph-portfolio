export default function initParallax() {
  const bg = document.querySelector(".parallax-bg");
  if (!bg) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    bg.style.transform = `translateY(${scrolled * 0.3}px)`;
  });
}
