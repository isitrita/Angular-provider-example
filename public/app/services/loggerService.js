(function() {
  angular.module("app")
      .service('logger',BookAppLogger);
    //это конструктор, вызывает с оператором new
      function LoggerBase() { //база
      }
      //это может быть нужно, если вы делаете наследование
      LoggerBase.prototype.output = function (message) {
        console.log('LoggerBase: '+ message);
      };

      //наследует LoggerBase и добавляет свое
      function BookAppLogger() {
          LoggerBase.call(this);
          this.logBook = function (book) {
            console.log('Book'+ book.title);
          }
      }
      //наследование
      BookAppLogger.prototype = Object.create(LoggerBase.prototype);

}());