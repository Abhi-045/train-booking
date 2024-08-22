// Function to fetch total number of trains
function getTotalTrains() {
    // Simulating asynchronous data retrieval
    setTimeout(() => {
        // Assuming you have fetched the total number of trains from the backend
        const totalTrains = 10; // Example total number of trains

        // Update the HTML element with the total number of trains
        document.getElementById('total-trains').textContent = totalTrains;
    }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
}

// Call the function to fetch total number of trains
getTotalTrains();


// Function to fetch total number of routes
function getTotalRoutes() {
    // Simulating asynchronous data retrieval
    setTimeout(() => {
        // Assuming you have fetched the total number of routes from the backend
        const totalRoutes = 15; // Example total number of routes

        // Update the HTML element with the total number of routes
        document.getElementById('total-routes').textContent = totalRoutes;
    }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
}

// Call the function to fetch total number of routes
getTotalRoutes();


// Function to fetch upcoming departures
function getUpcomingDepartures() {
    // Simulating asynchronous data retrieval
    setTimeout(() => {
        // Assuming you have fetched the upcoming departures from the backend
        const upcomingDepartures = [
            { trainName: 'Express', departureTime: '10:00 AM' },
            { trainName: 'Superfast', departureTime: '11:30 AM' },
            { trainName: 'Local', departureTime: '1:00 PM' }
        ]; // Example upcoming departures

        // Update the HTML element with the upcoming departures
        const upcomingDeparturesList = document.getElementById('upcoming-departures');
        upcomingDeparturesList.innerHTML = ''; // Clear existing list
        upcomingDepartures.forEach(departure => {
            const listItem = document.createElement('li');
            listItem.textContent = `${departure.trainName} - Departure Time: ${departure.departureTime}`;
            upcomingDeparturesList.appendChild(listItem);
        });
    }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
}

// Call the function to fetch upcoming departures
getUpcomingDepartures();


// Function to fetch recent activity
function getRecentActivity() {
    // Simulating asynchronous data retrieval
    setTimeout(() => {
        // Assuming you have fetched the recent activity from the backend
        const recentActivity = [
            { event: 'Train delay reported', timestamp: '2024-05-12 09:45 AM' },
            { event: 'New route added', timestamp: '2024-05-11 02:30 PM' },
            { event: 'Passenger booked a ticket', timestamp: '2024-05-10 11:15 AM' }
        ]; // Example recent activity

        // Update the HTML element with the recent activity
        const recentActivityList = document.getElementById('recent-activity');
        recentActivityList.innerHTML = ''; // Clear existing list
        recentActivity.forEach(activity => {
            const listItem = document.createElement('li');
            listItem.textContent = `${activity.event} - ${activity.timestamp}`;
            recentActivityList.appendChild(listItem);
        });
    }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
}

// Call the function to fetch recent activity
getRecentActivity();


// Function to fetch passenger trends
function getPassengerTrends() {
    // Simulating asynchronous data retrieval
    setTimeout(() => {
        // Assuming you have fetched the passenger trends from the backend
        const passengerTrends = [
            { month: 'January', totalPassengers: 500 },
            { month: 'February', totalPassengers: 600 },
            { month: 'March', totalPassengers: 700 },
            { month: 'April', totalPassengers: 800 },
            { month: 'May', totalPassengers: 900 }
        ]; // Example passenger trends

        // Update the HTML element with the passenger trends
        const passengerTrendsList = document.getElementById('passenger-trends');
        passengerTrendsList.innerHTML = ''; // Clear existing list
        passengerTrends.forEach(trend => {
            const listItem = document.createElement('li');
            listItem.textContent = `${trend.month}: ${trend.totalPassengers} passengers`
