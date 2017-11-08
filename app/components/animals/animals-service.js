function AnimalsService() {
    
        // WHATS PRIVATE?
        // DUMMY DATA
        var animals = [{
            id: 'asdfkljkgkugh',
            name: 'Peanut',
            breed: 'Black Lab Mix',
            type: 'Dog',
            weight: '65 lb',
            color: 'Light Grey',
            price: 200,
            age: 2,
            description: 'Runs great with gas',
            location: 'Boise',
            contact: 'testcat@cats.anm',
            img: '//loremflickr.com/200/200/car',
            title: 'Your New Animal'
        }]
    
        var id = 0;
        function Animal(config) {
            this.name = config.name.value
            this.breed = config.breed.value
            this.type = config.type.value
            this.weight = config.weight.value
            this.color = config.color.value
            this.price = config.price.value
            this.age = config.age.value
            this.contact = config.contact.value
            this.location = config.location.value
            this.description = config.description.value
            this.img = config.img.value
            this.id = id++
        }
    
        // PUBLIC?
    
        this.getAnimals = function getAnimals() {
            return animals
        }
    

        this.getAnimal = function getAnimal(id) {
            for (var i = 0; i < animals.length; i++) {
                var animal = animals[i];
                if (id == animal.id) {
                    return animal
                }
            }
        }
    
        this.addAnimals= function addAnimals(form) {
            var newAnimal = new Animal(form)
            animals.unshift(newAnimal)
        }
    
    }