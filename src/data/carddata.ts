import React, { ReactElement } from "react";
import { ICard } from "../lib/interface/ICard";
import { MdPerson2, MdOutlinePerson2 } from "react-icons/md";


const StatistData: ICard[] = [
    {
        icon:MdPerson2 ,
        numberofpeople: 35,
        gender: "Total Male",
        index:1,
    },
    {
        icon: MdOutlinePerson2,
        numberofpeople: 20,
        gender: "Total Female",
        index:2,
    },
    {
        icon: MdOutlinePerson2,
        numberofpeople: 55,
        gender: "Total Users",
        index:3
    },
];

export default StatistData;
