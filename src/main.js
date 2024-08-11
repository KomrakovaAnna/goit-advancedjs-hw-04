import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import * as render from './js/render-functions.js';
import * as apiCalls from './js/pixabay-api.js';
import iziToast from 'izitoast';

const searchForm = document.querySelector('.search__form');
const loaderPlaceholder = document.querySelector('.js__loader');
const galleryEL = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more__button');

const itemPerPage = 15;
let currentPage = 1;
let searchValue = '';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    currentPage = 1;
    const searchValue = event.target.elements.user_query.value.trim();
    loadMoreBtn.classList.add('visually-hidden');
    loaderPlaceholder.classList.remove('is-hidden');

  

    if (searchValue === '') {
      iziToast.error({
        message: 'Input something to search!',
        position: 'topRight',
      });
      loaderPlaceholder.classList.add('is-hidden');
      searchForm.reset();
      galleryEl.innerHTML = '';
      return;
    }

    const { data } = await apiCalls.apiCall(
      searchValue,
      currentPage,
      itemPerPage
    );

    const { hits } = data;
    if (!hits || hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      loaderPlaceholder.classList.add('is-hidden');

      searchForm.reset();
      galleryEl.innerHTML = '';
      return;
    }
    const galleryHTML = render.renderGallery(hits);
    galleryEL.innerHTML = galleryHTML;
    gallery.refresh();

    scrollGalleryIntoView()

    searchForm.reset();
    loadMoreBtn.classList.remove('visually-hidden');

    loaderPlaceholder.classList.add('is-hidden');
  } catch (err) {
    iziToast.error({
      message: 'Please, try again!',
      position: 'topRight',
    });
  }
};

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'tags',
  captionDelay: 250,
});

const onLoadMoreBtnClick = async event => {
  try {
    currentPage += 1;
    if (searchValue === '') {
      console.log('no searchValue');
    }
    const { data } = await apiCalls.apiCall(
      searchValue,
      currentPage,
      itemPerPage
    );

    console.log(currentPage);
   


    const { hits, totalHits } = data;

    console.log(hits);
    console.log(totalHits);


    totalHits = data.totalHits;
    if (hits.length === 0) {
      loadMoreBtn.classList.add('visually-hidden');
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      return;
    }


    const galleryHTML = render.renderGallery(hits, true);
    galleryEL.insertAdjacentHTML('beforeend', galleryHTML);
    gallery.refresh();

    if (currentPage * itemPerPage >= totalHits) {
      loadMoreBtn.classList.add('visually-hidden');
  }

    scrollGalleryIntoView();

  } catch (err) {
    iziToast.error({
      message: 'Please, try again!',
      position: 'topRight',
    });
  }
};

function scrollGalleryIntoView() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const height = galleryItem.getBoundingClientRect().height;
    window.scrollBy({ top: height * 2, behavior: 'smooth' });
  }
}

loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
searchForm.addEventListener('submit', onSearchFormSubmit);
