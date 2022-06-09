import React, { useState } from "react";
import { useEffect } from "react";
import {Autocomplete, Button, CircularProgress, Paper, TextField} from "@mui/material";
import { getOfficesNP } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const CustomPaper = (props) => {
  return <Paper  elevation={8} {...props} />;
};

export default function CitiesNP(props) {
  const [openCities, setOpenCities] = useState(false);
  const [optionsCities, setOptionsCities] = useState([]);
  const [textCities, setTextCities] = useState("");
  const loadingCities = openCities && optionsCities.length === 0;
  console.log("CitiesNP_Load:", loadingCities);

  const dispatch = useDispatch();
  const citiesNP = useSelector((state) => state.combobox.CitiesNP);

  console.log("CitiesNP_Respo: ", citiesNP);

  function handleChange(e) {
    setTextCities(e.target.value);
  }

  const cities = citiesNP.map((items) => {
    return { title: items.Description, value: items.Description };
  });

  function getCity(e, v) {
    props.cityToCheckout(v);
  }

  useEffect(() => {
    dispatch(getOfficesNP(`getCities`, `FindByString`, `${textCities}`));
    setOptionsCities([...cities]);
  }, [textCities]);

  useEffect(() => {
    let active = true;
    if (!loadingCities) {
      return undefined;
    }
    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptionsCities([...cities]);
      }
    })();

    return () => {
      active = false;
    };
  }, [textCities]);

  useEffect(() => {
    if (!openCities) {
      setOptionsCities([]);
    }
  }, [openCities]);



  return (
    <>
      <Autocomplete
        // className={styles.cities}
        sx={{ width: "100%"}}
        open={openCities}
        onOpen={() => {
          setOpenCities(true);
        }}
        onClose={() => {
          setOpenCities(false);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={optionsCities}
        loading={loadingCities}
        color={"secondary"}
        onChange={getCity}
        PaperComponent={CustomPaper}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Введіть місто доставки"
            value={textCities}
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            type="email"
            fullWidth
            required
            variant="standard"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loadingCities ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </>
  );
}
