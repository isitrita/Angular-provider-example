(function() {

    angular.module('app')
        .controller('BooksController',['books', 'dataFactory', 'logger', 'badgeService', BooksController]);


    function BooksController(books, dataFactory, logger, badgeService) {

        var vm = this;

        vm.appName = books.appName;

        vm.allBooks = dataFactory.getAllBooks();
        vm.allReaders = dataFactory.getAllReaders();

        vm.getBadge = badgeService.retrieveBadge;
        logger.output('BooksController has been created');

    }

}());