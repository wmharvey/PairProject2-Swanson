// Global vars
var comments = document.getElementById('commentdisplay');
var commentForm = document.getElementById('commentform');
var commentData = [];

//Contact Form
var Contact = function (firstName, lastName, concern) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.concern = concern;
}

var concernForm = document.getElementById('contactform');
var concernSubmit = function() {
  event.preventDefault();

  if (!event.target.firstname.value || !event.target.lastname.value || !event.target.concern.value) {
    return alert ('You must fill in all the fields');
  }else {
    return alert ('Thank you for your input! Someone will contact you within the next 24 hours.');
  }

  var first = event.target.firstname.value;
  var last = event.target.lastname.value;
  var concern = event.target.concern.value;

  var newContact = new Contact(first, last, concern);
  console.log('Comment by ' + event.target.firstname.value + event.target.lastname + ' says ' + event.target.concern.value);
  event.target.firstname.value = null;
  event.target.lastname.value = null;
  event.target.concern.value = null;
}

concernForm.addEventListener('submit', concernSubmit);

//Comment Form
var Comment = function(userName, text) {
  this.userName = userName;
  this.text = text;
  commentData.push(this);
}

var render = function(comment) {
  var li = document.createElement('li');
  li.innerHTML = "\"" + comment.text + "\"" + " - " + comment.userName;
  return li;
}

Comment.prototype.render = function() {
  var li = document.createElement('li');
  li.innerHTML = "\"" + this.text + "\"" + " - " + this.userName;
  return li;
}

var renderAllComments = function() {
  comments.innerHTML = '';
  commentData.forEach(function(comment) {
    commentdisplay.appendChild(render(comment));
  })
}

function checkLocal () {
  if (localStorage.commentData) {
    commentData = JSON.parse(localStorage.getItem('commentData'));
    renderAllComments();
  } else {
    var Leslie = new Comment('Leslie Knope', 'Ron is a poetic noble land mermaid.');
    var Tom = new Comment('Tom Haverford', 'Entertainment720 will be hosting all the dope ass parties in the White House if Ron gets elected.');
    var Andy = new Comment('Andy Dwyer', 'Ron gave me the best advice I ever received. \'Never half-ass two things. Whole-ass one thing.\'');
    var Jerry = new Comment('Jerry/Gary/Larry Gergich', 'Ron has cried twice in his life. Once, when he was 7 and was hit by a bus, and again when he learned that L\'il Sebastian had passed. That\'s the kind of man I\'d like to see as President.');
    var Burt = new Comment('Burt Macklin, FBI','Burt Macklin. FBI. You thought I was dead? So did the President\'s enimies.');
  }
} checkLocal();

var commentSubmit = function(event) {
  event.preventDefault();

  if (!event.target.name.value || !event.target.comment.value) {
    return alert ('You must fill in all the fields');
  }

  var commenter = event.target.name.value;
  var submission = event.target.comment.value;

  var newComment = new Comment(commenter, submission);
  console.log('Comment by ' + event.target.name.value + ' at ' + Date());
  event.target.name.value = null;
  event.target.comment.value = null;

  localStorage.setItem('commentData', JSON.stringify(commentData));
  renderAllComments();
}

commentForm.addEventListener('submit', commentSubmit);
renderAllComments();
