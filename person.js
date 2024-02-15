const headerBar = document.getElementById("toggle_my_header");
const searchBar = document.querySelector(".search_bar_input");
const body = document.body;
let homeContainer = document.querySelector(".center_container");

const seeMoreBtn = document.getElementById("see_more_center_responsive");
const favoriteContainer = document.getElementById("responsive_favoris");
const shawProfileBtn = document.querySelector(".me");
const btnMessageArea = document.querySelector("#btn_toggle_message_box");
const messageArea = document.querySelector(".sms_container");
let blurEl = document.createElement("span");

const profilesArray = [
  {
    id: 1,
    photoProfile: "./images/profil15.jpg",
    userName: "Rafael",
    job: "Mechanical engineer",
    img: "https://picsum.photos/id/237/300/200",
    day: "3d",
    text: "Feed your wanderlust with these inspiring travel quotes from famous travelers along with beautiful images you can share.",
  },
  {
    id: 2,
    photoProfile: "./images/profil12.jpg",
    userName: "Eric malin",
    job: "Electrical Engineer",
    img: "https://picsum.photos/id/27/300/200",
    day: "3d",
    text: "Traveling is not always pretty, not always comfortable. Sometimes he hurts you, he even breaks your heart. But that's okay... Travel changes you, it must change you. It leaves traces on your memory, on your conscience, in your heart, and on your body. You take something with you. Hope you leave something good behind.",
  },
  {
    id: 3,
    photoProfile: "./images/profil7-min.png",
    userName: "Cherifa",
    job: "Doctor Bio",
    img: "https://picsum.photos/id/7/300/200",
    day: "4d",
    text: "We travel to seek other states, other lives, other souls. » - Quote from Anais Nin.",
  },
  {
    id: 4,
    photoProfile: "./images/profil10-min.jpg",
    userName: "Joel makambi",
    job: "Oil tanker",
    img: "https://picsum.photos/id/117/300/200",
    day: "2 week",
    text: " The happiest moment in a human life is the departure for an unknown land. » - Quote from Richard Burton.",
  },
  {
    id: 5,
    photoProfile: "./images/profil15.jpg",
    userName: "Luccin Idrisse",
    job: " PHP Developer",
    img: "https://picsum.photos/id/40/300/200",
    day: "1 week",
    text: "The happiest moment in a human life is the departure for an unknown land. » - Quote from Richard Burton.",
  },
  {
    id: 6,
    userName: "Hortone Paul",
    photoProfile: "./images/profil11.jpg",
    job: " Frontend Engineer",
    img: "https://picsum.photos/id/137/300/200",
    day: "5d",
    text: " When it comes to work, quality is everything and going back to basics is a quality.",
  },
  {
    id: 7,
    photoProfile: "./images/profil16.jpg",
    userName: "Kevin Person",
    job: "Backend Developer",
    img: "https://picsum.photos/id/227/300/200",
    day: "3 week",
    text: " Success is the place you occupy in the newspapers. Success is one day's insolence.",
  },
  {
    id: 8,
    photoProfile: "./images/profil3-min.jpeg",
    userName: "Daniel Miakel",
    job: "Electrical Engineer ",
    img: "https://picsum.photos/id/299/300/200",
    day: "3d",
    text: " All success is relative. You can improve your relative success by denigrating the skills and achievements of those around you",
  },
  {
    id: 9,
    photoProfile: "./images/profil9-min.jpg",
    userName: "Jefthe Dupond",
    job: "Bio tech engineer",
    img: "https://picsum.photos/id/217/300/200",
    day: "6d",
    text: "There are two kinds of passions: the passions that we have and the passions that have us. We sometimes triumph over the first.",
  },
  {
    id: 10,
    photoProfile: "./images/profil4-3-min.jpg",
    userName: "Matias Mervil",
    job: "International trade",
    img: "https://picsum.photos/id/87/300/200",
    day: "1d",
    text: " Every engorged passion produces its counter-passion which is as harmful as natural passion would have been beneficial.",
  },
  {
    id: 11,
    photoProfile: "./images/profil6-min.png",
    userName: "Syntyche Abbis ",
    job: "React Developer",
    img: "https://picsum.photos/id/4/300/200",
    day: "2 week",
    text: "Men are much more sensitive to religious dissidence than to any other; there is no subject which excites so many passions.",
  },
  {
    id: 12,
    photoProfile: "./images/profil5-min.jpg",
    userName: "Eunice Assim",
    job: "HR on Google",
    img: "https://picsum.photos/id/2/300/200",
    day: "2 week",
    text: "As the Third Sorcerer's Lesson says: passion dominates reason.",
  },
];

try {
  seeMoreBtn.addEventListener("click", () => {
    console.log("clicked");
    favoriteContainer.classList.toggle("shaw_favorite_container");
    seeMoreBtn.classList.toggle("shaw_favorite_container");
  });
} catch (error) {}

body.appendChild(blurEl);

