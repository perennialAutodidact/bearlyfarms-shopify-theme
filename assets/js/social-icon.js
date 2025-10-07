// // const selector = gsap.utils.selector('.social-icon')

// const socialIcons = document.querySelector('.social-icons')

// const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power1.inOut' } });
// Array.from([2, 1, 0]).forEach((offset, index) => {
//   gsap.set(`.social-icon .layer-${index + 1}`, { left: `${-offset * 3}px` })
//   gsap.set(".social-icon .layer-3 svg", { fill: '#ECF8FD' });

//   timeline
//     .to(
//       `.social-icon .layer-${index + 1}`,
//       {
//         duration: 0.28,
//         left: 0,
//       },
//       `-=${0.3 * index - 1}`
//     );
// });


// timeline.to(
//   ".layer-3 svg",
//   {
//     duration: 0.3,
//     fill: "#F08700",
//   },
//   '-=0.3'
// )

// document.addEventListener("mouseover", (event) => {
//   if (event.target.closest('.social-icon')) {
//     timeline.play();
//   }
// });

// document.addEventListener("mouseout", (event) => {
//   if (event.target.closest('.social-icon')) {
//     timeline.reverse();
//   }
// });





