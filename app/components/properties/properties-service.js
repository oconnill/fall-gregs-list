function PropertiesService() {
    
        // WHATS PRIVATE?
        // DUMMY DATA
        var properties = [{
            id: 'asdfkljsdafdsaflkj239023u9402u',
            lotsize: 3409,
            housestyle: 'Colonial',
            bedrooms: '3 Bedrooms',
            bath: '2 Bath',
            price: 200000,
            color: 'grey',
            cooling: 'Central Air',
            heating: 'gas',
            description: 'Runs great with gas',
            location: 'Boise',
            contact: 'testcar@cars.auto',
            img: '//loremflickr.com/200/200/car',
            title: 'Your New House'
        }]
    
        var id = 0;
        function House(config) {
            this.title = config.title.value
            this.lotsize = config.lotsize.value
            this.housestyle = config.housestyle.value
            this.bedrooms = config.bedrooms.value
            this.bath = config.bath.value
            this.price = config.price.value
            this.color = config.color.value
            this.cooling = config.cooling.value
            this.contact = config.contact.value
            this.location = config.location.value
            this.heating = config.heating.value
            this.description = config.description.value
            this.img = config.img.value
            this.id = id++
        }
    
        // PUBLIC?
    
        this.getProperties = function getProperties() {
            return properties
        }
    
        this.getAuto = function getAuto(id) {
            for (var i = 0; i < autos.length; i++) {
                var auto = autos[i];
                if (id == auto.id) {
                    return auto
                }
            }
        }
    
        this.addProperties= function addProperties(form) {
            var newHouse = new House(form)
            properties.unshift(newHouse)
        }
    
    }