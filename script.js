function goToDiwaliPage() {
    // Input field se user ka naam prapt karein
    const userName = document.getElementById('userName').value.trim();

    if (userName === "") {
        alert("Kripya apna naam darj karein!");
        return; // Agar naam khali hai toh aage na badhe
    }

    // Naam ko browser ke 'localStorage' mein save karein
    localStorage.setItem('diwaliUserName', userName);

    // Dusre page par redirect karein
    window.location.href = 'diwali.html';
}

// Dusre page ('diwali.html') ke liye bhi ek function ki zaroorat padegi
function loadDiwaliPage() {
    // 'localStorage' se naam wapas prapt karein
    const userName = localStorage.getItem('diwaliUserName');
    const greetingElement = document.getElementById('diwaliGreeting');

    if (userName && greetingElement) {
        // Agar naam mila toh use display karein
        greetingElement.textContent = `Happy Diwali ${userName} from Pushp Kunj High School`;
    } else if (greetingElement) {
        // Agar naam nahi mila toh default message dikhayein
        greetingElement.textContent = `Happy Diwali from Pushp Kunj High School`;
    }
}