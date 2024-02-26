import * as basicLightbox from 'basiclightbox';

document.addEventListener('DOMContentLoaded', function () {
  function createMenuContent() {
    const menuContent = `
        <div class="menu-header"></div>
        <div class="menu-body">
          <div class="menu-user-profile">
            <p class="menu-user-name"></p>
            <svg class="menu-user-fill" width="22" height="22">
              <use href="./img/icons.svg#user-fill"></use>
            </svg>
          </div>
          <ul id="menu-list" class="menu-nav-list">
            <li class="menu-nav-item">
              <a class="menu-nav-link menu-nav-link-home make-yellow" href="./index.html">Home</a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link menu-nav-link-shop shopping-link" href="../shopping-list.html">
                Shopping List
                <span class="shoping-test">
                  <svg class="menu-nav-icon-shop" width="20" height="20">
                    <use href="./img/icons.svg#uil-cart"></use>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-log-out">
          <button type="button" class="log-out">
            Log out
            <svg class="log-out-icon" width="20" height="20">
              <use href="./img/icons.svg#arrow-narrow-right"></use>
            </svg>
          </button>
        </div>
      `;

    return menuContent;
  }

  const menuContainer = document.querySelector('.menu-container');
  const menuContent = createMenuContent();
  menuContainer.innerHTML = menuContent;
  const menuModal = basicLightbox.create(menuContainer, {
    className: 'my-lightbox',
  });
  menuModal.show();
});

// const openMenuButton = document.querySelector('.open-menu-button');
// openMenuButton.addEventListener('click', openMenu);

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
