import { Vue, Component, Prop } from 'vue-property-decorator'
import storage from 'good-storage'
import _ from 'lodash'

@Component
export default class HelloDecorator extends Vue {
  constructor() {
    super()
    // console.log(this.name);
  }

  fff = 'false'

  created() {
    const sls = 1

  
    // console.log('1', myLib)
  }

  handlerChange() {
    // debugger
    // console.log("'1'")
  }

  render(h) {
    return (
      <div>
        <div onClick={this.handlerChange}> 111 </div>
        <div onClick={this.handlerChange}> 111 </div>
      </div>
    )
  }
}
