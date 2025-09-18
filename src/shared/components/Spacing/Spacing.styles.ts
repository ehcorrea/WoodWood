import styled, { css } from '@emotion/native';

type ContainerProps = {
  x: number;
  y: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ x, y }) => css`
    margin-horizontal: ${`${x}px`};
    margin-vertical: ${`${y}px`};
  `}
`;
