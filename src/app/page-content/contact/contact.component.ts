import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    class:'contactSection'
  }
})
export class ContactComponent implements OnInit{
  sendEmail:boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  contactFormSubmit(value: any) {
    console.log('value', value);
    emailjs.init('4cS9YfbA52-rd24_O');
    let temp =  {
      from_name: value.firstname,
      to_name: value.email,
      message: value.message,
    };
    emailjs.send("service_06vp39a", "template_qw7lnx1",temp).then((response) => {
      console.log(response);
      this.sendEmail = true;
    }, function() {
      console.log('FAILED...');
   });

  }

}
