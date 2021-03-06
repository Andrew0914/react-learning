import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const newMeetupHandler = async (meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  return <NewMeetupForm onAddMeetup={newMeetupHandler} />;
}

export default NewMeetupPage;
