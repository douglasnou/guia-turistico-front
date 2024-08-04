import { useContext } from "react";
import { PlaceCard } from "./PlaceCard";
import styled from "./style.module.scss";
import { GuideContext } from "../Providers/GuideContext";

export const PlaceList = () => {
    const { searchResult, setIsOpen, showPlace } = useContext(GuideContext);
    return (
        <div className={styled.List}>
            <ul>
                {
                    searchResult.map((place) => (
                        <PlaceCard place={place} key={place._id} showPlace={showPlace} setIsOpen={setIsOpen} />
                    ))
                }
            </ul>
        </div>
    )
}