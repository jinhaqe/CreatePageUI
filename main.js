window.onscroll = function () {
  var menuGnb = document.getElementById("menu_gnb");
  if (window.scrollY > 0) {
    menuGnb.style.backgroundColor = "rgba(87, 62, 51, 1)";
  } else {
    menuGnb.style.backgroundColor = "rgba(87, 62, 51, 0.2)";
  }
};

document.querySelectorAll("article").forEach(function (article) {
  article.addEventListener("click", function () {
    var characterName = article.getAttribute("data-name");
    document.getElementById("name").textContent = characterName;

    // 여기에 각 캐릭터에 맞는 정보를 설정
    var info = {
      캣삐: {
        "담당 멤버": "성호",
        취미: "미식, 슈퍼스타",
        MBTI: "STAR",
        성격: "예민해 보여도 스윗함, 츤데레",
        "애착 아이템": "마이크, 나를 비추는 조명",
      },

      달링: {
        "담당 멤버": "리우",
        취미: "조개 수집, 춤추기",
        MBTI: "ISFP",
        성격: "말이 없고 소심하지만 귀여워서 시선이 감",
        "애착 아이템": "콜라, 모자",
      },

      명명: {
        "담당 멤버": "명재현",
        취미: "엉덩이 흔들기",
        MBTI: "INFP",
        성격: "부끄러움이 많고 애교 없어도 귀여움을 받음",
        "애착 아이템": "헤드폰",
      },

      한탯풍: {
        "담당 멤버": "태산",
        취미: "온라인 쇼핑",
        MBTI: "COOL",
        성격: "시크 & 새침",
        "애착 아이템": "선글라스, 스카프",
      },

      312: {
        "담당 멤버": "이한",
        취미: "물고기 밥주기",
        MBTI: "LOVE",
        성격: "급해서 혼자 분주한 성격",
        "애착 아이템": "반짝이는 보석, 우주선, 보들보들한 강아지 친구",
      },

      운아기: {
        "담당 멤버": "운학",
        취미: "밥 먹기, 여름에 서핑하기, 불멍, 태닝",
        MBTI: "ENFP",
        성격: "얼굴처럼 둥글둥글한 성격",
        "애착 아이템": "선글라스, 힙합 장갑",
      },
    };

    var characterInfo = info[characterName];

    // 정보를 모달에 넣기
    var spans = document.querySelectorAll(".info span");
    var i = 0;
    for (var key in characterInfo) {
      spans[i].textContent = key;
      spans[i + 1].textContent = characterInfo[key];
      i += 2;
    }

    document.getElementById("modal").style.display = "flex";
  });
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target !== document.querySelector(".modal-content")) {
    document.getElementById("modal").style.display = "none";
  }
});
