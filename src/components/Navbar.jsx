import classes from "./Navbar.module.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const path = '/images/m.jpeg';
 

  return (
    <>
      <div className={classes.progress}></div>
      <div className={classes.header}>
        <div className={classes.container}>
          {/* <img src="./components/images/w.png" alt="My Image" />
          <img src={require("./components/images/w.png")} alt="cannot display"/> */}
          <img src={path} alt="My Image" />
          <ul>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>To do</li>
              <li>Planner</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
