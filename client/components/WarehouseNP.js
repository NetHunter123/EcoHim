import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Autocomplete,
  CircularProgress,
  Paper,
  TextField,
} from "@mui/material";
import { getOfficesNP } from "../actions";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const CustomPaper = (props) => {
  return <Paper elevation={8} {...props} />;
};

export function WarehouseNp(props) {
  const { city } = props;
  const [openWH, setOpenWH] = useState(false);
  const [optionsWH, setOptionsWH] = useState([]);
  const [textWH, setTextWH] = useState("");
  const loadingWH = openWH && optionsWH.length === 0;

  console.log("WarehouseNp_Load:", loadingWH);

  const dispatch = useDispatch();
  const WarehousesNP = useSelector((state) => state.combobox.WareHousesNP);

  function handleChange(e) {
    console.log("WarehouseNp_TF: ", e.target.value);
    setTextWH(e.target.value);
  }

  console.log("WarehousesNP_Respo: ", WarehousesNP);
  console.log("WarehousesNP_City: ", city.value);

  const Warehouses = WarehousesNP.map((items) => {
    return { title: items.Description, value: items.SiteKey };
  });

  useEffect(() => {
    dispatch(getOfficesNP(`getWarehouses`, `CityName`, `${city.value}`));
    setOptionsWH([...Warehouses]);
  }, [city]);

  useEffect(() => {
    let active = true;
    if (!loadingWH) {
      return undefined;
    }
    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptionsWH([...Warehouses]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loadingWH]);

  useEffect(() => {
    if (!openWH) {
      setOptionsWH([]);
    }
  }, [openWH]);

  function getWarehouse(e, v) {
    props.warehouseToCheckout(v);
  }

  return (
    <>
      <Autocomplete
        id="asynchronous-demo"
        open={openWH}
        onOpen={() => {
          setOpenWH(true);
        }}
        onClose={() => {
          setOpenWH(false);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={optionsWH}
        loading={loadingWH}
        onChange={getWarehouse}
        PaperComponent={CustomPaper}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Відділення"
            value={textWH}
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            type="email"
            required
            fullWidth
            variant="standard"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loadingWH ? (
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
