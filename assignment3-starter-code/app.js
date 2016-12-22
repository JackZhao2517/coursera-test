(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant("ApiBasePath", "https://davids-restaurant.herokuapp.com/menu_items.json")
//.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'loader/template.html',
    scope: {
      items: '<',
			onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchTerm = "";
  menu.foundItems = [];

  menu.getMatchedMenuItems = function () {
  var promise = MenuSearchService.getMenuItems(menu.searchTerm);
  promise.then(function (response) {
      menu.foundItems = response;
    //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  };
  menu.removeItem = function(index) {
        menu.foundItems.splice(index, 1);
        console.log("Deleted ", index, "array: ", menu.foundItems);
  };
  menu.errorHandler = function () {
    return ( menu.items.length == 0)
  };


  // menu.logMenuItems = function (shortName) {
  //   var promise = MenuCategoriesService.getMenuForCategory(shortName);
  //
  //   promise.then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // };
};


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  // service.getMenuItems = function (shortName) {
  //   console.log(shortName);
  //   var response = $http({
  //     method: "GET",
  //     url: (ApiBasePath + "/menu_items.json"),
  //   });
  //   // var foundItems = response.data.menu_items.filter(
  //   //   function(item){
  //   //     return item.description.search(shortName) != -1;
  //   //   }
  //   // );
  //   var foundItems = [];
  //   for(var i=0; i < response.data.menu_items.length; i++){
  //   if (response.data.menu_items[i].description.search(searchTerm) != -1){
  //       console.log(response.data.menu_items[i]);
  //       foundItems.push(response.data.menu_items[i]);
  //     }
  //   else{
  //       response.data.menu_items.splice(i,1);
  //     }
  //   }
  //   console.log("found items: ", foundItems);
  //   return foundItems;
  // };


  service.getMenuItems = function (searchTerm) {
    console.log(searchTerm);
    return $http({
        method: "GET",
        url: (ApiBasePath),
      }
    ).then(function (result) {
        var foundItems = [];
        for(var i=0; i < result.data.menu_items.length; i++){
            if (result.data.menu_items[i].description.search(searchTerm) != -1){
                        console.log(result.data.menu_items[i]);
                        foundItems.push(result.data.menu_items[i]);
              }
            else{
                  result.data.menu_items.splice(i,1);
                }
            }
            console.log("found items: ", foundItems);
            return foundItems;
            });

  };

}

})();
