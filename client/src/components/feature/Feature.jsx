import "./feature.css";

import FeatureList from "../featureList/FeatureList";
import {quickNote, planner, toDoList, weather, horoscope} from "../../data";

import { useEffect, useState } from "react";

export default function Feature() {

    const [selected, setSelected] = useState("1");
    const [image, setImage] = useState([]);

    const list = [
        {
            id: "1",
            title: "01 | Quick Note",
        },
        {
            id: "2",
            title: "02 | Planner",
        },
        {
            id: "3",
            title: "03 | To Do List",
        },
        {
            id: "4",
            title: "04 | Weather",
        },
        {
            id: "5",
            title: "05 | Horoscope",
        },
    ]

    useEffect(() => {

        switch (selected) {
            case "1":
                setImage(quickNote);
                break;
            case "2":
                setImage(planner);
                break;
            case "3":
                setImage(toDoList);
                break;
            case "4":
                setImage(weather);
                break;
            case "5":
                setImage(horoscope);
                break;
            default:
                setImage(quickNote);
        }

    }, [selected])

    return (
        <div className="feature" id="feature">
            <h1 className="h1Feature">FEATURE</h1>
            <div className="leftFeature">
                <ul className="ulFeature">
                    {list.map(item => (
                        <FeatureList
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected}
                            id={item.id} 
                        />
                    ))}
                </ul>
            </div>
            <div className="rightFeature">
                {image.map(item => (
                    <div className="imgContainerFeature">
                        <img className="imgFeature" src={item.img} alt="" />
                    </div>
                ))}
            </div>    
        </div>
    )
}
