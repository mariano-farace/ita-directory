import React, {useState, useEffect} from "react";
import {useContext} from "react";
import {MapContext} from "./store/context";
import {allDistricts} from "./data/all-districts";
import styled from "styled-components";
import {MAP_ACTIONS} from "./store/reducer";

const StyledList = styled.div`
	cursor: pointer;
	.district {
		font-size: 15px;
	}

	.neighborhood {
		font-size: 12px;
		text-indent: 1rem;
	}

	.lit-neighborhood,
	.lit-district,
	.district:hover {
		background-color: #db2c7f;
		color: #fff;
	}
`;

const DistrictsList = () => {
	const {state, dispatch} = useContext(MapContext);
	const [leftColumnDistricts, setLeftColumnDistricts] = useState([]);
	const [rightColumnDistricts, setRightColumnDistricts] = useState([]);

	useEffect(() => {
		if (allDistricts) {
			const left = allDistricts.filter(
				(el) =>
					el.district === "Ciutat-Vella" ||
					el.district === "L-Eixample" ||
					el.district === "Sants-Montjuic" ||
					el.district === "Les-Corts" ||
					el.district === "Sarria-Sant-Gervasi" ||
					el.district === "Gracia"
			);

			const right = allDistricts.filter(
				(el) =>
					el.district === "Horta-Guinardo" ||
					el.district === "Nou-Barris" ||
					el.district === "Sant-Andreu" ||
					el.district === "Sant-Marti"
			);
			setLeftColumnDistricts(left);
			setRightColumnDistricts(right);
		}
	}, []);

	const renderList = (district, neighborhoods) => (
		<StyledList key={district}>
			<ul>
				<li
					className={state.districtID === district ? "district lit-district" : "district"}
					onMouseOver={() =>
						dispatch({
							type: MAP_ACTIONS.LIT_DISTRICT,
							payload: district,
						})
					}
				>
					{district === "L-Eixample"
						? district.replace("-", "´")
						: district.replace("-", " ")}
				</li>
				<ul className="flex flex-col">
					{neighborhoods
						.filter((neighborhoods) => Number.isFinite(neighborhoods.nr))
						.map(({nr, id, name}) => (
							<li
								key={id}
								className={
									id === state.neighborhoodID
										? "hidden md:block neighborhood lit-neighborhood"
										: "hidden md:block neighborhood"
								}
								onMouseOver={() =>
									dispatch({type: MAP_ACTIONS.LIT_NEIGHBORHOOD, payload: id})
								}
							>
								{`${nr}. ${name}`}
							</li>
						))}
				</ul>
			</ul>
		</StyledList>
	);

	return (
		<div className="flex flex-row ml-2 ">
			<div className="flex flex-col w-80 md:hidden">
				{allDistricts.map(({district, neighborhoods}) =>
					renderList(district, neighborhoods)
				)}
			</div>
			<div className="hidden md:flex flex-col w-80">
				{leftColumnDistricts.map(({district, neighborhoods}) =>
					renderList(district, neighborhoods)
				)}
			</div>
			<div className="hidden md:flex flex-col w-80">
				{rightColumnDistricts.map(({district, neighborhoods}) =>
					renderList(district, neighborhoods)
				)}
			</div>
		</div>
	);
};

export default DistrictsList;
