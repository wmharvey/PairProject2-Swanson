var Comment = function(userName, text) {
  this.userName = userName;
  this.text = text;

  var paragraph = document.createElement('p');
  p.innerHTML = this.text + " - " + this.userName;
  return p;
}

var comments = document.getElementById('comment-display');
var chatForm = document.getElementById('commentform');
var commentData = [];

var renderAllComments = function() {
  comments.innerHTML = '';
  commentData.forEach(function(comment) {
    comments.appendChild(comment.render());
  });
};


var commentSubmit = function(event) {
  event.preventDefault();

  if (!event.target.name.value || !event.target.comment.value) {
    return alert ('You must fill in all the fields)');

    var commenter = event.target.name.value;
    var submission = event.target.comment.value;
  }

  var newComment = new Comment(commenter, submission);
  console.log('Comment by ' + event.target.name.value + ' at ' + Date());
  event.target.name.value = null;
  event.target.comment.value = null;

  commentData.push(newComment);
  renderAllComments();
};

chatForm.addEventListener('submit', handleCommentSubmit);



