import React, { FunctionComponent } from "react";

interface StarProps {
    type: "empty" | "half" | "full"
}
export const Star: FunctionComponent<StarProps> = ({ type }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <g fill="none" fillRule="evenodd">
            <path fill={type === "full" ? "#FFD78D" :"#C1BEC1"} d="M6 9.42l-2.782 1.131a.5.5 0 0 1-.687-.499l.216-2.995L.812 4.76a.5.5 0 0 1 .262-.808l2.916-.72L5.575.683a.5.5 0 0 1 .85 0l1.585 2.55 2.916.72a.5.5 0 0 1 .262.808L9.253 7.057l.216 2.995a.5.5 0 0 1-.687.5L6 9.42z"/>
            <path fill={type === "empty" ? "#C1BEC1" :"#FFD78D"} d="M6 .447V9.42l-2.782 1.131a.5.5 0 0 1-.687-.499l.216-2.995L.812 4.76a.5.5 0 0 1 .262-.808l2.916-.72L5.575.683A.5.5 0 0 1 6 .447z"/>
        </g>
    </svg>
);
