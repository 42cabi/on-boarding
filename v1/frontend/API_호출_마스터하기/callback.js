const url = "http://localhost:3000/users";

function fetchUsers(callback) {
  fetch(url).then((response) => {
    if (response.ok) {
      return response
        .json()
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
    callback(new Error("error in network"), null);
  });
}

fetchUsers((error, users) => {
  if (error) {
    console.error("Failed to fetch users: ", error);
    return;
  }
  console.log("Users: ", users);
});
