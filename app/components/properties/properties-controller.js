function PropertiesController() {
    var propertiesService = new PropertiesService()
  
    // Buttons
    // Add New Auto
    // Delete Auto
    // Report Flag
    // View More
    // Filter / Search
    var propertiesElem = document.getElementById('properties-list')
    var propertiesFormElem = document.getElementById('properties-auto-form')
    var showButton = document.getElementById('show-button')
    function drawProperties() {
      // WHERE ARE ALL THE Property
      var properties = propertiesService.getProperties()
      var template = ''
      for (var i = 0; i < properties.length; i++) {
        var home = properties[i];
        template += `
              <div class="col-md-3">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3>${home.title}</h3>
                          <h6>${home.location}</h6>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${home.img}" class="img-responsive">
                          <h4>${home.year} - ${home.make} ${home.model}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${home.price}</h5>
                      </div>
                  </div>
              </div>
              `
      }
      propertiesElem.innerHTML = template
    }
  
    this.addProperty = function addProperty(event) {
      event.preventDefault()
      var form = event.target
      propertiesService.addProperty(form)
      propertiesFormElem.classList.toggle('hidden', true)
      drawProperties()
    }
    var formstate = false
    
    this.showAddPropertyForm = function showAddPropertyForm() {
      if (formstate) {
        showButton.innerText = 'Add Listing'
        showButton.className = 'btn btn-info'
        autosFormElem.classList.add('hidden')
        formstate = false
      } else {
        showButton.innerText = 'Cancel'
        showButton.className = 'btn btn-danger'
        autosFormElem.classList.remove('hidden')
        formstate = true
      }
    }
  
    drawProperties()
  }