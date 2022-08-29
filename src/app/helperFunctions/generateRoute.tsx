export function generateRoute(arr: string[]) {
  let param = arr.map(route => `/${route.replaceAll(' ','-')}`);
  return param.join('');
}
