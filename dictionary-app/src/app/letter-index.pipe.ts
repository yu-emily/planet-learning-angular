import { Pipe, PipeTransform } from '@angular/core';
import { Word } from './word';

@Pipe({
  name: 'letterIndex'
})
export class LetterIndexPipe implements PipeTransform {

  transform(allWords: Word[], letter: string): Word[] {
    return allWords.filter(w => w.letter == letter);
  }
}
