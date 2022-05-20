import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PetList.module.css";
import { Link } from "react-router-dom";

const PetList = (props) => {
  const [pets, setPets] = useState([]);
  const { petList } = props;

  useEffect(() => {
    let sortedPets = petList.sort((a, b) => {
      return a.type[0].toUpperCase() > b.type[0].toUpperCase() ? 1 : -1;
    });
    setPets(sortedPets);
  }, [petList]);

  return (
    <table className={`table table-dark table-hover ${styles.pettable}`}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet, i) => {
          return (
            <tr key={i}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td className={styles.actiongroup}>
                <Link to={`/pets/${pet._id}`}>Details</Link>|
                <Link to={`/pets/${pet._id}/update`}>Edit</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PetList;
