let fusers = document.getElementById("Fetch_Users");
fusers.addEventListener("click", fetchUsers);

async function fetchUsers() {
    const User_URL = 'https://reqres.in/api/users?page=2';
    try {
        const response = await fetch(User_URL);
        const data = await response.json();
        console.log(data);
        displayUsers(data.data);
    } catch (error) {
        console.log(error);
    }
}

function displayUsers(users) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = '<h2>All the lists are  here</h2>'; 

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        const userImage = document.createElement('img');
        userImage.src = user.avatar;
        userImage.width = 100;
        userImage.height = 100;

        const userName = document.createElement('h2');
        userName.textContent = `${user.first_name} ${user.last_name}`;

        const userEmail = document.createElement('p');
        userEmail.textContent = user.email;

        const id= document.createElement('p')
        id.textContent=user.id;

        
        userCard.appendChild(userImage);
        userCard.appendChild(id);
        userCard.appendChild(userName);
        userCard.appendChild(userEmail);

        userContainer.appendChild(userCard);
    });
}
