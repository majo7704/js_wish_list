//variables
const wishListBtn = document.querySelector('.btn-primary');
const productsDOM = document.querySelector('#products');
const wishListContent = document.querySelector('.wishlist-content');
const wishlistTotal = document.querySelector('span.wishlist-total');

//wish list
let wishList = [];
//buttons
let buttonsDOM = [];

//hat constructor with properties
class Hat {
  constructor(id, price, imageHref, name, color) {
    this.id = id;
    this.price = price;
    this.imageHref = imageHref;
    this.name = name;
    this.color = color;
  }
}
//array of hats
let arrayOfHats = [
  new Hat('1', 11.99, './assets/images/red/hats/1.png', 'Baseball cap', 'red'),
  new Hat(
    '2',
    11.99,
    './assets/images/blue/hats/1.png',
    'Baseball cap',
    'blue'
  ),
  new Hat(
    '3',
    11.99,
    './assets/images/yellow/hats/1.png',
    'Baseball cap',
    'yellow'
  ),
  new Hat(
    '4',
    11.99,
    './assets/images/green/hats/1.png',
    'Baseball cap',
    'green'
  ),
  new Hat('5', 17.99, './assets/images/blue/hats/2.png', 'Beanie', 'blue'),
  new Hat('6', 17.99, './assets/images/yellow/hats/2.png', 'Beanie', 'yellow'),
  new Hat('7', 17.99, './assets/images/green/hats/2.png', 'Beanie', 'green'),
  new Hat('8', 17.99, './assets/images/red/hats/2.png', 'Beanie', 'red'),
  new Hat(
    '9',
    10.99,
    './assets/images/yellow/hats/3.png',
    'Straw hat',
    'yellow'
  ),
  new Hat('10', 10.99, './assets/images/red/hats/3.png', 'Straw hat', 'red'),
  new Hat('11', 10.99, './assets/images/blue/hats/3.png', 'Straw hat', 'blue'),
  new Hat(
    '12',
    10.99,
    './assets/images/green/hats/3.png',
    'Straw hat',
    'green'
  ),
  new Hat('13', 10.99, './assets/images/red/hats/4.png', 'Trilby', 'red'),
  new Hat('14', 10.99, './assets/images/green/hats/4.png', 'Trilby', 'green'),
  new Hat('15', 10.99, './assets/images/blue/hats/4.png', 'Trilby', 'blue'),
  new Hat('16', 10.99, './assets/images/yellow/hats/4.png', 'Trilby', 'yellow')
];

//classes with methods responsible for getting socks and sunglasses
class Socks {
  async getSocks() {
    try {
      let result = await fetch('socks.json');
      let data = await result.json();
      let socks = data;
      socks = socks.map(sock => {
        const { id, name, price, color, imageHref } = sock;
        return { id, name, price, color, imageHref };
      });
      return socks;
    } catch (error) {
      console.log(error);
    }
  }
}
class Sunglasses {
  async getSunglasses() {
    try {
      let result = await fetch('sunglasses.json');
      let data = await result.json();
      let sunglasses = data;
      sunglasses = sunglasses.map(item => {
        const { id, name, price, color, imageHref } = item;
        return { id, name, price, color, imageHref };
      });
      return sunglasses;
    } catch (error) {
      console.log(error);
    }
  }
}
class Gloves {
  async getGloves() {
    try {
      let result = await fetch('gloves.json');
      let data = await result.json();
      let gloves = data;
      gloves.map(item => {
        const { id, name, price, color, imageHref } = item;
        return { id, name, price, color, imageHref };
      });
      return gloves;
    } catch (error) {
      console.log(error);
    }
  }
}

