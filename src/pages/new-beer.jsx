import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagLine,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setName("");
        setTagLine("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");

        navigate("/beers");
      });
  };

  return (
    <div>
      <Header />
      <h1>New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagLine"
          onChange={(e) => setTagLine(e.target.value)}
          value={tagLine}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="firstBrewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />
        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewersTips"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewersTips}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuationLevel"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationLevel}
        />
        <label>Contributed By</label>
        <input
          type="text"
          name="contributedBy"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
