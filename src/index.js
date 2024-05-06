import * as cartService from './services/cart.js'
import createItem from './services/item.js';

const myCart = [];
const MyWishList = [];

// lista de itens
const borracha = await createItem('Borracha Azul', 5.8, 2);
const caneta = await createItem('Caneta de Marcação', 7.25, 5);
const papel = await createItem('Papel Sufite 100 folhas', 18.90, 2);
const apontador = await createItem('Apontador', 4.80, 3);

//Itens do carrinho.
await cartService.addItem(myCart, borracha);
await cartService.addItem(myCart, caneta);
await cartService.addItem(myCart, papel);
await cartService.addItem(myCart, apontador);

// Lista de desejos.
await cartService.addItem(MyWishList, borracha);

//Deleta um item do carrinho.
//await cartService.deleteItem(myCart, borracha.name);

// Remove um item na quantidade.
await cartService.removeItem(myCart, caneta);


// Total do carrinho.
const total = await cartService.calculateTotalValue(myCart);

// Imprime o carrinho.
console.log('Carrinho de compras');
console.log('--------------------');

cartService.displayCart(myCart);

console.log('--------------------');
console.log(`Total do carrinho: R\$ ${total.toFixed(2).toString().replace('.', ',')}`);
console.log('--------------------');
console.log(`Minha lista de desejos: ${MyWishList[0].name}`);

