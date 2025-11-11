const maindiv = document.querySelector('#posts');

const getPosts = async () => {
    try {
        const response = await fetch('posts.json');
        const posts = await response.json();
        console.log('Fetched posts:', posts);
        return posts;
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

const renderPosts = async () => {
    const posts = await getPosts();
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.classList.add('post-card');
        
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <img  class=" post-img" src=${post.cover} alt="Cover Image" />
            <div class="post-content">

                ${post.content}
            </div>
            <p class="post-date">Created at: ${post.created_at}</p>
            <p class="post-tags">Tags: ${post.tags.join(', ')}</p>
        `;
        
        maindiv.appendChild(postDiv);
    }
    );
}

renderPosts();