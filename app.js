/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Eliton";

const CARDS = [
  {
    name: "Gmail",
    icon: "",
    img: "../root-startpage/icons/Gmail.svg",
    link: "https://mail.google.com/",
    color: "#cb3a2e",
  },
  {
    name: "YouTube",
    icon: "",
    img: "../root-startpage/icons/YouTube.svg",
    link: "https://www.youtube.com/",
    color: "#FF0000",
  },
  {
    name: "Github",
    icon: "",
    img: "../root-startpage/icons/Github.svg",
    link: "https://github.com/",
    color: "#f0f6fc",
  },
  {
    name: "Reddit",
    icon: "",
    img: "../root-startpage/icons/Reddit.svg",
    link: "https://www.reddit.com/",
    color: "#ff4500",
  },
  {
    name: "Twitter",
    icon: "",
    img: "../root-startpage/icons/Twitter.svg",
    link: "https://twitter.com",
    color: "#1DA1F2",
  },
  {
    name: "CasaOS",
    icon: "",
    link: "http://192.168.0.203:88",
    img: "../root-startpage/icons/Casaos.svg",
    color: "#5865F2",
  },
  {
    name: "CasaOS",
    icon: "",
    link: "http://192.168.0.120:88",
    img: "../root-startpage/icons/Casaos.svg",
    color: "#5865F2",
  },
  {
    name: "Home Assistant",
    icon: "",
    link: "http://192.168.0.203:8123",
    img: "../root-startpage/icons/Home_Assistant.svg",
    color: "#5865F2",
  },
  {
    name: "Pi-hole",
    icon: "",
    link: "http://192.168.0.200/admin",
    img: "../root-startpage/icons/Pi-hole.svg",
    color: "#5865F2",
  },
  {
    name: "Node-RED",
    icon: "",
    img: "../root-startpage/icons/NodeRED.svg",
    link: "http://192.168.0.203:1880",
    color: "#5865F2",
  },
  {
    name: "ESPHome",
    icon: "",
    link: "http://192.168.0.203:6052",
    img: "../root-startpage/icons/ESPHome.svg",
    color: "#5865F2",
  },
  {
    name: "esp32testeswitches",
    icon: "",
    img: "../root-startpage/icons/ESPHome.svg",
    link: "http://192.168.0.14/",
    color: "#5865F2",
  },
  {
    name: "esp-base",
    icon: "",
    img: "../root-startpage/icons/ESPHome.svg",
    link: "http://192.168.0.50",
    color: "#5865F2",
  },
  {
    name: "Roteador 1",
    icon: "",
    img: "../root-startpage/icons/TPLink.svg",
    link: "http://192.168.0.1/",
    color: "#0a66c2",
  },
  {
    name: "Roteador 2",
    icon: "",
    img: "../root-startpage/icons/TPLink.svg",
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
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Update the Time
  // currentTime.innerHTML = `${
  //   currentHour % 12 == 0 ? "12" : currentHour % 12
  // }:${currentMinute} ${currentHour > 11 ? "PM" : "AM"}`;
  currentTime.innerHTML = `${currentHour}:${currentMinute}`;

  // Update the Date "Hoje é quarta, dia 04 de Janeiro de 2023"
  currentDate.innerHTML = `${DAYS[currentDay]}, dia ${currentNumber} de ${MONTHS[currentMonth]} de ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const addCustomColorListener = (htmlNode, card) => {
  // If a `customColor` isn't provided, don't do anything
  if (!card?.color) return;

  // Add custom color whenever the cursor enters the card
  htmlNode.addEventListener("mouseenter", (event) => {
    htmlNode.style.color = card.color;
    htmlNode.style.borderColor = card.color;

    event.target.setAttribute("isHovered", true);
  });

  // Remove custom color whenever the cursor leaves the card
  htmlNode.addEventListener("mouseleave", (event) => {
    event.target.setAttribute("isHovered", false);
    if (event.target.getAttribute("isFocused") == "true") return;

    htmlNode.style.color = "white";
    htmlNode.style.borderColor = "rgba(255, 255, 255, 0.05)";
  });

  // Add custom color whenever the card is focused
  htmlNode.addEventListener("focus", (event) => {
    htmlNode.style.color = card.color;
    htmlNode.style.borderColor = card.color;

    event.target.setAttribute("isFocused", true);
  });

  // Remove custom color whenever the card is blurred
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
/*       currentCardIcon = document.createElement("i");
      currentCardIcon.classList.add(card.icon); */
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
    cardContainer.appendChild(currentCard);
  }
};

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();

$(document).ready(function() {
   var accordionTitle = $('.accordion-title');
   var accordionText = $('.accordion-text');
   var speed = 300;

   accordionTitle.on('click', function() {
       var thisAccordion = $(this);
       var isActive = thisAccordion.hasClass('active');

       if( isActive ) {
           thisAccordion
               .removeClass('active')
               .parent().find('.accordion-text').slideUp(speed);
       } else {
           accordionTitle.removeClass('active');
           accordionText.slideUp(speed);
           thisAccordion
               .addClass('active')
               .parent().find('.accordion-text').slideDown(speed);
       }
   });

   if($(window).width() >= 1024){
    accordionTitle.first().click();
   }
});