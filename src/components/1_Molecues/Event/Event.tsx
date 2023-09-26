export default function Event({ name, owner, date }: any) {
	console.log(name);
	return (
		<div key='bang'>
			{name}
			<br />
			{owner}
			<br />
			{date}
		</div>
	);
}
