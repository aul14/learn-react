import Post from "./Post";
import Get from "./Get";

// GET
const GetNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const GetComments = () => Get("comments", true);

// POST
const PostNewsBlog = (data) => Post("posts", false, data);

const API = {
  GetNewsBlog,
  GetComments,
  PostNewsBlog,
};

export default API;
