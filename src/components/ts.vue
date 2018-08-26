<template>
  <div>
    {{msg}}

  </div>
</template>
<script lang="ts">
let a: any = 1; 

// console.log(ddd)

class Person {
  name: string;
  age: number;
  constructor() {
    this.name = '1'
    this.age = 1
  };

  eat(){
    this.name = ''
  }
}

let xunian: Person = new Person()

xunian.name = '111'

import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      msg: `sss
      ssdsd
      dsdsd
      sdsds`
    };
  },
  computed:{
    ddd(){
      return this.msg
    },
    ccc() {
      return this.ccc
    }
  },
  props: {
    name: {
      type: String,
      default: 'xunian'
    }
  },
  created() {
    console.log(this.name)
  }
});
</script>
<style lang="stylus" scoped>
</style>
