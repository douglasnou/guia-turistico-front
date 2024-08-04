import { PlaceList } from "../../PlaceList";
import { DefaultElements } from "../Default";
import styled from "./style.module.scss";

export const HomePage = () => { 

    return (
        <section className={styled.Container}>
            <div>
                <DefaultElements className={styled.Container}>
                    <PlaceList />  
                </DefaultElements>
            </div>
        </section>
    )
}