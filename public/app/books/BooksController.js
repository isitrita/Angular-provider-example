(function() {

    angular.module('app')
        .controller('BooksController', BooksController) ;


    function BooksController(books, dataFactory) {

        var vm = this;

        vm.appName = books.appName;

        vm.allBooks = dataFactory.getAllBooks();
        vm.allReaders = dataFactory.getAllReaders();
        //
        // vm.getBadge = badgeService.retrieveBadge;
        //
        // logger.output('BooksController has been created.');

    }

}());