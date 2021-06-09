import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const newMeetupHandler = (meetup) => {
    console.log({ meetup });
  };
  
  return <NewMeetupForm onAddMeetup={newMeetupHandler} />;
}

export default NewMeetupPage