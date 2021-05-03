$("#add_user").submit(function (event) {
  alert('Data inserted successfully')
})

$("#update_user").submit(function (event) {
  event.preventDefault();
  var data = {}
  var unindexed_array = $(this).serializeArray();
  $.map(unindexed_array.function(n, i) {
    data,
    [
      ['name']
    ]: n['value']
  })
})