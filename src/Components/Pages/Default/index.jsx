import { useContext } from "react";
import { BannerSection } from "../../BannerSection";
import { HeaderGuide } from "../../Header";
import styled from "./style.module.scss";
import { GuideContext } from "../../Providers/GuideContext";

export const DefaultElements = ({ children }) => {
    const {isOpen, cart, setIsOpen, removePlace} = useContext(GuideContext);
    return (
        <div className={styled.Container}>
            <HeaderGuide />
            <div className={styled.Banner}>
                <BannerSection />
                {children}
            </div>
        </div>
    )
}