import { FiguraEmptyList } from '../../assets/images';

import * as S from './CarrinhoVazio.styles';

export function CarrinhoVazio() {
  return <S.Wrapper source={FiguraEmptyList} resizeMode="contain" />;
}
