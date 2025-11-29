//utilizar CEPs existentes na cidade de Maringá-PR
export function generateCEP(): string {
  const cepsDisponiveis: string[] = [
    '87083-480',
    '87020-025',
    '87060-000',
    '87050-230',
    '87025-030',
    '87040-020'
  ];

  const indice: number = Math.floor(Math.random() * cepsDisponiveis.length);

  return cepsDisponiveis[indice];
}
