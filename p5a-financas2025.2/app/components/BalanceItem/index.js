import { Container, Label, Balance } from './styles';

export default function BalanceItem({ title, value, type }) {
  const bg = type === 'receita' ? '12a454' : type === 'despesa' ? 'e83f5b' : '333333';

  return (
    <Container bg={bg}>
      <Label>{title}</Label>
      <Balance>R$ {value}</Balance>
    </Container>
  );
}