
// console.log(x)
// var x = 7
// let b
// const a = null
// {
//   // b = "this"
//   // const a = "AA"
//   console.log(a)
//   console.log(b)
// }
// console.log(a)
// console.log(b)



// getName()
// console.log(getName2)
// console.log(getName3)
// console.log(x)
// console.log(getName)
// getName2()

// var x = 7
// function getName() {
//   console.log("Javascript")
// }

// var getName2 = () => {
//   console.log("fun 2")
// }

// var getName3 = function () {
//   console.log("fun 3")
// }


// How function works
// var x = 1
// a()
// b()
// console.log(x)

// function a() {
//   var x = 10
//   console.log(x)
// }

// function b() {
//   var x = 100
//   console.log(x)
// }


// Scope chain
// function a() {
//   var b = 10
//   function c() {
//     console.log(b)
//   }
//   c()
// }

// a()

// TDZ - Temporal dead zone


// console.log(a)
// let a = 10
// var b = 100



// Block Scope
// var a = 100
// {
//     var a = 10
//     let b = 20
//     const c = 30

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// console.log(a)
// console.log(b)
// console.log(c)

// For const also same thing
// For function scope also shadowing behaves in the similar way
// Illegal shadowing is e cannot assign let value to var but we can assign var value to let
// let b = 100
// {
//     var a = 10
//     let b = 20
//     const c = 30

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(b)

// var is a function scope
// Arrow fun also work same

// var a = 20
// function x() {
//     var a = 100
//     console.log(a)
// }
// x()
// console.log(a)

// Block scope also follows lexical scope
// const a = 10
// {
//     console.log(a)
//     // const a = 20
//     {
//         // const a = 30
//         console.log(a)
//     }
// }
// console.log(a)





//// closures
// function x() {
//     let a = 10
//     function y() {
//         console.log(a)
//     }
//     y()
// }
// x()

// function x() {
//     let a = 7
//     function y() {
//         console.log(a)
//     }
//     return y
// }
// let z = x()
// console.log(z)
// z()

