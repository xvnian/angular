import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HelloDecorator extends Vue {
  constructor() {
    super()
    // console.log(this.name);
  }

  fff = false

  handlerChange() {
    // debugger
    // console.log("'1'")
  }

  render( h ) {
    return <div onClick={ this.handlerChange }> 111</div>
  }
}
