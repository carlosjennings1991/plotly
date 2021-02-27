d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;
  // this works, but only selects the first one
  //var selectedText = d3.selectAll('option').text();
  //var selectedText = this('option').text();
  var selectedText = dropdownMenu.options[dropdownMenu.selectedIndex].text;

  console.log(dropdownMenuID);
  console.log(selectedOption);
  console.log(selectedText);
};

