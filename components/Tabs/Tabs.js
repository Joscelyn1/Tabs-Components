class TabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.item = document.querySelector(`.tabs-link[data-tab='${this.data}']`);
    console.log(this.item);


    this.tabItem = new TabItem(this.item, this)

      // Add a click event listener on this instance, calling the select method on click
      this.item.addEventListener('click', () => this.select())

  };

  select() {
    const links = document.querySelectorAll('.tabs-link');

    links.forEach((link) => {
      link.classList.remove('tabs-link-selected')
    });


    this.element.classList.add('tabs-item-selected');

    select(this.tabItem)

    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');

    items.forEach((item) => {
      item.classList.remove('tabs-item-selected');
    })
    this.element.classList.add('tabs-item-selected');
  }
}



let links = document.querySelectorAll('.tabs-link');

links = [...links].map(link => new TabLink(link));