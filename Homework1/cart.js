function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function getTabs(userData, sort) {
    const app = document.querySelector('.app-main__list');
    removeAllChildNodes(app);
  
    console.log('sort', sort);
  
    let data = userData;
    console.dir(data);
    if (sort !== undefined) {
        console.log('sorting...');
        data = data.slice().sort((a, b) => sort ? a.age > b.age : a.age < b.age);
        console.dir(data);
    }
  
    data.forEach((el => {
    generateTabs(
        el.name,
        el.age,
        el.gender,
        el.balance,
        el.picture,
        el._id);
    }));
}
  
export function generateTabs(name, age, gender, balance, picture, _id) {
    const app = document.querySelector('.app-main__list');
    app.insertAdjacentHTML('beforeend', createTab(name, age, gender, balance, picture, _id));
}
  
function createTab(name, age, gender, balance, picture, _id) {
    return `
        <div class="list-item" data-id="${_id}">
            <div class="item-top">
                <img class="item-top__img" loading="lazy" src="${picture}" alt="user image">
            </div>
  
            <div class="item-bottom">
                <h2 class="item-bottom__name">${name}</h2>
                <ul class="item-bottom__descr">
                    <li class ="item-bottom__age">Age: ${age}</li>
                    <li class ="item-bottom__gender">Gender: ${gender}</li>
                    <li class ="item-bottom__balance">Balance: ${balance}</li>
                </ul>
            </div>
        </div>
    `;
}
  