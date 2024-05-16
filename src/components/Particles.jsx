export const particles = {
  fullScreen: {
    enable: true,
    zIndex: -10
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 400
      }
    },
    color: {
      value: "#ddd"
    },
    shape: {
      type: "triangle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 30,
        size_min: 0.1,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 200,
      color: "#bbb",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "random",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  detectRetina: true


}