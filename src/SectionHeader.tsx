import React, { FunctionComponent } from "react";
import { styled } from "./styled";

interface SectionHeaderProps {
  size?: "small"
}

const DefaultSectionHeader = styled.div`
  box-sizing: border-box;
  width: 384px;
  height: 57px;
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.l} ${({ theme }) => theme.spacing.s} 0;
  ${({ theme }) => theme.textStyles.Header}
  color: ${({ theme }) => theme.colors.teflon};
`;

const SmallSectionHeader = styled.div`
  box-sizing: border-box;
  width: 384px;
  height: 31px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s};
  ${({ theme }) => theme.textStyles.SectionSmallTitle}
`;

export const SectionHeader: FunctionComponent<SectionHeaderProps> =  ({size, ...props}) => (
    size === "small"
        ? <SmallSectionHeader {...props} />
        : <DefaultSectionHeader {...props} />
)
