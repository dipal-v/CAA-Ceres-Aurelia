/**
* The Space to Hyphen Value Converter
*/
export class SpaceToHyphenValueConverter{

    /**
    * override to view 
    */
    toView(value){
        return value.replace(/\s+/g, '-');
    }

}
