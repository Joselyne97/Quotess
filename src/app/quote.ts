export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public quotation: string, public author: string,public posted: string, public completeDate: Date){
    this.showDescription=false;
  }
}
