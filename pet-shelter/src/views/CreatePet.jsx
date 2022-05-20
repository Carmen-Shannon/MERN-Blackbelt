import React from "react";
import CreatePetForm from "../components/CreatePetForm";
import './CreatePet.module.css';

const CreatePet = (props) => {
  return (
    <div>
      <h2>Create a pet!</h2>
      <CreatePetForm />
    </div>
  );
};

export default CreatePet;
