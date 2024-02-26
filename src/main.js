// const donation = [
//   {
//     title: 'Save the Children',
//     url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: './img/save-the-children.png',
//   },
//   {
//     title: 'Project HOPE',
//     url: 'https://www.projecthope.org/country/ukraine/',
//     img: './img/project-hope.png',
//   },
//   {
//     title: 'International Medical Corps',
//     url: 'https://internationalmedicalcorps.org/country/ukraine/',
//     img: './img/int-med-corps.png',
//   },
//   {
//     title: 'RAZOM',
//     url: 'https://www.razomforukraine.org/',
//     img: './img/razom.png',
//   },
//   {
//     title: 'Action against hunger',
//     url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//     img: './img/act-against-hunger.png',
//   },
//   {
//     title: 'Serhiy Prytula Charity Foundation',
//     url: 'https://prytulafoundation.org/en',
//     img: './img/prytula.png',
//   },
//   {
//     title: 'Medicins Sans Frontieres',
//     url: 'https://www.msf.org/ukraine',
//     img: './img/msf.png',
//   },

//   {
//     title: 'World vision',
//     url: 'https://www.wvi.org/emergencies/ukraine',
//     img: './img/world-vision.png',
//   },
//   {
//     title: 'UNITED24',
//     url: 'https://u24.gov.ua/uk',
//     img: './img/united24.png',
//   },
// ];

// const donationListElement = document.querySelector('.donation-list');
// const scrollButton = document.querySelector('.scroll-btn');
// const arrowIcon = document.querySelector('.arrow-btn');

// let startIndex = 0; // Початковий індекс першої організації для відображення
// let isForward = true; // Флаг для визначення напрямку прокрутки

// function donationTemplate(donation, index) {
//   function pad(num) {
//     return num < 10 ? '0' + num : num;
//   }
//   return `<li class="donation-list-name">
//                 <p class="donation-name-number">${pad(index + 1)}</p>
//                 <a
//                   class="donation-name-link"
//                   href="${donation.url}"
//                   target="_blank"
//                   ><img
//                     class="donation-name-logo"
//                     src="${donation.img}"
//                     alt="${donation.title}"
//                   />
//                 </a>
//               </li>`;
// }

// function donationListTemplate(data) {
//   return data
//     .map((donation, index) => donationTemplate(donation, index + startIndex))
//     .join('');
// }

// function renderDonations() {
//   const visibleDonations = donation.slice(startIndex, startIndex + 6);
//   const markup = donationListTemplate(visibleDonations);
//   donationListElement.innerHTML = markup;
// }

// function toggleScrollDirection() {
//   isForward = !isForward;
//   arrowIcon.style.transform = isForward ? 'rotate(0deg)' : 'rotate(180deg)';
// }

// function scrollDonations() {
//   if (isForward) {
//     if (startIndex + 6 < donation.length) {
//       startIndex += 3;
//     } else {
//       startIndex = 0;
//     }
//   } else {
//     if (startIndex - 3 >= 0) {
//       startIndex -= 3;
//     } else {
//       startIndex = donation.length - 6;
//     }
//   }
//   renderDonations();
// }

// scrollButton.addEventListener('click', () => {
//   scrollDonations();
//   toggleScrollDirection();
// });

// renderDonations();
