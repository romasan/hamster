import { render } from '../src/helpers'
import { animatedLink } from '../src/animatedLink'

const parse = (text) => {
  return text
    .replace(/([^\s]+\.[^\s]+)/g, url => `<a href="https://${url}">${url}</a>`)
}

const projectsMain = () => {
  const canvas = document.querySelector('#timeline') as HTMLElement
  const list = canvas.innerText
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const el = document.createElement('div')
      switch (line[0]) {
        case '+':
          el.classList.add('item-year')
          el.innerText = line.slice(2)
          return el
        case '-':
          el.classList.add('item-header')
          el.innerText = line.slice(2)
          return el
        case '|':
          el.classList.add('item-content')
          el.innerHTML = parse(line.slice(2))
          return el
      }
    })
    .filter(Boolean)

  canvas.innerText = ''
  list.forEach((item) => {
    if (item) {
      canvas.appendChild(item)
    }
  })
  canvas.style.display ='block'

  const elements = document.querySelectorAll('a')
  elements.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      animatedLink(event.target)
    })
  })

  const sleep = 10
  let index = -1

  render((time) => {
    const next = Math.floor(time / sleep)
    if (next !== index) {
      for (let i = index; i <= next; i++) {
        list[list.length - 1 - i]?.style.display = 'block'
      }
      index = next
    }
    const finish = list.length * sleep
    if (time < finish) {
      return true
    }
    canvas.classList.remove('loading')
    return false
  })
}

document.addEventListener('DOMContentLoaded', projectsMain)
