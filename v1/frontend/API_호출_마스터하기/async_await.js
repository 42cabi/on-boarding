const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();
      return users;
    } catch (error) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }
};

const loadUsers = async () => {
  try {
    const users = await fetchUsers();
    if (users && users.length > 0) {
      console.log('Users: ', users);
    } else {
      console.log('No users found.');
    }
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
};

loadUsers();