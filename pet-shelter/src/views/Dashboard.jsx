import React, { useState, useEffect } from "react";
import axios from "axios";
import PetList from "../components/PetList";
import styles from './Dashboard.module.css';

const Dashboard = (props) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function findPets() {
      try {
        let foundPets = await axios.get("http://localhost:8000/pets");
        setPets(foundPets.data);
      } catch (err) {
        console.log(err);
      }
    }
    findPets();
  }, []);
  return (
    <div>
      <h3 className={styles.toptext}>These pets are looking for a good home</h3>
      <PetList petList={pets} />
    </div>
  );
};

export default Dashboard;
