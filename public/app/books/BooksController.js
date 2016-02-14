(function() {

    angular.module('app')
        .controller('BooksController', BooksController) ;


    function BooksController(books, dataService) {

        var vm = this;

        vm.appName = books.appName;

        vm.allBooks = dataService.getAllBooks();
        vm.allReaders = dataService.getAllReaders();
        //
        // vm.getBadge = badgeService.retrieveBadge;
        //
        // logger.output('BooksController has been created.');

    }

}());