import { Component, OnInit } from '@angular/core';
import { DictionaryService} from '../dictionary.service';
import { Word } from '../word';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  wordList: Word[];
  allLetters: Set<string>;

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
}
