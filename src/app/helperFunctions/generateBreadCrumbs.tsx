export function generateBreadCrumbs(path: string) {
    const pathArr = path.split('/').map(i => {
        return (i.charAt(0).toUpperCase() + i.slice(1)).replaceAll('-', ' ')
    }).filter(i => i);
    pathArr.pop();
    return pathArr;
}