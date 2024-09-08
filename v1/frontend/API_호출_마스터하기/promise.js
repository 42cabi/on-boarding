const fetchUsers = () => {
    return fetch('http://localhost:3000/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
};

fetchUsers()
  .then(users => {
    if (users && users.length > 0) {
      console.log('Users: ', users);
    } else {
      console.log('No users found.');
    }
  })
  .catch(error => {
    console.error('Failed to fetch users: ', error);
  });
