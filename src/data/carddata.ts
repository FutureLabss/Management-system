import React, { ReactElement } from "react";
import { ICard } from "../lib/interface/ICard";
import { MdPerson2, MdOutlinePerson2 } from "react-icons/md";


const StatistData: ICard[] = [
    {
        icon:MdPerson2 ,
        value: 35,
        gender: "Total Male",
        color:"#08B5391A",
        field:"female",
    },
    {
        icon: MdOutlinePerson2,
        value: 20,
        gender: "Total Female",
        color:"#DAC7661A",
        field:"male",
    },
    {
        icon: MdOutlinePerson2,
        value: 55,
        gender: "Total Users",
        color:"#AB92921A",
        field:"total"
    },
];

export default StatistData;
