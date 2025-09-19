import { FiguraEmptyList } from '@/assets/images';

import * as S from './CarrinhoVazio.styles';

export function CarrinhoVazio() {
  return (
    <S.Wrapper>
      <S.Title>Atualmente seu carrinho está vazio...</S.Title>
      <S.Image resizeMode="center" source={FiguraEmptyList} />
    </S.Wrapper>
  );
}
