import styled, { css } from '@emotion/native';
import Animated from 'react-native-reanimated';

export const Wrapper = styled(Animated.View)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white.main};
    border-radius: 10px;
    height: 35px;
    justify-content: center;
    width: 35px;
  `}
`;

export const ContainerValor = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.error.main};
    border-radius: 20px;
    height: 20px;
    justify-content: center;
    min-width: 30px;
    padding-top: 2px;
    position: absolute;
    right: -10px;
    top: -12px;
  `}
`;
