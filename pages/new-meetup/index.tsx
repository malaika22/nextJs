import { IMeetupProps } from "components/meetups/MeetupItem";
import { Fragment } from "react";
import MeetupForm from "components/meetups/MeetupForm";
import Head from "next/head";
import { DUMMY_MEETUPS } from "pages";

const NewMeetupPage: React.FC<IMeetupProps> = ({ meetup }) => {
  const addMeetupHandler = (addData: IMeetupProps["meetup"]): void => {
    console.log(addData);
    DUMMY_MEETUPS.push(addData);
  };
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
