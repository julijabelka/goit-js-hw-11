// import modules
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// =======================================================

const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const state = event.target.state.value;
  const delay = event.target.delay.value;

  const promiseTime = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promiseTime
    .then(delayTime => {
      iziToast.success({
        title: 'Resolve',
        message: `✅ Fulfilled promise in ${delayTime}ms`,
        position: 'topRight',
      });
    })
    .catch(delayTime => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delayTime}ms`,
        position: 'topRight',
      });
    });

  event.currentTarget.reset();
}
