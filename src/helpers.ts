export const render = (callback, start?, frame?) => {
  if (!start) {
    start = Date.now()
  }
  if (!frame) {
    frame = 0
  }
  if (callback(Date.now() - start, ++frame)) {
    requestAnimationFrame(() => render(callback, start, frame))
  }
}

export const pick = (source, keys: string[]) =>
  keys.reduce(
    (obj, key) => ({
      ...obj,
      [key]: source[key],
    }),
    {}
  )

export const calcAge = (birthday) => new Date(Date.now() - birthday).getUTCFullYear() - 1970
