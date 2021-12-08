import { StyleSheet, css } from "aphrodite";
export const styles = StyleSheet.create({
  heading: {
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "79px",
    lineHeight: "118px",
    textAlign: "center",
    color: "#7879f1",
    fontFamily: "Franklin Gothic",
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media (max-width: 767px)": {
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "24px",
      lineHeight: "18px",
      textAlign: "center",
      color: "#7879f1",
      fontFamily: "Franklin Gothic",
    },
  },
  heading2: {
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "28px",
    lineHeight: "27px",
    textAlign: "left",
    color: "#7879f1",
    fontFamily: "Franklin Gothic",
    color: "white",
    "@media (max-width: 567px)": {
      textAlign: "left",
    },
    "@media only screen and (max-width: 767px)": {
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "12px",
      lineHeight: "13px",
      textAlign: "center",
      color: "white",
      fontFamily: "Franklin Gothic",
    },
  },
  image: {
    width: "30%",
    "@media (max-width: 567px)": {
      textAlign: "center",
      float: "center",
      width: "100%",
    },
    "@media only screen and (max-width: 767px)": {
      width: "80%",
      textAlign: "center",
    },
  },
  button_group: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "20px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      width: "100%",
      marginTop: "10px",

      textAlign: "center",
    },
  },
  display: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "column",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      width: "100%",
      marginTop: "10px",
      textAlign: "center",
    },
  },
  displayRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    color: "white",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",
      marginTop: "10px",
      textAlign: "center",
    },
  },
  button_group2: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginTop: "80px",
    margin: "20px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "80%",
      marginTop: "20px",
      textAlign: "center",
    },
  },
  section_each: {
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {},
  },
  image_mid: {
    width: "20%",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "50%",
    },
  },
  image_Logo: {
    width: "200px",
    margin: "20px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "100%",
    },
  },
  displayCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    color: "white",
    margin: "10px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",
      marginTop: "10px",
      textAlign: "center",
    },
  },
});
