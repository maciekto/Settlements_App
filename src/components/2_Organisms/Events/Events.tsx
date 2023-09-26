import { useEffect, useState } from "react";
import Button from "../../0_Atoms/Button.tsx/Button";
import { useNavigate } from "react-router-dom";
import { auth, getEvents } from "../../../firebase";

// TODO: Fix typscipt in firebase.ts to resolve only events array
export default function Events() {
	const [myEvents, setMyEvents] = useState<(false | Event)[] | null | undefined | string>();
	const [participateEvents, setParticipateEvents] = useState<(false | Event)[] | null | undefined | string>();

	async function handleEvents(uid: string) {
		const myEvents = await getEvents(uid, "myEvents");
		if (myEvents == null) {
			setMyEvents("You do not have any created events");
		}
		if (myEvents) {
			setMyEvents(myEvents);
		}

		const participateEvents = await getEvents(uid, "participateEvents");
		if (participateEvents == null) {
			setParticipateEvents("You do not participate in any events");
		}
		if (participateEvents) {
			setParticipateEvents(participateEvents);
		}
	}

	const renderEvents = (events: string | any[] | null | undefined) => {
		if (!events) {
			return <div>loading</div>;
		}

		if (events && typeof events !== "string" && typeof events !== undefined) {
			// Todo: make indexes
			return events.map((event, index) => {
				if (event == false) return;
				return (
					<div key={index}>
						{event.name}
						<br />
						{event.owner}
						<br />
						{event.date}
					</div>
				);
			});
		}
	};

	const navigate = useNavigate();
	function createEvent() {
		navigate("/events/create");
	}

	useEffect(() => {
		if (auth.currentUser != null) {
			handleEvents(auth.currentUser.uid);
		}
	}, []);
	return (
		<>
			<div>
				My events
				<br />
				{renderEvents(myEvents)}
			</div>
			<br />
			<div>
				Events you participate in
				<br />
				{renderEvents(participateEvents)}
			</div>

			<Button onClick={createEvent}>Add Event</Button>
		</>
	);
}
