export class OAuthUser {
    public username: string;
    public fullname: string;
    
    constructor( username:string, fullname:string){
	this.username = username;
	this.fullname = fullname;
    }
}
