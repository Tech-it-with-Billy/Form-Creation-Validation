document.addEventListener('DOMContentLoaded', function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);
            const users = await response.json();

            const userList = document.createElement('ul');

            users.array.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);

        } catch (error){
            console.error(error);
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.';
        }

        dataContainer.appendChild(userList);
    }
})