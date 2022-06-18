//import parse from 'style-to-object';

//const excludeStyleTag = ['px', '%'];
const toCamelCase = function (str: string) {
  return str.replace(/^([A-Z])|[\s-](\w)/g, function (match, p1, p2) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};

export function ParseStyles(css: string): object {
  let frameCSS = css.replace(/([\w-.]+)\s*:([^;]+);?/g, '$1:$2;');
  frameCSS = frameCSS.replace(/;+$/, '');
  const properties = frameCSS.split(';');
  const frameCSSObj: any = {} ;
  properties.forEach(function (property: string) {
    const cssProp: string[] = property.split(':');
    const cssKey: string = toCamelCase(cssProp[0]);
    if(cssProp[1] && cssProp[1] !== ""){
        const cssValue: string = cssProp[1].trim();
        frameCSSObj[cssKey] = cssValue;
    }  
  });
  return frameCSSObj;
}

export function SerializeStyle(css: object): string {
  let parsedStyles = '';
  for (const [key, value] of Object.entries(css)) {
    const nKey = key.replace(/[A-Z]/g, (s) => '-' + s.toLowerCase());
    /*let*/const nValue = value;
    /*if (
      typeof nValue == 'string' &&
      !new RegExp(excludeStyleTag.join('|')).test(nValue)
    ) {
      nValue = `${value}`;
    }*/
    parsedStyles += `${nKey}:${nValue};`;
  }

  return parsedStyles;
}

