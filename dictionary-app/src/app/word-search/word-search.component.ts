import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { FormControl } from '@angular/forms';
import { DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent implements OnInit {
  searchedWord: Word;
  searched: boolean = false;
  term = new FormControl('');
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

  searchWord(word: string): void{
    this.searched = true;
    this.searchedWord = this.dictionaryService.searchWord(word);
  }
}
