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
}