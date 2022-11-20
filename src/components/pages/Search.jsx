import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSearch = () => {
    setLoading(true);
    axios
      .get(
        `https://nutri-score.p.rapidapi.com/v1/nutri-score/food/100&=555be8da9fmshd28261c4ec9e424p111c7ajsnbea563346924`
      )
      .then((res) => res.data)
      .then((res) => {
        if (res.results.length === 0) {
          toast.error("Sorry, No results found ");
          setLoading(false);
          setSearchTerm("");
          setMovies([]);
        } else {
          setMovies(res.results);
          setLoading(false);
          setSearchTerm("");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong')
        setLoading(false)
        setSearchTerm('')
      });
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="search">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-3 mt-3">
              <h2>Suggest me</h2>
            </div>
            <form onSubmit={}={fetchSearch}>
              
                <input
                  value={searchTerm}
                  onChange={handleChange}
                  placeholder="Search  Movies"
                />
              <button type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Search;