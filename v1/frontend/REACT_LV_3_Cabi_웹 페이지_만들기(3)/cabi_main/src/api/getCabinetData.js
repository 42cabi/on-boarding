import axios from "axios";

const url = `http://localhost:3100/floors`;

export const getFloorNumbers = async () => {
  try {
    const response = await axios.get(url);
    return response.data.map((cabinets) => cabinets.floorNumber);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const getSectionNumbers = async (floorNumber) => {
  try {
    const response = await axios.get(url + `?floorNumber=${floorNumber}`);
    const [data] = response.data;

    if (data) {
      return data.sections.map((section) => section.section);
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCabinetInfo = async (floorNumber, sectionNumber) => {
  try {
    const response = await axios.get(url + `?floorNumber=${floorNumber}`);
    const [data] = response.data;

    if (data) {
      const section = data.sections.find((el) => el.section === sectionNumber);

      if (section && section.cabinets) {
        return section.cabinets;
      } else {
        throw new Error("No Cabinets in this section");
      }
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error(error);
  }
};

// const data = await getSectionNumbers(2);
// console.log("<< section numbers >>\n");
// console.log(data);

// const data2 = await getCabinetInfo(2, "B");
// console.log("<< cabinet datas >>");
// console.log(data2);
