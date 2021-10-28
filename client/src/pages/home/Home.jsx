import "./home.css";

import Header from "../../components/header/Header";
import Feature from "../../components/feature/Feature";
import Howto from "../../components/howto/Howto";
import Contact from "../../components/contact/Contact";


export default function Home() {
    return (
        <div className="home">
            <Header />
            <Feature />
            <Howto />
            <Contact />
        </div>
    )
}
