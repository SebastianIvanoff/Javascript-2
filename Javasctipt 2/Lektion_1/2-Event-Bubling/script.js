const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const btn = document.querySelector('#btn')


//Bubble

div1.addEventListener('click' , (e) => {
    console.log('div1',e.target)
    console.log('div1',e.currentTarget)
})

div2.addEventListener('click' , (e) => {
    console.log('div2')
    console.log('div2',e.currentTarget)
   // e.stopPropagation
})

btn.addEventListener('click' , (e) => {
    console.log('btn')
    console.log('btn',e.currentTarget)
})

// document.body.addEventListener('click', (e) => {
//     console.log('body')
// })

//Capture

// div1.addEventListener('click' , (e) => {
//     console.log('div1')
//     console.log('stäng')
// }, true)

// div2.addEventListener('click' , (e) => {
//     console.log('div2')
// }, { capture: true, once: true})

// btn.addEventListener('click' , (e) => {
//     console.log('btn')
// }, true)

// document.body.addEventListener('click', (e) => {
//     console.log('body')
// }, true)