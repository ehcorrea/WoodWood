import styled, { css } from '@emotion/native';

type WrapperProps = {
  top: number;
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, top }) => css`
    align-items: center;
    background-color: ${theme.colors.primary.main};
    height: 50%;
    justify-content: center;
    padding: 20px;
    padding-top: ${`${top + 20}px`};
    top: 0;
    width: 100%;
  `}
`;
