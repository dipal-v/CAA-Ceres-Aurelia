export class SpaceToHyphenValueConverter{

  toView(value){
    return value.replace(/\s+/g, '-');
  }

}
