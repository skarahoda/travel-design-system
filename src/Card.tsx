import React, { FunctionComponent } from "react";
import { styled } from "./styled";

interface CardProps {
    title: string;
    subtitle: string;
    background: string;
}

const CardBackground = styled.div<{ background: string; }>`
  box-sizing: border-box;
  width: 163px;
  height: 163px;
  border-radius: 8px;
  background-image: url(${({ background }) => background});
`;

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 163px;
  height: 163px;
  border-radius: 8px;
  background: linear-gradient(0deg, rgba(255, 215, 141, 0.2), rgba(255, 215, 141, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(247, 247, 247, 3e-05) 75.55%);
  padding: 16px ${({ theme }) => theme.spacing.s};
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Subtitle = styled.div`
  ${({ theme }) => theme.textStyles.CardSubtitle}
`;

const Title = styled.div`
  ${({ theme }) => theme.textStyles.Header}
`;

export const Card: FunctionComponent<CardProps> = ({ title, subtitle, background }) => (
    <CardBackground background={background}>
        <CardContainer>
            <Subtitle>
                {subtitle}
            </Subtitle>
            <Title>
                {title}
            </Title>
        </CardContainer>
    </CardBackground>
)
