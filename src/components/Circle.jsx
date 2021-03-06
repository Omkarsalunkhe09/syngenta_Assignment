import React from "react";
import "./circle.css";
import { useEffect } from "react";
import useGenerateRandomColor from "./useGenerateRandomColor";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export const Circle = () => {
  const [val, setVal] = useState("");
  const [tog, setTog] = useState(false);
  const [tog1, setTog1] = useState(false);
  const [tog2, setTog2] = useState(false);
  const [tog3, setTog3] = useState(false);
  const [tog4, setTog4] = useState(false);
  const {
    color1,
    color2,
    color3,
    color4,
    color5,
    generateColor1,
    generateColor2,
    generateColor3,
    generateColor4,
    generateColor5,
  } = useGenerateRandomColor();
  useEffect(() => {
    generateColor1();
    generateColor2();
    generateColor3();
    generateColor4();
    generateColor5();
  }, []);
  return (
    <div>
      <div className="contanier">
        <div className="inbx">
          <div>
            <TextField
              id="standard-basic"
              label="Enter Value"
              value={val}
              type="number"
              style={{
                marginLeft: "40px",
              }}
              onChange={(e) => {
                setVal(e.target.value);
              }}
              maxlength="1"
              max="5"
              min="1"
            />
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              style={{
                marginTop: "10px",
                marginLeft: "5px",
              }}
              onClick={() => {
                if (val == 1) {
                  document.getElementsByClassName(
                    "bx1"
                  )[0].style.backgroundColor = color1;
                  setTog(!tog);
                  {
                    tog
                      ? (document.getElementsByClassName(
                          "bxx1"
                        )[0].style.display = "block") &&
                        (document.getElementsByClassName(
                          "bx1"
                        )[0].style.display = "none")
                      : (document.getElementsByClassName(
                          "bxx1"
                        )[0].style.display = "none") &&
                        (document.getElementsByClassName(
                          "bx1"
                        )[0].style.display = "block");
                  }
                }
                if (val == 2) {
                  document.getElementsByClassName(
                    "bx2"
                  )[0].style.backgroundColor = color2;
                  setTog1(!tog1);
                  {
                    tog1
                      ? (document.getElementsByClassName(
                          "bxx2"
                        )[0].style.display = "block") &&
                        (document.getElementsByClassName(
                          "bx2"
                        )[0].style.display = "none")
                      : (document.getElementsByClassName(
                          "bxx2"
                        )[0].style.display = "none") &&
                        (document.getElementsByClassName(
                          "bx2"
                        )[0].style.display = "block");
                  }
                }

                if (val == 3) {
                  document.getElementsByClassName(
                    "bx3"
                  )[0].style.backgroundColor = color3;
                  setTog2(!tog2);
                  {
                    tog2
                      ? (document.getElementsByClassName(
                          "bxx3"
                        )[0].style.display = "block") &&
                        (document.getElementsByClassName(
                          "bx3"
                        )[0].style.display = "none")
                      : (document.getElementsByClassName(
                          "bxx3"
                        )[0].style.display = "none") &&
                        (document.getElementsByClassName(
                          "bx3"
                        )[0].style.display = "block");
                  }
                }
                if (val == 4) {
                  document.getElementsByClassName(
                    "bx4"
                  )[0].style.backgroundColor = color4;
                  setTog3(!tog3);
                  {
                    tog3
                      ? (document.getElementsByClassName(
                          "bxx4"
                        )[0].style.display = "block") &&
                        (document.getElementsByClassName(
                          "bx4"
                        )[0].style.display = "none")
                      : (document.getElementsByClassName(
                          "bxx4"
                        )[0].style.display = "none") &&
                        (document.getElementsByClassName(
                          "bx4"
                        )[0].style.display = "block");
                  }
                }
                if (val == 5) {
                  document.getElementsByClassName(
                    "bx5"
                  )[0].style.backgroundColor = color5;
                  setTog4(!tog4);
                  {
                    tog4
                      ? (document.getElementsByClassName(
                          "bxx5"
                        )[0].style.display = "block") &&
                        (document.getElementsByClassName(
                          "bx5"
                        )[0].style.display = "none")
                      : (document.getElementsByClassName(
                          "bxx5"
                        )[0].style.display = "none") &&
                        (document.getElementsByClassName(
                          "bx5"
                        )[0].style.display = "block");
                  }
                }
                if (val > 5) {
                  alert("Please Enter a Number Between 1 to 5");
                }
                setVal("");
              }}
            >
              Shoot
            </Button>
            <div className="gg">
              <div className="bbx bx1">1</div>
              <div className="bbx bx2">2</div>
              <div className="bbx bx3">3</div>
              <div className="bbx bx4">4</div>
              <div className="bbx bx5">5</div>
            </div>
          </div>
        </div>
        <div className="cont">
          <div
            style={{
              backgroundColor: color1,
            }}
            className="bx bxx1"
          >
            1
          </div>
          <div
            style={{
              backgroundColor: color2,
            }}
            className="bx bxx2"
          >
            2
          </div>
          <div
            style={{
              backgroundColor: color3,
            }}
            className="bx bxx3"
          >
            3
          </div>
          <div
            style={{
              backgroundColor: color4,
            }}
            className="bx bxx4"
          >
            4
          </div>
          <div
            style={{
              backgroundColor: color5,
            }}
            className="bx bxx5"
          >
            5
          </div>
        </div>
      </div>
    </div>
  );
};
