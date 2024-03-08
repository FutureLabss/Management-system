export interface IModal{
    open: boolean;
    onClose:()=>void;
    icon: React.ReactNode;
    title:string;
    description:string;
    buttonText:string;
}
export interface IDeactivation{
    isactive:boolean;
    rowId:string
}
export interface IDeactivationUser{
    isactive:boolean;
    rowId:string
}