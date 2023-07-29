import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers:[DataService]
})
export class EInfoComponent implements OnInit {

  infor1: string[]=[];
  infor2: string[]=[];
  infor3: string[]=[];


  gete1(){ this.infor1=this.dservice.geteinfo1()}
  gete2(){ this.infor2=this.dservice.geteinfo2()}
  gete3(){ this.infor3=this.dservice.geteinfo3()}
  constructor(private dservice: DataService) { }

  ngOnInit() {
  }

}