const inputTitle = document.querySelector('#post-title');
const inputText = document.querySelector('#post-text');
const btn = document.querySelector('button');
const list = document.querySelector('ul');

class Post {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
}

class UI {
    createUIElement(post) {
        const newPost = post;

        const UIPost = document.createElement('li');
        UIPost.classList.add('list-group-item', 'my-2')
        UIPost.innerHTML = `<h4>${post.title}</h4><p>${post.text}</p>`;
        list.appendChild(UIPost);
    }

    AddToLocalStorage(localpost) {
        localStorage.addItem
    }
}

const addPost = e => {
    const postTitle = inputTitle.value;
    const postText = inputText.value;

    const newPost = new Post(postTitle, postText);
    const newUI = new UI;

    newUI.createUIElement(newPost);

    e.preventDefault();
}

btn.addEventListener('click', addPost);