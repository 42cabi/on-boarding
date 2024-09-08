function fetchUsers(callback) {
    fetch('http://localhost:3000/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        callback(null, data);
      })
      .catch(error => {
        callback(error, null);
      });
  }
  
fetchUsers((error, users) => {
if (error) {
    console.error('Failed to fetch users:', error);
    return;
}
console.log('Users:', users);
});
