export class AdResponse {
    private _title:string;
    private _desc:string;
    private _images:Array<string>;

    get title(){
        return this._title;
    }
    set title(title:string){
        this._title = title;
    }

    get desc(){
        return this._desc;
    }
    set desc(desc:string){
        this._desc = desc;
    }

    get images(){
        return this._images;
    }
    set images(images:Array<string>){
        this._images = images;
    }
}