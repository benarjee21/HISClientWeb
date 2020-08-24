import { Injectable } from '@angular/core';
import { HISOfficer } from 'src/app/models/HISOfficer'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HisOfficersServiceService {

  hisOfficer:HISOfficer= new HISOfficer(null,"","","","","","",new Date())

  constructor(private http:HttpClient) { }

  public createOfficer(hisOfficer){
    return this.http.post("http://localhost:2153/create-officer",hisOfficer,{responseType:'text' as 'json'});
  }
  public updateOfficer(hisOfficer){
    return this.http.put("http://localhost:2122/updateContact",hisOfficer,{responseType:'text' as 'json'});
  }  
  public updateStatus(id){
    return this.http.put("http://localhost:2122/updateContact",id,{responseType:'text' as 'json'});
  }
  
  public viewOfficers(){
    return this.http.get("http://localhost:2153/view-allOfficers");
  }
  public getOfficer(email){
    return this.http.get("http://localhost:2153/get-officer"+email);
  }
  public hisOfficerlSetter(model){
    this.hisOfficer=model;
 }
 
 public hisOfficerGetter(){
   return this.hisOfficer;
 }


}
