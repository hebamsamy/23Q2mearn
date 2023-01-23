import { Injectable } from '@angular/core';
import { count, observable, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsiteAdsService {
  private list:Ad[];
  constructor() { 
    this.list=[
      {
        text:"Ad number one",
        img:"https://fakeimg.pl/200x100",
        url:"https://www.google.com"
      }
      ,
      {
        text:"Ad number two",
        img:"https://picsum.photos/200",
        url:"https://www.google.com"
      }
      ,
      {
        text:"",
        img:"https://fakeimg.pl/200x100",
        url:"https://www.google.com"
      }
      ,
      {
        text:"Ad number four",
        img:"https://picsum.photos/200",
        url:"https://www.google.com"
      }
      ,
      {
        text:"Ad number five",
        img:"https://fakeimg.pl/200x100",
        url:"https://www.google.com"
      }
      ,
      {
        text:"Ad number six",
        img:"https://picsum.photos/200",
        url:"https://www.google.com"
      }
      ,
    ]
  }
  pushAd():Observable<Ad>{
    return new Observable<Ad>((observer)=>{

      let c=0
      let timer = setInterval(()=>{
        console.log("in interval")
        if(c == this.list.length){ //6
          observer.complete()
        }
        // if(this.list[c].text==""){
        //   observer.error("Ad is Empty")
        // }
        observer.next(this.list[c])
        c++
      },3000)
      return{
        unsubscribe() {
          //error
          //complete
          //unsubscribe
          clearInterval(timer)
        },
      }
      // observer.complete()
      // observer.error()
    })
  }
}



 
export interface Ad{
  url:string;
  text:string;
  img:string
}
