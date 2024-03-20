let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {
  BookInstance.find({'status': {$eq: 'Available'}})
  .populate('book')
  .exec()
  .then(list_bookinstances => {
    res.send(list_bookinstances.map(function(bookinstance) {
      return bookinstance.book.title + " : " + bookinstance.status;
    }));
  })
  .catch(err => res.send('Status not found'));
  //return res.send([]);
};