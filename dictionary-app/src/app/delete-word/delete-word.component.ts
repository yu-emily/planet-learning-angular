import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DictionaryService} from '../dictionary.service';
import { Word } from '../word';

@Component({
  selector: 'app-delete-word',
  templateUrl: './delete-word.component.html',
  styleUrls: ['./delete-word.component.css']
})
export class DeleteWordComponent implements OnInit {
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
  
  deleteEntry(word: string): void{
    this.dictionaryService.removeWord(word);
  }
}
