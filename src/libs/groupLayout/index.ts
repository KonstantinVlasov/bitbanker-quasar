import { GoldenLayout } from 'golden-layout/src/'

class GroupLayout {
  $element?: HTMLElement
  layout?: GoldenLayout

  constructor (element: HTMLElement) {
    if (element !== null) {
      console.log('create')
      this.$element = element
      this.layout = new GoldenLayout(this.$element)
      this.layout.on('tabCreated', this.onTabCreated)
      this.layout.on('itemCreated', this.onItemCreated)
    }
  }

  onTabCreated () {
    console.log('onTabCreated')
  }

  onItemCreated () {
    console.log('onItemCreated')
  }

  destroy (): void {
    console.log('destroy')
  }
}

export default GroupLayout
