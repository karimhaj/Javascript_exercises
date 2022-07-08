import fetch from "node-fetch"

/*
    Per una nota App di food delivery, ci viene richiesto di 
    implementare alcune funzionalità per la gestione del carrello.
*/


//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [
    {id: 324234, category:0, quantity:1, title: 'Margherita', description: "Pomodoro, mozzarella e basilico", ingredients: ['pomodoro','mozzarella','basilico'], price: 6.5},
    {id: 098394, category:0, quantity:1, title: 'Calzone Classico', description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",ingredients: ['pomodoro','mozzarella','prosciutto cotto'], price: 7.0},
    {id: 432432, category:4, quantity:1, title: 'Coca Cola Zero (33CL)', description: "", price: 3.0},
    {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Pomodoro, mozzarella e salamino piccante", ingredients: ['pomodoro','mozzarella','salamino'], price: 7.5},
        {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Mozzarella, salsiccia, patate al forno", ingredients: ['mozzarella','salsiccia','patate al forno'], price: 7.5},
    {id: 333445, category:4, quantity:1, title: 'Acqua Naturale (1L)', description: "", price: 2},
    {id: 656765, category:3, quantity:3, title: 'Cheesecake Cioccolato', description: "Dolce a base di formaggio fresco e topping al cioccolato", price: 5},
]

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [
    {id:0, name: "pizze"},
    {id:1, name: "panini"},
    {id:2, name: "sushi"},
    {id:3, name: "dessert"},
    {id:4, name: "bevande"},
]; 

//FUNZIONI DA IMPLEMENTARE:

/* 
    ---------------------------------------
    getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
    ---------------------------------------
*/

const getTotalAmount= ()=>productsInCart.reduce((sum,next)=> sum +next.price, 0 );
console.log(getTotalAmount());

//questo ciclo for tiene conto delle quantità dei prodotti
let getTotalAmountSecond = (arraySelected)=>{
    let temporaryAmount=0;
    for (i=0; i<arraySelected.length ; i++){
        temporaryAmount+= arraySelected[i].price * arraySelected[i].quantity;
    }
    return temporaryAmount
}

console.log(getTotalAmountSecond(productsInCart));


/* 
    ---------------------------------------
    getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
    ---------------------------------------*/
    
    let getCategoryCode = (categoryName)=>categories.find((category)=>categoryName === category.name)?.id;
    console.log(getCategoryCode('panini'))
    
/*

    ---------------------------------------
    getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
    ---------------------------------------
*/
let getCategoryCount = (categoryName)=>{
    let indicator = categories.find((category)=> categoryName === category.name)?.id
    let someProducts = productsInCart.filter((item)=> item.category === indicator)
    return someProducts.length
}
console.log(getCategoryCount('panini'));

/*
    ---------------------------------------
    removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
    ---------------------------------------
*/

let removeFromCart = (cartProductId)=>{
let thisItem = productsInCart.find((item)=> item.id === cartProductId);
thisItem.quantity-=1;
if (thisItem.quantity === 0){
   let position = productsInCart.indexOf(thisItem);
   productsInCart.splice(position,1);
}
return productsInCart;
}
console.log('inizia il conteggio')
console.log(productsInCart.length)
removeFromCart(656765)
removeFromCart(656765)
console.log(removeFromCart(656765));
console.log(productsInCart.length);

/*
    ---------------------------------------
    printCart: stampa su console tutti i prodotti divisi per categoria. 

    formato richiesto:
        *** PIZZA ***
        - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
        - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

        *** BEVANDE ***
        - 1 x Coca Cola Zero (33CL) | 3€

        *** TOTALE ***
        16.5€
    ---------------------------------------
*/

let printCart = (cartOfProducts)=>{
    for (i=0; i<=4; i++){
        let title = categories[i].name;
        console.log(`***${title.toUpperCase()}***`);
        if (cartOfProducts[i].category === i){
        console.log(`- ${cartOfProducts[i].quantity} x ${cartOfProducts[i].title} (${cartOfProducts[i].ingredients}) | ${cartOfProducts[i].price} `)
      }
    }
}
printCart(productsInCart);


/*
    ---------------------------------------
    getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
    ---------------------------------------

*/

fetch('https://randomuser.me/api?results=5%27')
.then((response) => {
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    return response.json(); // response.text(), response.formData(); response.blob(), response.arrayBuffer()
})
.then((data) => console.log(data));