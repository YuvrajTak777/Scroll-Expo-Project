

let side1 = document.getElementById('side1');
let side2 = document.getElementById('side2');

window.addEventListener("scroll", function () {
    side1.style.left = -window.pageYOffset + "px";
    side2.style.left = window.pageYOffset + "px";
})


const video1 = document.querySelector('.vid');
const video2 = document.querySelector('.vid2');
const image2 = document.querySelector('#img2');
const image1 = document.querySelector('#img1');

// const text = document.querySelector('.text');
// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    // targets : 'image1',
    loop: true,
    // easeing: 'linear',
})
    .add({
        // delay : anime.stagger(100,{start : 0}),
        // delay : 0,
        targets: '.vid',
        opacity: [0.3, 1],
        scale: [0.2, 1],
        duration: 4000,
        easeing: 'linear',
    })
    .add({
        // delay : 2000,
        targets: '.vid',
        opacity: [1, 0.8],
        scale: [1, 0.6],
        duration: 4000,
        easeing: 'linear',
        direction: 'reverse',
    })
    .add({
        targets: '#img1',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 4000,
        easeing: 'linear',
        direction: 'reverse',
    })
    .add({
        targets: '.vid',
        opacity: 0,
    })
    .add({
        // delay : 2000,
        targets: '#img1',
        opacity: [1, 0.8],
        scale: [1, 0.6],
        duration: 4000,
        easeing: 'linear',
        direction: 'reverse',
    })
    .add({
        targets: '#img2',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 4000,
        easeing: 'linear',
        direction: 'reverse',
    })
    .add({
        targets: '#img1',
        opacity: 0,
    })
    .add({
        // delay : 2000,
        targets: '#img2',
        opacity: [1, 0.8],
        scale: [1, 0.6],
        duration: 4000,
        easeing: 'linear',
        direction: 'reverse',
    })
    .add({
        targets: '.vid2',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 6000,
        easeing: 'linear',
        direction: 'reverse',
    })
    .add({
        targets: '#img2',
        opacity: 0,
        // duration : 10,
    })
    .add({
        // delay : 2000,
        targets: '.vid2',
        opacity: [1, 0.8],
        scale: [1, 0.6],
        duration: 3000,
        easeing: 'linear',
        // direction: 'reverse',
        // delay : 2000,
    })
    .add({
        targets: '.vid2',
        scale: [0.6, 2],
        opacity: [0.8, 0],
        duration: 3000,
    })


const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    loop: true,
})
    .add({
        targets: '.text span',
        translateY: [-600, 0],
        scale: [10, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: anime.stagger(100),
    })
    .add({
        targets: '.text span',
        translateX: [0, -1400],
        scale: [1, 1],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 3000,
        delay: anime.stagger(100),
    })
    .add({
        targets: '.text span',
        translateX: [1400, 0],
        scale: [1, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 3500,
        delay: anime.stagger(50),
    })
    .add({
        targets: '.text span',
        translateX: [0, 0],
        scale: [1, 25],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 2500,
        delay: anime.stagger(80),
    })


//card animation image





// // var gt1 = anime({
// //     targets: '#imgA',
// //     opacity: [1, 1],
// //     translateX: [0, 420],
// //     translateY: [0, 0],
// //     scale: [0, 10],
// //     autoplay: false,
// //     duration: 7000,
// //     easeing: 'easeInOutSine',
// //     // loop : true,
// // })
// var gt2 = anime({
//     targets: '#imgB',
//     opacity: [1, 1],
//     translateX: [0, 0],
//     translateY: [0, 0],
//     scale: [0, 10],
//     easeing: 'easeInOutSine',
//     autoplay: false,
//     // loop : true,
//     duration: 7000,
// })
// var gt3 = anime({
//     targets: '#imgC',
//     opacity: [1, 1],
//     translateX: [0, -420],
//     translateY: [0, 0],
//     scale: [0, 10],
//     easeing: 'easeInOutSine',
//     autoplay: false,
//     // loop : true,
//     duration: 7000,
// })
// var gt4 = anime({
//     targets: '#imgD',
//     opacity: [1, 1],
//     translateX: [0, 420],
//     translateY: [0, 0],
//     scale: [0, 10],
//     autoplay: false,
//     duration: 7000,
//     easeing: 'easeInOutSine',
//     // loop : true,
// })
// var gt5 = anime({
//     targets: '#imgE',
//     opacity: [1, 1],
//     translateX: [0, 0],
//     translateY: [0, 0],
//     scale: [0, 10],
//     easeing: 'easeInOutSine',
//     autoplay: false,
//     // loop : true,
//     duration: 7000,
// })
// var gt6 = anime({
//     targets: '#imgF',
//     opacity: [1, 1],
//     translateX: [0, -420],
//     translateY: [0, 0],
//     scale: [0, 10],
//     easeing: 'easeInOutSine',
//     autoplay: false,
//     // loop : true,
//     duration: 7000,
// })
// var gt7 = anime({
//     targets: '#imgG',
//     opacity: [1, 1],
//     translateX: [0, 420],
//     translateY: [0, 0],
//     scale: [0, 10],
//     autoplay: false,
//     duration: 7000,
//     easeing: 'easeInOutSine',
//     // loop : true,
// })
// var gt8 = anime({
//     targets: '#imgH',
//     opacity: [1, 1],
//     translateX: [0, 0],
//     translateY: [0, 0],
//     scale: [0, 10],
//     easeing: 'easeInOutSine',
//     autoplay: false,
//     // loop : true,
//     duration: 7000,
// })
// var gt9 = anime({
//     targets: '#imgI',
//     opacity: [1, 1],
//     translateX: [0, -420],
//     translateY: [0, 0],
//     scale: [0, 10],
//     easeing: 'easeInOutSine',
//     autoplay: false,
//     // loop : true,
//     duration: 7000,
// })


// // document.querySelector('#card1 button').onclick = gt1.restart;
// document.querySelector('#card2 button').onclick = gt2.restart;
// document.querySelector('#card3 button').onclick = gt3.restart;


// document.querySelector('#card4 button').onclick = gt4.restart;
// document.querySelector('#card5 button').onclick = gt5.restart;
// document.querySelector('#card6 button').onclick = gt6.restart;


// document.querySelector('#card7 button').onclick = gt7.restart;
// document.querySelector('#card8 button').onclick = gt8.restart;
// document.querySelector('#card9 button').onclick = gt9.restart;



// function tg1(){

//     var tg1 = anime({
//         targets: '#imgA',
//         opacity: [1, 0],
//         translateX: [420, 0],
//         translateY: [0, 0],
//         scale: [10, 0],
//         autoplay: false,
//         duration: 3000,
//         easeing: 'easeInOutSine',
//         // loop : true,
//     })
//     document.querySelector('#card button').onclick = tg1.restart;

// }

// function gt1(){

//     var gt1 = anime({
//         targets: '#imgA',
//         opacity: [0, 1],
//         translateX: [0, 420],
//         translateY: [0, 0],
//         scale: [0, 10],
//         autoplay: false,
//         duration: 7000,
//         easeing: 'easeInOutSine',
//         // loop : true,
//     })
//     document.querySelector('#card1 button').onclick = gt1.restart;
// }


// function downSize() {
//     const imgA = document.querySelector('#imgA');
//     let opacity = imgA.style.opacity;
//     if (opacity==1) {
//         gt1();
//     }
//     else if(opacity!=1) {
//         tg1();
//     }
// }



// document.querySelector('#card button').onclick =  downSize();
// downSize();















