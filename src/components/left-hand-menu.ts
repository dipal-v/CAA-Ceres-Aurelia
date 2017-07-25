import {bindable} from 'aurelia-framework';

export class LeftHandMenu {
    private pixelsScrolled = 0;
    private OnScroll;
    private navTop;

    constructor() {
        this.OnScroll = e => {
            this.pixelsScrolled = window.scrollY;
            if (this.pixelsScrolled > 220 && window.innerWidth > 995){
                this.navTop = 'position: fixed; top:0;';
            }
            else {
                this.navTop = '';
            }

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
