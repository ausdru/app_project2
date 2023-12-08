const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const { errorHandler, notFoundHandler } = require("../../utils/helpers");

router.get("/", async (req, res, next) => {
  // try {
  //   const dbPostsData = await Post.findAll({
  //     attributes: ["id", "created_at", "updated_at", "title", "content"],
  //     order: [["updated_at", "DESC"]],
  //     include: [
  //       {
  //         model: User,
  //         attributes: ["username"],
  //       },
  //       {
  //         model: Comment,
  //         attributes: ["id", "created_at", "text", "user_id", "post_id"],
  //         order: [["created_at", "DESC"]],
  //         include: [
  //           {
  //             model: User,
  //             attributes: ["username"],
  //           },
  //         ],
  //       },
  //     ],
  //   });

  //   const posts = dbPostsData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      // posts,
      loggedIn: req.session.loggedIn,
    });
  // } catch (error) {
  //   errorHandler(error, req, res, next);
  // }
});

// router.get("/post/:id", async (req, res, next) => {
//   try {
//     const dbPostData = await Post.findByPk(req.params.id, {
//       attributes: ["id", "created_at", "updated_at", "title", "content"],
//       include: [
//         {
//           model: User,
//           attributes: ["id", "username"],
//         },
//         {
//           model: Comment,
//           attributes: ["id", "created_at", "text", "user_id", "post_id"],
//           include: [
//             {
//               model: User,
//               attributes: ["username"],
//             },
//           ],
//         },
//       ],
//     });

//     const post = dbPostData.get({ plain: true });

//     // Sort comments by created_at in descending order
//     const sortedComments = post.comments.sort(
//       (a, b) => new Date(b.created_at) - new Date(a.created_at)
//     );

//     const user = req.session.user_id
//       ? await User.findByPk(req.session.user_id)
//       : null;
//     const usersPost = user ? post.user.id == user.id : false;

//     res.render("singlePost", {
//       usersPost,
//       post: {
//         ...post,
//         comments: sortedComments,
//       },
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (error) {
//     errorHandler(error, req, res, next);
//   }
// });

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signUp", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signUp");
});



module.exports = router;