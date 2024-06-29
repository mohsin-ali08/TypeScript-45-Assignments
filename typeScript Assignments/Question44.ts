function orderSandwich(...items: string[]): void{
    console.log("Sandwich order summary:");
    if(items.length > 0){
        items.forEach(item => {
            console.log("- "+item);
        }) 
    } else {
        console.log("No items specified");
    }
}
// Calling the function with different number of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Beef", "Tomato");
orderSandwich("Chicken", "Mayonnaise", "Pickles", "Onions");