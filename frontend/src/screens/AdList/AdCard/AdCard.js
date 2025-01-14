import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import Colors from "theme/Colors";
import ContactModal from "components/composed/ContactModal/ContactModal.js";
import casaPiscinaAd from "../../../assets/images/casaPiscinaAd2.jpg";

// Styles
import {AdCardStyled} from "./AdCard.style";

const AdCard = ({
    title,
    city,
    map_lon,
    map_lat,
    user_id,
    price,
    square_meters,
    description,
    n_rooms,
    n_bathrooms,
    id,
}) => {
    const [active, setActive] = useState(false);

    const gastosIncluidos = true;

    const history = useHistory();

    const handleClick = () => {
        history.push(`ad/${id}`);
    };
    return (
        <AdCardStyled>
            <img
                src={casaPiscinaAd}
                alt=""
                height={175}
                width={200}
                onClick={() => handleClick()}
            />
            <div className="content">
                <div className="content-text">
                    <p className="address">{`${title} en ${city}`}</p>
                    <div className="property-data">
                        <span className="price">{price} €</span>
                        <span>{n_rooms} habitaciones</span>
                        <span>{square_meters}m2</span>
                        <span>Gastos {gastosIncluidos ? " incluidos" : " no incluidos"}</span>
                    </div>
                    <div className="description">"{description}"</div>
                    <Button
                        buttonStyles={{
                            display: "flex",
                            alignItems: "center",
                            width: "7.5rem",
                            height: "2.2rem",
                            marginTop: "auto",
                            fontSize: "1.125rem",
                            fontFamily: "Arial",
                            color: Colors.strongBlue,
                            background: "transparent",
                            boxShadow: "none",
                            paddingLeft: "0",
                        }}
                        text="Contactar"
                        type="button"
                        icon={faComments}
                        iconPosition="left"
                        iconStyles={{
                            marginRight: 5,
                            paddingLeft: 0,
                        }}
                        onClick={() => setActive(true)}
                    />
                </div>
            </div>
            <ContactModal active={active} hideModal={() => setActive(false)} />
        </AdCardStyled>
    );
};
export default AdCard;
