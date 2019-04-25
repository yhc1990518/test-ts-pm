export class ResponseBase {
    private _code:number;
    private _message:string;
    private _data:any;
    constructor(data:any, code:number){
        this._code = code;
        this._data = data;
    }

    get code(){
        return this._code;
    }

    get message(){
        return this._message;
    }
    set message(message:string){
        this._message = message;
    }

    get data(){
        return this._data;
    }
    set data(data:any){
        this._data = data;
    }
}