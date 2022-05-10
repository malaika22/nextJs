import { DUMMY_MEETUPS } from "pages";
import { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { IMeetupProps } from "components/meetups/MeetupItem";

const MeetupDetails: React.FC<IMeetupProps> = ({ meetup }) => {
  console.log("props", meetup);
  return (
    <Fragment>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetail meetup={meetup} />
    </Fragment>
  );
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};
export const getStaticProps = (context: any) => {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const selectedData = DUMMY_MEETUPS.find((dt) => dt?._id === meetupId);
  return {
    props: {
      meetup: {
        ...selectedData,
      },
    },
  };
};
export default MeetupDetails;
