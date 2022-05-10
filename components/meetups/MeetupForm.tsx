import classes from "./NewMeetupForm.module.css";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  useState,
} from "react";
import { IMeetupProps } from "./MeetupItem";

const MeetupForm = ({ onAddMeetup }: any) => {
  const [formData, setFormData] = useState<IMeetupProps["meetup"]>({
    title: "",
    address: "",
    image: "",
    _id: "",
    description: "",
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: any): void => {
    e.preventDefault();
    onAddMeetup({ ...formData, _id: "m4" });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Meetup Title</label>
        <input
          type="text"
          name="title"
          required
          id="title"
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Meetup Image</label>
        <input
          type="url"
          required
          id="image"
          name="image"
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          required
          id="address"
          name="address"
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
};

export default MeetupForm;
