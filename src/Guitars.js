import React, { useState } from "react";
import guitarData from "./GuitarData";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Guitar from "./Guitar";
import "./Guitars.css";

const Guitars = () => {
  const [filterList, setFilterList] = useState([]);
  console.log(filterList);

  const handleCheckbox = (e) => {
    let filterCopy = [...filterList];
    if (filterList.includes(e.target.name)) {
      const index = filterList.indexOf(e.target.name);
      filterCopy.splice(index, 1);
      setFilterList(filterCopy);
    } else {
      setFilterList([...filterCopy, e.target.name]);
    }
  };

  const guitars = !filterList.length
    ? guitarData
    : guitarData.filter((guitar) => filterList.includes(guitar.brand));

  return (
    <div className="guitars__page">
      <div className="guitars__header">
        <h1>Solidbody Guitars</h1>
        <h4>
          Read our <strong>Electric Guitars</strong> Buying Guide
        </h4>
      </div>
      <div className="guitars__body">
        <div className="filters__container">
          <h3>Refine Your Search</h3>
          <h2>Brand</h2>
          <div className="filters__body">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={handleCheckbox}
                    name="danelectro"
                  />
                }
                label="Danelectro"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={handleCheckbox}
                    name="fender"
                  />
                }
                label="Fender"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={handleCheckbox}
                    name="gibson"
                  />
                }
                label="Gibson"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={handleCheckbox}
                    name="ibanez"
                  />
                }
                label="Ibanez"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={handleCheckbox}
                    name="kramer"
                  />
                }
                label="Kramer"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={handleCheckbox}
                    name="prs"
                  />
                }
                label="PRS"
              />
            </FormGroup>
          </div>
          <h2>Price Range</h2>
          <div className="filters__body">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="$0 - $1000"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="$1000 - $2000"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="$2000 +"
              />
            </FormGroup>
          </div>
        </div>
        <div className="guitars__container">
          {guitars.map((guitar) => (
            <Guitar guitar={guitar} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guitars;
