import { Component, OnInit } from '@angular/core';
import { DictionaryService} from '../dictionary.service';
import { Word } from '../word';

@Component({
  selector: 'app-word-index',
  templateUrl: './word-index.component.html',
  styleUrls: ['./word-index.component.css']
})
export class WordIndexComponent implements OnInit {
  wordList: Word[];
  allLetters: Set<string>;
  selectedLetter: string;
  
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.getWords();
    this.getLetters();
  }

  getWords(): void{
    this.wordList = this.dictionaryService.getFromDictionary();
  }

  getLetters(): void{
    this.allLetters = this.dictionaryService.getAllLetters();
    console.log(this.allLetters);
  }

  onSelectLetter(letter: string):void{
    this.selectedLetter = letter;
  }  
}
