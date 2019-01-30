;
((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    M.AutoInit()

    const sliders = d.querySelectorAll('.slider')

    M.Slider.init(sliders, {
      indicators: true,
      duration: 1000
    })

    const copy = d.querySelector('.Footer small')

    copy.innerHTML = `&copy; ${new Date().getFullYear()} @juan_yut`

  })
}) (document);