let obj = {
    91028: {
      user: "James Smith",
      comment: `Do you have any information about javascript?
        `,
      like: 9,
      dislike: 1,
      _id: 91028,
      child: {
        910281: {
          user: "Emily Johnson",
          comment: "I have very little information",
          like: 19,
          dislike: 2,
          _id: 910281,
          child: {
            9102812: {
              user: "Alexander Williams",
              comment: "I have enough information",
              like: 2,
              dislike: 0,
              _id: 9102812,
              child: {
                91028124: {
                  user: "You",
                  comment: "I also have information, if you want I can help you",
                  like: 2,
                  dislike: 0,
                  _id: 91028124,
                  child: {}
                }
              }
            }
          }
        },
        910282: {
          user: "You",
          comment: "Does anyone have any information about React?",
          like: 2,
          dislike: 0,
          _id: 910282,
          child: {}
        }
      }
    },
    910285: {
      user: "You",
      comment: "If you have information, please contact me",
      like: 9,
      dislike: 0,
      _id: 910285,
      child: {
        9102815: {
          user: "Olivia Miller",
          comment: "ok",
          like: 20,
          dislike: 0,
          _id: 9102815
        },
        9102825: {
          user: "Sophia Wilson",
          comment: "I will reach you via LinkedIn",
          like: 20,
          dislike: 0,
          _id: 9102825,
          child: {}
        }
      }
    }
  };
  let commentSection = ``;
  
  function populateCommentSection() {
    // let commentSection = ``;
    return {
      appendComment(comment, _id) {
        commentSection += `<div class="comment js-comment-edit" id="js-edit-comment-${_id}">${comment}</div>`;
      },
      populateComment(el) {
        const { comment, user, like = 0, dislike = 0, _id = "" } = el;
        this.populateUserName(user);
        this.appendComment(comment, _id);
        const likeDetails = {
          action: "like",
          text: like,
          label: "like",
          _id
        };
        const dislikeDetails = {
          action: "dislike",
          text: dislike,
          label: "dislike",
          _id
        };
        const editDetails = {
          action: "edit",
          label: "edit",
          _id
        };
        const saveDetails = {
          action: "save",
          label: "save",
          _id
        };
        commentSection += `<div class="action-btns">`;
        commentSection += this.populateButton(likeDetails);
        commentSection += this.populateButton(dislikeDetails);
        commentSection += this.populateButton(editDetails);
        commentSection += this.populateButton(saveDetails);
        commentSection += `      </div>`;
      },
      populateUserName(userName) {
        commentSection += `<div class="user">
        <span class="user-avatar">${userName.substring(
          0,
          1
        )}</span><span class="user-name">${userName}</span></div>`;
      },
      getIcon(label) {
        const icon = label;
        if (label === "like")
          return `<i class="fa fa-thumbs-up pointer-none"></i>`;
  
        if (label === "dislike")
          return `<i class="fa fa-thumbs-down pointer-none"></i>`;
        // if (label === "edit") return `<i class="fa fa-edit pointer-none"></i>`;
      },
      populateButton(details) {
        const { label, action, text = "", _id } = details;
        return `<button type="button" class="js-btn-action btn-action btn-${action}" data-action="${action}" data-id="${_id}">${
          this.getIcon(label) || label
        }  ${text ? "- " + text : ""}</button>`;
      }
    };
  }
  const section = populateCommentSection();
  function logComment(commentObj, id = "") {
    const { child = undefined, _id } = commentObj || {};
    const tempId = `${id ? id + "_" : ""}${_id}`;
    commentSection += `<div class="parent js-comment " data-id="${tempId}" id="js-${_id}-comment">`;
    section.populateComment(commentObj);
  
    if (child) {
      const el = Object.entries(child);
      if (el.length) {
        for (let [key, value] of el) {
          logComment(value, tempId);
        }
      }
    }
    commentSection += `</div>`;
  }
  
  const commentSectionEl = document.getElementById("comment-section");
  
  const initComment = () => {
    const el = Object.entries(obj);
    console.clear();
    console.log("re init");
    commentSection = ``;
    commentSection += `<div class="comment-section">`;
    for (let [key, value] of el) {
      logComment(value);
    }
    commentSection += `</div>`;
    commentSectionEl.innerHTML = commentSection;
  };
  
  initComment();
  
  commentSectionEl.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("js-btn-action")) {
      const { action, id } = target.dataset;
      getParentId(action, id);
    }
  });
  function getParentId(action, id) {
    const el = document.getElementById(`js-${id}-comment`);
  
    const ids = el.dataset.id.split("_");
    let tempObj = obj;
  
    ids.map((id, index) => {
      if (index === ids.length - 1) {
        tempObj = tempObj[id];
        if (action === "edit" || action === "save") {
          const editCommentEl = document.getElementById(`js-edit-comment-${id}`);
          if (action === "edit") {
            editCommentEl.setAttribute("contenteditable", "true");
            editCommentEl.focus();
          } else if (action === "save") {
            editCommentEl.removeAttribute("contenteditable");
            const text = editCommentEl.innerText;
            tempObj["comment"] = text;
          }
  
          console.log(editCommentEl);
        } else {
          tempObj[action] = (tempObj[action] || 0) + 1;
  
          initComment();
        }
      } else {
        tempObj = tempObj[id]["child"];
      }
    });
  }
  


//message
  $(document).ready(function(){
    $("#send").click(function(){
      var d = new Date();
      var text = $('#message').val();
      var twoDigitMonth = ((d.getMonth().length+1) === 1)? (d.getMonth()+1) : '0' + (d.getMonth()+1);
      var paragraph = $("<p></p>").text(text + " - " + d.getDate() + "/" + twoDigitMonth + "/" + d.getFullYear()) 
      $(".mess").append(paragraph);
    });
  });