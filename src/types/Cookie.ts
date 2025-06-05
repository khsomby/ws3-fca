export type Cookie = {
  name?: string,
  key?: string,
  value: string,
  domain: string,
  path?: string,
  hostOnly?: boolean,
  creation?: string,
  lastAccessed?: string
}
