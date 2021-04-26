import React, { useState } from "react";
import guitarData from "./GuitarData";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Guitar from "./Guitar";
import "./Guitars.css";

const Guitars = () => {
  const [filters, setFilters] = useState({
    danelectroFilter: false,
    fenderFilter: false,
    gibsonFilter: false,
    ibanezFilter: false,
    kramerFilter: false,
    prsFilter: false,
  });

  console.log(filters);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  const noFilters = Object.values(filters).every((filter) => !filter);

  console.log(noFilters);

  const renderFilteredGuitars = () => {
    let filteredGuitars = [];
    if (filters.danelectroFilter === true) {
      filteredGuitars = guitarData.filter(({ brand }) => {
        return brand === "danelectro";
      });
      return filteredGuitars;
    }
    if (filters.fenderFilter === true) {
      filteredGuitars = guitarData.filter(({ brand }) => {
        return brand === "fender";
      });
      return filteredGuitars;
    }
    if (filters.gibsonFilter === true) {
      filteredGuitars = guitarData.filter(({ brand }) => {
        return brand === "gibson";
      });
      return filteredGuitars;
    }
    if (filters.ibanezFilter === true) {
      filteredGuitars = guitarData.filter(({ brand }) => {
        return brand === "ibanez";
      });
      return filteredGuitars;
    }
    if (filters.kramerFilter === true) {
      filteredGuitars = guitarData.filter(({ brand }) => {
        return brand === "kramer";
      });
      return filteredGuitars;
    }
    if (filters.prsFilter === true) {
      filteredGuitars = guitarData.filter(({ brand }) => {
        return brand === "prs";
      });
      return filteredGuitars;
    }
  };

  const renderUnfilteredGuitars = () => {
    return <div></div>;
  };

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
                    checked={filters.danelectroFilter}
                    color="primary"
                    onChange={handleChange}
                    name="danelectroFilter"
                  />
                }
                label="Danelectro"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.fenderFilter}
                    color="primary"
                    onChange={handleChange}
                    name="fenderFilter"
                  />
                }
                label="Fender"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.gibsonFilter}
                    color="primary"
                    onChange={handleChange}
                    name="gibsonFilter"
                  />
                }
                label="Gibson"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.ibanezFilter}
                    color="primary"
                    onChange={handleChange}
                    name="ibanezFilter"
                  />
                }
                label="Ibanez"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.kramerFilter}
                    color="primary"
                    onChange={handleChange}
                    name="kramerFilter"
                  />
                }
                label="Kramer"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.prsFilter}
                    color="primary"
                    onChange={handleChange}
                    name="prsFilter"
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
          {guitarData.map((guitar) => (
            <Guitar
              id={guitar.id}
              brand={guitar.brand}
              name={guitar.name}
              description={guitar.description}
              price={guitar.price}
              rating={guitar.rating}
              img={guitar.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guitars;
