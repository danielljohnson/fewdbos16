// create category
$('.category-form').on('submit', function(e) {
    e.preventDefault();

    // get data
    var category = $('.category-form input[name="category"]').val();

    var lastCategoryId = $('select[name="category"] option:last').attr('value');

    var nextCategoryId = parseInt(lastCategoryId) + 1;

    $('ul.task-list').append('<li>' + category + '<ul data-categoryId="'+nextCategoryId+'"></ul></li>');

    $('select[name="category"]').append('<option value="' +nextCategoryId + '">' + category + '</option>');

    // clear form field
    $('.category-form input[name="category"]').val('');
});

// create task
$('.task-form').on('submit', function(e) {
    e.preventDefault();

    // get data
    var task = $('.task-form input[name="task"]').val();
    var categoryId = $('.task-form select[name="category"]').val();

    $('ul.task-list ul[data-categoryId="'+categoryId+'"]').append('<li>' + task + '</li>');

    // clear form field
    $('.task-form input[name="task"]').val('');
});

// updating status
$('.task-list').on('click', '> li', function(e) {
    e.preventDefault();

    var status = $(e.target).attr('data-status');

    if (parseInt(status) === 0) {
        $(e.target).attr('data-status', 2);
    } else {
        $(e.target).attr('data-status', 0);
    }
});

// remove completed
$('.remove-completed').on('click', function(e) {
    e.preventDefault();

    $('.task-list li[data-status="2"]').remove();
});