"use strict";

(() => {
    // this will load an image before displaying data/
    $(document).ready(function () {
        $("#loading").hide().fadeIn(1000);
        $(".close").on("click", function(){
            $("#loading").fadeOut();
        })
    });
    let movieArr = [];
    // this is pulling the data and then displaying on page in a table
    $(".close").on("click",function (){
        $(".close").off("click")
        // let movieArr = [];
        fetch( "https://enchanted-able-margin.glitch.me/movies").then(resp => resp.json())
            .then(data => {
                console.log(data);
                movieArr = data;
                let html = ""
                for (let movie of data) {

                    html += `<option value="${movie.id}">${movie.title}</option>`;

                    $(".movie-info").append
                    (`<thead>
						<tr>
							<th id="title-header">Title</th>//added id 
							<th id="rating-header">Rating</th>//added id
							<th id="genre-header">Genre</th>// added id
						</tr>
					</thead>
					<tbody>
						<td id="${movie.id}">${movie.title}</td>
						<td>${movie.rating}</td>
						<td>${movie.genre}</td>
					 </tbody>`
                    );
                }
                $("#selectMenu").html("<option value='-1' selected>Select a Movie</option>" + html);
                $("#selectMenu2").html("<option value='-1' selected>Select a Movie</option>" + html);
            })
    });


// this will show or hide the edit menu drop down
    $("#showEdit").click(function(){
        $("#editMovie").toggleClass("hidden1");
        $("#selectMenu").toggleClass("hidden1")
    });
// this will show or hide delete movie menu drop down
    $(".remove-hidden").click(function(){
        $("#selectMenu2").toggleClass("hidden1")
        $("#delete-movie").toggleClass("hidden1")
    });

// this will delete your movie you
    $("#selectMenu2").change(function() {
        let valInput = $(this).val();
        console.log("Movie picked: " + valInput);
        $("#delete-movie").click(function(){
            fetch(`https://enchanted-able-margin.glitch.me/movies/${valInput}`,{
                method:"DELETE"
            }).then(() => fetch("https://enchanted-able-margin.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies));
        })
})




    // let deleteMovies = [];
    // $("#delete-movie").click(function(){
    //     let newList= {
    //         // id:"",
    //         title: $("#title").val(),
    //         genre: $("#genre").val(),
    //         rating: $("#rating").val(),
    //         director: $("#director").val(),
    //         plot: $("#plot").val(),
    //     };
    //     fetch("https://enchanted-able-margin.glitch.me/movies",{
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",//updated a typo from - to /
    //         },
    //         body:JSON.stringify(newList),
    //
    //     }).then(()=> fetch("https://enchanted-able-margin.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies))//added the third then
    //     postMovies = movieArr;// created a new variable of an empty array and tied it to previous declared variable
    //     for(let movie of deleteMovies){
    //         if (newList === movieArr){
    //             return movieArr
    //         }else{
    //             return movieArr + newList;
    //         }
    //     }
    //
    // });

// this will show or hide drop down menu for post//
    $("#post-id").click(function(){
        $("#postMovie").toggleClass("hidden1")
    });

    //this allows users to post a new movie
    let postMovies = [];
    $("#newMovie").click(function(){
        let newMovie= {
            // id:"",
            title: $("#title").val(),
            genre: $("#genre").val(),
            rating: $("#rating").val(),
            director: $("#director").val(),
            plot: $("#plot").val(),
        };
        fetch("https://enchanted-able-margin.glitch.me/movies",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",//updated a typo from - to /
            },
            body:JSON.stringify(newMovie),

        }).then(()=> fetch("https://enchanted-able-margin.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies))//added the third then
        postMovies = movieArr;// created a new variable of an empty array and tied it to previous declared variable
        for(let movie of postMovies){
            if (newMovie === movieArr){
                return movieArr
            }else{
                return movieArr + newMovie;
            }
        }

    });





})();