import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg/1920px-Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg",
    address: "Some address 10, 12345 Some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Sebastiano_Ricci_002.jpg/2560px-Sebastiano_Ricci_002.jpg",
    address: "Some address 69, 9657 Some city",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// this si re-render every request to the server
export async function getServerSideProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// this re-render oncer unless you revalidate every (time seconds)
// export async function getStaticProps() {
//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1
//   };
// }

export default HomePage;
