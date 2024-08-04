import { useContext } from "react";
import { MyComponent } from "../map/map";
import styled from "./style.module.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GuideContext } from "../Providers/GuideContext";
import { Link } from "react-router-dom";


export const ModalCard = () => {
    const { removePlace, cart } = useContext(GuideContext);
    const removeEvery = () => {
        removePlace();
    }
    return (
        <section className={styled.ModalSection}>
            <div className={styled.ModalContainer}>
                <div className={styled.ModalSub}>
                    <Link to="/" onClick={removeEvery}>
                    <IoMdArrowRoundBack size={40} className={styled.Btn} />
                    </Link>
                    <img className={styled.CardBanner} src={cart[0].imagem} />
                </div>
                <div className={styled.ModalSubTwo}>
                    <h2>{cart[0].nome}</h2>
                    <h3>{cart[0].tipo}</h3>
                    <h3>{cart[0].endereco}</h3>
                </div>
            </div>
            <div className={styled.ModalContainerTwo}>
                <div className={styled.ModalSubThree}>
                    <h2>Sobre:</h2>
                    <p>{cart[0].sobre}</p>
                    <h2>Dicas:</h2>
                    <p>{cart[0].dicas}</p>
                </div>
                <div className={styled.ModalSubFour}>
                    <MyComponent className="Map" cart={cart} />
                </div>
            </div>
        </section>
    )
}