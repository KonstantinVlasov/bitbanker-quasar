import { GoldenLayout } from 'golden-layout/src/'
import PubSubJS from 'pubsub-js'
import defaultLayout from './defaultLayout.json'

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

      this.layout.loadLayout(defaultLayout)

      // layout should be resized if window was resized
      window.addEventListener('resize', () => {
        if (this.layout && this.$element) {
          this.layout.setSize(this.$element.clientWidth, this.$element.clientHeight)
        }
      })

      console.log('golden layout init completed')
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

  publish (message: PubSubJS.Message, data?: string): void {
    PubSubJS.publish(message, data)
  }

  subscribe (message: PubSubJS.Message, callback: () => void) {
    PubSubJS.subscribe(message, callback)
  }

  unsubscribe (callback: () => void) {
    PubSubJS.unsubscribe(callback)
  }
}

export default GroupLayout
