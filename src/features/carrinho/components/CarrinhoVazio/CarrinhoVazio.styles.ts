import { Text } from '@/shared/components';
import styled from '@emotion/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Title = styled(Text.Title)`
  align-self: center;
  position: absolute;
  text-align: center;
  top: 10%;
  z-index: 1;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;
