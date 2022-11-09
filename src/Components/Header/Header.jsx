import './Header.css'

const HeaderImage = ({ imagesource }) => {
    return(
        imagesource.property?<img src={ imagesource.url } alt={ imagesource.alt } className={ imagesource.property }/>:<img src={ imagesource.url } alt={ imagesource.alt }/>
    )
}

const imageList=[{"url":"images/logo1.png","alt":"Logo"},{"url":"images/menuIcon.png","alt":"MenuIcon", "property":"menuIcon"}]

function Header()
{
    return(
        <>
        <header className="flexbox">
        {imageList.map(image => <HeaderImage imagesource={image}/>)}
        </header>
        </>
    )
}

export default Header