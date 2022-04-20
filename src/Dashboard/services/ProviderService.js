import http from "./AxiosContext";
const getAllProvider = () => {
  return http.get("/providers/getAllProvider");
};
const getProviderById = id => {
  return http.get(`/providers/getProviderById/${id}`);
};
const createProvider = data => {
  return http.post("/providers/createProvider", data);
};
const updateProvider = (id, data) => {
  console.log(data)
  return http.put(`/providers/updateProvider/${id}`, data);
};
const removeProvider = id => {
  return http.delete(`/providers/deleteProvider/${id}`);
};
const findByName = title => {
    return http.get(`/providers/getProviderByName=${title}`);
  };
  export default {
    getAllProvider,
    getProviderById,
    createProvider,
    updateProvider,
    removeProvider,
    findByName
  };