
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { QuestionsComponent } from './questions/questions.component';
import { CreateComponent } from './create/create.component';




export const appRoutes : Routes=[
    {path:'', component: CreateComponent},
    {path:'create', component: CreateComponent},
    // {path:'all', component: QuestionsComponent}
    
    
];