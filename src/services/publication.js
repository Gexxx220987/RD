// import axiosInstance from ".";

// export const publicationFetch = async (data) => {
//     const response = await axiosInstance.post('objectsearch', data);
//     return response
// }

import axiosInstance from ".";

export const publicationFetch = (data) =>
  axiosInstance.post("objectsearch", data);
