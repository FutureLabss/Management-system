import React, { ReactElement } from "react";
import { ICard } from "../lib/interface/ICard";
import { MdPerson2, MdOutlinePerson2 } from "react-icons/md";


const StatistData: ICard[] = [
    {
        icon:MdPerson2 ,
        numberofpeople: 35,
        gender: "Total Male",
        color:"#08B5391A",
        field:"1",
    },
    {
        icon: MdOutlinePerson2,
        numberofpeople: 20,
        gender: "Total Female",
        color:"#DAC7661A",
        field:"2",
    },
    {
        icon: MdOutlinePerson2,
        numberofpeople: 55,
        gender: "Total Users",
        color:"#AB92921A",
        field:"3"
    },
];

export default StatistData;
