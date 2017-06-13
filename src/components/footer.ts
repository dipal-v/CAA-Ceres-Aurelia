import * as moment from "moment";
export class Footer {
  footerDate = moment(new Date()).format('YYYY');
  pixelsScrolled = 0;
  OnScroll;

  ScrollToTop() {
    window.scrollTo(0, 0);
  }
  constructor() {
        this.OnScroll = e => {
            this.pixelsScrolled = window.scrollY;
            console.log( this.pixelsScrolled);
        };
    }

  attached() {
        document.addEventListener('scroll', this.OnScroll);
  }
  detached() {
        document.removeEventListener('scroll', this.OnScroll);
  }   
}
