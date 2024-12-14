//Index load events

//Function to get all events from api
const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}
//function to load the events onto the html page 
const loadEvents = events => {
    //Gets the events and data
    events.forEach(({ Name, Date, ID}) => {
        //Selecting the UL with the event class
		const eventsList = document.querySelector('.event');
    //clears it of any data that may be inside
    eventsList.innerHTML = '';
    //for each event create a li inside the ul, the inside the li add the name and date properties.
    events.forEach(({ Name, Date, ID}) => {
        const eventItem = document.createElement('li')
        eventItem.innerHTML = `
            <h2>${Name}</h2>
            <p>Date: ${Date}</p>
            <button class="${ID}">Details</button>
        `
        //Add it to the ul with class of event
        eventsList.appendChild(eventItem);
	})
})}


//Load menu

//get menu items from api
const getMenu = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}


const loadMenu = menuItem => {
    menuItem.forEach(({ ProductName, Price, Number}) => {
	    const menuList = document.querySelector('.menu');
        menuList.innerHTML = '';
        menuItem.forEach(({ ProductName, Price, Number}) => {
        const menuItem = document.createElement('li')
        menuItem.innerHTML = `
            <h2>${ProductName}</h2>
            <p>Price: ${Price}</p>
            <button class="${Number}">Details</button>
        `
        menuList.appendChild(menuItem);
	    })
    })
}




;(async () => {
	const events = await getEvents();
    const menu = await getMenu();
    loadMenu(menu);
    loadEvents(events);

})()