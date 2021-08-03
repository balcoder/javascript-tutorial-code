// JQuery ajsx method
$("#testJquery").click(function () {
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: "json",
  })
    .done(getMeat)
    .fail(function () {
      console.log("Oh crap failure");
    });
});

function getMeat(data) {
  $("#meat").text(data[0]);
}

// JQuery GET() menthod
$("#getBtn").click(function () {
  $.get("https://api.github.com/users/balcoder")
    .done(function (data) {
      console.log(data);
    })
    .fail(function () {
      console.log("Error");
    });
});

// JQurey POST() method
$("#postBtn").click(function () {});
$.post("https://api.github.com/users/balcoder", { name: "John", time: "2pm" })
  .done(function (data) {
    console.log(data);
  })
  .fail(() => console.log("There was an error" + $.error()));
// JQuery GETJSON() method
$("#getJsonBtn").click(function () {
  $.getJSON("https://api.github.com/users/balcoder")
    .done(function (data) {
      console.log(data);
    })
    .fail(function (error) {
      console.log($.error());
    });
});

// Get Cork Pic using getJSON()
$("#getCorkImg").click(function () {
  let flickerApi =
    "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON(flickerApi, {
    tags: "clonakilty",
    tagmode: "any",
    format: "json",
  }).done(function (data) {
    console.log(data.items);
    $.each(data.items, function (i, item) {
      $("<img>").attr("src", item.media.m).appendTo("#corkImg");
      if (i === 11) {
        return false;
      }
    });
  });
});
