const menu = {
    _courses:{
      appetizers:[],
      mains:[],
      desserts: [],
    },
     get appetizers(){
        return this._courses.appetizers;
      },
      set appetizers(appetizers){
        return this._courses.appetizers=appetizers;
        },
    get mains(){
        return this._courses.mains;
      },
      set mains(mains){
        return this._courses.mains=mains;
        },
      get desserts(){
        return this.courses.desserts;
      },
      set desserts(desserts){
        return this._courses.desserts=desserts;
      },
    addDishToCourse (courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      }
      return this._courses[courseName].push(dish);
    },
     getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      let i = Math.floor(Math.random() * dishes.length);
      return dishes[i];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}...the total price is ${totalPrice}`;
    },
  };
  menu.addDishToCourse ('appetizers','salad' , 5.27);
  menu.addDishToCourse ('appetizers','pot stickers' , 8.00);
  menu.addDishToCourse ('appetizers','mozerella sticks' , 5.27);
  
  menu.addDishToCourse ('mains','ribeye' , 25.99);
  menu.addDishToCourse ('mains','shrimp pasta' , 12.30);
  menu.addDishToCourse ('mains','baked potato' , 10.00);
  
  menu.addDishToCourse ('desserts','brownie' , 4.00);
  menu.addDishToCourse ('desserts','mudslide' , 6.00);
  menu.addDishToCourse ('desserts','cheesecake' , 8.00);
  
  console.log(menu._courses.appetizers);
  console.log(menu._courses.mains);
  console.log(menu._courses.desserts);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  