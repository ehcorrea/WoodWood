import { Keyframe, LinearTransition } from 'react-native-reanimated';

import { IconCart } from '@/assets/icons';
import { Text } from '@/shared/components';

import * as S from './Carrinho.styles';

type CarrinhoProps = {
  valor: number;
};

const Tilt = new Keyframe({
  0: {
    transform: [{ rotate: '-10deg' }],
    opacity: 0.7,
  },
  50: {
    transform: [{ rotate: '10deg' }],
  },
  100: {
    transform: [{ rotate: '0deg' }],
    opacity: 1,
  },
}).duration(400);

export function Carrinho({ valor }: CarrinhoProps) {
  return (
    <S.Wrapper
      key={valor}
      entering={valor ? Tilt : undefined}
      layout={LinearTransition.springify()}
    >
      <IconCart width={30} height={30} />
      <S.ContainerValor>
        <Text palette="white" weight="semibold" size="small">
          {valor >= 100 ? '+99' : valor}
        </Text>
      </S.ContainerValor>
    </S.Wrapper>
  );
}
