import { Injectable } from '@angular/core';
import { Word } from './word';
import { sampleWords } from './words-data';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = sampleWords;
  constructor() { }
  addToDictionary(word: Word){
    this.words.push(word);  
  }
  getFromDictionary(): Word[]{
    return this.words;
  }
  getAllLetters(): Set<string>{
    return new Set(this.words.map( w => w.letter));
  }
  searchWord(term: string): Word{
    let match = this.words.some( w => w.word === term);
    if(match){
      
      return this.words.find(w => w.word === term);

    }else{
      return {
        letter: '',
        word: '',
        definition: ''
      };
    }
  }
}
