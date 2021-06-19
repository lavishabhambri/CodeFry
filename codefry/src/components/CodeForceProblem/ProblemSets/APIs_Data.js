import React from "react";
import axios from "axios";

async function fetchData() {

    try {
      const result = await axios.get("https://codeforces.com/api/problemset.problems?tags=implementation");
      console.log(result.data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

export default fetchData;