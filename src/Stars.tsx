import React, { FunctionComponent } from "react";
import { Star } from "./Star";
import { styled } from "./styled";
interface StarsProps {
    rate: number;
    className?: string;
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

export const Stars: FunctionComponent<StarsProps> = ({ rate, className }) => {
    return (
        <StarsContainer className={className}>
            <Star type={getStarType(rate, 0)} />
            <Star type={getStarType(rate, 1)} />
            <Star type={getStarType(rate, 2)} />
            <Star type={getStarType(rate, 3)} />
            <Star type={getStarType(rate, 4)} />
        </StarsContainer>
    )
}
