import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

const axiosGetFloorURL = `/floors`;

export const getFloors = async () => {
  try {
    const response = await instance.get(axiosGetFloorURL);
    const data = response.data.map((floor) => floor.floorNumber);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getFloor = async (floorNumber) => {
  try {
    const response = await instance.get(
      axiosGetFloorURL + `?floorNumber=${floorNumber}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCabinets = async (floorNumber, section) => {
  try {
    const response = await instance.get(
      axiosGetFloorURL + `?floorNumber=${floorNumber}`
    );
    const data = response.data[0]?.sections.find(
      (floor) => floor.section === section
    )?.cabinets;
    return data;
  } catch (error) {
    console.error(error);
  }
};
