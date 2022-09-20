import { render, pick, calcAge } from './helpers'
import { Ani } from './types'

const animatedLink = (link, gurgle?) => {
  const canvas = document.querySelector('#canvas') as HTMLElement
  const rects = link.getClientRects()[0]
  const el = document.createElement('div')
  canvas.appendChild(el)
  if (gurgle) {
    document.location = link.href
  }
  el.classList.add(gurgle ? 'link-cover-second' : 'link-cover')
  setTimeout(() => {
    el.remove()
  }, 2000)
  Object.entries(pick(rects, ['left', 'top', 'width', 'height'])).forEach(
    ([key, value]) => (el.style[key] = `${Math.ceil(Number(value))}px`)
  )
  const margins = [screen.height, screen.width]
  const margin = Math.max(...margins)
  const stepWidth = 40
  const steps = Math.ceil(margin / stepWidth)
  const sleep = 1
  const width = el.style.width
  const height = el.style.height

  let step = 0
  let prev = 0
  let counter = 0

  render((time, _step) => {
    if (prev === 0) {
      prev = time
    }
    counter += time - prev
    if (counter > sleep) {
      counter = 0
      step += 1
    }
    const padding = step * stepWidth
    el.style.transform = `translate(-${padding}px, -${padding}px)`
    el.style.width = `${parseInt(width) + padding * 2}px`
    el.style.height = `${parseInt(height) + padding * 2}px`
    if (step >= steps - 1) {
      if (!gurgle) {
        animatedLink(link, true)
      }
      return false
    }
    return true
  })
}

const animations: Ani[] = [
  {
    name: 'fake preload',
    duration: 1500,
    init() {
      return {
        pattern: '/—\\|',
        sleep: 500,
      }
    },
    render(canvas, cursor, payload) {
      const index = parseInt(String(((cursor!.msAtStart % payload.sleep) * payload.pattern.length) / payload.sleep))
      canvas!.innerText = payload.pattern[index]
    },
    finish(canvas, payload, name) {
      canvas!.innerText = ''
    },
  },
  {
    name: 'type text',
    duration: 2000,
    init() {
      const age = calcAge(new Date('06 05 1990'))
      const text = `Hello, my name is Roman, I'm ${age} and I'm a programmer`
      return {
        text,
        sleep: 600,
      }
    },
    render(canvas, cursor, payload) {
      const index = parseInt(String(((cursor!.msAtStart % payload.sleep) * 2) / payload.sleep))
      const text = payload.text.slice(0, (payload.text.length / 100) * cursor!.percent)
      canvas!.innerHTML = `
        <div class="cursor-space">
          ${text}<span class="cursor" style="display: ${index ? 'none' : 'block'}">|</span>
        <div>
      `
    },
    finish(canvas, payload) {
      canvas!.innerText = payload.text
    },
  },
  {
    name: 'sleep',
    duration: 500,
  },
  {
    name: 'type menu',
    duration: 4000,
    init(canvas, name) {
      const menu = [
        {
          link: '/projects/',
          label: 'my projects',
        },
        {
          link: 'https://www.github.com/romasan',
          label: 'github',
        },
        {
          link: 'https://www.linkedin.com/in/roman-bauer',
          label: 'linkedin',
        },
      ]

      const rawHTML = `
        <div>
          ${menu
            .map(
              (item, index) => `
            <a href="${item.link}" data-index="${index}">[${item.label}]</a>
          `
            )
            .join(' ')}
        </div>
      `
      const el = document.createElement('div')
      el.innerHTML = rawHTML
      const text = el.innerText
      el.innerText = ''
      canvas?.appendChild(el)

      return {
        rawHTML,
        text,
        menu,
        sleep: 600,
        canvas: el,
      }
    },
    render(canvas, cursor, payload) {
      const index = parseInt(String(((cursor!.msAtStart % payload.sleep) * 2) / payload.sleep))
      const text = payload.text.slice(0, (payload.text.length / 100) * cursor!.percent)
      payload.canvas!.innerHTML = `
        <div class="cursor-space">
          ${text}<span class="cursor" style="display: ${index ? 'block' : 'none'}">|</span>
        <div>
      `
    },
    finish(canvas, payload) {
      payload.canvas!.innerHTML = payload.rawHTML
      const elements = payload.canvas.querySelectorAll('a[data-index]')
      elements.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault()
          animatedLink(event.target)
        })
      })
    },
  },
]

const main = () => {
  let timer = 0
  const list = animations.map((animation) => ({
    ...animation,
    inited: false,
    cleared: false,
    startTime: timer,
    endTime: (timer += animation.duration),
    payload: null,
  }))

  const canvas = document.querySelector('#canvas') as HTMLElement

  render((time, frame) => {
    list.forEach((item, index) => {
      if (time >= item.startTime) {
        if (time <= item.endTime) {
          if (item.inited) {
            const msAtStart = time - item.startTime
            const percent = msAtStart / (item.duration / 100)
            const cursor = {
              msAtStart,
              globalMs: time,
              globalFrame: frame,
              percent,
              endTime: item.endTime,
              duration: item.duration,
            }
            item?.render?.(canvas, cursor, item.payload, item.name)
          } else {
            item.payload = item?.init?.(canvas, item.name, list[index - 1])
            item.inited = true
          }
        } else if (!item.cleared) {
          item?.finish?.(canvas, item.payload, item.name)
          item.cleared = true
        }
      }
    })
    if (list[list.length - 1].endTime < time) {
      return false
    }
    return true
  })
}

document.addEventListener('DOMContentLoaded', main)
