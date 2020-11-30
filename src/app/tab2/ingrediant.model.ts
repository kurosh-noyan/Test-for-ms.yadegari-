export class Ingrediant {
    Name:string;
    ImgUrl:string;
    AltImgUrl:string;
    Desc:string;

    constructor({ Name, ImgUrl, AltImgUrl, Desc }: { Name: string; ImgUrl: string; AltImgUrl: string; Desc: string; },){
        this.Name=Name;
        this.ImgUrl=ImgUrl;
        this.AltImgUrl=AltImgUrl;
        this.Desc=Desc;

    }
}