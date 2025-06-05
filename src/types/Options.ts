export type Options = {
  selfListenEvent: (value: boolean) => void,
  selfListen: (value: boolean) => void,
  logging: (value: boolean) => void,
  listenEvents: (value: boolean) => void,
  updatePresence: (value: boolean) => void,
  forceLogin: (value: boolean) => void,
  userAgent: (value: string) => void,
  autoMarkDelivery: (value: boolean) => void,
  autoMarkRead: (value: boolean) => void,
  proxy: (value: string) => void,
  online: (value: boolean) => void,
  listenTyping: (value: boolean) => void,
  autoReconnect: (value: boolean) => void,
  randomUserAgent: (value: boolean) => void,
  bypassRegion: (value: boolean) => void
}
