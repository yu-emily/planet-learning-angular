import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddWordComponent } from './add-word/add-word.component';
import { WordListComponent } from './word-list/word-list.component';
import { SearchIndexComponent } from './search-index/search-index.component';
import { UpdateDictionaryComponent } from './update-dictionary/update-dictionary.component';

const routes: Routes = [
  {path: 'add', component: AddWordComponent},
  {path: 'list', component: WordListComponent},
  {path: 'lookup', component: SearchIndexComponent},
  {path: 'update', component: UpdateDictionaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
