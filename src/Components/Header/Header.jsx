const CompanyLogo = ({ imagesource }) => {
    return(
        <img src={ imagesource } alt="Logo"/>
    )
}

const imageList=["images/logo1.png","images/menuIcon.png"]

function Header()
{
    return(
        <>
        <header className="flexbox">
        {imageList.map(image => <CompanyLogo imagesource={image}/>)}
        </header>
        </>
    )
}

export default Header