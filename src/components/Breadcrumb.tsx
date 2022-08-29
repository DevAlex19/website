import { generateBreadCrumbs } from "../app/helperFunctions/generateBreadCrumbs";
import { BreadCrumbContainer, BreadCrumbLink, BreadCrumbText } from "../styles/Breadcrumb";

export type BreadCrumbType = {
    path: string;
}

function BreadCrumb({ path }: BreadCrumbType) {
    let lastBreatCrumb = path.split('/')[path.split('/').length - 1].replaceAll('-', ' ');
    lastBreatCrumb = lastBreatCrumb.charAt(0).toUpperCase() + lastBreatCrumb.slice(1);
    let href = ''
    return <BreadCrumbContainer>
        <BreadCrumbLink to='/'>Pagina principala</BreadCrumbLink>
        {generateBreadCrumbs(path).map((item, index) => {
            href = href + '/' + item.toLowerCase().replaceAll(' ', '-');
            return <BreadCrumbLink key={index} to={href}>{item}</BreadCrumbLink>
        })}
        <BreadCrumbText>{lastBreatCrumb}</BreadCrumbText>
    </BreadCrumbContainer>
}

export default BreadCrumb