import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Main from "../Components/Main/Main";

function Table()
{
    return(
        <>
            <Header isTablePage={true} />
            <Main />
            <Footer />
        </>
    )
}

export default Table