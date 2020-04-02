
//hide reset button on pageload

$(".start-button").hide();

//let computer choose value

let options = ["rock", "paper", "scissors"];

let computerChoice = options[Math.floor(Math.random() * 3)];


//user clicks choice

$(".pl-select-img").on("click", function () {

  let userChoice = this.id;

  $(".winner-display").fadeOut();

  $(".pl-select-img").addClass("unclickable");

  displayUserSelect(userChoice);

  setTimeout(() => {

    displayComputerSelect(computerChoice);

    // show winner

    if (userChoice === "rock" && computerChoice === options[1]) {
      $(".winner-display").addClass("loser");
      $(".winner-display").text("You Lost!");
    } 
    else if (userChoice === "rock" && computerChoice === options[2]) {
      $(".winner-display").addClass("winner");
      $(".winner-display").text("You Won!");
    }
    else if (userChoice === "paper" && computerChoice === options[0]) {
      $(".winner-display").addClass("winner");
      $(".winner-display").text("You Won!");
    }
    else if (userChoice === "paper" && computerChoice === options[2]) {
      $(".winner-display").addClass("loser");
      $(".winner-display").text("You Lost!");
    }
    else if (userChoice === "scissors" && computerChoice === options[0]) {
      $(".winner-display").addClass("loser");
      $(".winner-display").text("You Lost!");
    }
    else if (userChoice === "scissors" && computerChoice === options[1]) {
      $(".winner-display").addClass("winner");
      $(".winner-display").text("You Won!");
    }
    else {
      $(".winner-display").text("Draw!");
    };

    // show winner end
    
    $(".start-button").show(1500);

    $(".winner-display").fadeIn(2500);

  }, 1500);

});

//highlight user selected value

function displayUserSelect(selected) {
  switch (selected) {
    case "rock":
      $("#paper").addClass("not-picked");
      $("#scissors").addClass("not-picked");
      $("#rock").after("<p class='user-choice-text'>You picked Rock</p>")
      break;

    case "paper":
      $("#rock").addClass("not-picked");
      $("#scissors").addClass("not-picked");
      $("#paper").after("<p class='user-choice-text'>You picked paper</p>")
      break;

    case "scissors":
      $("#paper").addClass("not-picked");
      $("#rock").addClass("not-picked");
      $("#scissors").after("<p class='user-choice-text'>You picked Scissors</p>")
      break;
  
    default:
      break;
  };

};

//highlight computer selected value

function displayComputerSelect(key) {

  $(".comp-select-img").fadeOut();
  
  switch (key) {
    case options[0]:
      $(".comp-select-img").attr("src", "images/rock.png")
      break;
    
    case options[1]:
      $(".comp-select-img").attr("src", "images/paper.png")
      break;
    case options[2]:
      $(".comp-select-img").attr("src", "images/scissors.png")
      break;

    default:
      break;
  };

  $(".comp-select-img").fadeIn()

  $(".comp-select-img").after("<p class='computer-choice-text'>Computer Picked " + computerChoice + "</p>")

};


//reset game on start button click

$(".start-button").on("click", function () {
  computerChoice = options[Math.floor(Math.random() * 3)];

  if ($(".pl-select-img").hasClass("not-picked")) {
    $(".pl-select-img").removeClass("not-picked")
  };

  $(".pl-select-img").removeClass("unclickable");
  $(".computer-choice-text").remove();
  $(".user-choice-text").remove();
  $(".winner-display").removeClass("winner loser");
  $(".comp-select-img").attr("src", "images/giphy.gif");
  $(".winner-display").text("Pick an option");
  $(".start-button").hide();
});