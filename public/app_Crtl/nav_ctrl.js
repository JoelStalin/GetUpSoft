angular.module('allCrtl',[])
    .controller("myControl", ['$scope', '$http',  'homePageData', function ($scope, $http, homePageData) {
    var vm=this;
    var products = "Products";
    var services = "Services";
    var all = "All";
    var brandinfo = { "brand": "GetUpSoft", "slogan": "Levantate Con Tu Software a La Mano", "icon": "null", "detail": "Empresa Dedicada a la Elavoracion de Software de Calidad IO Distribucion de Software Subjestos a Nuestros Estandares de calidad.", "email": "jmartinez@getupsoft.com", "tel": "829 - 904 - 5163", "id": 1 };
      
    vm.homeload = true;
      
    vm.brandinf = [];

    vm.lis_srv = homePageData.getProductsAndServices();
    
    vm.nav_srv =homePageData.getNavbtn();
         homePageData.getBrandinfo().then(function (res) {
             vm.brandinf = res.data;

        });

       // homePageData.createbrand(brandinfo);

            
    
 
    
}]);