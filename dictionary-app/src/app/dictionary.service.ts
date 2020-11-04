import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [];
  constructor() { }
  addToDictionary(word: Word){
    this.words.push(word);  
  }
  getFromDictionary(): Word[]{
    return this.words;
  }
}
