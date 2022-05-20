import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styles from "./CreatePetForm.module.css";

const CreatePetForm = (props) => {
  const [errors, setErrors] = useState([]);
  const [pet, setPet] = useState({});
  const history = useHistory();

  const updatePet = (event) => {
    switch (event.target.name) {
      case "name":
        setPet({ ...pet, name: event.target.value });
        break;
      case "type":
        setPet({ ...pet, type: event.target.value });
        break;
      case "description":
        setPet({ ...pet, description: event.target.value });
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let skillsArr = [];
    for (let i = 4; i < 7; i++) {
      if (event.target[i].value) {
        skillsArr.push(event.target[i].value);
      }
    }
    setPet({ ...pet, skills: skillsArr });
    try {
      await axios.post("http://localhost:8000/pets/create/new", {
        ...pet,
        skills: skillsArr,
      });
      setErrors([]);
      history.push("/");
    } catch (err) {
      console.log(err.response.data);
      let tempErr = [];
      for (let e in err.response.data) {
        tempErr.push(err.response.data[e].message);
      }
      setErrors(tempErr);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {errors.map((error, i) => {
        return (
          <p key={i} style={{ color: "red" }}>
            {error}
          </p>
        );
      })}
      <div className={styles.csspleaser}>
        <div className={styles.formleft}>
          <div className={styles.inputgroup}>
            <label htmlFor="name">Pet Name:</label>
            <input
              onChange={updatePet}
              type="text"
              name="name"
              id="name"
              title="Name must be at least 3 characters"
            />
          </div>
          <div className={styles.inputgroup}>
            <label htmlFor="type">Pet Type:</label>
            <input
              onChange={updatePet}
              type="text"
              name="type"
              id="type"
              title="Type must be at least 3 characters"
            />
          </div>
          <div className={styles.inputgroup}>
            <label htmlFor="description">Pet Description:</label>
            <input
              onChange={updatePet}
              type="text"
              name="description"
              id="description"
              title="Description must be at least 3 characters"
            />
          </div>
          <input type="submit" value="Add Pet" />
        </div>
        <div className={styles.formright}>
          <h4>Skills (optional):</h4>
          <div className={styles.inputgroup}>
            <label htmlFor="skill1">Skill 1:</label>
            <input type="text" name="skill1" id="skill1" onChange={updatePet} />
          </div>
          <div className={styles.inputgroup}>
            <label htmlFor="skill2">Skill 2:</label>
            <input type="text" name="skill2" id="skill2" onChange={updatePet} />
          </div>
          <div className={styles.inputgroup}>
            <label htmlFor="skill3">Skill 3:</label>
            <input type="text" name="skill3" id="skill3" onChange={updatePet} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreatePetForm;
