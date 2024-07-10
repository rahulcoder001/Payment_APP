import { useEffect, useState } from "react";
import Header from "../component/Dashbord/Header";
import Middle from "../component/Dashbord/Middile";
import Search from "../component/Dashbord/Search";
import Userlist from "../component/Dashbord/Userlist";
import axios from "axios";

export function Dashbord() {
  const [userlist, setUserlist] = useState([]);
  const [filter, setFilter] = useState("");
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("user");

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/account/getbal", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      setAmount(response.data.balance);
      setName(response.data.name);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/user/find?filter=${filter}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      setUserlist(response.data.user);
    });
  }, [filter]);

  return (
    <div>
      <Header name={name} />
      <Middle ammount={amount} />
      <Search onchange={(e) => { setFilter(e.target.value) }} />
      {userlist.map((user) => (
        <Userlist key={user.id} user={user} />
      ))}
    </div>
  );
}
