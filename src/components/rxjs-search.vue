<template>
  <div>
    <div><button v-stream:click="{ subject: plus$, data: someData }">+</button></div>
    <p>
      {{title}}
    </p>
    {{ msg }}  {{ count }} 

    <div>
      <button @click="a= a+1"> +++</button>
      {{ aPlusOne }}
    </div>

    <div>
      <input type="text"> {{ inputValue }}
    </div>
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

import { Subject , merge} from 'rxjs';
import { map, startWith, scan, pluck } from 'rxjs/operators';

const msg = Observable.of(1,2,3).map(x => x + '!!!')

export default {
  name: 'HelloWorld',
  data () {
    return {
      someData: 'soso',
      title: 'Welcome to Your Vue.js App',
      a: 1
    }
  },
  domStreams: ['plus$'],
  subscriptions() {
    // 声明接收的 Subjects
    // this.plus$ = new Subject();
    // ...然后使用 Subjects 作为来源流创建订阅。
    // 来源流以 `{ event: HTMLEvent, data?: any }` 的格式发送数据
    return {
      msg: msg,
      count: this.plus$.pipe(
        pluck('data'),
        startWith(0),
        scan((total, change) => total + change)
      ),
      aPlusOne: this.$watchAsObservable('a').pipe(
        pluck('newValue'),
        map(a => a + 1)
      ),
      inputValue: this.$fromDOMEvent('input', 'keyup').pipe(
        pluck('target', 'value')
      )
      // count: this.plus$.pipe(
      //   map(() => 1),
      //   startWith(0),
      //   scan((total, change) => total + change)
      // )
    };
  },
  created() {
    // this.$observables.msg.subscribe(msg => console.log(msg));
    // console.log(this.$observables)

    console.log(this)

    this.$watchAsObservable('a').subscribe(
      ({ newValue, oldValue }) => console.log('stream value', newValue, oldValue),
      err => console.error(err),
      () => console.log('complete')
    );
  }
}
</script>
<style scoped>

</style>
