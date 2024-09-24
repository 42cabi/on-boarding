const url = "http://localhost:3000/users";

function fetchUsers() {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("error in network");
  });
}

fetchUsers()
  .then((users) => {
    if (users) {
      console.log("Users: ", users);
    } else {
      console.log("No users found.");
    }
  })
  .catch((error) => {
    console.error("Failed to fetch users: ", error);
  });
