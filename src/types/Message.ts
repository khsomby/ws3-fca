export type Message = {
  body: string,
  sticker?: string,
  attachment?: ReadableStream | ReadableStream[],
  url?: string,
  emoji?: string,
  emojiSize?: string,
  mentions?: {
    tag: string,
    id: string,
    fromIndex?: number
  }[],
  location?: {
    latitude: number,
    longitude: number,
    current?: boolean
  }
}
