import styled, { css } from '@emotion/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary[20]};
    border-radius: 20px;
    flex-direction: row;
    height: 130px;
    padding: 20px;
  `}
`;

export const Image = styled.Image`
  aspect-ratio: 1;
  height: 100%;
`;

export const ContainerInfos = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
`;

export const ContainerButtons = styled.View`
  border-color: black;
  border-radius: 20px;
  border-width: 2px;
`;

export const Line = styled.View`
  border-color: black;
  border-width: 1px;
`;
