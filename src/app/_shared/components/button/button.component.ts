import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() size: String = 'w-32 py-2'
  @Input() font_size: String = 'text-xs'
  @Input() round: String = 'rounded-full'
  @Input() label: String = ''
  @Input() type: String = 'submit'
  @Input() variant: String = 'primary'
  @Input() is_loading: Boolean = false
  @Input() disabled: Boolean = true

  bg: String = 'primary'

  constructor() {
  }

  ngOnInit(): void {
    this.onSetVariant()
  }

  onSetVariant(): void {
    switch (this.variant) {
      case 'success':
        this.bg = 'bg-yellow-400 text-white'
        break
      case 'info':
        this.bg = 'bg-gray-500 text-black'
        break
      case 'danger':
        this.bg = 'bg-red-600 text-white'
        break
      case 'white':
        this.bg = 'bg-white text-black'
        break
      default:
        this.bg = 'bg-blue-600 text-white'
        break
    }
  }

}
