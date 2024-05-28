export default function Site2() {
  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Tomato
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#menu">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#app">
                    App
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#subscribe">
                    Subscribe
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter your favourite food"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="body">
          <span>Welcome To</span>
          <h1>Tomato Foods</h1>
          <div className="btn-team">
            <button className="btn-white">Contact Us</button>
            <button className="btn-white">Our Menu</button>
          </div>
        </div>
      </div>
      <div className="discover" id="about">
        <h2>
          About <span className="text-danger">Our </span> Services
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          optio voluptas, nemo, esse nihil beatae facere ipsam ipsa eius enim
          totam libero repellat ut! Est, omnis nulla commodi, repellendus
          voluptas eligendi iusto, saepe deleniti a vel hic deserunt
          necessitatibus sapiente cupiditate ipsum ad dolorum impedit facilis.
          Obcaecati commodi quibusdam porro animi repudiandae earum architecto
          nihil nesciunt, impedit, nemo maiores id!
        </p>
        <img src="assests/food.jpg" alt="Food" />
      </div>
      <div className="divider"></div>
      <div className="topdishes" id="menu">
        <h2>
          Discover Our <span className="text-danger">Top </span>Dishes
        </h2>
        <div className="row card-dishes">
          <div className="col-md-4 col-sm-6 mb-grid-gutter">
            <a
              className="card border-0 shadow"
              href="food-delivery-category.html"
            >
              <img
                className="card-img-top"
                src="assests/menu.jpg"
                alt="Food Name"
              />
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Food Name</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter">
            <a
              className="card border-0 shadow"
              href="food-delivery-category.html"
            >
              <img
                className="card-img-top"
                src="assests/menu.jpg"
                alt="Food Name"
              />
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Food Name</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter">
            <a
              className="card border-0 shadow"
              href="food-delivery-category.html"
            >
              <img
                className="card-img-top"
                src="assests/menu.jpg"
                alt="Food Name"
              />
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Food Name</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter">
            <a
              className="card border-0 shadow"
              href="food-delivery-category.html"
            >
              <img
                className="card-img-top"
                src="assests/menu.jpg"
                alt="Food Name"
              />
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Food Name</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter">
            <a
              className="card border-0 shadow"
              href="food-delivery-category.html"
            >
              <img
                className="card-img-top"
                src="assests/menu.jpg"
                alt="Food Name"
              />
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Food Name</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter">
            <a
              className="card border-0 shadow"
              href="food-delivery-category.html"
            >
              <img
                className="card-img-top"
                src="assests/menu.jpg"
                alt="Food Name"
              />
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Food Name</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="app" id="app">
        <div className="left">
          <h2>
            Presenting Our New <br /> Tomato App
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel
            pariatur, dolores beatae facere libero molestiae quidem fuga veniam
            tenetur.
          </p>
          <img src="assests/store.png" alt="download" className="downloadImg" />
        </div>
        <img src="assests/app.png" alt="app" className="appImg" />
      </div>
      <div className="subscribe" id="subscribe">
        <h2>
          Subscribe To <span className="text-danger">Our </span>Newsletter
        </h2>
        <div className="form">
          <div className="input-group mb-3 newsletterForm">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email ID here"
            />
            <button className="input-group-text btn btn-danger">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer">
        <footer>© 2022 Tomato Foods</footer>
      </div>
    </div>
  );
}
