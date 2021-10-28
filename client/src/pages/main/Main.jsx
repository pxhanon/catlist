import "./main.css";

import Sidebar from "../../components/sidebar/Sidebar";
import QuickNote from "../../components/quicknote/QuickNote";

import Weather from "../weather/Weather";
import Calendar from "../calendar/Calendar";
import Horoscope from "../horoscope/Horoscope";
import Manual from "../manual/Manual";
import ContactUs from "../contactUs/ContactUs"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Settings from "../settings/Settings";



export default function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Sidebar />
                    <div className="main">
                        <h1 className="topicMain">Quick Note</h1>
                        <QuickNote />
                    </div>
                </Route>
                <Route path="/login">
                    <Sidebar /> 
                    <div className="main">
                        <h1 className="topicMain">Quick Note</h1>
                        <QuickNote />
                    </div>
                </Route>
                <Route path="/register">
                    <Sidebar />
                    <div className="main">
                        <h1 className="topicMain">Quick Note</h1>
                        <QuickNote />
                    </div>
                </Route>
                <Route path="/main">
                    <Sidebar />
                    <div className="main">
                        <h1 className="topicMain">Quick Note</h1>
                        <QuickNote />
                    </div>
                </Route>
                <Route path="/settings">
                    <Sidebar />
                    <Settings />
                </Route>
                <Route path="/weather">
                    <Sidebar />
                    <Weather />
                </Route>
                <Route path="/calendar">
                    <Sidebar />
                    <Calendar />
                </Route>
                <Route path="/horoscope">
                    <Sidebar />
                    <Horoscope />
                </Route>
                <Route path="/manual">
                    <Sidebar />
                    <Manual />
                </Route>
                <Route path="/contact-us">
                    <Sidebar />
                    <ContactUs />
                </Route>
            </Switch>
        </Router>
       
    )
}
