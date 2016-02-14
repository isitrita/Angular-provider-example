(function() {

    angular.module('app')
        .controller('BooksController', BooksController) ;


    function BooksController(books, dataFactory, logger) {

        var vm = this;

        vm.appName = books.appName;

        vm.allBooks = dataFactory.getAllBooks();
        vm.allReaders = dataFactory.getAllReaders();

        logger.output('BooksController has been created');

    }

}());