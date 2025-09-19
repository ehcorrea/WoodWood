import { useNavigation, useNavigationState } from '@react-navigation/native';

export function useGoBack() {
  const { canGoBack, navigate, goBack } = useNavigation();
  const rotaAtual = useNavigationState((state) => state.routes[state.index]);
  const mostrarVoltar = rotaAtual.name !== 'CatalogoScreen';

  const handleGoBack = () => {
    if (canGoBack()) {
      return goBack();
    }
    navigate('CatalogoScreen');
  };

  return { mostrarVoltar, handleGoBack };
}
