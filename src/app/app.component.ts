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
      dis: `Get more patients in the door with 
      our lead generation solutions 
      tailored to the dental industry 
      and designed to drive real results.`,
    },
    {
      name: `Content 
      Creation`,
      icon: 'message.svg',
      color: 'gray',
      dis: `Get more patients in the door with 
      our lead generation solutions 
      tailored to the dental industry 
      and designed to drive real results.`,
    },
  ];
  links: any[] = [
    {
      link: ``,
      img: `phone.png`,
    },
    {
      link: ``,
      img: `mail.png`,
    },
    {
      link: ``,
      img: `instagram.png`,
    },
    {
      link: ``,
      img: `twittericon.png`,
    },
    {
      link: ``,
      img: `tiktok.png`,
    },
  ];
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.activeMenu = false;
    });
  }
}
