import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import getUsersApi from "../../api/getUsersApi";
import User from "../User/User";
import { UserData } from "../User/types";
import debounce from "lodash.debounce";
import "./style.scss";

function UserList() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState<UserData[]>();

  // function inputValueHander(e: React.ChangeEvent<HTMLInputElement>) {
  //   setInputValue(e.target.value);
  // }

  useEffect(() => {
    getUsersApi.getUsers().then((response: AxiosResponse<UserData[]>) => {
      setUsers(response.data);
    });
  }, []);

  const textDebounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const debouncing = debounce(() => setInputValue(text), 500);
    debouncing();
  };

  const renderUsers = users
    ?.filter((user) => user.login.includes(inputValue))
    .map((user) => {
      return (
        <User key={user.id} name={user.login} photo={user.avatar_url}></User>
      );
    });

  return (
    <div className="userlist-wrapper">
      <div className="input-wrapper">
        <span>Debounced Search</span>
        <input className="text-input" type="text" onChange={textDebounce} />
      </div>
      <div className="user-wrapper">{renderUsers}</div>
    </div>
  );
}

export default UserList;
