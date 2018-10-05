<template>
  <div>
    <div @click="gotoMember" title="2">q=1</div>
        <div @click="add">addd</div>
    <tt></tt>
  </div>
</template>
<script>
import tt from './ts.vue'
import clonedeep from 'lodash.clonedeep'
export default {
  data() {
    return {
      a: [
        {
          b: 3
        }
      ]
    }
  },
  components: {
    tt
  },
  watch: {
    $route(to, from) {
      console.log(to, from)
    },
    a() {
      console.log(1)
    }
  },
  methods: {
    add() {
      this.a[0].b++

      // clonedeep

      console.log(clonedeep(this.a))
    },
    gotoMember() {
      this.$router.push({
        path: '/router',
        query: {
          component: 'member'
        }
      })
    }
  }
}
</script>
<style scoped lang="stylus">
.aa
  width 100px
</style>
