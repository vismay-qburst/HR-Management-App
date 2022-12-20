import { Link } from 'react-router-dom'
import './Header.css'

const HeaderImage = ({ isTablePage,imagesource }) => {
    return(
        imagesource.property?<Link to={isTablePage?'/':'/table'}><img src={ imagesource.url } alt={ imagesource.alt } className={ imagesource.property }/></ Link>:<img src={ imagesource.url } alt={ imagesource.alt }/>
    )
}

const [Logo,Home,Table]=[{"url":"/images/logo1.png","alt":"Logo"},{"url":"/images/buildingLogo.png","alt":"Home page", "property":"menuIcon"},{"url":"/images/employees.png","alt":"Employee table", "property":"menuIcon"}]

function Header({ isTablePage })
{
    return(
        <>
        <header className="flexbox">
        <HeaderImage  imagesource={Logo}/>
        {isTablePage?<HeaderImage isTablePage={isTablePage} imagesource={Home}/>:<HeaderImage isTablePage={isTablePage} imagesource={Table}/>}
        </header>
        </>
    )
}

export default Header