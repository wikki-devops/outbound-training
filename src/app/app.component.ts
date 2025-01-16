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
    { question: 'What key topics and skills are covered in your leadership training programs?', answer: 'Our leadership training focuses on developing key skills like emotional intelligence, effective communication, strategic thinking, and decision-making, while also fostering team building, ethical leadership, and adaptability. We aim to equip leaders with the tools to inspire performance, manage change, and drive organizational success.' },
    { question: 'Why Karunai Prakash?', answer: 'Karunai Prakash is an ideal choice because he is a certified trainer with extensive expertise in leadership development. His credentials, combined with a proven track record, ensure that participants receive high-quality training grounded in best practices, enabling them to grow as effective leaders.' },
    { question: 'Can the training be tailored to the specific needs or challenges faced by our team/organization?', answer: 'Yes, We customize the content, activities, and approach to align with your goals, ensuring the training is relevant and impactful for your unique work environment and leadership challenges.' },
    { question: 'Are your programs suitable for all levels of leadership ?', answer: 'Our programs are adaptable to all leadership levels, whether you are just starting out in a leadership role or are an experienced executive. We customize the training to address the specific challenges and skill development needs of each leadership stage.' },
    { question: 'Do you offer in-person, virtual, or hybrid sessions?', answer: 'We offer training sessions to accommodate different learning preferences and organizational needs. Whether your team is onsite, remote, or a mix of both, we can provide a flexible training solution that ensures maximum engagement and effectiveness.' },
    { question: 'What is the typical duration of the training?', answer: 'The typical duration of our training programs ranges from half-day sessions to multi-day workshops, depending on the depth of the content and specific needs of your organization. We can also offer customized schedules, such as weekly sessions, to ensure flexibility and optimal learning for your team.' },
    { question: 'What methodologies or techniques do you use to ensure engagement and effectiveness?', answer: 'We ensure engagement and effectiveness through a combination of interactive exercises, collaborative group work , and scenario-based learning. Additionally, we incorporate real-time feedback, role-playing, and self-reflection activities  to create a dynamic learning environment that encourages active participation and practical application of leadership skills.' },
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
  contactform() {
    const calculatorSection = document.getElementById('contactform');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
