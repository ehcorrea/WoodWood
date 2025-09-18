import styled, { css } from '@emotion/native';

import { Text } from '@/shared/components';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white.main};
    border-radius: 10px;
    elevation: 3;
    flex: 1;
    height: 230px;
    justify-content: space-between;
    margin-horizontal: 5px;
    overflow: hidden;
    shadow-color: #000;
    shadow-offset: 1px 3px;
    shadow-opacity: 0.2;
    shadow-radius: 2px;
  `}
`;

export const ContainerPreco = styled.View`
  align-items: center;
  justify-content: center;
  left: -17%;
  padding-vertical: 3px;
  position: absolute;
  right: 50%;
  top: 8%;
  transform: rotate(-45deg);
  z-index: 1;
`;

export const Preco = styled(Text)`
  background-color: yellow;
  height: 25px;
  line-height: 25px;
  text-align: center;
  width: 100%;
`;

export const Image = styled.Image`
  aspect-ratio: 1;
  margin: 10px;
  height: 50%;
`;

export const Titulo = styled(Text)`
  padding: 010px;
`;

export const FakeButton = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary.main};
    padding: 5px;
    width: 100%;
  `}
`;
