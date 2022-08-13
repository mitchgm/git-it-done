var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

    var getUserRepos = function(user) {
        // format the github api url
        var apiUrl = "https://api.github.com/users/" + user + "/repos";
      
        // make a request to the url
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data) {
                displayRepos(data, user);
              });
        });
      };

      var formSubmitHandler = function(event) {
        event.preventDefault();
        // get value from input element
        var username = nameInputEl.value.trim();

        if (username) {
        getUserRepos(username); // this matches the username to the github account and passes the data
        nameInputEl.value = "";
        } else {
        alert("Please enter a GitHub username");
        }
      };

      var displayRepos = function(repos, searchTerm) {
        // tapping into the html right column 
        repoContainerEl.textContent = "";
        repoSearchTerm.textContent = searchTerm;

        // looping over the repos
        for (var i = 0; i < repos.length; i++) {
            // format the repo name
            var repoName = repos[i].owner.login + "/" + repos[i].name;

            // create a container for each repo dynamically 
            var repoEl = document.createElement("div");
            repoEl.classList = "list-item "
        }
      }

      userFormEl.addEventListener("submit", formSubmitHandler);














