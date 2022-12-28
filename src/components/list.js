import axios from "axios";
import { useEffect, useState } from "react";
import "./list.css";

export default function List() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    setLoading(true);
  };

  const helperfun = async () => {
    const resp = await axios.get(
      "https://randomuser.me/api/?page=1&results=10&seed=abc"
    );
    setList(resp.data.results);
  };

  const fetchMoreData = async () => {
    const resp = await axios.get(
      `https://randomuser.me/api/?page=${
        (list.length / 10) + 1
      }&results=10&seed=1`
    );
    setList([...list, ...resp.data.results]);
    setLoading(false);
  };

  useEffect(() => {
    helperfun();
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (loading === true) {
      fetchMoreData();
    }
  }, [loading]);

  return (
    <div className="cont-list">
      {list.map((user) => {
        return (
          <div className="row user" key={user.login.uuid}>
            <div className="col-6">
              <h3 className="user-name">
                {user.name.title + " " + user.name.first + " " + user.name.last}
              </h3>
              <a className="user-email">{user.email}</a>
            </div>
            <img src={user.picture.large} className="user-image col-1" alt="Profile "/>
          </div>
        );
      })}

      <div className="loader" style={{
        display : loading === false ? "none" : ""
      }}></div>
    </div>
  );
}
