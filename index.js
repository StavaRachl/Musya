
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.particlesJS !== "function") {
    console.error("Particles.js не загружен!");
    return;
  }

  const container = document.getElementById("particles-js");

  if (!container) {
    console.error("Не найден #particles-js");
    return;
  }

  window.particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.15,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#ffffff",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: false
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 0.35
          }
        }
      }
    },
    retina_detect: true
  });

  console.log("Particles.js успешно запущен");
});