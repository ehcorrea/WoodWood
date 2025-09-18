import styled, { css } from '@emotion/native';

export const Wraper = styled.View`
  flex-direction: row;
`;

export const ContainerIcon = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.error[50]};
    border-radius: 20px;
    align-items: center;
    width: 30px;
    height: 30px;
    justify-content: center;
  `}
`;
