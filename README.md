### 5 способов создать сервисы:

- `$provider()`
- `factory()`
- `service()`
- `value()`
-  `constant()`

1.  Сервисы сделаны так, чтобы легко подключать их к другим компонентам.

2. Прежде чем создать сервис, должен быть провайдер, который знает, как создать этот сервис


### Использование $provide.provider()
```javascript
$provide.provider('books', function(){
	this.$get = function () {
		var appName = 'Book Logger';
		return {
			appName: appName
		};
	}
});
```

### Правила такие:

 - Нужно вызвать `$provider` на `$provide`
 -   **Rule №1**: В провайдере должна определяться функция `$get` , поскольку
 - То, что возвращает `$get` и будет нашим сервисом.
 -  Создание сервиса через  provider немного более замороченная вещь, чем использование других методов.  Плюс использования такого provider-а в том, что он конфигурируем

Далее мы передаем сервис как параметр в контроллер
И выводим appName во view.

Но все это мы могли сделать и при помощи factory.
необязательно инджектить provide сервис в функцию config


### Использование $provide.factory()

 - Используется, когда дополнительная конфигурация не нужна, а значит, намного чаще.
 - Это более простая версия провайдера.
 - Регистрирует factory функцию, которая возвращает сервис
 - Скорее всего, вы будете использовать эту функцию чаще всего

### Использование $provide.service()

 - Вызывает функцию factory, которая вызывает функцию provider
 - $injector.instantiate метод вызывает функцию new
 - вызывает функцию конструктора с javascript `new` operator
 - Такое может понадобиться, если ваш инстациированный объект правильно инициализирован

### Value и Constant cервисы
 **1.**
**Value Services:**
 - Factory без параметров
**Constant Services:**
	 - Простая регистрация сервиса без вызова `factory\provider`

 **2.**
**Value Services:**
 - Может быть включен в модуль конфигурации
**Constant Services:**
	 - Не может быть включен в модуль конфигурации

 **3.**
**Value Services:**
 - Может быть переопределен в декораторе
**Constant Services:**
 - Не может быть переопределен в декораторе

### Dependencies Annotation

 - информируют инжектор, какие сервисы добавить в компонент
 -  Поддержка минимизации
	 - Можно передать в функцию параметром
	 - аннотация $inject
	 - inline  аннотация. Последний параметр в массива - функия, репрезентующая сервис

## Useful stuff
 - ***AngularJS team*  give an explanation :**
http://docs.angularjs.org/guide/providers
And from this page :
> Factory and Service are the most commonly used recipes. The only
> difference between them is that Service recipe works better for
> objects of custom type, while Factory can produce JavaScript
> primitives and functions.

 - **Еще раз раскидывает все по полочкам**
[Когда использовать factory, а когда service](http://iffycan.blogspot.com.ar/2013/05/angular-service-or-factory.html)

 - **Вкусняшка хорошего тона**
[Почему использовать IIFE  - хорошо](http://iffycan.blogspot.com.ar/2013/05/angular-service-or-factory.html)
*Если подключить правильные плагины, то в Atom, TextMate, Sublime можно использовать конструкцию `iife`*

- Code Style on
