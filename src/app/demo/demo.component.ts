import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Ad, WebsiteAdsService } from "../services/website-ads.service";

@Component(
    {
        selector:"home",
        // template:`<h1>Demo </h1>`,
        templateUrl:"./demo.component.html",
        styleUrls:["./demo.component.css"]
    }
)
export class DemoCom implements OnDestroy{
    username:string="Walaa";
    branch:string= "Aswan";
    img:string="gchxchjgjh"
    age:number = 20
    currentAd:Ad = {text:'',img:"",url:''};
    sup:Subscription;
    change(e:string){

        console.log(e)
        this.username= e
        // this.username = e.target.value;
    }
    constructor(private adserv:WebsiteAdsService){
        console.log("before")
        this.sup= this.adserv.pushAd().subscribe({
            next:(data)=>{
                this.currentAd = data
            },
            error:(data)=>{
                console.log(data)
            },
            complete:()=>{
                // alert("Ads Finished")
            }
        })
        console.log("after")

    }
    ngOnDestroy(): void {
        this.sup.unsubscribe()
    }
}