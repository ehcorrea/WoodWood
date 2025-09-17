import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchBar } from './components';

import * as S from './Header.styles';

export default function Header() {
  const inserts = useSafeAreaInsets();
  return (
    <S.Wrapper {...inserts}>
      <SearchBar />
    </S.Wrapper>
  );
}
