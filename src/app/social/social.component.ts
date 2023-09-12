import { Component } from '@angular/core';
import  * as socialIcons  from '../../assets/json/socialIcon.json'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  socialData:any = socialIcons;

  ngOnInit(){
    this.socialData = this.socialData.icons;
  }

  goToLink(url: string){
    console.log(url)
    window.open(url, "_blank");
}
}
