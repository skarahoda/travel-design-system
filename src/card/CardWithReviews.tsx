import React, { FunctionComponent } from "react";
import { styled } from "../styled";
import { Stars } from "../Stars";

interface CardWithReviewsProps {
    title: string;
    subtitle: string;
    thumbnail: string;
    rate: number;
    reviews: number;
}

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.18), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  display: grid;
  grid-template-areas:
      "title title thumbnail"
      "subtitle subtitle thumbnail"
      "rates reviews thumbnail";
  grid-template-columns: min-content 1fr min-content;
`;

const Subtitle = styled.div`
  grid-area: subtitle;
  ${({ theme }) => theme.textStyles.Subtitle}
`;

const Title = styled.div`
  grid-area: title;
  ${({ theme }) => theme.textStyles.Title}
`;

const Thumbnail = styled.div<{ background: string; }>`
  grid-area: thumbnail;
  box-sizing: border-box;
  width: 100px;
  height: 68px;
  border-radius: 4px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  margin-left: 16px;
`;

const CardRates = styled(Stars)`
  grid-area: rates;
  align-self: end;
`

const Reviews = styled.div`
  grid-area: reviews;
  align-self: end;
  font-family: "Open Sans", monospace;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gandalf};
  margin-bottom: -2px;
  padding-left: ${({ theme }) => theme.spacing.xs};
`

export const CardWithReviews: FunctionComponent<CardWithReviewsProps> = ({ title, subtitle, thumbnail, rate, reviews }) => (
    <CardContainer>
        <Subtitle>
            {subtitle}
        </Subtitle>
        <Title>
            {title}
        </Title>
        <Thumbnail background={thumbnail} />
        <CardRates rate={rate} />
        <Reviews>
            {`${reviews} reviews`}
        </Reviews>
    </CardContainer>
)
