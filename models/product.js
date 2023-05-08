const products = [];

class Product{

    constructor(id, first_name, last_name, phone_number, address, city, state, zip, title, description, upload){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
        this.address = address; 
        this.city = city; 
        this.state = state; 
        this.zip = zip;
        this.title = title;
        this.description = description;
        this.upload = upload;
    }
    save(){
        this.id = Math.floor(Math.random()*100000);
         products.push(this);
    }

    static findAll(){
        return products;
    }

    static findById(prodId){
        return products.filter(p=>p.id == prodId)  ;
    }

    update() {
        const editProductIndex = products.findIndex(p => p.id == this.id);
        products[editProductIndex] = this;
    }

    static deleteById(prodId){
        const deleteproduct = products.findIndex(p=> p.id == prodId);
        products.splice(deleteproduct, 1);
    }

}

module.exports = Product;