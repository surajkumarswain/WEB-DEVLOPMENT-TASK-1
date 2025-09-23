function showContent(type) {
  const contentBox = document.getElementById("historyText");
  let text = "";

  switch (type) {
    case "origin":
      text = `
        <p>Odisha, once known as Kalinga, has roots that stretch deep into ancient history. The lands here whispered to early humans, calling them to settle by its sacred rivers and dense forests.</p>
        <blockquote>"Here stood not just a place, but the pulse of a people destined for greatness."</blockquote>
        <p>Its maritime legacy flourished as ships set sail to Java, Sumatra, and beyond — Odisha was not just a state, but a civilization that sailed with the monsoon winds.</p>
      `;
      break;
    case "history":
      text = `
        <p>It was the <strong>Kalinga War</strong> in 261 BCE that shook Emperor Ashoka to his core — a battle so brutal it birthed peace. From that moment on, Odisha became a symbol of spiritual transformation.</p>
        <blockquote>"Where blood once stained the soil, now rise stupas of compassion."</blockquote>
        <p>Under dynasties like the Gajapatis and Eastern Gangas, magnificent architecture blossomed — none more iconic than the Sun Temple at Konark, a chariot of the gods carved from stone.</p>
      `;
      break;
    case "present":
      text = `
        <p>Modern Odisha stands resilient and proud — a melting pot where Jagannath culture meets cutting-edge tech parks.</p>
        <blockquote>"Between tradition and tomorrow, Odisha walks with grace."</blockquote>
        <p>Whether it’s the Rath Yatra in Puri, the wild silence of Simlipal, or startup energy brewing in Bhubaneswar — Odisha remains India's best kept secret, whispering stories to those willing to listen.</p>
      `;
      break;
    default:
      text = `<p>Select a topic to explore Odisha's rich legacy.</p>`;
  }

  contentBox.innerHTML = text;
}

const places = [
  {
    name: "Bhubaneswar",
    image: "Bhu.jpg",
    link: "https://en.wikipedia.org/wiki/Bhubaneswar",
  },
  {
    name: "Konark",
    image: "img/konark.jpg",
    link: "https://en.wikipedia.org/wiki/Konark",
  },
  {
    name: "Puri",
    image: "img/puri.jpg",
    link: "https://en.wikipedia.org/wiki/Puri",
  },
  {
    name: "Chilika Lake",
    image: "img/chilika.jpg",
    link: "https://en.wikipedia.org/wiki/Chilika_Lake",
  },
  {
    name: "Simlipal",
    image: "img/simlipal.jpg",
    link: "https://en.wikipedia.org/wiki/Simlipal_National_Park",
  },
];

let currentPlace = 0;

function updateCarousel() {
  const slide = document.getElementById("carouselSlide");
  const placeName = document.getElementById("placeName");
  const discoverBtn = document.getElementById("discoverBtn");

  slide.style.backgroundImage = `url('${places[currentPlace].image}')`;
  placeName.textContent = places[currentPlace].name;
  discoverBtn.onclick = () => {
    window.open(places[currentPlace].link, "_blank");
  };
}

function nextPlace() {
  currentPlace = (currentPlace + 1) % places.length;
  updateCarousel();
}

function prevPlace() {
  currentPlace = (currentPlace - 1 + places.length) % places.length;
  updateCarousel();
}

// Initialize carousel on load
document.addEventListener("DOMContentLoaded", updateCarousel);
