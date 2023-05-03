/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from "./UserState";
import "./App.css";

function App() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  console.log(users);

  return (
    <>
      <div>Hallo</div>
    </>
  );
}

export default App;
