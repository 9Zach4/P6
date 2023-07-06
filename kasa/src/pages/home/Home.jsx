
import Banner from "../../components/banner/Banner"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./home.scss";
import Card from "../../components/card/Card";
import housingData from '../../data/Data.js';

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />
            <main className="grid_gallery">
                {housingData.map(Data => {
                    return (
                        <Card
                            key={Data.id}
                            id={Data.id}
                            title={Data.title}
                            cover={Data.cover}
                        />
                    )
                })}
            </main>
            <Footer />
        </div>
    )
}
