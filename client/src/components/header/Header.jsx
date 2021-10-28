import "./header.css";

export default function Header() {
    return (
        <div className="header" id="header">
            <div className="leftHeader">
                <div className="imgContainerHeader">
                    <img className="imgHeader" src="assets/intro3.png" alt="" />
                    <h2 className="h2Header1">Meowww ~~</h2>
                </div> 
            </div>
            <div className="rightHeader">
                <div className="subRightHeader">
                    <h2 className="h2Header2">take note | planner | to do list</h2>
                    <h1 className="h1Header">catlist</h1>
                    <h3 className="h3Header">let's plan for your productive life</h3>
                    <form className="formHeader">
                        <input className="inputHeader" type="text" placeholder="'' Type Your Email To Get Start ''" />
                        <button className="buttonHeader" type="submit">Get Start</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
