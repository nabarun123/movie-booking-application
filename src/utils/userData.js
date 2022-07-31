export const storeUserData = (data) => {
  const { accessToken, userId, name, email, password, userTypes } = data;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("userId", userId);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("userTypes", userTypes);
};
