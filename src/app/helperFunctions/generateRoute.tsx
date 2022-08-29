export function generateRoute(name: string) {
  const param = name.replaceAll(" ", "-");
  return `/${param}`;
}
