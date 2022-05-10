import { IMeetupProps } from "./MeetupItem";
import classes from "./MeetupDetail.module.css";
const MeetupDetail: React.FC<IMeetupProps> = ({ meetup }) => {
  return (
    <section className={classes.detail}>
      <img src={meetup.image} />
      <h1>{meetup.title}</h1>
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </section>
  );
};

export default MeetupDetail;
