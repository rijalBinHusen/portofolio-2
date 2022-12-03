type Post = {
    title: string
    file: string
    rawContent: () => string
  }
  
  export default function getPostData(post: Post) {
    console.log(post)
    return {
      slug: post.file.split('/').pop().split('.').shift(),
    }
  }
  