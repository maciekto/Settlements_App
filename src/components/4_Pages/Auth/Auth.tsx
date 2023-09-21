import { useEffect } from "react";

import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import App from "../App/App";

export default function Auth() {
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (usr) => {
			if (usr) {
				navigate("/");
			} else {
				navigate("/login");
			}
		});
	}, []);

	return <App />;
}
