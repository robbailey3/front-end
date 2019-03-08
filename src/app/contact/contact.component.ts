import { fadeInLeft } from './../shared/animations/';
import { Component } from '@angular/core';
import { ContactService } from '../shared/services/contact/contact.service';
import { ErrorHandlerService } from '../error-handler/error-handler.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInLeft]
})
export class ContactComponent {
  public formSubmitted = false;
  constructor(
    private service: ContactService,
    private errorService: ErrorHandlerService
  ) { }
  private sendMail(data: JSON | FormData) {
    this.service.sendMail(data).subscribe(
      (res) => { },
      (err) => {
        this.handleError(err);
      }
    );
  }
  formSubmit(data: JSON) {
    console.log(data);
    this.formSubmitted = true;
    // this.sendMail(data);
  }
  handleError($e) {
    this.errorService.postError($e);
  }
}
