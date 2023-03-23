function updateLastUserActivityTime(user, post, deletePost) {
  const createPost = new Promise((resolve, reject) => {
    // Simulate creating a post after 1 second
    setTimeout(() => {
      user.posts.push(post);
      resolve();
    }, 1000);
  });

  const updateLastActivityTime = new Promise((resolve, reject) => {
    // Update the user's last activity time after 1 second
    setTimeout(() => {
      user.lastActivityTime = new Date();
      resolve();
    }, 1000);
  });

  Promise.all([createPost, updateLastActivityTime])
    .then(() => {
      console.log("All promises resolved!");
      console.log("User posts:", user.posts);
      console.log("User last activity time:", user.lastActivityTime);

      // Delete the last post
      deletePost(user.posts[user.posts.length - 1]).then(() => {
        console.log("Post deleted!");
        console.log("User posts after deletion:", user.posts);
      });
    });
}