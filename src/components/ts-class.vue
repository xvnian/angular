<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
  <div>

    <div class="greeting">
      Hello {{ name }} {{ exclamationMarks }}
    </div>

    <button @click="decrement"> - </button>

    <button @click="increment"> + </button>

    <div>
      <input type="text" 
             @change="handlerChange"/>
    </div>

    <div>
      <input type="text"
             @click="handlerClick"/>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import jsVue from './rxjs.vue'

@Component
export default class HelloDecorator extends Vue {
  @Prop()
  name!: string

  @Prop({
    default: 1
  })
  initialEnthusiasm!: number
  enthusiasm = this.initialEnthusiasm

  constructor() {
    super()
    // console.log(this.name);
  }

  handlerChange() {
    console.log(1)
  }

  handlerClick() {
    console.log('2')
  }

  increment() {
    this.enthusiasm++
  }
  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--
    }
  }
  get exclamationMarks(): string {
    // console.log(this.enthusiasm);
    return Array(this.enthusiasm + 1).join('!')
  }
}
</script>

<style lang="stylus" scoped>
.greeting
  font-size 20px
</style>