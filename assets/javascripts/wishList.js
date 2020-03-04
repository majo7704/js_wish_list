const clearBtn = document.querySelector('.clear');
const removeBtn = document.querySelectorAll('.btn-outlined-danger');
const wishlistTotal = document.querySelector('span.wishlist-total');
const wishListContent = document.querySelector('.wishlist-content');

//wish list
let wishList = [];
//buttons
let buttonsDOM = [];
class UI {
  setWishlistValue(wishlist) {
    let tempTotal = 0;
    wishlist.map(item => {
      tempTotal -= item.price;
    });
  }
  wishLogic() {
    Storage.displayWishList();
    clearBtn.addEventListener('click', () => {
      this.clearWishlist(); //pointing to UI class to acces methods in the class
    });
    //event bubbling to remove an item
    wishListContent.addEventListener('click', event => {
      if (event.target.classList.contains('remove')) {
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        wishListContent.removeChild(
          removeItem.parentElement.parentElement.parentElement
        );
        this.removeItem(id);
      }
    });
  }
  clearWishlist() {
    let wishListItems = JSON.parse(localStorage.getItem('wishlist'));
    let wishItems = wishListItems.map(item => item.id);
    wishItems.forEach(id => this.removeItem(id));
    while (wishListContent.children.length > 0) {
      wishListContent.removeChild(wishListContent.children[0]);
    }
    wishListContent.innerHTML = '';
  }
  removeItem(id) {
    let wishListItems = JSON.parse(localStorage.getItem('wishlist'));
    wishListItems = wishListItems.filter(item => item.id !== id);
    this.setWishlistValue(wishListItems);
    Storage.saveWishList(wishListItems);
  }
}
class Storage {
  static saveWishList(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
  static displayWishList() {
    let wishListItems = JSON.parse(localStorage.getItem('wishlist'));
    let wishListContainer = document.querySelector('.wishlist-content');
    if (wishListItems && wishListContainer) {
      wishListContainer.innerHTML = '';
      Object.values(wishListItems).map(item => {
        wishListContainer.innerHTML += `
        <div class="col-sm-4">
        <div class="card my-3">
          <div class="currency btn btn-light disabled">${item.price}</div>
          <img class="card-img-top" src=${item.imageHref} alt="Card image cap">
          <div class="card-body text-center">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Color: <em>${item.color}</em></p>
            <button class="btn btn-outline-danger remove" data-id=${item.id}>Remove</button>
          </div>
        </div>
      </div>
        `;
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  //new instance of UI
  const ui = new UI();
  ui.wishLogic();
});
