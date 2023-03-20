import { gsap } from 'gsap'
export function OpacityEffect() {
  const main = document.getElementsByTagName('main')
  gsap.fromTo(main, { opacity: 0.8 }, { opacity: 1, duration: 0.5 })
}

export function BackGroundEffect() {
  const main = document.getElementsByTagName('main')
  gsap.fromTo(
    main,
    { opacity: 0.9 },
    {
      opacity: 1,
      duration: 1,
      background: `url(/imgs/background/b13_폭풍의언덕.webp) #111220`,
    }
  )
}
