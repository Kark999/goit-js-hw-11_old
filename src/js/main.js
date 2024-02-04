import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import Cssloader from 'css-loader/dist/';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const search = e.target.elements.search.value;
  getImagesByType(search).then(data => data);
  // refs.form.reset();
}

function getImagesByType(q) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42141224-180b0a56c10fd436e302d680a';
  const PARAMS = 'q=${q}';
  // &image_type=photo&orientation=horizontal&safesearch=true
  const url = `${BASE_URL}?key=${API_KEY}&${PARAMS}`;

  return fetch(url).then(response => response.json());
}

function imageTamplate(hits) {
  return `<li class="gallery-card">
        <a href="${hits.largeImageURL}"
          ><img
            class="gallery-image"
            src="${hits.webformatURL}"
            alt="${hits.tags}"
            title=""
          />
        </a>
        <div class="gallery-card-items">
          <p class="gallery-card-info">
            Likes
            <span class="gallery-card-data">${hits.likes.value}</span>
          </p>

          <p class="gallery-card-info">
            Views
            <span class="gallery-card-data">${hits.views.value}</span>
          </p>

          <p class="gallery-card-info">
            Comments
            <span class="gallery-card-data">${hits.comments.value}</span>
          </p>

          <p class="gallery-card-info">
            Downloads
            <span class="gallery-card-data">${hits.downloads.value}</span>
          </p>
        </div>
      </li>`;
}
function galleryTemplate(hits) {
  return hits.map(imageTemplate).join('');
}
const markup = galleryTemplate();
refs.gallery.innerHTML = markup;
