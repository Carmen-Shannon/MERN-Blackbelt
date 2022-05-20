import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./PetDetails.module.css";

const PetDetails = (props) => {
  const [pet, setPet] = useState({});
  const params = useParams();
  const [liked, setLiked] = useState(false);
  const [petSkills, setPetSkills] = useState([]);
  const history = useHistory();

  const likeHandler = async () => {
    let likes = pet.likes + 1;
    try {
      await axios.patch(`http://localhost:8000/pets/${params.id}/update`, {
        likes: likes,
      });
      setPet({ ...pet, likes: likes });
      setLiked(true);
      console.log("Like successful");
    } catch (err) {
      console.log(err);
    }
  };

  const deletePet = async () => {
    try {
      await axios.delete(`http://localhost:8000/pets/${params.id}/delete`);
      history.push('/')
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function getPetDetails() {
      try {
        let foundPet = await axios.get(
          `http://localhost:8000/pets/${params.id}`
        );
        setPet(foundPet.data);
        setPetSkills(foundPet.data.skills);
        setLiked(false);
      } catch (err) {
        console.log(err);
      }
    }
    getPetDetails();
  }, [params.id]);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.headcontainer}>
        <h3>Details about: {pet.name}</h3>
        <button onClick={deletePet}>Adopt {pet.name}</button>
      </div>
      <div className={styles.infocontainer}>
        <div className={styles.rowitem}>
          <h4>Pet Type:</h4>
          <p>{pet.type}</p>
        </div>
        <div className={styles.rowitem}>
          <h4>Description:</h4>
          <p>{pet.description}</p>
        </div>
        <div className={styles.rowitem}>
          <h4>Skills:</h4>
          <div className="skills">
          {petSkills.map((skill, i) => {
            return <p key={i}>{skill}</p>;
          })}
          </div>
        </div>
        <div className={styles.likecontainer}>
          <button disabled={liked} onClick={likeHandler}>
            Like {pet.name}
          </button>
          <p>{pet.likes} like(s)</p>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
