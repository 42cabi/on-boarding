import axios from "axios";

const url = `http://localhost:3100/floors`;

export const fetchFloorNumbers = async () => {
  try {
    const response = await axios.get(url);
    return response.data.map((cabinets) => cabinets.floorNumber);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const fetchSectionsData = async (floorNumber) => {
  try {
    const response = await axios.get(url + `?floorNumber=${floorNumber}`);
    const [firstData] = response.data;
    console.log(firstData.sections);
    if (firstData) {
      return firstData.sections;
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};

fetchSectionsData(2);
// console.log();
