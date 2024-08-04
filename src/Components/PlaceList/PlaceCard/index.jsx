import { Link } from "react-router-dom";
import { MyComponent } from "../../map/map";
import styled from "./style.module.scss";

export const PlaceCard = ({ place, showPlace, setIsOpen }) => {

    const showEvery = () => {
        showPlace(place);
    }

    return (
        <li className={styled.Card}>
            <Link to="/cart">
                <img src={place.imagem}  onClick={showEvery} />
            </Link>
            <div>
                <h2 className="card-title">{place.nome}</h2>
                <h3 className="card-sub">{place.tipo}</h3>
            </div>
        </li>
    )
}