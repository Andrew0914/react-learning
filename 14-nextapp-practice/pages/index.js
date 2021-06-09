import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS= [
  {
    id:"m1",
    title: "A first Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg/1920px-Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg",
    address: "Some address 10, 12345 Some city",
    description: "This is a first meetup"
  },
  {
    id:"m2",
    title: "A second Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Sebastiano_Ricci_002.jpg/2560px-Sebastiano_Ricci_002.jpg",
    address: "Some address 69, 9657 Some city",
    description: "This is a second meetup"
  }
]
function HomePage(){
  return <MeetupList meetups={DUMMY_MEETUPS}/>
}


export default HomePage