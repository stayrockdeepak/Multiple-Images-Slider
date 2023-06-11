$(document).ready(function () {
  $("#expandDivBtn").click(function () {
    btn = $(this).text();
    if (btn == "Expand") {
      btn = $(this).text("Close");
      $(".smallDiv").addClass("d-none");
    } else {
      btn = $(this).text("Expand");
      $(".smallDiv").removeClass("d-none");
    }
  });
});
