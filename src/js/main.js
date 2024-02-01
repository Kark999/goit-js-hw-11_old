import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import Cssloader from 'css-loader/dist/';

function getImagesByType(q) {
  const BASE_URL = 'https://pixabay.com/api/';
  const PARAMS = `?q=${q}&image_type='photo'&orientation='horizontal'&safesearch=true`;
  const url = BASE_URL + PARAMS;

  const options = {
    key: '',
  };

  return fetch(url);
}
getImagesByType(dog);