// settimeout and closures
// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
//     console.log("Javascript")
// }
// x()

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(() => {
//                 console.log(i)
//             }, i * 1000)
//         }
//         close(i)
//     }
//     console.log("Javascript")
// }
// x()


// Closures interview video

// function outer() {
//     let a = 10
//     function inner() {
//         console.log(a)
//     }
//     return inner
// }

// outer()()


// function outer(b) {
//     let a = 10
//     function inner() {
//         console.log(a, b)
//     }
//     return inner
// }

// outer("Hello")()

// function outest() {
//     let c = 20
//     function outer(b) {
//         // let a = 10
//         function inner() {
//             console.log(a, b, c)
//         }
//         return inner
//     }
//     return outer
// }
// let a = 100
// outest()("Hello")()


// Advantages of closure
// 1) Used in module pattern
// 2) Used in function curring
// 3) in Higher order functions -> once and memoize
// 4) It helps us in data hiding and encapsulation

// function counter() {
//     let c = 0
//     return function increment() {
//         c++
//         console.log(c)
//     }
// }

// var cnt1 = counter()
// cnt1()
// cnt1()

// Disadvantages
// 1) Over consumtion of memory
// 2) And this variables are not garbage collected
// 3) It can lead to memory leakes

// Garbage collector is a program in JS engine which free the unutilized memory
// whenever there is unused varaibles it frees up the memory

// Relation bw garbage collector and closure
// function a() {
//     let x = 0
//     return function b() {
//         console.log(x)
//     }
// }

// var y = a()
// y()





// Function statement same as function declaration
// function a() {
//     console.log("a called")
// }
// a()
// Function expression
// var b = function () {
//     console.log("expression b")
// }
// b()

// Anonymous function

// It is used to assign values to a variable

// Named function expression
// var b1 = function xyz() {
//     console.log("expression b1")
// }

// b1()
// xyz()


// First class functions - The ability to use functions as value and can be passed as an argument to another functions and can be returned from the functions

// var b2 = function (param) {
//     console.log("expression b2", param)
// }
// var x = function () {

// }

// b2(x)





// callback functions

// setTimeout(() => {
//     console.log("timer")
// }, 5000)

// function x(y) {
//     console.log("x")
//     y()
// }
// x(function y() {
//     console.log("y")
// })

// Js is a synchronous and single-threaded

// Blocking the main thread

// Power of callbacks

// closure demo with event listsners

// Garbage collection & remove Eventlistener

// function attachEventListeners() {
//     let count = 0
//     document.getElementById("clickMe").addEventListener("click", () => {
//         console.log("Button clicked", ++count)
//     })
// }

// attachEventListeners()



// Prototype and prototypal inheritance

// let object = {
//     name: "Ajinkya",
//     city: "Mumbai",
//     getIntro() {
//         console.log(this.name + "from" + this.city)
//     }
// }

// let object2 = {
//     name: "Aj"
// }

// object2.__proto__ = object


// Function.prototype.mybind = function () {
//     console.log("bind")
// }

// function fun() {

// }



// Higher order functions

// const radius = [1, 2, 3, 4, 5]

// const area = function (radius) {
//     return Math.PI * radius * radius
// }

// const diameter = function (radius) {
//     return radius * radius
// }

// // function calculate(radius, logic) {
// //     const output = []
// //     for (let i = 0; i < radius.length; i++) {
// //         output.push(Math.round(logic(radius[i])))
// //     }
// //     return output
// // }

// Array.prototype.calculate = function (logic) {
//     const output = []
//     for (let i = 0; i < this.length; i++) {
//         output.push(Math.round(logic(this[i])))
//     }
//     return output
// }

// // console.log(calculate(radius, area))
// // console.log(calculate(radius, diameter))

// // console.log(radius.map(area))
// console.log(radius.calculate(area))





// call, appy and bind


// let name = {
//     firstname: "Ajinkya",
//     lastname: "Lonkar",
//     printFullName() {
//         console.log(this.firstname + " " + this.lastname)
//     }
// }

// name.printFullName()


// Instead of adding function in the object will take it outside and call the method

// let name1 = {
//     firstname: "Ajinkya",
//     lastname: "Lonkar"
// }

// let printFullName = function (hometown) {
//     console.log(this.firstname + " " + this.lastname + " from " + hometown)
// }

// printFullName.call(name1, "Panvel")


// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar"
// }

// // using call method we can do - function borrowing
// printFullName.call(name2, "Thane")

// // Only difference bw call and appy method is how we call the function
// printFullName.apply(name1, ["Thane"])

// // bind method dosen't call the function directly it return the copy of that function and bind it to the object and will return the function
// // Advantage is we can call it later wherever required
// let printMyName = printFullName.bind(name1, "Thane")
// console.log(printMyName)
// printMyName()



// Function curring - using bind
// let multiply = function (x, y) {
//     console.log(x * y)
// }

// multiplyByTwo = multiply.bind(this, 2)
// multiplyByTwo(5)

// multiplyByThree = multiply.bind(this, 3)
// multiplyByThree(5)


// Function curring - using closure

// function multiply1(x) {
//     return function (y) {
//         console.log(x * y)
//     }
// }

// multiplyByTwo = multiply1(2)
// multiplyByTwo(5)

// multiplyByThree = multiply1(3)
// multiplyByThree(5)





// Pollyfill - is a browser fallback - what suppose your browser doesn't have a bind function so that we are going to write
// let name = {
//     firstname: "Ajinkya",
//     lastname: "Lonkar"
// }

// let pritnName = function (hometown, state, country) {
//     console.log(this.firstname + " " + this.lastname + "," + hometown + "," + state + "," + country)
// }

// let printMyName = pritnName.bind(name, "Mumbai")
// printMyName("MH", "India")

// Function.prototype.mybind = function (...args) {
//     let obj = this
//     params = args.slice(1)
//     return function (...args2) {
//         // obj.call(args[0])
//         obj.apply(args[0], [...params, ...args2])
//     }
// }

// let printMyName2 = pritnName.mybind(name, "Mumbai")
// printMyName2("MH", "India")




// Debouncing
// let counter = 0
// const getData = function () {
//     console.log("Fetching data... " + counter++)
// }

// const doSomeMagic = function (fn, delay) {
//     let timer
//     return function () {
//         let context = this
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.apply(context)
//         }, delay)
//     }

// }

// const betterFunction = doSomeMagic(getData, 300)


// // Throttling

// const loggerFunc = () => {
//     console.count("Throttled Function");
// }

// const throttle = (fn, limit) => {
//     let flag = true;
//     return function () {
//         let context = this;
//         let args = arguments;
//         if (flag) {
//             fn.apply(context, args);
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, limit);
//         }
//     }
// }

// const betterLoggerFunction = throttle(loggerFunc, 1000);

// window.addEventListener("resize", betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function 
// const normalFunc = () => {
//     console.count("Normal Function");
// }

// window.addEventListener("resize", normalFunc);




// Event bubbling, capturing/trickling

// document.querySelector("#grandparent").addEventListener("click", (e) => {
//     console.log("Grandparent clicked")
//     e.stopPropagation()
// }, false)

// document.querySelector("#parent").addEventListener("click", (e) => {
//     console.log("Parent clicked")
//     e.stopPropagation()
// }, false)

// document.querySelector("#child").addEventListener("click", (e) => {
//     console.log("Child clicked")
//     e.stopPropagation()
// }, false)


// // Event delegation

// document.querySelector("#category").addEventListener("click", (e) => {
//     console.log(e)
//     if (e.target.nodeName === "LI") {
//         window.location.href = "/" + e.target.id
//     }
// })


// document.querySelector("#form").addEventListener("keyup", (e) => {
//     console.log(e)
//     if (e.target.dataset.uppercase !== undefined) {
//         e.target.value = e.target.value.toUpperCase()
//     }
// })






// Promise

// const cart = ["Shoes", "Pants", "Kurta"]

// createOrder(cart)
//     .then((orderId) => {
//         console.log(`Order created with order id: ${orderId}`)
//         return orderId
//     })
//     .then((orderId) => proceedToPayment(orderId))
//     .then(({ message, amt }) => {
//         console.log(`${message} of ${amt}`)
//         return showOrderSummary(message, amt)
//     })
//     .then(({ message, amt }) => {
//         console.log(message)
//         console.log('Your wallet has beed debited by:', amt);
//     })
//     .catch((err) => console.log(err.message))
//     .then(() => console.log('No matter what happens, I will get executed'))



// function createOrder(cart) {
//     const pr = new Promise((resolve, reject) => {
//         //create order
//         //validate cart
//         //orderId
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         //logic for createOrder
//         const orderId = "12345"
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 5000)
//         }
//     })
//     return pr
// }

