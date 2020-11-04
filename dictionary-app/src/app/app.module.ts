import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddWordComponent } from './add-word/add-word.component';
import { WordListComponent } from './word-list/word-list.component';
import { LetterIndexPipe } from './letter-index.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddWordComponent,
    WordListComponent,
    LetterIndexPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
