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
  getImagesByType(search).then(data => {
    console.log(data);
  });
}

function getImagesByType(q) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42141224-180b0a56c10fd436e302d680a';
  const PARAMS =
    'q=${q}&image_type=photo&orientation=horizontal&safesearch=true';

  const url = `${BASE_URL}?key=${API_KEY}&${PARAMS}`;

  return fetch(url).then(response => response.json());
  // .then(data => data);
}
