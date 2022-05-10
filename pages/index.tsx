import MeetupList from "components/meetups/MeetupList";
import Head from "next/head";
import { Fragment, useState } from "react";

export const DUMMY_MEETUPS = [
  {
    title: "Meetup one",
    address: "Street ABC, flat 12345, near this that",
    description: "DESCRIPTIONNN",
    image:
      "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    _id: "m1",
  },
  {
    title: "Meetup two",
    description: "DESCRIPTIONNN",
    address: "Street ABC, flat 12345, near this that",
    image:
      "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    _id: "m2",
  },
  {
    title: "Meetup three",
    description: "DESCRIPTIONNN",
    address: "Street ABC, flat 12345, near this that",
    image:
      "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    _id: "m3",
  },
];
export interface IProps {
  meetups: {
    title: string;
    address: string;
    image: string;
    description: string;
    _id: string;
  }[];
}

const HomePage: React.FC<IProps> = ({ meetups }) => {
  console.log(meetups);
  const [stateMeetups, setStateMeetups] =
    useState<IProps["meetups"]>(DUMMY_MEETUPS);
  return (
    <Fragment>
      <Head>
        <title>React meetup</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <div>Welcome to meetups</div>
      <MeetupList meetups={meetups} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default HomePage;
