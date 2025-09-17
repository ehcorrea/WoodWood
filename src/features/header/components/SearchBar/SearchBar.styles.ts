import styled, { css } from '@emotion/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-self: center;
    background-color: ${theme.colors.white.main};
    border-radius: 20px;
    height: 36px;
    width: 100%;
    padding-horizontal: 20px;
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.fonts.size.medium}px;
    line-height: ${theme.fonts.size.large}px;
    padding: 0;
    vertical-align: middle;
    font-family: ${theme.fonts.weight.regular};
  `}
`;
