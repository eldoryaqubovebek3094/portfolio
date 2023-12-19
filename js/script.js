"use strict";
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

//MALUMOT OLISH

// Foydalanuvchi ma'lumotlarini bazada saqlash uchun obyekt
const userData = {
  username: "",
  email: "",
  password: "",
};

// Form elementini tanlash
const loginForm = document.querySelector(".form-box.login form");
const registerForm = document.querySelector(".form-box.register form");

// Login formasi submit hodisasi
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Birlamchi formani jonatishni to'xtatish

  // Formadagi input elementlarni tanlash
  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');

  // Qiymatlarni olish
  const email = emailInput.value;
  const password = passwordInput.value;

  // Ma'lumotlarni bazaga saqlash va qo'shimcha amallar
  saveLoginData(email, password);
  // ...

  // Formani tozalash
  loginForm.reset();
});

// Registration formasi submit hodisasi
registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Birlamchi formani jonatishni to'xtatish

  // Formadagi input elementlarni tanlash
  const usernameInput = registerForm.querySelector('input[type="text"]');
  const emailInput = registerForm.querySelector('input[type="email"]');
  const passwordInput = registerForm.querySelector('input[type="password"]');

  // Qiymatlarni olish
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Ma'lumotlarni bazaga saqlash va qo'shimcha amallar
  saveRegistrationData(username, email, password);
  // ...

  // Formani tozalash
  registerForm.reset();
});

// Foydalanuvchi login ma'lumotlarini bazaga saqlash
function saveLoginData(email, password) {
  userData.email = email;
  userData.password = password;

  // Bu joyda siz ma'lumotlarni bazaga saqlash uchun kerakli amallarni bajarishingiz kerak
  // Masalan, serverga HTTP so'rov yuborish, API-ni chaqirish, lokal bazaga yozish, kabi

  // Masalan, ma'lumotlarni konsolga chiqarib ko'ramiz
  console.log("Login Email:", email);
  console.log("Login Password:", password);
}

// Foydalanuvchi registration ma'lumotlarini bazaga saqlash
function saveRegistrationData(username, email, password) {
  userData.username = username;
  userData.email = email;
  userData.password = password;

  // Bu joyda siz ma'lumotlarni bazaga saqlash uchun kerakli amallarni bajarishingiz kerak
  // Masalan, serverga HTTP so'rov yuborish, API-ni chaqirish, lokal bazaga yozish, kabi

  // Masalan, ma'lumotlarni konsolga chiqarib ko'ramiz
  console.log("Registration Username:", username);
  console.log("Registration Email:", email);
  console.log("Registration Password:", password);
}
