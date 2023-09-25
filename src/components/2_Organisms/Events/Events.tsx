import { useEffect, useState } from "react";
import Button from "../../0_Atoms/Button.tsx/Button";
import { useNavigate } from "react-router-dom";
import { auth, getEvents } from "../../../firebase";

export default function Events() {
	const [events, setEvents] = useState<string>();

	async function handleEvents(uid: string) {
		// TODO: Create a logic for displaying event only assigned to the user
		const data = await getEvents(uid);
		console.log(data);
		if (data == null) {
			setEvents("You do not have any created events");
		}

		if (data) {
			setEvents(data);
		}
	}

	useEffect(() => {
		if (auth.currentUser != null) {
			handleEvents(auth.currentUser.uid);
		}
	}, []);

	const navigate = useNavigate();
	function createEvent() {
		navigate("/events/create");
	}
	return (
		<>
			{events}
			<Button onClick={createEvent}>Add Event</Button>
		</>
	);
}
