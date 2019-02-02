;
((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    M.AutoInit()

    const sliders = d.querySelectorAll('.slider')

    M.Slider.init(sliders, {
      indicators: true,
      duration: 1000
    })

    // Hacer full screen el carousel.

    const carousels = d.querySelectorAll('.carousel')
    M.Carousel.init(carousels, {
      fullWidth: true
    })

    // Mover automaticamente el carousel.

    const instantCarousel = M.Carousel.getInstance(d.querySelector('.carousel'))

    setInterval(() => {
      instantCarousel.next(1)
    }, 5000)

    const copy = d.querySelector('.Footer small')

    copy.innerHTML = `&copy; ${new Date().getFullYear()} @juan_yut`

  })
}) (document);
// n.n