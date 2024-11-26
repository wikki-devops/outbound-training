import { Component, Renderer2 } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'karunaiprakash';
  emailContact: string = 'mail@karunaiprakash.com';

  constructor(private renderer: Renderer2) { }

  faq: any[] = [
    { question: 'Question 1', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil labore veniam, quo pariatur, blanditiis obcaecati ullam molestiae eius minima quis ratione assumenda a!' },
    { question: 'Question 2', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil labore veniam, quo pariatur, blanditiis obcaecati ullam molestiae eius minima quis ratione assumenda a!' },
    { question: 'Question 3', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil labore veniam, quo pariatur, blanditiis obcaecati ullam molestiae eius minima quis ratione assumenda a!' },
    { question: 'Question 4', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil labore veniam, quo pariatur, blanditiis obcaecati ullam molestiae eius minima quis ratione assumenda a!' },
    { question: 'Question 5', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil labore veniam, quo pariatur, blanditiis obcaecati ullam molestiae eius minima quis ratione assumenda a!' },
    { question: 'Question 6', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil labore veniam, quo pariatur, blanditiis obcaecati ullam molestiae eius minima quis ratione assumenda a!' },
  ];

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
    script.src = 'assets/vendor/php-email-form/validate.js';
    script.src = 'assets/vendor/aos/aos.js';
    script.src = 'assets/vendor/glightbox/js/glightbox.min.js';
    script.src = 'assets/vendor/swiper/swiper-bundle.min.js';
    script.src = 'assets/vendor/purecounter/purecounter_vanilla.js';
    script.src = 'assets/js/main.js';

    this.renderer.appendChild(document.body, script);

  }

}
