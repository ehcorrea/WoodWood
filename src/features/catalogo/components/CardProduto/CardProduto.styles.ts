import styled, { css } from '@emotion/native';

import { Text } from '@/shared/components';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white.main};
    border-radius: 10px;
    elevation: 3;
    flex: 1;
    min-height: 230px;
    justify-content: space-between;
    margin-horizontal: 5px;
    shadow-color: #000;
    shadow-offset: 1px 3px;
    shadow-opacity: 0.2;
    shadow-radius: 2px;
    overflow: hidden;
  `}
`;

export const ContainerPreco = styled.View`
  position: absolute;
  top: 10%;
  left: -28%;
  transform: rotate(-47deg);
  z-index: 1;
  background-color: yellow;
  width: 100%;
  min-height: 10%;
  padding: 5px 0;
`;

export const Preco = styled(Text)`
  text-align: center;
`;

export const Image = styled.Image`
  aspect-ratio: 1;
  margin: 10px;
  height: 50%;
`;

export const Titulo = styled(Text)`
  padding: 0 10px;
`;

export const FakeButton = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary.main};
    justify-content: center;
    min-height: 30px;
    padding: 2px 5px;
    width: 100%;
  `}
`;
