const url = "http://localhost:3000/users";

const fetchUsers = async () => {
  try {
    const response = await fetch(url); // fetch 요청을 보낸 뒤 응답 대기
    if (!response.ok) {
      throw new Error("error in http-requests");
    }
    const users = await response.json(); // parsing 대기
    return users;
  } catch (error) {
    throw error;
  }
};

const loadUsers = async () => {
  try {
    const users = await fetchUsers();
    if (users) {
      console.log("Users: ", users);
    } else {
      console.log("No users found.");
    }
  } catch (error) {
    console.error("Failed to fetch users: ", error);
  }
};

loadUsers();
