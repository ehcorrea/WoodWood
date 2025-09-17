import { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '@emotion/react';

import * as S from './SearchBar.styles';

export function SearchBar() {
  const { colors } = useTheme();
  const [focus, setFocus] = useState(false);
  const ref = useRef<TextInput>(null);

  const handlePressSearchBar = () => {
    ref.current?.focus();
    setFocus(true);
  };

  return (
    <S.Wrapper onPress={handlePressSearchBar} testID="search-bar-wrapper">
      <S.Input
        ref={ref}
        placeholder="Busque tudo para a sua casa"
        placeholderTextColor={colors.gray.main}
        accessibilityState={{ selected: focus }}
        onBlur={() => setFocus(false)}
      />
    </S.Wrapper>
  );
}
