import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function NotFound()
{
    return(
        <>
            <Header isTablePage={true} />
            <main className="flexbox">
                <h2>Page does not exist.</h2>
            </main>
            <Footer />
        </>
    )
}

export default NotFound