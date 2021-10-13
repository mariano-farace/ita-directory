import React, {useState} from "react";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import Colors from "theme/Colors";
import ContactModal from "components/composed/ContactModal/ContactModal.js";

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
}) => {
	console.log(title);
	const [active, setActive] = useState(false);
	/*

const AdCard = ({image, name, price, m2, gastosIncluidos, desc, habitaciones}) => {

<img src={`${process.env.REACT_APP_STATIC_FILES_URL}/${image}`} alt={name} />

*/
	//hard coded fake values
	const url =
		"https://ricardobofill.com/wp-content/uploads/2015/12/CARBONELL_3250154-600x451.jpg";

	const gastosIncluidos = true;
	return (
		<AdCardStyled>
			<img src={url} alt={title} />
			<div className="content">
				<p className="address">Address here (missing from API).</p>
				<div className="property-data">
					<span className="price">{price} €</span>
					<span>{n_rooms} habitaciones</span>
					<span>{square_meters}</span>
					<span>Gastos {gastosIncluidos ? " incluidos" : " no incluidos"}</span>
				</div>
				<div className="description">{description}</div>
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
			<ContactModal active={active} hideModal={() => setActive(false)} />
		</AdCardStyled>
	);
};
export default AdCard;

/*
	return (
		<AdCardStyled>
			<img src={url} alt={name} />
			<div className="content">
				<p className="address">Address here (missing from API).</p>
				<div className="property-data">
					<span className="price">{price} €</span>
					<span>{habitaciones} habitaciones</span>
					<span>{m2}</span>
					<span>Gastos {gastosIncluidos ? " incluidos" : " no incluidos"}</span>
				</div>
				<div className="description">{desc}</div>
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
			<ContactModal active={active} hideModal={() => setActive(false)} />
		</AdCardStyled>
	);
};
export default AdCard;

*/