// function proceedToPayment(orderId) {
//     // Logic for handling payment.
//     // This function returns a promise
//     return new Promise((resolve, reject) => {
//         //logic
//         resolve({ message: `Payment successfull for order id:${orderId}`, amt: 2500 })
//         reject(new Error("Please check the order"))
//     })
// }

// function showOrderSummary(paymentInfo, amt) {
//     return new Promise((resolve, reject) => {
//         // console.log(amt);
//         if (amt >= 2000) {
//             resolve({ message: `You have ordered items that cost ${amt} RS`, amt: amt });
//         } else {
//             reject(new Error('Please buy more for discount'));
//         }
//     })
// }

// function validateCart(cart) {
//     // code to validate cart
//     return true
// }




// Async await

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise resolved")
//     }, 20000)
// })


// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise resolved")
//     }, 10000)
// })

// async function getData() {
//     console.log("Hello")

//     const val = await p1
//     console.log("JS 1")
//     console.log(val)

//     const val2 = await p2
//     console.log("JS 2")
//     console.log(val2)

//     console.log("Hi")
// }

// getData()

// console.log("wassup")


// fetch 

// const API_URL = "https://jsonplaceholder.typicode.com/users"

// async function handlePromise() {
//     try {
//         // way 1
//         const data = await fetch(API_URL)
//         const jsonValue = await data.json()
//         console.log(jsonValue)

//         // way 2
//         console.log(await (await fetch(API_URL)).json())
//     } catch (err) {
//         console.log(err)
//     }
// }

// // way 3
// const handlePromise1 = async () =>
//     fetch(API_URL)
//         .then(r => r.json())
//         .then(console.log)
//         .catch(console.error)


// handlePromise()
// handlePromise1()



// Promise APIs

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000)
// })


// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 success"), 1000)
//     // setTimeout(() => reject("p2 fail"), 1000)
// })


// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("p3 success"), 2000)
//     setTimeout(() => reject("p3 fail"), 2000)
// })

// Promise.all([p1, p2, p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


// Promise.allSettled([p1, p2, p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// Promise.race([p1, p2, p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// Promise.any([p1, p2, p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })



// this keyword

// "use strict"

// // this in global spcae
// console.log(this)  // global object - window

// // inside a function
// function x() {
//     // value depends on strict non strict mode
//     console.log(this)
// }

// // this keyord value depends on how it is called
// x()
// window.x()

// // this inside a object's method

// const student = {
//     name: "Ajinkya",
//     printName() {
//         console.log(this.name)
//     }
// }

// student.printName()

// const student2 = {
//     name: "Aj"
// }

// // call, appy, bind methods
// student.printName.call(student2)

// // arrow function dont provide their own this binding(it retains the this value of the enclosing lexical context)

// const obj = {
//     a: 10,
//     x: () => {
//         console.log(this)
//     }
// }

// obj.x()



// const obj1 = {
//     a: 10,
//     x() {
//         const y = () => {
//             console.log(this)
//         }
//         y()
//     }
// }

// obj1.x()

// this inside DOM elements => reference to HTMLElement





// Shallow copy deep copy

// It is pointing to a same reference so value changes
// let obj = {
//     name: "peter"
// }

// let user = obj
// user.name = "Aj"

// console.log(obj)

// To avoid this we have shallow copy and deep copy concepts

// But for variable value is copied not reference

// let x = "Abc"
// let y = x
// y = "Aj"
// console.log(x)

// shallow copy
// let obj = {
//     name: "peter"
// }

// let user = Object.assign({}, obj)
// user.name = "Aj"

// let user = { ...obj }
// user.name = "Aj"

// console.log(obj)
// console.log(user)


// Deep copy

// let obj = {
//     name: "peter",
//     address: {
//         city: "Mumbai"
//     },
// getData(){
//     return "All data"
// }
// }

// As its nested object inside level is copied by reference
// let user = { ...obj }
// user.address.city = "Pune"

// To avaoid this we do deep copy
// let user = JSON.parse(JSON.stringify(obj))
// user.address.city = "Pune"

// console.log(obj)

// Now one more issue with deep copy is it dosen't copy function and date 
// To resolve this we have deepclone library

// let obj = {
//     name: "peter",
//     address: {
//         city: "Mumbai"
//     },
//     getData() {
//         return "All data"
//     }
// }

// let user = _.cloneDeep(obj)
// user.address.city = "Pune"
// console.log("obj", obj)
// console.log("user", user)
