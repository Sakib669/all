function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postsContainer = document.getElementById('posts-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4>User: ${post.userId}</h4>
        <h5>Post-title: ${post.title}</h5>
        <p>Post-description: ${post.body}</p>
        `;
        postsContainer.appendChild(div);
    }
}

loadPosts();

