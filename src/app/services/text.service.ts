import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:"root"
    }
)
export class TextService{
    static count=0;
    constructor(){
        TextService.count++;
    }
    isemptyText(s:string):boolean{
        if(s.length===0)
            return true
        else
            return false
    }
    isvalidText(s:string,l:number):boolean{
        if(s.length===l)
            return true
        else
            return false
    }
}