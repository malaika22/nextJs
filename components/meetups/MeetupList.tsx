import { IProps } from "pages";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
const MeetupList: React.FC<IProps> = ({ meetups }) => {
  console.log("meetups");
  return (
    <ul className={classes.list}>
      {meetups.map(
        (meetup: {
          title: string;
          address: string;
          image: string;
          _id: string;
          description: string;
        }) => (
          <MeetupItem key={meetup._id} meetup={meetup} />
        )
      )}
    </ul>
  );
};

export default MeetupList;
