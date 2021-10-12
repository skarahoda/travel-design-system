import React, { FunctionComponent } from "react";
import { Star } from "./Star";
import { styled } from "./styled";
interface StarsProps {
    value: number
}

const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

function getStarType(value: number, index: number): "empty" | "half" | "full" {
    const normalizedValue = Math.round((value - index) * 2);
    if (normalizedValue > 1) {
        return "full";
    }
    if (normalizedValue === 1) {
        return "half";
    }
    return "empty";
}

export const Stars: FunctionComponent<StarsProps> = ({ value }) => {
    return (
        <StarsContainer>
            <Star type={getStarType(value, 0)} />
            <Star type={getStarType(value, 1)} />
            <Star type={getStarType(value, 2)} />
            <Star type={getStarType(value, 3)} />
            <Star type={getStarType(value, 4)} />
        </StarsContainer>
    )
}
