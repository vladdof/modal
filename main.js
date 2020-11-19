const modal = document.querySelector('.modal'),
    modal_overlay = document.querySelector('.modal-overlay'),
    btn_close = document.querySelector('.btn-close'),
    btn_open = document.querySelector('.btn-open');

btn_close.addEventListener('click', () => {
    modal.classList.toggle('closed');
    modal_overlay.classList.toggle('closed');
});

btn_open.addEventListener('click', () => {
    modal.classList.toggle('closed');
    modal_overlay.classList.toggle('closed');
});
