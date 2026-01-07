
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
const a = 10
{
    console.log(a)
    // const a = 20
    {
        // const a = 30
        console.log(a)
    }
}
console.log(a)