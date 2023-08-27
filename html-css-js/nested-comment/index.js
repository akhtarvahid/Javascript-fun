const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
    const targetElem = event.target;
    const isReplyClicked = targetElem.classList.contains("add-reply");
    if (isReplyClicked) {
        createReplyInput(event)
    } else {
        const isSubmit = targetElem.classList.contains("btn-submit");
        if (isSubmit == false)
            return;
        createComment(event);
    }
})


function createComment(event) {
    console.log(event.target);
    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "comment-container")
    const input = event.target.parentNode.children[0];
    commentContainer.innerHTML = `<div class="comment-card">
            <h3 class="comment_text">${input.value} ? </h3><div class="add-reply">Reply</div>
        </div>`;
    const commentReplyBox = event.target.parentNode;
    const commentCard =commentReplyBox.parentNode;
    commentCard.replaceChild(commentContainer, commentReplyBox);
}

function createReplyInput(event) {
    const fragment = document.createDocumentFragment();
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    replyContainer.setAttribute("class", "comment-reply-container");

    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "write your comment");
    button.setAttribute("class", "btn-submit");
    button.textContent = "submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);
    fragment.appendChild(replyContainer);
    console.log(event.target.parentNode)

    event.target.parentNode.appendChild(fragment);
}