searchBar.addEventListener("focus", () => {
  blurEl.classList.add("blur_element");
  searchBar.classList.add("input_on_focus");
});
searchBar.addEventListener("blur", () => {
  blurEl.classList.remove("blur_element");
  searchBar.classList.remove("input_on_focus");
});

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollHeight - (scrollTop + clientHeight) <= 20) {
    addProfiles(2);
  }
  try {
    if (scrollTop > 400) {
      headerBar.classList.add("toggle_menu_come");
    } else {
      headerBar.classList.remove("toggle_menu_come");
    }
  } catch (error) {}
});

const addProfiles = (idx) => {
  for (let i = 0; i < idx; i++) {
    displayProfiles();
  }
};

function displayProfiles() {
  let profiles = profilesArray.map((items) => {
    return `<div class="post third_post">
        <div class="profil_name_job">
            <img class="post_photo_profil" src="${
              profilesArray[getRandomNumber()].photoProfile
            }" alt="#">
            <div class="name_and_job"> 
                <h5>${profilesArray[getRandomNumber()].userName}</h4>
                <p>${profilesArray[getRandomNumber()].job}</p>
                <span>${
                  profilesArray[getRandomNumber()].day
                } &nbsp;. <i class="fa-solid fa-earth-americas"></i></span>
            </div>
        </div>
        <p class="post_text"> ${profilesArray[getRandomNumber()].text}</p>
        <div class="publication">
            <img src="${profilesArray[getRandomNumber()].img}" alt="">
        </div>
        </div>
        <div class="like_share">
              <p><div>
              <button id="heart">❤️ LIKE</button>
            </div></p>
              <p><i class="fa-solid fa-comment"></i><span>Comment</span></p>
              <p><i class="fa-solid fa-share"></i><span>Share</span></p>
              <p><i class="fa-solid fa-paper-plane"></i><span>Send</span></p>
        </div>`;
  });
  profiles = profiles.join("");
  homeContainer.innerHTML = profiles;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 12);
}

const dynamicSearch = () => {
  const valueSearch = document
    .getElementById("search_message")
    .value.toUpperCase();
  const boxItems = document.querySelectorAll(".message_profil_item");

  const title = document.getElementsByClassName("name_pro");

  for (let i = 0; i < title.length; i++) {
    let match = boxItems[i].getElementsByClassName("name_pro")[0];

    if (match) {
      let textValue = match.textContent;
      if (textValue.toUpperCase().indexOf(valueSearch) > -1) {
        boxItems[i].style.display = "";
      } else {
        boxItems[i].style.display = "none";
      }
    }
  }
};
shawProfileBtn.addEventListener("click", () => {
  shawProfileBtn.classList.toggle("shaw_profile");
});
btnMessageArea.addEventListener("click", () => {
  console.log("clicked");
  btnMessageArea.classList.toggle("switch_btn_icon");
  messageArea.classList.toggle("shaw_message_container");
});

// message
document.getElementById("sendButton").addEventListener("click", function () {
  var message = document.getElementById("message").value;

  fetch("https://6586ded1468ef171392ee5a7.mockapi.io/eat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});






// API'den verileri çekmek için fetch
fetch("https://65af6e2b2f26c3f2139abe9c.mockapi.io/foods/foods")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((food) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post", "second_post");

      const profilNameJobDiv = document.createElement("div");
      profilNameJobDiv.classList.add("profil_name_job");

      const profilImg = document.createElement("img");
      profilImg.classList.add("post_photo_profil");
      profilImg.src = food.image;
      profilImg.alt = food.name;

      const nameAndJobDiv = document.createElement("div");
      const nameHeading = document.createElement("h5");
      nameHeading.textContent = food.name;
      const jobParagraph = document.createElement("p");
      jobParagraph.textContent = food.job;

      nameAndJobDiv.appendChild(nameHeading);
      nameAndJobDiv.appendChild(jobParagraph);

      profilNameJobDiv.appendChild(profilImg);
      profilNameJobDiv.appendChild(nameAndJobDiv);

      const publicationDiv = document.createElement("div");
      publicationDiv.classList.add("publication");
      const postImg = document.createElement("img");
      postImg.src = food.postImage;
      postImg.alt = food.name;

      publicationDiv.appendChild(postImg);

      const likeShareDiv = document.createElement("div");
      likeShareDiv.classList.add("like_share");
      likeShareDiv.innerHTML = `
        <p><i class="fa-solid fa-thumbs-up"></i><span>Likes</span></p>
        <p><i class="fa-solid fa-comment"></i><span>Comment</span></p>
        <p><i class="fa-solid fa-share"></i><span>Share</span></p>
        <p><i class="fa-solid fa-paper-plane"></i><span>Send</span></p>
      `;

      postDiv.appendChild(profilNameJobDiv);
      postDiv.appendChild(publicationDiv);
      postDiv.appendChild(likeShareDiv);

      document.getElementById("posts_container").appendChild(postDiv);
    });
  })
  .catch((error) => {
    console.error("API'den veri alınamadı: ", error);
  });
