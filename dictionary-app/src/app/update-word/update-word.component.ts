import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DictionaryService} from '../dictionary.service';
import { Word } from '../word';

@Component({
  selector: 'app-update-word',
  templateUrl: './update-word.component.html',
  styleUrls: ['./update-word.component.css']
})
export class UpdateWordComponent implements OnInit {
  searchedWord: Word;
  searched: boolean = false;
  term = new FormControl('');
  newDefinition = new FormControl('');
  oldDefinition: string;
  updated: boolean = false;

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

  searchWord(word: string): void{
    this.searched = true;
    this.searchedWord = this.dictionaryService.searchWord(word);
  }
  updateDefinition(word: string, old: string, definition: string): void{
    this.dictionaryService.updateWord(word, definition);
    this.oldDefinition = old;
    this.updated = true;
  }
}
