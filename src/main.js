import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';

const donation = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/save-the-children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/project-hope.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/int-med-corps.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/action-against-hunger.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/prytula.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/msf.png',
  },

  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/world-vision.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/united24.png',
  },
];
// const refs = {
//   donatList: document.querySelector('.donation-list'),
//   swiper: document.querySelector('.swiper').swiper,
// };

// function renderDonations() {
//   const donationListElement = document.querySelector('.donation-list');
//   donationListElement.innerHTML = donationListTemplate(donation);
// }

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // width: 159,
  // height: 292,
});

// export function donationTemplate(donation) {
//   return `<li class="donation-list-name">
//                 <p class="donation-name-number">01</p>
//                 <a
//                   class="donation-name-link"
//                   href="${donation.url}"
//                   target="_blank"
//                   ><img
//                     class="donation-name-logo"
//                     src="${donation.img}"
//                     alt="Save the Children"
//                   />
//                 </a>
//               </li>`;
// }
// export function donationListTemplate(donation) {
//   return data.map(donationTemplate).join('');
// }

// const markup = render.donationListTemplate(donation);
// refs.donatList.insertAdjacentHTML('beforeend', markup);
