import React, { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

export interface ICard{
    icon:IconType,
    numberofpeople:number,
    gender:string,
    field:string,
    color?:string;
}
