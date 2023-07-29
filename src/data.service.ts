import { Injectable } from '@angular/core';

@Injectable()
export class DataService {


  infoemp1: string[]=["Test 1",'1','2']
  infoemp2: string[]=["Test 2",'3','4']
  infoemp3: string[]=["Test 3",'5','6']


  geteinfo1():string[]{
    return this.infoemp1
  }
  geteinfo2():string[]{
    return this.infoemp2
  } 
   geteinfo3():string[]{
    return this.infoemp3
  }
  constructor() { }

}