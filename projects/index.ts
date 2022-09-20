const projectsMain = () => {
  const canvas = document.querySelector('#timeline') as HTMLElement
  const list = canvas.innerHTML
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
          // parse links
          el.innerHTML = line.slice(2)
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
}

document.addEventListener('DOMContentLoaded', projectsMain)
