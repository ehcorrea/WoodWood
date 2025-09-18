import styled, { css } from '@emotion/native';
import { Theme } from '@emotion/react';

import { Text as TextComp } from '@/shared/components';

const wraperModifiers = {
  selecionado: (theme: Theme) => css`
    background-color: ${theme.colors.primary.main};
  `,
};

const textModifiers = {
  selecionado: (theme: Theme) => css`
    color: ${theme.colors.white.main};
  `,
};

type PillProps = {
  selecionado: boolean;
};

export const Wraper = styled.View<PillProps>`
  ${({ theme, selecionado }) => css`
    align-items: center;
    background-color: ${theme.colors.primary[50]};
    border-radius: 20px;
    height: 30px;
    justify-content: center;
    padding-horizontal: 10px;

    ${selecionado && wraperModifiers.selecionado(theme)}
  `}
`;

export const Text = styled(TextComp)<PillProps>`
  ${({ theme, selecionado }) => css`
    color: ${theme.colors.black.main};

    ${selecionado && textModifiers.selecionado(theme)}
  `}
`;
