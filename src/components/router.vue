<template>
  <div>
      <div @click="gotoMember">q=1</div>
  </div>
</template>
<script>
export default {
  watch: {
    $route (to, from) {
      console.log(to, from)
    }
  },
  methods: {
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
<style scoped>

</style>
