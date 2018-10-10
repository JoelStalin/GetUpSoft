
angular.module('allService',[])
    .service('homePageData', ['$http', '$rootScope', function ($http,$rootScope) {
    this.listContacts = [];
    //SIEMPRE LA PRIMERA LETRA EN MINUSCULAAAAAAA
    // getProductsAndServices Begin
        this.getProductsAndServices = function (type) {
            var products = "Products";
            var services = "Services";
            var all = "All";
            
    
            var productsAndServices = [
                {
                    title: "cross_browser 1",
                    detail: "Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers; all browsers love MDB.",
                    icon: "fa-firefox",
                    type: products,
                    typeId: 1,
                    listImages: [],
                    listVideos: []
                },
                {
                    title: "cross_browser 2",
                    detail: "Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers; all browsers love MDB.",
                    icon: "fa-firefox",
                    type: products,
                    typeId: 1,
                    listImages: [],
                    listVideos: []
                },
                {
                    title: "cross_browser 3",
                    detail: "Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers; all browsers love MDB.",
                    icon: "fa-firefox",
                    type: products,
                    typeId: 1,
                    listImages: [],
                    listVideos: []
                },


                // Los Servicios

                {
                    title: "Services 1",
                    detail: "Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers; all browsers love MDB.",
                    icon: "fa-firefox",
                    type: services,
                    typeId: 2,
                    listImages: [],
                    listVideos: []
                },
                {
                    title: "Services 2",
                    detail: "Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers; all browsers love MDB.",
                    icon: "fa-firefox",
                    type: services,
                    typeId: 2,
                    listImages: [],
                    listVideos: []
                }
            ];
            if (type === products || type === services) {
                return productsAndServices.filter(function (x) {
                    return x.type === type;
                });
            } else {
                return productsAndServices;
            }
        };
    
    // getProductsAndServices End
    this.getNavbtn = function () {
        var botones = [
            {
                name: "Home",
                action: "#Home",
                isActive: true
            },
            {
                name: "Team",
                action: "#Team",
                isActive: false
            },
            {
                name: "About",
                action: "#About",
                isActive: false
            },
            {
                name: "Products",
                action: "#Products",
                isActive: false
            },
            {
                name: "Services",
                action: "#Services",
                isActive: false
            },
            {
                name: "Contact",
                action: "#Contact",
                isActive: false
            }

        ];



        return botones;
    };

        this.getBrandinfo = function () {
            // var dataio = [];
            return $http.get('api/brands');

                
         
        };



            this.createbrand = function (data) {

                $http.post('api/brands', data)

                    .then(function (data) {
                        return data.data;

                    });

        };
       
       /// Agregar otros
       this.createOrUpdateContact = function (contact) {
        this.listContacts.push(contact);
       };
    
    }]);