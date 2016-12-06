(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
// .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyShowList = this;
    toBuyShowList.items = ShoppingListCheckOffService.getItems();
    // console.log("asdfasf");
    toBuyShowList.removeItem = function (itemIndex) {
    try {
          ShoppingListCheckOffService.removeItem(itemIndex);
        } catch (error) {
        toBuyShowList.errorMessage = error.message;
      }

    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtShowList = this;

      boughtShowList.items = ShoppingListCheckOffService.getBoughtItems();
      if (boughtShowList.items.length == 0) {
        boughtShowList.errorMessage = "Nothing bought yet!";
      } else {
        boughtShowList.errorMessage = null;
      }
      console.log(boughtShowList.items.length);

  }

  function ShoppingListCheckOffService() {

      var service = this;
      // List of shopping items
      var items = [
        {
          name: "Milk",
          quantity: "2"
        },
        {
          name: "Donuts",
          quantity: "200"
        },
        {
          name: "Cookies",
          quantity: "300"
        },
        {
          name: "Cake",
          quantity: "34"
        },
        {
          name: "Chocolate",
          quantity: "5"
        }];

      var boughtItems = [];

      service.addItem = function (itemName, quantity) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        items.push(item);
      };

      service.removeItem = function (itemIdex) {
        boughtItems.push(items[itemIdex]);
        console.log(boughtItems.length);
        items.splice(itemIdex, 1);
        if (items.length == 0) {
            throw new Error("Everything is bought!");
        }
      };

      service.getItems = function () {
        return items;
      };
      service.getBoughtItems = function () {
        return boughtItems;
      };
  }

  function ShoppingListCheckOffServiceProvider() {
  var provider = this;
  provider.$get = function () {
    var shoppingList = new ShoppingListCheckOffService();
    return shoppingList;
  };
}

})();
