import * as moment from "moment";
export class Footer {
  private footerDate = moment(new Date()).format('YYYY');
  private pixelsScrolled = 0;
  private OnScroll;

  constructor() {
        this.OnScroll = e => {
            this.pixelsScrolled = window.scrollY;
            
        };
    }

  public ScrollToTop() {
    window.scrollTo(0, 0);
  }

  public attached() {
        document.addEventListener('scroll', this.OnScroll);
  }

  public detached() {
        document.removeEventListener('scroll', this.OnScroll);
  }   
}
