import styled, { css } from '@emotion/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white.main};
    border-radius: 10px;
    height: 35px;
    justify-content: center;
    width: 35px;
  `}
`;
