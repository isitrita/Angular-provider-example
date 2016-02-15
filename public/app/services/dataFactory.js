(function() {
  angular.module('app')
           .factory('dataFactory', dataFactory);//имя нашего сервиса, функция, которая будет заассайнена на $get свойство, когда внутри будет вызываться provider. Использовать именованную функцию лучше, а не анонимную проще, потому что это проще мейнтейнить.
  function dataFactory(logger){
    return {
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders
    };

    function getAllBooks() {
      return [
        {
            book_id: 2,
            title: "The Things They Carried",
            author: "Tim O'Brien",
            year_published: "1990"
        },
        {
            book_id: 3,
            title: "Invisible Man",
            author: "Ralph Ellison",
            year_published: "1952"
        },
        {
            book_id: 57,
            title: "Advanced OS X Programming",
            author: "Mark Dalrymple",
            year_published: "2010"
        }
      ];
    }

    function getAllReaders() {
      logger.output('getting all readers ');
      return [
        {
          reader_id: 1,
          name: 'Lady in Red',
          weeklyReadingGoal: 315,
          totalMinutesRead: 5600
        },
        {
          reader_id: 2,
          name: 'Lady in Blue',
          weeklyReadingGoal: 240,
          totalMinutesRead: 3002
        },
        {
          reader_id: 4,
          name: 'Man in Black',
          weeklyReadingGoal: 130,
          totalMinutesRead: 630
        }
      ];
    }

    dataFactory.$inject = ['logger']
  }
}());