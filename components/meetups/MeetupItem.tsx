import { useRouter } from "next/router";
import classes from "./MeetupItem.module.css";

export interface IMeetupProps {
  meetup: {
    title: string;
    address: string;
    image: string;
    _id: string;
    description: string;
  };
}

const MeetupItem: React.FC<IMeetupProps> = ({ meetup }) => {
  console.log("meetup");
  const router = useRouter();
  const showDetailsHandler = (): void => {
    router.push(`/${meetup._id}`);
  };
  return (
    <li className={classes.item}>
      {/* <Card> */}
      <div className={classes.image}>
        <img src={meetup.image} alt={meetup.title} />
      </div>
      <div className={classes.content}>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
      </div>
      <div className={classes.actions}>
        <button onClick={showDetailsHandler}>Show Details</button>
      </div>
      {/* </Card> */}
    </li>
  );
};

export default MeetupItem;
