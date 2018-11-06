import {Date} from './date.model'; 
export class Category{
	public id:number;
	public description:string;
	public created_at:Date;
	constructor(id:number=0, description:string="",created_at:Date=new Date()){
		this.id=id;
		this.description=description;
		this.created_at=created_at;
     
	}

}