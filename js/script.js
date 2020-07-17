const subscribeButton = document.querySelector('.subscribe-button')
const showSubscribe = document.querySelector('.show-subscribe')

subscribeButton.addEventListener('click', () => {
  showSubscribe.innerHTML = `
    <form class="submit-email d-flex flex-row">
    <div class="mr-1">
      <input type="email" name="email" placeholder="Enter email">
    </div>
    <button type="submit">Submit</button>
    </form>
  `
})

// $(document).ready(function(){
// $('.testimonial-container').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   slidesToScroll: 3,
//   prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
//     nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });
// });