<template>
  <div>
    <p>
      {{title}}
    </p>
    {{ msg }}
  </div>
</template>
<script>
import Vue from 'vue'
// import Rx from 'rxjs/Rx'

// import Rx from 'rxjs'

// Rx.Observable.of(1,2,3)

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const msg = Observable.of(1,2,3).map(x => x + '!!!')

export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  },
  subscriptions: {
    msg: msg
  },
  created() {
    this.$observables.msg.subscribe(msg => console.log(msg));
    console.log(this.$observables)
  }
}
</script>
<style scoped>

</style>
