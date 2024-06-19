import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();
// const methodOverride = methodOverride();

const PORT = 3000;

const blogList = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("index.ejs", { blogList: blogList });
});

app.post("/add-post", (req, res) => {
  const body = req.body;
  const blogTitle = body.title;
  const blogContent = body.content;
  blogList.push(new BlogPost(blogTitle, blogContent));
  console.log(blogList);
  res.redirect("/");
});

// app.delete("/delete-post/:id", (req, res) => {
//   // const body = req.body;
//   // const blogTitle = body.title;
//   // const blogContent = body.content;
//   // blogList.pop();
//   console.log("in delete");
//   console.log(`id${id}`);
//   res.render("index.ejs", { blogList: blogList });
// });

app.post("/del", (req, res) => {
  //
});

// Route for deleting a post
app.delete("/del/:id", (req, res) => {
  const postId = req.params.id;
  // Logic to delete the post with id = postId
  blogList = blogList.filter((post) => post._id !== postId);
  res.render("index.ejs", { blogList: blogList }); // Render your updated view
});

app.listen(PORT, () => {
  console.log("Server is up and running on port 3000");
  console.log("http://localhost:3000");
});

class BlogPost {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}
