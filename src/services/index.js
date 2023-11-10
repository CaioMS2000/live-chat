const url = "http://127.0.0.1:8000/";
// const url = "https://my-web-chat-0.herokuapp.com/";

export const sendUser = (nickname, password, token) => {
  // console.log("stringfy", JSON.stringify({ nickname, password }));
  return fetch(url + "users/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ nickname, password }),
  });
};

export const sendMessage = (userID, content, token) => {
  // console.log("stringfy", JSON.stringify({ owner_id: userID, content }));
  return fetch(url + "messages/users/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ owner_id: userID, content }),
  });
};

export const getMessages = (token) => {
  const reqConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return fetch(url + "messages", reqConfig);
};

export const getUserByNick = (nick, token) => {
  const reqConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return fetch(url + "users/?user_nick=" + nick, reqConfig);
};

export const getUserById = (id, token) => {
  const reqConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return fetch(url + "users/?user_id=" + id, reqConfig);
};

// const requestOptions = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + token,
//   },
// };
// const response = await fetch(`/api/leads/${id}`, requestOptions);

export const getToken = async (nick, pwd) => {
  const reqConfig = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(
      `grant_type=&username=${nick}&password=${pwd}&scope=&client_id=&client_secret=`
    ),
  };

  return fetch(url + "api/token", reqConfig);
};
