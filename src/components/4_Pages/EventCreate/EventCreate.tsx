import EventForm from '../../2_Organisms/EventForm/EventForm';

export default function EventCreate() {
	console.log(); // watch input value by passing the name of it
	return (
		<div className='bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-md p-4 h-full'>
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<EventForm type='create' />
		</div>
	);
}
