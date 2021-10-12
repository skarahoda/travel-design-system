import React, { ComponentProps, FunctionComponent, Props } from "react";
import { styled } from "../styled";
import { SimpleCard } from "./SimpleCard";
import { CardWithReviews } from "./CardWithReviews";

type CardComponent = FunctionComponent<ComponentProps<typeof SimpleCard> | ComponentProps<typeof CardWithReviews>>;

export const Card: CardComponent  = (props) => (
    "reviews" in props
        ? <CardWithReviews {...props} />
        : <SimpleCard {...props} />
)
