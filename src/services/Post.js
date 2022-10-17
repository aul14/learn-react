import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(`${root ? OnlineRoot : RootPath}${path}`, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};
export default Post;
