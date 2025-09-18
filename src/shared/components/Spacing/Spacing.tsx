import * as S from './Spacing.styles';

export type SpacingProps = {
  x?: number;
  y?: number;
};

export function Spacing({ x = 0, y = 0 }: SpacingProps) {
  return <S.Container testID="spacing" x={x} y={y} />;
}
