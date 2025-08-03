// 1. Initialize the Async Function
async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // 3. Select the Data Container Element
    const dataContainer = document.getElementById("api-data");

    // 4. Fetch Data Using try-catch
    try {
        const response = await fetch(apiUrl); // Fetch API data
        const users = await response.json(); // Parse JSON response

        // 5. Clear the loading message
        dataContainer.innerHTML = "";

        // 6. Create and Append User List
        const userList = document.createElement("ul");

        users.forEach(user => {
            const li = document.createElement("li"); // Create <li>
            li.textContent = user.name; // Set text to user's name
            userList.appendChild(li); // Append to <ul>
        });

        dataContainer.appendChild(userList); // Append <ul> to container
    } catch (error) {
        // 7. Error Handling
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
        console.error("An error occurred during data fetching:", error);
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchUserData);
