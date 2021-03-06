import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DictionaryService} from '../dictionary.service';
import { Word } from '../word';


@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {
  addWordForm = new FormGroup({
    word: new FormControl(''),
    definition: new FormControl(''),
    letter: new FormControl('')
  });

  word: Word;
  
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.word = {
      word: this.addWordForm.value.word,
      definition: this.addWordForm.value.definition,
      letter: this.addWordForm.value.letter
    }
    this.dictionaryService.addToDictionary(this.word);
    this.addWordForm.reset();
  }

  addWordMe(): void{
    this.word = {
      word: 'tsundoku',
      definition: 'The act of leaving a book unread after buying it; the condition of acquiring reading materials but letting them pile up in one\'s home without reading them.',
      letter: 'T'
    }
    this.dictionaryService.addToDictionary(this.word);
  }
}
