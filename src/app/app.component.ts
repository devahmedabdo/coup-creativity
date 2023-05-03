import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'obey-digital';
  activeMenu: boolean = false;
  reflectActiveMenu() {
    this.activeMenu = !this.activeMenu;
  }
  services: any = [
    {
      name: `Social Media 
      Management`,
      icon: 'vector.svg',
      color: 'black',
      dis: `Let us take care of 
      everything from creating 
      content, scheduling
      posting and engaging 
      with your community`,
    },
    {
      name: `Digital 
      Marketing`,
      icon: 'facebook.svg',
      color: 'yellow',
      dis: `Grow your audience 
      and your brand with 
      Email Marketing, 
      Website Management, 
      Paid Ads and more`,
    },
    {
      name: `Content 
      Creation`,
      icon: 'message.svg',
      color: 'gray',
      dis: `Be seen with original 
      content creation 
      and UGC content 
      packages`,
    },
  ];
  links: any[] = [
    {
      link: `https://calendly.com/createwithcoup/discoverycall?fbclid=IwAR14vua2qTXbZumlCAX_sY-cwd007LMXbMbAmeNxsPud6U7ZsTGprxwgGd8`,
      img: `phone.png`,
    },
    {
      link: `mailto:createwithcoup@gmail.com`,
      img: `mail.png`,
    },
    {
      link: `https://www.instagram.com/coupcreatives/?fbclid=IwAR2cs10unrTY4Ml-ul54y1WAMbmY19UIHXNWdmjZW-w-Kmq4_HekjID369w`,
      img: `instagram.png`,
    },
    {
      link: `https://twitter.com/coup_creatives?fbclid=IwAR1BYVOfQhA5g7B0pQBun_4O6vcMqPb4cUbC5LRWGnoieWwlCQK06uTB2uQ`,
      img: `twittericon.png`,
    },
    {
      link: `https://www.tiktok.com/@coupcreatives?fbclid=IwAR0Nr7fEMqJBRo50qakZ_dIrbcRkyFdXo-yuwFsLLyn85BHu3fjXdI6NsRc`,
      img: `tiktok.png`,
    },
  ];
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.activeMenu = false;
    });
  }
}
