"use strict";

(() => {
    // This Will Load An Image Before Displaying Data//
    $(document).ready(function () {
        $("#loading").hide().fadeIn(1000);
        $(".close").on("click", function(){
            $("#loading").fadeOut();
        })
    });
    // This Is Pulling The Data And Then Displaying On Page In A Table//
    let movieArr = [];
    $(".close").on("click",function (){
        $(".close").off("click")
        fetch( "https://obvious-twisty-mandrill.glitch.me/movies").then(resp => resp.json())
            .then(data => {
                console.log(data);
                movieArr = data;
                let html = "";
                for (let movie of data) {
                    html += `<option value="${movie.id}">${movie.title}</option>`;
                    $(".movie-info").append
                    (`<thead class="thead">
						<tr>
							<th id="title-header">Title</th>//added id 
							<th id="rating-header">Rating</th>//added id
							<th id="genre-header">Genre</th>// added id
						</tr>
					</thead>
					<tbody class="tbody">
						<td id="${movie.id}">${movie.title}</td>
						<td>${movie.rating}</td>
						<td>${movie.genre}</td>
					 </tbody>`
                    );
                }
                $("#selectMenu").html("<option>Select a Movie</option>" + html);
                $("#selectMenu2").html("<option>Select a Movie</option>" + html);
            })
    })
// This Will Show Or Hide The Edit Menu Drop Down//
    $("#showEdit").click(function(){
        $("#editMovie").toggleClass("hidden1");
        $("#selectMenu").toggleClass("hidden1")
    });
    //Function For Editing Movie//
    $("#selectMenu").change(function() {
        let movieSelect = $(this).val();
        console.log(movieSelect);
        $("#changeMovie").click(function(){
            let updateMovie= {
                title: $("#newTitle").val(),
                genre: $("#newGenre").val(),
                rating: $("#newRating").val(),
                director: $("#newDirector").val(),
                plot: $("#newPlot").val(),
            };
            console.log(updateMovie);
            fetch(`https://obvious-twisty-mandrill.glitch.me/movies/${movieSelect}`,{
                method:"PATCH",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(updateMovie)
            }).then(() => fetch("https://obvious-twisty-mandrill.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies));
        })
    });
// This Will Show Or Hide Delete Movie Menu Drop Down//
    $(".remove-hidden").click(function(){
        $("#selectMenu2").toggleClass("hidden1")
        $("#delete-movie").toggleClass("hidden1")
    });
// This Will Delete The Movie You Picked//
    $("#selectMenu2").change(function() {
        let valInput = $(this).val();
        console.log("Movie picked: " + valInput);
        $("#delete-movie").click(function(){
            fetch(`https://obvious-twisty-mandrill.glitch.me/movies/${valInput}`,{
                method:"DELETE"
            }).then(() => fetch("https://obvious-twisty-mandrill.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies));
        })
    })
// This Will Show Or Hide Drop Down Menu For Post//
    $("#post-id").click(function(){
        $("#postMovie").toggleClass("hidden1")
    });
    //This Allows Users To Post A New Movie//
    let postMovies = [];
    $("#newMovie").click(function () {
        let newMovie = {
            title: $("#title").val(),
            genre: $("#genre").val(),
            rating: $("#rating").val(),
            director: $("#director").val(),
            plot: $("#plot").val(),
        };
        fetch("https://obvious-twisty-mandrill.glitch.me/movies",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newMovie),
        }).then(()=> fetch("https://obvious-twisty-mandrill.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies))
        postMovies = movieArr;
        for(let movie of postMovies){
            if (newMovie === ""){
                return movieArr
            }else{
                return movieArr + newMovie;
            }
        }
    });

    //
    // let image = document.getElementById("movieImages");
    // let images = ['pizza.png', 'tree.jpeg', 'weight-lifting.jpeg']
    // setInterval(function(){
    //     let random = Math.floor(Math.random() * 3);
    //     image.src = images[random];
    // }, 800);



})();