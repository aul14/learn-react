import Post from "./Post";
import Get from "./Get";
import Put from "./Put";
import Delete from "./Delete";

// GET
const GetNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const GetComments = () => Get("comments", true);

// POST
const PostNewsBlog = (data) => Post("posts", false, data);

// PUT
const PutNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

// DELETE
const DeleteNewsBlog = (id) => Delete(`posts/${id}`, false);

const API = {
  GetNewsBlog,
  GetComments,
  PostNewsBlog,
  PutNewsBlog,
  DeleteNewsBlog,
};

export default API;
