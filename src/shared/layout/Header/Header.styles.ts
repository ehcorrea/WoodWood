import styled, { css } from '@emotion/native';

type WrapperProps = {
  top: number;
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, top }) => css`
    background-color: ${theme.colors.primary.main};
    justify-content: center;
    padding: 20px;
    padding-top: ${`${top + 20}px`};
    top: 0;
    width: 100%;
    flex-direction: row;
  `}
`;

export const ContainerCarrinho = styled.TouchableOpacity`
  bottom: 60%;
  position: absolute;
  right: 30px;
`;

export const ContainerBotaoVoltar = styled.TouchableOpacity`
  bottom: 60%;
  position: absolute;
  left: 30px;
`;
