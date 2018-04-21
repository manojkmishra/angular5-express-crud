import { Component, OnInit } from '@angular/core';
import { Crud } from './../crud';
import { CrudsService} from '../cruds/cruds.service';

@Component({
selector: 'app-crud',
templateUrl: './crud.component.html',
styleUrls: ['./crud.component.css'],
providers: [ CrudsService ]
})
export class CrudComponent implements OnInit 
{
  crud1:Crud[];
  constructor(private _crudsService: CrudsService) { }
  ngOnInit() 
  {  this._crudsService.getCrud()
     .subscribe(resCrudData =>{ this.crud1 = resCrudData;
                                console.log('crud1',this.crud1);
        
                              }
               );

  }
  addTodo($event,todoText)
  {  if($event.which === 1)
      {  var result;
         var newTodo = {  text: todoText.value,  isCompleted: false  };
         console.log('/todos.ts--addTodo--todoText.value=',todoText.value);
         console.log('/todos.ts--addTodo--newTodo1=',newTodo);
         result = this._crudsService.saveTodos(newTodo);
         result.subscribe(x=> 
           {   this.crud1.push(newTodo)
               todoText.value= "";
             //  console.log('/todos.ts--addTodo--newTodo2=',newTodo);
           });
         //  console.log('/todos.ts--addTodo--newTodo3=',newTodo);
      }
  }
  //------------------------------------------------

//-----------------------------------------------------
 
 //----------------------------------------------------------
}