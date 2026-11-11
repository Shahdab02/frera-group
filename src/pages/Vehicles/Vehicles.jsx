import { Link } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import ProductCard from "../../components/ProductCard";
import SectionHeading from "../../components/SectionHeading";
import { categories, products } from "../../data/siteData";

export default function Vehicles() {
  const vehicles = products.filter((item) => item.category === "Vehicles");

  const otherCategories = categories.filter(
    (item) => item.path !== "/vehicles",
  );

  const vehicleTypes = [
    {
      icon: "bi-car-front-fill",
      title: "Personal Cars",
      text: "Explore cars for daily travel, family journeys and personal use.",
    },
    {
      icon: "bi-truck",
      title: "Utility Vehicles",
      text: "Find practical vehicles for different everyday requirements.",
    },
    {
      icon: "bi-truck-front-fill",
      title: "Commercial Vehicles",
      text: "Explore transport and business-use vehicles for your operations.",
    },
  ];

  const benefits = [
    {
      icon: "bi-chat-square-text",
      title: "Easy Enquiry",
      text: "Share your vehicle requirements with our team.",
    },
    {
      icon: "bi-clipboard-check",
      title: "Clear Information",
      text: "Discuss specifications, condition and availability.",
    },
    {
      icon: "bi-headset",
      title: "Personal Assistance",
      text: "Get assistance with your vehicle enquiry.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: "bi-pencil-square",
      title: "Share Your Requirement",
      text: "Tell us which vehicle you are looking for.",
    },
    {
      number: "02",
      icon: "bi-card-checklist",
      title: "Discuss Vehicle Details",
      text: "Understand specifications and availability.",
    },
    {
      number: "03",
      icon: "bi-handshake",
      title: "Take the Next Step",
      text: "Discuss pricing and further details with our team.",
    },
  ];

  return (
    <main className="vehicles-page">
      {/* HERO SECTION */}
      <section className="bg-primary text-white py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge bg-light text-primary rounded-pill px-3 py-2 mb-3">
                FRERA GROUP OF INDUSTRIES
              </span>

              <h1 className="display-3 fw-bold mb-4">
                Drive Your Next
                <span className="d-block text-info">Opportunity.</span>
              </h1>

              <p className="fs-5 text-white-50 mb-4">
                Discover vehicle opportunities with FRERA. From personal cars to
                commercial transport, share your requirements and connect with
                our team.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#vehicle-listings"
                  className="btn btn-light btn-lg rounded-pill px-4"
                >
                  Explore Vehicles
                  <i className="bi bi-arrow-down ms-2"></i>
                </a>

                <Link
                  to="/contact?category=Vehicles"
                  className="btn btn-outline-light btn-lg rounded-pill px-4"
                >
                  Send Enquiry
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </Link>
              </div>

              <div className="d-flex flex-wrap gap-4 mt-5">
                <span>
                  <i className="bi bi-check-circle-fill text-info me-2"></i>
                  Personal Cars
                </span>

                <span>
                  <i className="bi bi-check-circle-fill text-info me-2"></i>
                  Utility Vehicles
                </span>

                <span>
                  <i className="bi bi-check-circle-fill text-info me-2"></i>
                  Commercial Vehicles
                </span>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="bg-white bg-opacity-10 border border-light border-opacity-25 rounded-4 p-4 p-lg-5 text-center">
                <i className="bi bi-car-front-fill display-1 text-info"></i>

                <h2 className="h3 fw-bold mt-4">Find Your Next Vehicle</h2>

                <p className="text-white-50 mb-4">
                  Tell us what you need and let our team help you explore the
                  available opportunities.
                </p>

                <Link
                  to="/contact?category=Vehicles"
                  className="btn btn-light rounded-pill px-4"
                >
                  Get Started
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-4 bg-white shadow-sm">
        <div className="container">
          <div className="row g-4">
            {benefits.map((item) => (
              <div className="col-md-4" key={item.title}>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "55px", height: "55px" }}
                  >
                    <i className={`bi ${item.icon} fs-3`}></i>
                  </div>

                  <div>
                    <h3 className="h6 fw-bold mb-1">{item.title}</h3>

                    <p className="text-secondary small mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLE TYPES */}
      <section className="py-5 py-lg-6">
        <div className="container py-4">
          <SectionHeading
            eyebrow="EXPLORE VEHICLE CATEGORIES"
            title="Find a Vehicle That Fits Your Needs"
            text="Explore different vehicle categories and share your requirements with FRERA."
            centered
          />

          <div className="row g-4 mt-3">
            {vehicleTypes.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "65px", height: "65px" }}
                  >
                    <i className={`bi ${item.icon} fs-2`}></i>
                  </div>

                  <h3 className="h5 fw-bold">{item.title}</h3>

                  <p className="text-secondary flex-grow-1">{item.text}</p>

                  <Link
                    to={`/contact?category=Vehicles&vehicleType=${encodeURIComponent(item.title)}`}
                    className="text-primary fw-bold text-decoration-none"
                  >
                    Enquire Now
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLE LISTINGS */}
      <section className="py-5 bg-light" id="vehicle-listings">
        <div className="container py-4">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <SectionHeading
              eyebrow="FEATURED VEHICLES"
              title="Explore Available Listings"
              text="Browse vehicle opportunities currently featured by FRERA."
            />

            <span className="badge bg-primary rounded-pill px-3 py-2 mb-4">
              {vehicles.length} {vehicles.length === 1 ? "Listing" : "Listings"}
            </span>
          </div>

          {vehicles.length > 0 ? (
            <div className="row g-4">
              {vehicles.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.slug}>
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-4 shadow-sm p-4 p-lg-5 text-center">
              <i className="bi bi-car-front display-3 text-primary"></i>

              <h3 className="h4 fw-bold mt-3">
                Looking for a Specific Vehicle?
              </h3>

              <p
                className="text-secondary mx-auto mb-4"
                style={{ maxWidth: "500px" }}
              >
                Tell us what you need. Our team can help you with your vehicle
                enquiry.
              </p>

              <Link
                to="/contact?category=Vehicles"
                className="btn btn-frera rounded-pill px-4 py-3"
              >
                Request a Vehicle
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-5">
        <div className="container py-4">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="A Simple Way to Get Started"
            text="Our straightforward enquiry process helps you take the next step."
            centered
          />

          <div className="row g-4 mt-3">
            {steps.map((step) => (
              <div className="col-md-4" key={step.number}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className="display-5 fw-bold text-primary opacity-25">
                      {step.number}
                    </span>

                    <i className={`bi ${step.icon} fs-2 text-primary`}></i>
                  </div>

                  <h3 className="h5 fw-bold">{step.title}</h3>

                  <p className="text-secondary mb-0">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER CATEGORIES */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <SectionHeading
              eyebrow="DISCOVER FRERA"
              title="Explore More Business Categories"
              text="Discover other business opportunities across FRERA Group of Industries."
            />
            <Link to="/" className="btn btn-outline-frera mb-4">
              Visit homepage
              <i className="bi bi-arrow-up-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4 mt-3">
            {otherCategories.map((item) => (
              <div className="col-sm-6 col-lg-4" key={item.path}>
                <CategoryCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="badge bg-light text-primary rounded-pill mb-3 px-3 py-2">
                LET'S CONNECT
              </span>

              <h2 className="display-6 fw-bold">Have a Vehicle Requirement?</h2>

              <p className="text-white-50 fs-5 mb-0">
                Share your requirements and connect with the FRERA team today.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <Link
                to="/contact?category=Vehicles"
                className="btn btn-light btn-lg rounded-pill px-4"
              >
                Contact Our Team
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
