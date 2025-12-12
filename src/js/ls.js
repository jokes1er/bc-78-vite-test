import { saveToLocalStorage, loadFromLocaleStorage } from './local-storage-api';
import localStorageApi from './local-storage-api';

const refs = {
  readBtn: document.querySelector('.js-read-ls-btn'),
};

const product = {
  title: 'Apples',
  price: 100,
  quantity: 2,
};

saveToLocalStorage('product-info', product);

const onReadBtnClick = event => {
  const productFromLs = loadFromLocaleStorage('product-info');
  if (productFromLs === null) {
    return;
  }
  console.log(productFromLs);
};

refs.readBtn.addEventListener('click', onReadBtnClick);
