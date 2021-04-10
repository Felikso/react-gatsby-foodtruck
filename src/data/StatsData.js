import React from 'react'
import { GiKnifeFork, GiLion, GiWindSlap } from "react-icons/gi";
import { FaRegSmileBeam } from "react-icons/fa";

export const StatsData = [
    {
        id: 1,
        icon: (<GiKnifeFork
            css={`
            color: #047bf1;
            `}
            />),
        title: "Domowe smaki",
        question: "Jesteś daleko od Domu? ",
        desc: "Zawsze przypominamy Twoje ulubione smaki."
    },
    {
        id: 2,
        icon: (<GiWindSlap
            css={`
            color: #f3a82e;
            `}
            />),
        title: "Szybki serwis",
        question: "Masz dość śmieciowego jedzenia?",
        desc: "Serwujemy Ci szybki i ciepły posiłek."
    },
    {
        id: 3,
        icon: (<GiLion
            css={`
            color: #f34f2e;
            `}
            />),
        title: "Wschodni klimat",
        question: "Chcesz poszerzyć gamę Własnych smaków?",
        desc: "Z przyjemnością częstujemy Cię wschodnimy kulinariami."
    },
    {
        id: 4,
        icon: (<FaRegSmileBeam
            css={`
            color: #3af576;
            `}
            />),
        title: "Gwranatowane zadowolenie",
        question: "Doskwiera Ci gorszy nastrój?",
        desc: "Nasze potrawy zawsze poprawią Twój humor."
    },
]