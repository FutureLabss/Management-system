export interface IModal{
    open: boolean;
    onClose:()=>void;
    icon: React.ReactNode;
    title:string;
    description:string;
    buttonText:string;
}