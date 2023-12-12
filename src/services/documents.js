// import axiosInstance from ".";

// export const documentsFetch = async (data) => {
//     const response = await axiosInstance.post('documents', data);
//     return response
// }

import axiosInstance from ".";

export const documentsFetch = (data) => axiosInstance.post("documents", data);
