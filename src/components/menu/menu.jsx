import './menu.css';
const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        <span className="menu__text">menu</span>
        <h2 className="menu__title">Food Full of treaty Love</h2>
        <p className="menu__desc">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,{" "}
        </p>

        <div className="products">
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
