import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrudsService 
{

  private _getUrl = "/api";
  private _postUrl = "/api";
  constructor(private _http: Http) { }
  

  getCrud()
  {  return this._http.get(this._getUrl)
     .map((response: Response)=> response.json());
  }
  
  saveTodos(todo)
  {   let headers = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({headers : headers});
      return this._http.post(this._postUrl, JSON.stringify(todo), options)
      .map((response:Response )=> response.json());
  }


}
