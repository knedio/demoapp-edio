import { Component, OnInit, Input } from '@angular/core'
import { ErrorValidate } from '_shared/models/form/error-validate/error-validate.model'

@Component({
  selector: 'app-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.scss']
})
export class FormErrorMessageComponent implements OnInit {
  @Input() errors: ErrorValidate;
  @Input() label: String

  constructor() { }

  ngOnInit(): void {
   }

}
