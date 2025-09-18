import { Spacing } from '@/shared/components';

import { useListarProdutos } from './hooks';
import { Categorias, ListaDeProdutos } from './components';

import * as S from './CatalogoScreen.styles';

export default function CatalogoScreen() {
  useListarProdutos();

  return (
    <S.Wrapper>
      <Categorias />
      <Spacing y={10} />
      <ListaDeProdutos />
    </S.Wrapper>
  );
}
