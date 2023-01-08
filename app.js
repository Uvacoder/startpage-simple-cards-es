/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Eliton";

const CARDS = [
  {
    name: "Gmail",
    icon: "",
    img: "icons/Gmail.svg",
    link: "https://mail.google.com/",
    color: "#cb3a2e",
  },
  {
    name: "YouTube",
    icon: "",
    img: "icons/YouTube.svg",
    link: "https://www.youtube.com/",
    color: "#FF0000",
  },
  {
    name: "Github",
    icon: "",
    img: "icons/Github.svg",
    link: "https://github.com/",
    color: "#f0f6fc",
  },
  {
    name: "Reddit",
    icon: "",
    img: "icons/Reddit.svg",
    link: "https://www.reddit.com/",
    color: "#ff4500",
  },
  {
    name: "Twitter",
    icon: "",
    img: "icons/Twitter.svg",
    link: "https://twitter.com",
    color: "#1DA1F2",
  },
  {
    name: "CasaOS",
    icon: "",
    link: "http://192.168.0.203:88",
    img: "icons/Casaos.svg",
    color: "#5865F2",
  },
  {
    name: "CasaOS",
    icon: "",
    link: "http://192.168.0.120:88",
    img: "icons/Casaos.svg",
    color: "#5865F2",
  },
  {
    name: "Home Assistant",
    icon: "",
    link: "http://192.168.0.203:8123",
    img: "icons/Home_Assistant.svg",
    color: "#5865F2",
  },
  {
    name: "Pi-hole",
    icon: "",
    link: "http://192.168.0.200/admin",
    img: "icons/Pi-hole.svg",
    color: "#5865F2",
  },
  {
    name: "Node-RED",
    icon: "",
    img: "icons/NodeRED.svg",
    link: "http://192.168.0.203:1880",
    color: "#5865F2",
  },
  {
    name: "ESPHome",
    icon: "",
    link: "http://192.168.0.203:6052",
    img: "icons/ESPHome.svg",
    color: "#5865F2",
  },
  {
    name: "esp32testeswitches",
    icon: "",
    img: "icons/ESPHome.svg",
    link: "http://192.168.0.14/",
    clipboard: true,
    color: "#5865F2",
  },
  {
    name: "esp-base",
    icon: "",
    img: "icons/ESPHome.svg",
    link: "http://192.168.0.50",
    clipboard: true,
    color: "#5865F2",
  },
  {
    name: "Roteador 1",
    icon: "",
    img: "icons/TPLink.svg",
    link: "http://192.168.0.1/",
    color: "#0a66c2",
  },
  {
    name: "Roteador 2",
    icon: "",
    img: "icons/TPLink.svg",
    link: "http://192.168.0.2/",
    color: "#0a66c2",
  },
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
];

const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosta",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const updateDate = () => {
  // Cria um novo objeto Date e obtém as informações completas de Data/Hora
  const completeDate = new Date();

  // Variáveis de tempo
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Variáveis de Data
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Atualiza a hora
  // currentTime.innerHTML = `${
  //   currentHour % 12 == 0 ? "12" : currentHour % 12
  // }:${currentMinute} ${currentHour > 11 ? "PM" : "AM"}`;
  currentTime.innerHTML = `${currentHour}:${currentMinute}`;

  // Atualização da Data "Hoje é quarta, dia 04 de Janeiro de 2023"
  currentDate.innerHTML = `${DAYS[currentDay]}, dia ${currentNumber} de ${MONTHS[currentMonth]} de ${currentYear}`;

  // Cria um loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const addCustomColorListener = (htmlNode, card) => {
  // Se um `customColor` não for fornecido, não faça nada
  if (!card?.color) return;

  // Adicionar cor personalizada sempre que o cursor entrar no card
  htmlNode.addEventListener("mouseenter", (event) => {
    htmlNode.style.color = card.color;
    htmlNode.style.borderColor = card.color;

    event.target.setAttribute("isHovered", true);
  });

  // Remove a cor personalizada sempre que o cursor sai do card
  htmlNode.addEventListener("mouseleave", (event) => {
    event.target.setAttribute("isHovered", false);
    if (event.target.getAttribute("isFocused") == "true") return;

    htmlNode.style.color = "white";
    htmlNode.style.borderColor = "rgba(255, 255, 255, 0.05)";
  });

  // Adicionar cor personalizada sempre que o card estiver em foco
  htmlNode.addEventListener("focus", (event) => {
    htmlNode.style.color = card.color;
    htmlNode.style.borderColor = card.color;

    event.target.setAttribute("isFocused", true);
  });

  // Remove a cor personalizada sempre que o card estiver desfocado
  htmlNode.addEventListener("blur", (event) => {
    event.target.setAttribute("isFocused", false);
    if (event.target.getAttribute("isHovered") == "true") return;

    htmlNode.style.color = "white";
    htmlNode.style.borderColor = "rgba(255, 255, 255, 0.05)";
  });
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

/******************/
/* ICON CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon;

    if (card.icon === "") {
      currentCardIcon = document.createElement("p");
      var useElem = document.createElement("img");
      useElem.setAttribute("src", card.img);

      currentCardIcon.appendChild(useElem);     
    } else {
      currentCardIcon = document.createElement("i");
      currentCardIcon.classList.add(card.icon);
    }


    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    // cardContainer.appendChild(currentCard);

    // Initialize flag attributes
    currentCard.setAttribute("isHovered", false);
    currentCard.setAttribute("isFocused", false);

    cardContainer.appendChild(currentCard);

    addCustomColorListener(currentCard, card);

    // Handle the click event
    currentCard.addEventListener("click", async (event) => {
      // If the card doesn't have `clipboard: true` don't do anything
      if (!card.clipboard) return;

      // Prevent the page from opening
      event.preventDefault();
      // Copy the href to the clipboard
      try {
        await navigator.clipboard.writeText(card.link);
        currentCard.blur();
        currentCardText.innerText = "Saved to clipboard!";
        setTimeout(() => {
          currentCardText.innerText = card.name;
        }, 1500);
      } catch {
        currentCardText.innerText = "Unable to copy";
        setTimeout(() => {
          currentCardText.innerText = card.name;
        }, 1500);
      }
    });
  }
};

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();

// $(document).ready(function() {
//    var accordionTitle = $('.accordion-title');
//    var accordionText = $('.accordion-text');
//    var speed = 300;

//    accordionTitle.on('click', function() {
//        var thisAccordion = $(this);
//        var isActive = thisAccordion.hasClass('active');

//        if( isActive ) {
//            thisAccordion
//                .removeClass('active')
//                .parent().find('.accordion-text').slideUp(speed);
//        } else {
//            accordionTitle.removeClass('active');
//            accordionText.slideUp(speed);
//            thisAccordion
//                .addClass('active')
//                .parent().find('.accordion-text').slideDown(speed);
//        }
//    });

//    if($(window).width() >= 1024){
//     accordionTitle.first().click();
//    }
// });