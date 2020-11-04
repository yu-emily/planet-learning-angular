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
    category: new FormControl('')
  });

  word: Word;
  
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.word = {
      word: this.addWordForm.value.word,
      definition: this.addWordForm.value.definition,
      category: this.addWordForm.value.category
    }
    this.dictionaryService.addToDictionary(this.word);
    this.addWordForm.reset();
  }
}
