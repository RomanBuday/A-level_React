const  searchInp = document.querySelector('.app-header__input');

export function searchData() {
    searchInp.addEventListener('input', (ev) => {
        const filterStr = ev.target.value.toLowerCase().trim();
        if (filterStr.length >= 3 || filterStr.length == 0) {
            searchFunc(filterStr);
        }
    });
}

function searchFunc(filter) {
    let items = document.querySelectorAll('.list-item');

    items.forEach(item => {
        const title = item.querySelector('.item-bottom__name').innerHTML;
        if (title.toLowerCase().indexOf(filter) !== -1) {
          item.style.display = '';
        }
        else {
          item.style.display = 'none';
        }
      });
}
