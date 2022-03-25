const slides = [
  {
    image: "img/01.jpg",
    title: "Svezia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    image: "img/02.jpg",
    title: "Svizzera",
    text: "Lorem ipsum.",
  },
  {
    image: "img/03.jpg",
    title: "Gran Bretagna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "img/04.jpg",
    title: "Germania",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
  },
  {
    image: "img/05.jpg",
    title: "Paradise",
    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
  },
];

console.log(slides);

// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const app = new Vue({
  el: "#app",
  data: {
    slides,
    activeSlideIndex: 0,
    time: 0,
  },
  methods: {
    // se mi trovo ad un index > 0 allora posso andare indietro
    showPrevSlide() {
      if (this.activeSlideIndex > 0) {
        this.activeSlideIndex--;
      } else {
        this.activeSlideIndex = this.slides.length - 1;
      }
    },

    // se mi trovo ad un index < della lunghezza di slides  allora posso andare avanti
    showNextSlide() {
      if (this.activeSlideIndex < this.slides.length - 1) {
        this.activeSlideIndex++;
      } else {
        this.activeSlideIndex = 0;
      }
    },

    showIfActive(item) {
      // vado a prendere il titolo che è uguale al titolo dell'index di slides
      const isActive = item.title === this.slides[this.activeSlideIndex].title;
      // se true applico thumb active, se false thumb
      return isActive ? "thumb active" : "thumb";
    },

    timerShow() {
      this.time = setInterval(this.showNextSlide, 3000);
    },

    stopTimer() {
      clearInterval(this.time);
    },
  },
});