//class ui with methods
class UI {
  displayHats(hats) {
    hats.forEach(hat => {
      const { id, price, imageHref, name, color } = hat;
      const html = `<div class="accessory col-sm-4 ${color} hat">
        <div class="card my-3">
          <div class="currency btn btn-light disabled">${price}</div>
          <img class="card-img-top" src=${imageHref} alt="Image of baseball cap">
          <div class="card-body text-center">
            <h5 class="card-title">${name.toUpperCase()}</h5>
            <p class="card-text">Color: <em>${color.toUpperCase()}</em></p>
            <button class="btn btn-outline-primary" data-id=${id}>Add to wishlist!</button>
          </div>
        </div>
      </div>
  `;
      productsDOM.innerHTML += html;
    });
  }
  displaySocks(socks) {
    socks.forEach(sock => {
      const { id, price, imageHref, name, color } = sock;
      let result = `<div class="accessory col-sm-4 ${color} sock">
        <div class="card my-3">
          <div class="currency btn btn-light disabled">${price}</div>
          <img class="card-img-top" src=${imageHref} alt="Image of baseball cap">
          <div class="card-body text-center">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Color: <em>${color}</em></p>
            <button class="btn btn-outline-primary" data-id=${id}>Add to wishlist!</button>
          </div>
        </div>
      </div>`;
      productsDOM.innerHTML += result;
    });
  }
  displaySunglasses(sunglasses) {
    sunglasses.forEach(item => {
      const { id, price, imageHref, name, color } = item;
      let result = `<div class="accessory col-sm-4 ${color} sunglass">
        <div class="card my-3">
          <div class="currency btn btn-light disabled">${price}</div>
          <img class="card-img-top" src=${imageHref} alt="Image of baseball cap">
          <div class="card-body text-center">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Color: <em>${color}</em></p>
            <button class="btn btn-outline-primary" data-id=${id}>Add to wishlist!</button>
          </div>
        </div>
      </div>`;
      productsDOM.innerHTML += result;
    });
  }
  displayGloves(gloves) {
    gloves.forEach(item => {
      const { id, price, imageHref, name, color } = item;
      let result = `<div class="accessory col-sm-4 ${color} glove">
        <div class="card my-3">
          <div class="currency btn btn-light disabled">${price}</div>
          <img class="card-img-top" src=${imageHref} alt="Image of baseball cap">
          <div class="card-body text-center">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Color: <em>${color}</em></p>
            <button class="btn btn-outline-primary" data-id=${id}>Add to wishlist!</button>
          </div>
        </div>
      </div>`;
      productsDOM.innerHTML += result;
    });
  }
  getAddToWishListButtons() {
    //selecting the buttons after the items are being loaded
    //spread operator will turn NodeList into an array
    const buttons = [...document.querySelectorAll('.btn-outline-primary')];
    buttons.forEach(button => {
      let id = button.dataset.id;
      let inWishList = wishList.find(item => item.id === id);
      //if there are items in the wishlist
      if (inWishList) {
        button.innerText = 'Added to Wishlist';
        button.disabled = true;
      }
      //in case there are no items in the wishlist
      button.addEventListener('click', event => {
        event.target.innerText = 'Added to Wishlist';
        event.target.disabled = true;
        //get item from the local storage based on the id
        let wishHat = Storage.getHat(id);
        let wishSock = Storage.getSock(id);
        let wishSunglasse = Storage.getSunglasse(id);
        let wishGlove = Storage.getGlove(id);
        // add item to the wishlist
        if (wishHat) {
          //spread operator used to get all the items plus an item that was just added
          wishList = [...wishList, wishHat];
          this.addWishListItem(wishHat);
        } else if (wishSock) {
          wishList = [...wishList, wishSock];
          this.addWishListItem(wishSock);
        } else if (wishSunglasse) {
          wishList = [...wishList, wishSunglasse];
          this.addWishListItem(wishSunglasse);
        } else if (wishGlove) {
          wishList = [...wishList, wishGlove];
          this.addWishListItem(wishGlove);
        }
        //save wishList in local storage
        Storage.saveWishList(wishList);
        //set wishlist values
        this.setWishlistValue(wishList);
      });
    });
  }
  addWishListItem(item) {
    const buttons = [...document.querySelectorAll('.btn-outline-primary')];
    buttonsDOM = buttons;
    buttons.forEach(button => {
      let id = button.dataset.id;
      let inWishList = wishList.find(item => item.id === id);
      if (inWishList) {
        button.innerText = 'Added to Wishlist';
        button.disabled = true;
      }
    });
  }
  setWishlistValue(wishlist) {
    let tempTotal = 0;
    wishlist.map(item => {
      tempTotal += item.price;
    });
    wishlistTotal.innerText = '$' + parseFloat(tempTotal.toFixed(2));
  }
  highlightSelectedFilter() {
    const buttons = document.querySelectorAll('.btn-outline-secondary');
    buttons.forEach(button => {
      button.addEventListener('click', e => {
        //remove current active classes
        buttons.forEach(button => button.classList.remove('active'));
        //add new active class to the clicked button
        e.target.classList.add('active');
        //display filtered products
        let accessories = productsDOM.querySelectorAll('.accessory');
        accessories.forEach(item => {
          item.style.display = 'none';
          let buttonsContent = e.target.textContent;
          if (buttonsContent === 'Red' && item.classList.contains('red')) {
            item.style.display = 'inline-block';
          } else if (
            buttonsContent === 'Blue' &&
            item.classList.contains('blue')
          ) {
            item.style.display = 'inline-block';
          } else if (
            buttonsContent === 'Green' &&
            item.classList.contains('green')
          ) {
            item.style.display = 'inline-block';
          } else if (
            buttonsContent === 'Yellow' &&
            item.classList.contains('yellow')
          ) {
            item.style.display = 'inline-block';
          } else if (
            buttonsContent === 'Hats' &&
            item.classList.contains('hat')
          ) {
            item.style.display = ' inline-block';
          } else if (
            buttonsContent === 'Socks' &&
            item.classList.contains('sock')
          ) {
            item.style.display = ' inline-block';
          } else if (
            buttonsContent === 'Sunglasses' &&
            item.classList.contains('sunglass')
          ) {
            item.style.display = ' inline-block';
          } else if (
            buttonsContent === 'Gloves' &&
            item.classList.contains('glove')
          ) {
            item.style.display = ' inline-block';
          } else if (
            buttonsContent === 'All' &&
            item.classList.contains('accessory')
          ) {
            item.style.display = ' inline-block';
          }
        });
      });
    });
  }
  setupAPP() {
    wishList = Storage.getWishList();
    this.setWishlistValue(wishList);
    this.populateWishlist(wishList);
  }
  populateWishlist(wishlist) {
    wishlist.forEach(item => this.addWishListItem(item));
  }
}

