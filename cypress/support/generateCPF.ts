export function generateCPF(formatado: boolean = false): string {
  const random = (n: number): number => Math.floor(Math.random() * n);

  const n1 = random(10);
  const n2 = random(10);
  const n3 = random(10);
  const n4 = random(10);
  const n5 = random(10);
  const n6 = random(10);
  const n7 = random(10);
  const n8 = random(10);
  const n9 = random(10);

  const d1 =
    11 -
    ((n1 * 10 +
      n2 * 9 +
      n3 * 8 +
      n4 * 7 +
      n5 * 6 +
      n6 * 5 +
      n7 * 4 +
      n8 * 3 +
      n9 * 2) %
      11);
  const dv1 = d1 > 9 ? 0 : d1;

  const d2 =
    11 -
    ((n1 * 11 +
      n2 * 10 +
      n3 * 9 +
      n4 * 8 +
      n5 * 7 +
      n6 * 6 +
      n7 * 5 +
      n8 * 4 +
      n9 * 3 +
      dv1 * 2) %
      11);
  const dv2 = d2 > 9 ? 0 : d2;

  const cpf = `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${dv1}${dv2}`;

  if (!formatado) return cpf;

  // aplica máscara ###.###.###-##
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
