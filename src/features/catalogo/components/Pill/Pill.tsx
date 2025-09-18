import * as S from './Pill.styles';

type PillProps = {
  label: string;
  categoriaSelecionada: string | undefined;
};

export function Pill({ label, categoriaSelecionada }: PillProps) {
  const selecionado = label === categoriaSelecionada;

  return (
    <S.Wraper selecionado={selecionado} testID="wraper-pill">
      <S.Text selecionado={selecionado} weight="semibold">
        {label}
      </S.Text>
    </S.Wraper>
  );
}