//local storage class with static methods that are called on the class itself so no new instance of a class needed and the methods are reusable in different classes
class Storage {
  //saving items to the local storage so I could retrieve later on the info on a single item
  static saveHats(hats) {
    //saved it as a string
    localStorage.setItem('hats', JSON.stringify(hats));
  }
  static saveSocks(socks) {
    localStorage.setItem('socks', JSON.stringify(socks));
  }
  static saveSunglasses(sunglasses) {
    localStorage.setItem('sunglasses', JSON.stringify(sunglasses));
  }
  static saveGloves(gloves) {
    localStorage.setItem('gloves', JSON.stringify(gloves));
  }
  static getHat(id) {
    //array from local storage
    let hats = JSON.parse(localStorage.getItem('hats'));
    //looking for a specific item
    return hats.find(hat => hat.id === id);
  }
  static getSock(id) {
    let socks = JSON.parse(localStorage.getItem('socks'));
    return socks.find(sock => sock.id === id);
  }
  static getSunglasse(id) {
    let sunglasses = JSON.parse(localStorage.getItem('sunglasses'));
    return sunglasses.find(item => item.id === id);
  }
  static getGlove(id) {
    let gloves = JSON.parse(localStorage.getItem('gloves'));
    return gloves.find(item => item.id === id);
  }
  static saveWishList(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
  static getWishList() {
    return localStorage.getItem('wishlist')
      ? JSON.parse(localStorage.getItem('wishlist'))
      : [];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.displayHats(arrayOfHats);
  //new instance of socks and sunglasses
  const socks = new Socks();
  const sunglasses = new Sunglasses();
  const gloves = new Gloves();
  ui.setupAPP();
  Storage.saveHats(arrayOfHats);

  ui.highlightSelectedFilter();
  //get all the socks
  socks.getSocks().then(socks => {
    ui.displaySocks(socks);
    Storage.saveSocks(socks);
  });
  sunglasses.getSunglasses().then(sunglasses => {
    ui.displaySunglasses(sunglasses);
    Storage.saveSunglasses(sunglasses);
  });
  gloves
    .getGloves()
    .then(gloves => {
      ui.displayGloves(gloves);
      Storage.saveGloves(gloves);
    })
    //getting the buttons after all items are loaded
    .then(() => {
      ui.getAddToWishListButtons();
    });
});
