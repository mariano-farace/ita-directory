import {useState} from "react";

import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/Button/Button";

import {Container, Form} from "../UserFlow.styles";
import {msgs, validatePassword} from "utils/userFlow";
import Input from "components/units/Input/Input";

const ChangePassword = () => {
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");

	const history = useHistory();
	const {token} = useParams();
	const closeNotification = () => setMessage(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsDisabled(true);
		setIsLoading(true);
		setAnimated(true);
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/users/v1/change-password/${token}`,
				{password1, password2}
			);
			setMessage(response.data.message);
			setIsSuccess(true);
			if (response.data.code === "error") {
				setIsSuccess(false);
				throw response.data.message;
			}
			if (response.data.statusCode === 200) {
				history.push("/login");
			}
		} catch (error) {
			if (error.name === "Error")
				setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`);
		}
		setTimeout(() => {
			setIsDisabled(false);
			setIsLoading(false);
			setAnimated(false);
			setPassword1("");
			setPassword2("");
		}, 2000);
	};

	return (
		<>
			{message ? (
				<Notification
					message={message}
					closeNotification={closeNotification}
					autoClose={true}
					isSuccess={isSuccess}
				/>
			) : null}

			<Body title="Acceso" isLoggedIn={false} justifyTitle="center">
				<Container>
					<Form onSubmit={handleSubmit} novalidate>
						<Input
							type="password"
							placeholder="Introduce la nueva contraseña"
							value={password1}
							onChange={(e) => setPassword1(e.target.value)}
							id="passName"
							name="password"
							disabled={disabled}
							className="w-full"
							success={password1 !== "" && validatePassword(password1)}
							error={password1 !== "" && !validatePassword(password1)}
							errorText={msgs[`passwordError`]}
						/>
						<Input
							type="password"
							name="recoverPassword"
							placeholder="Repite la contraseña"
							value={password2}
							onChange={(e) => setPassword2(e.target.value)}
							disabled={disabled}
							className="w-full mt-2"
							errorText="Both passwords must be equal"
							success={password2 !== "" && password2 === password1}
							error={password2 !== "" && password2 !== password1}
						/>
						<AsyncButton
							text="Guardar cambios"
							loadingText="Guardando"
							iconPosition="left"
							type="submit"
							className="blue-gradient w-full my-8"
							isLoading={isLoading}
							animated={animated}
							disabled={
								!(
									validatePassword(password1) &&
									password2 !== "" &&
									password2 === password1
								) || disabled
							}
						/>
					</Form>
				</Container>
			</Body>
		</>
	);
};

export default ChangePassword;
