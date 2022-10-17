import axios from "axios";

const RootPath = "http://localhost:3004/";
const OnlineRoot = "https://jsonplaceholder.typicode.com/";

const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? OnlineRoot : RootPath}${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

const GetNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const GetComments = () => Get("comments", true);

const API = {
  GetNewsBlog,
  GetComments,
};

export default API;
