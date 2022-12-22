import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Home()
{
    return(
        <>
            <Header isTablePage={false} />
            <main className="flexbox">
                <h2>EMPLOYEE MANAGEMENT APP</h2>
                <img src="images/hrGif.gif" alt="HR Management App GIF" />
            </main>
            <Footer />
        </>
    )
}

export default Home