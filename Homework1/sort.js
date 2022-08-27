export function setSort(cb) {
    const  sortInp = document.querySelector('.app-header__sort');

    const btnResetSort = document.querySelector('.app-header__btn');
    btnResetSort.addEventListener('click', () => cb());

    sortInp.addEventListener('change', (ev) => {
      cb(ev.target.value == 'min');
    });
}