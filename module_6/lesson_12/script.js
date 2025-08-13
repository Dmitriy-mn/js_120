// ------------------------------------------ 3

/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: 
 *    User ${email} is ${age} years old and has ${numPosts} posts.
 * 
 * - Додай метод updatePostCount(value), який у параметрі value 
 *    приймає кількість постів, які потрібно додати користувачеві.
 */


// class Blogger {
//     constructor(obj) {
//         this.email = obj.email;
//         this.age = obj.age;
//         this.numberOfPosts = obj.numberOfPosts;
//         this.topics = obj.topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }


// const alice = new Blogger({
//     email: "alice@gmail.com",
//     age: 25,
//     numberOfPosts: 40,
//     topics: ["gaming", "tech"]
// })

// console.log(alice.getInfo());
// alice.updatePostCount(5)
// console.log(alice);


// const petya = new Blogger({
//     email: "petya@gmail.com",
//     age: 30,
//     numberOfPosts: 10,
//     topics: ["cooking"]
// })


// console.log(petya);

// petya.updatePostCount(2);

// console.log(petya.getInfo());




// ------------------------------------------------- 4

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */


// class User {

//     #login;
//     #email;

//     constructor(obj) {
//         this.#email = obj.email;
//         this.#login = obj.login;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }


// const yura = new User({
//     email: "yura@gmail.com",
//     login: "yura"
// })

// yura.login = "YuraSuperPuper";
// console.log(yura.login);


// yura.email = "yura_new@gmail.com";
// console.log(yura.email);





