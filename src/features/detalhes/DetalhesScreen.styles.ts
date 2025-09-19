import styled, { css } from '@emotion/native';

export const Wrapper = styled.View`
  flex: 1;
  padding: 5%;
`;

export const Image = styled.Image`
  aspect-ratio: 1;
  width: 100%;
`;

export type ButtonAdicionarArgs = {
  bottom: number;
};

export const ButtonAdicionar = styled.TouchableOpacity<ButtonAdicionarArgs>`
  ${({ theme, bottom }) => css`
    align-items: center;
    align-self: center;
    background-color: ${theme.colors.primary.main};
    border-radius: 30px;
    bottom: ${`${bottom}px`};
    height: 50px;
    justify-content: center;
    position: absolute;
    width: 90%;
  `}
`;
