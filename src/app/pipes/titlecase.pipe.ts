import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
  }
  isPreposition(word: string): boolean {
    const prepositions = [
      'of', 'the', 'is', 'on', 'in', 'at', 'for'
    ]
    return prepositions.includes(word.toLowerCase());
  }

  transform(value: string): any {
    if (!value) return null;
    value = value.replace(/_/g, ' ')
    let words = value.split(' ');
    return words.map((word, index) => {
      if (index > 0 && this.isPreposition(word))
        word = word.toLowerCase();
      else
        word = this.toTitleCase(word);
      return word;
    }).join(' ');

  }

}
