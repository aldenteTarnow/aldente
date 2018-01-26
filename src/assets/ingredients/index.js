import cheese from './cheese.png';
import blackOlives from './black-olives.png';
import garlic from './garlic.png';
import greenOlives from './green-olives.png';
import onion from './onion.png';
import salami from './salami.png';
import tomatoSauce from './tomato-sauce.png';
import tomato from './tomato.png';
import bacon from './bacon.png';
import barbecue from './barbecue.png';
import beans from './beans.png';
import bolonese from './bolonese.png';
import brocoli from './broccoli.png';
import camembert from './camembert.png';
import cappers from './cappers.png';
import chicken from './chicken.png';
import chiliPepper from './chili-pepper.png';
import chives from './chives.png';
import corn from './corn.png';
import cucumber from './cucumber.png';
import courgette from './courgette.png';
import dryTomato from './dry-tomato.png';
import feta from './feta.png';
import gorgonzola from './gorgonzola.png';
import gouda from './gouda.png';
import grapes from './grapes.png';
import grilledBacon from './grilled-bacon.png';
import grilledPork from './grilled-pork.png';
import gyros from './gyros.png';
import ham from './ham.png';
import herb from './herb.png';
import jalapeno from './jalapeno.png';
import mozzarella from './mozzarella.png';
import mushrooms from './mushroom.png';
import olives from './olives.png';
import parmenska from './parmenska.png';
import parmezan from './parmezan.png';
import pepper from './pepper.png';
import pineapple from './pineapple.png';
import noPhoto from './no-photo2.png';
import rucola from './rucola.png';
import salad from './salad.png';
import salmon from './salmon.png';
import sauce from './sauce.png';
import sausage from './sausage.png';
import seafood from './seafood.png';
import spinach from './spinach.png';
import tuna from './tuna.png';
import turecki from './turecki.png';
import whiteSauce from './white-sauce.png';
import oscypek from './oscypek.png';
import kabanos from './kabanos.png';
import artichoke from './artichoke.png';
import skladniki from './skladniki.png';
import smallTomato from './small-tomato.png';
import goatCheese from './goat-cheese.png';

import find from 'lodash/find';

const ingredients = [
    {name: 'no match', img: noPhoto},
    {name: 'ser', img: cheese},
    {name: 'oliwki czarne', img: blackOlives},
    {name: 'czosnek', img: garlic},
    {name: 'oliwki zielone', img: greenOlives},
    {name: 'cebula', img: onion},
    {name: 'salami', img: salami},
    {name: 'sos pomidorowy', img: tomatoSauce},
    {name: 'pomidor', img: tomato},
    {name: 'pieczarki', img: mushrooms},
    {name: 'szynka', img: ham},
    {name: 'kukurydza', img: corn},
    {name: 'oliwki', img: olives},
    {name: 'papryczki pepperoni', img: chiliPepper},
    {name: 'papryka', img: pepper},
    {name: 'świeża papryka', img: pepper},
    {name: 'boczek', img: bacon},
    {name: 'kiełbasa', img: sausage},
    {name: 'brokuły', img: brocoli},
    {name: 'ser gorgonzola', img: gorgonzola},
    {name: 'tuńczyk', img: tuna},
    {name: 'kapary', img: cappers},
    {name: 'suszone pomidory', img: dryTomato},
    {name: 'kurczak', img: chicken},
    {name: 'ananas', img: pineapple},
    {name: 'szpinak', img: spinach},
    {name: 'ser feta', img: feta},
    {name: 'ser gouda', img: gouda},
    {name: 'ser mozzarella', img: mozzarella},
    {name: 'ser parmezan', img: parmezan},
    {name: 'owoce morza', img: seafood},
    {name: 'papryczki jalapeno', img: jalapeno},
    {name: 'czerwona fasola', img: beans},
    {name: 'sos BBQ', img: barbecue},
    {name: 'grillowany boczek', img: grilledBacon},
    {name: 'grillowana wieprzowina', img: grilledPork},
    {name: 'mięso gyros', img: gyros},
    {name: 'oscypek wędzony', img: oscypek},
    {name: 'ogórek kiszony', img: cucumber},
    {name: 'rukola', img: rucola},
    {name: 'salami pikantne', img: salami},
    {name: 'szynka parmeńska', img: parmenska},
    {name: 'duszone pieczarki', img: mushrooms},
    {name: 'łosoś wędzony', img: salmon},
    {name: 'winogrono czerwone', img: grapes},
    {name: 'pieczona papryka', img: pepper},
    {name: 'sos turecki', img: turecki},
    {name: 'sos jasny', img: whiteSauce},
    {name: 'sałata lodowa', img: salad},
    {name: 'sos bolognese', img: bolonese},
    {name: 'sos', img: sauce},
    {name: 'ser camembert', img: camembert},
    {name: 'cukinia', img: courgette},
    {name: 'szczypiorek', img: chives},
    {name: 'bazylia', img: herb},
    {name: 'świeża bazylia', img: herb},
    {name: 'grillowany kurczak', img: chicken},
    {name: 'kabanos', img: kabanos},
    {name: 'papryka peperonico', img: jalapeno},
    {name: 'mięso kebab', img: gyros},
    {name: 'pesto bazyliowe', img: herb},
    {name: 'ogórek', img: cucumber},
    {name: '4x składniki', img: skladniki},
    {name: 'karczochy', img: artichoke},
    {name: 'pomidory koktajlowe', img: smallTomato},
    {name: 'ser kozi', img: goatCheese},
];

const getImg = (name) => {
    const found = find(ingredients, (ing) => ing.name === name);
    return found && found.img ? found.img : ingredients[0].img;
};

export default getImg