import React, { useState } from "react";
import { useUsersQuery } from "../App/usersAPI";
import ListData from "./ListData";

export default function Homepage() {
  const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery();
  const [search, setSearch] = useState('')
  const utils = {
    data, search, isLoading
  }
  return (
    <div className="container mt-5">
      <div className="mb-5">
        <input
          type="text"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          placeholder="Cari Product"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <ListData {...utils}/>
      </div>
    </div>
  );
}
