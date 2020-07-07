import { Component, OnInit, Input, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

const noop = () => {
}

@Component({
  selector: 'app-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputFieldComponent),
      multi: true
    }
  ]
})
export class FormInputFieldComponent implements ControlValueAccessor {
  @Input() id: String = 'input-field'
  @Input() label: String = ''
  @Input() isError: Boolean = false
  @Input() type: String = 'text'
  @Input() errors: Array<String>
  
  //The internal data model
  private inner_value: any = ''

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop
  private onChangeCallback: (_: any) => void = noop

  //get accessor
  get value(): any {
    return this.inner_value
  }

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.inner_value) {
      this.inner_value = v
      this.onChangeCallback(v)
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback()
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.inner_value) {
      this.inner_value = value
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }

}
