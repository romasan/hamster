export interface Cursor {
  msAtStart: number
  globalMs: number
  globalFrame: number
  percent: number
  endTime: number
  duration: number
}

export interface Ani {
  name?: string
  duration: number
  init?: (canvas: HTMLElement | null, name?: string, prev?: any) => any
  render?: (canvas: HTMLElement | null, cursor?: Cursor, payload?: any, name?: string) => void
  finish?: (canvas: HTMLElement | null, payload?: any, name?: string) => void
}

export interface Track extends Ani {
  inited: boolean
  cleared: boolean
  startTime: number
  endTime: number
  payload: any
}
