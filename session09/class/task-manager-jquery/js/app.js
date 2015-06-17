// create category
$('.category-form').on('submit', function(e) {
    e.preventDefault();

    // get data
    console.log('category name: ' + $('.category-form input[name="category"]').val());

    // clear form field
    $('.category-form input[name="category"]').val('');
});

// create task
$('.task-form').on('submit', function(e) {
    e.preventDefault();

    // get data
    console.log('task name: ' + $('.task-form input[name="task"]').val());
    console.log('category id: ' + $('.task-form select[name="category"]').val());

    // clear form field
    $('.task-form input[name="task"]').val('');
});