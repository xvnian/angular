declare module 'good-storage' {
  function set(key: string, val: any): void

  function get(key: string): string

  function get(key: string, def: string): string

  function has(key: string): boolean

  function remove(key: string): never

  function clear(key: string): never

  function getAll(): null | object

  function forEach(callback: (key: string, val: any) => {}): never

  namespace session {
    function set(key: string, val: any): void

    function get(key: string): string

    function get(key: string, def: string): string

    function has(key: string): boolean

    function remove(key: string): never

    function clear(key: string): never

    function getAll(): null | object

    function forEach(callback: (key: string, val: any) => {}): never
  }
}
