
//Function to get all events from api
const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}
const getEventId = async id => {
	const response = await fetch(`/api/v1/events/${id}`)
    return await response.json()
}
//function to load the events onto the html page 
const loadEvents = events => {

        //Selecting the UL with the event class
        const eventsList = document.querySelector('.event');
    //clears it of any data that may be inside
    eventsList.innerHTML = '';
    //for each event create a li inside the ul, the inside the li add the name and date properties.
    events.forEach(({ _id, Name, Date, }) => {
        const eventItem = document.createElement('li')
        eventItem.innerHTML = `<h2>${Name}</h2>
                               <p>Date: ${Date}</p>
                               <button class="details" data-id="${_id}">Details</button>`
        //Add it to the ul with class of event
        eventsList.appendChild(eventItem);
        //adding an event listener to all the buttons to load by id
        const detailButton = eventItem.querySelector(`.details`)
        detailButton.addEventListener('click', async () => {
            window.location.href = `/event/${_id}`;
        })
	})
}

const loadDetails = item => {
    window.location.href = `details.html`
        const eventsList = document.querySelector('.itemDetails');
        const eventItem = document.createElement('li')
            eventItem.innerHTML = `<h2>Hi</h2>`
            eventsList.appendChild(eventItem);
}



//Load menu

//get menu items from api
const getMenu = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}


const loadMenu = menuItem => {
    menuItem.forEach(({ _id, ProductName, Price, Image }) => {
	    const menuList = document.querySelector('.menu');
        menuList.innerHTML = '';
        menuItem.forEach(({ _id, ProductName, Price, Image }) => {
        const menuItem = document.createElement('li')
        menuItem.innerHTML = `<h2>${ProductName}</h2>
                              <img class="menuimg" src="${Image}">
                              <p>Price: ${Price}</p>
                              <button id="${_id}">Details</button>`
        menuList.appendChild(menuItem);
	    })
    })
}

const getMenuId = async id => {
	const response = await fetch(`/api/v1/menu/${id}`)
	return await response.json()
}




;(async () => {
	const events = await getEvents();
    const menu = await getMenu();
    loadMenu(menu);
    loadEvents(events);

})()

document.getElementById('menuForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const menuData = {
        ProductName: document.getElementById('menuName').value,
        Description: document.getElementById('menuDescription').value,
        Price: document.getElementById('menuPrice').value,
        Image: document.getElementById('menuImgLink').value
    };
    const response = await fetch('http://localhost:3010/api/v1/menu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuData)
    });
});

document.getElementById('eventForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const menuData = {
        Name: document.getElementById('eventName').value,
        Location: document.getElementById('eventLocation').value,
        Date: document.getElementById('eventDate').value,
        Time: document.getElementById('eventTime').value
    };
    const response = await fetch('http://localhost:3010/api/v1/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuData)
    });
});


