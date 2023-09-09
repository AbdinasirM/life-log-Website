import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import required form-related modules

@Component({
	selector: 'app-contact-us', // Component selector
	templateUrl: './contact-us.component.html', // HTML template file path
	styleUrls: ['./contact-us.component.scss'], // Stylesheet file path
})
export class ContactUsComponent {
	form: FormGroup = this.fb.group({
		from_name: ['', Validators.required], //
		to_name: ['', Validators.required], //
		email_id: ['', Validators.required], //
		message: ['', Validators.required], //
	});

	constructor(private fb: FormBuilder) {}
	async send() {
		emailjs.init('SHVwE9yLo-QAXoAmr');
		let response = await emailjs.send(
			'service_o5m75jo',
			'template_1liknmv',
			{
				from_name: this.form.value.from_name,
				to_name: this.form.value.to_name,
				email_id: this.form.value.email_id,
				message: this.form.value.message,
			}
		);
		alert('Your message has been sent!');
		this.form.reset();
	}
}
