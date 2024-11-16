interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return <button onClick={onClick}>Voltar</button>;
}
