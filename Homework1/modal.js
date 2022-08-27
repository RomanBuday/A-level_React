const modal = document.querySelector('.modal');

export function modalSwitcher() {
    const modalTrigger = document.querySelectorAll('.list-item');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', e  => {
            const listItem = e.target.closest('.list-item');

            const _id = listItem.getAttribute('data-id');
            const allModals = modal.querySelectorAll('.modal-content');

            allModals.forEach(m => {
              m.classList.add('hide');
              m.classList.remove('showFlex');
            });

            const modalToShow = document.querySelectorAll(`.modal .modal-content[data-id="${_id}"]`)[0];

            modalToShow.classList.remove('hide');
            modalToShow.classList.add('showFlex');

            modal.classList.add('show');
            modal.classList.remove('hide');

            document.body.style.overflow = 'hidden';
        });
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape") {
            closeModal();
        }
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

export function getDetails(userData) {
    userData.forEach((el => {
        generateModal(
          el._id,
          el.index,
          el.guid,
          el.isActive,
          el.balance,
          el.picture,
          el.age,
          el.eyeColor,
          el.name,
          el.gender,
          el.company,
          el.email,
          el.phone,
          el.adress,
          el.about,
          el.registered,
          el.latitude,
          el.longitude,
          el.tags,
          el.friends.name,
          el.greeting,
          el.favoriteFruit);
    }));
}

function generateModal(_id, index, guid, isActive, balance, picture,
    age, eyeColor, name, gender, company, email, phone, adress, about,
    registered, latitude, longitude, tags, friends, greeting, favoriteFruit) {
    const modal = document.querySelector('.modal-container');
  
    modal.insertAdjacentHTML('beforeend', showDetails(_id, index, guid, isActive, balance, picture,
        age, eyeColor, name, gender, company, email, phone, adress, about,
        registered, latitude, longitude, tags, friends, greeting, favoriteFruit));
}

function showDetails(_id, index, guid, isActive, balance, picture,
    age, eyeColor, name, gender, company, email, phone, adress, about,
    registered, latitude, longitude, tags, friends, greeting, favoriteFruit) {
        return `
        <div class="modal-content fade" data-id="${_id}">
            <div class="modal-content__descr">
                <div class="descr-list">
                    <h2 class="descr-title">${name}</h2>
                    <div class="modal-content__img">
                        <img src="${picture}" alt="user img">
                    </div>
                </div> 

                <ul class="descr-list">
                    <li class="descr-list__item">Id: <span>${_id}</span></li>
                    <li class="descr-list__item">Index: <span>${index}</span></li>
                    <li class="descr-list__item">Guid: <span>${guid}</span></li>
                    <li class="descr-list__item">Active: <span>${isActive}</span></li>
                    <li class="descr-list__item">Balance: <span>${balance}</span></li>
                    <li class="descr-list__item">Tags: <span>${tags.join(', ')}</span></li>
                </ul>

                <ul class="descr-list">
                    <li class="descr-list__item">Age: <span>${age}</span></li>
                    <li class="descr-list__item">Eye сolor: <span>${eyeColor}</span></li>
                    <li class="descr-list__item">Gender: <span>${gender}</span></li>
                    <li class="descr-list__item">Company: <span>${company}</span></li>
                    <li class="descr-list__item">Email: <span>${email}</span></li>
                    <li class="descr-list__item">Phone: <span>${phone}</span></li>
                    <li class="descr-list__item">Adress: <span>${adress}</span></li>
                </ul>

                <ul class="descr-list">
                    <li class="descr-list__item">Registered: <span>${registered}</span></li>
                    <li class="descr-list__item">Latitude: <span>${latitude}</span></li>
                    <li class="descr-list__item">Longitude: <span>${longitude}</span></li>
                    <li class="descr-list__item">Friends: <span>${friends}</span></li>
                    <li class="descr-list__item">Greeting: <span>${greeting}</span></li>
                    <li class="descr-list__item">Favorite fruit: <span>${favoriteFruit}</span></li>
                </ul>
            </div>
            <span class="descr-list__item descr-list__about">About: ${about}</span>
        </div>`;
}