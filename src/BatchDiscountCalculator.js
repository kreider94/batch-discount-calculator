import React, { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import { Slider, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  calculatorContainer: {
    maxWidth: "400px",
    margin: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center",
    boxShadow: theme.customShadows.default,
    borderRadius: theme.customBorders.rounded,
  },
  sliderContainer: {
    display: "flex",
    padding: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "column",
    border: `${"1px solid " + theme.palette.secondary.main}`,
    boxShadow: theme.customShadows.default,
    borderRadius: theme.customBorders.rounded,
  },
  slider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  discountText: {
    marginTop: "20px",
  },
  discountContainer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.customBorders.rounded,
  },
  discountAmount: {
    padding: theme.spacing(1),
    color: theme.palette.alternative.main,
  },
}));

const BatchDiscountCalculator = () => {
  const classes = useStyles();
  const discountData = useContext(ShopContext);
  const [itemsCount, setItemsCount] = useState(1);

  const handleSliderChange = (event, newValue) => {
    setItemsCount(newValue);
  };

  return (
    <Box className={classes.calculatorContainer}>
      <Typography variant="h1" align="center">
        discount calculator
      </Typography>

      <Box className={classes.sliderContainer}>
        <Typography variant="h3">no. of items</Typography>

        <Typography variant="h2">{itemsCount}</Typography>

        <Slider
          className={classes.slider}
          value={itemsCount}
          onChange={handleSliderChange}
          step={1}
          min={1}
          max={5}
        />

        <Typography variant="h5" className={classes.discountContainer}>
          You could potentially receive
          <Typography variant="h4" className={classes.discountAmount}>
            £{discountData[itemsCount]}
          </Typography>
          off your next order!
        </Typography>
      </Box>
    </Box>
  );
};

export default BatchDiscountCalculator;
