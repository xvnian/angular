// export interface Vue {
//   test: string
// }
import Vue, { VNode } from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    test: string
  }
}
