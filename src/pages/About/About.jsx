// import PageHero from '../../components/PageHero'
// import SectionHeading from '../../components/SectionHeading'
// import { Link } from 'react-router-dom'

// export default function About() {
//   return (
//     <>
//       <PageHero
//         title="About FRERA"
//         description="A business group focused on connecting requirements across multiple categories."
//       />

//       <section className="section-space">
//         <div className="container">
//           <div className="row g-5 align-items-center">
//             <div className="col-lg-6">
//               <SectionHeading
//                 eyebrow="About"
//                 title="How we can help"
//                 text="We bring a range of buying, selling and supply enquiries together through one accessible business platform. Our focus is clear communication, dependable coordination and helping customers find the right contact for their needs."
//               />
//               <Link to="/contact" className="btn btn-frera">
//                 Send an Enquiry <i className="bi bi-arrow-right ms-2" />
//               </Link>
//             </div>

//             <div className="col-lg-6">
//               <div className="surface-card p-4 p-lg-5">
//                 <div className="icon-circle mb-3">
//                   <i className="bi bi-building-check" />
//                 </div>
//                 <h3 className="h5 card-title">Our mission</h3>
//                 <p className="section-copy">
//                   To make category-based business enquiries easier through
//                   responsive communication and customer-focused coordination.
//                 </p>
//                 <hr />
//                 <h3 className="h5 card-title">Our vision</h3>
//                 <p className="section-copy mb-0">
//                   To build long-term business relationships and grow a trusted
//                   multi-category industry group.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-space bg-light">
//         <div className="container text-center">
//           <SectionHeading
//             eyebrow="Talk to our team"
//             title="Need help with a specific requirement?"
//             text="Send us the details and our team can guide your next step."
//             centered
//           />
//           <Link to="/contact" className="btn btn-frera">
//             Contact Us
//           </Link>
//         </div>
//       </section>
//     </>
//   )
// }




import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import CatalogImage from "../../components/CatalogImage";
import { categories } from "../../data/siteData";

export default function About() {
  const values = [
    {
      icon: "bi-shield-check",
      title: "Trust & Transparency",
      text: "We believe in clear communication, transparent discussions and building reliable business relationships.",
    },
    {
      icon: "bi-people",
      title: "Customer First",
      text: "Understanding customer requirements and connecting them with relevant business opportunities.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Responsive Approach",
      text: "We focus on timely communication and coordinated handling of business enquiries.",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Continuous Growth",
      text: "Building meaningful partnerships and exploring opportunities across different industries.",
    },
  ];

  const strengths = [
    {
      icon: "bi-building",
      title: "Multiple Business Categories",
      text: "A diverse business platform covering property, vehicles, metals and industrial products.",
    },
    {
      icon: "bi-arrow-left-right",
      title: "Buying & Selling",
      text: "A common platform for people and businesses looking to buy, sell or source products.",
    },
    {
      icon: "bi-headset",
      title: "Direct Communication",
      text: "Connect with our team to discuss your requirements and explore possible opportunities.",
    },
  ];

  const process = [
    {
      number: "01",
      icon: "bi-chat-dots",
      title: "Understand",
      text: "We understand your requirements, preferences and business objectives.",
    },
    {
      number: "02",
      icon: "bi-diagram-3",
      title: "Connect",
      text: "We help direct your enquiry towards the relevant business category.",
    },
    {
      number: "03",
      icon: "bi-handshake",
      title: "Coordinate",
      text: "We communicate and coordinate the next steps with you.",
    },
  ];

  return (
    <main className="about-page">
      {/* HERO SECTION */}
      <PageHero
        title="About FRERA"
        description="Building business connections across multiple industries through buying, selling and supply opportunities."
      />

      {/* INTRODUCTION SECTION */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-3">
                WHO WE ARE
              </span>

              <h2 className="display-5 fw-bold text-dark mb-4">
                One Group.
                <span className="text-primary">
                  {" "}
                  Multiple Business Opportunities.
                </span>
              </h2>

              <p className="text-secondary fs-6 lh-lg">
                FRERA Group of Industries is a multi-category business group
                focused on connecting buying, selling and supply requirements
                across different business sectors.
              </p>

              <p className="text-secondary lh-lg">
                Our business platform brings together opportunities in
                properties, commercial spaces, vehicles, scrap metals and
                industrial products. We aim to make business enquiries easier
                through clear communication and coordinated support.
              </p>

              <p className="text-secondary lh-lg">
                Whether you are an individual, trader, supplier or business
                looking for a specific requirement, FRERA provides a common
                point of contact to begin the conversation.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                  to="/contact"
                  className="btn btn-frera btn-lg rounded-pill px-4"
                >
                  Connect With Us
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link
                  to="/"
                  className="btn btn-outline-frera btn-lg rounded-pill px-4"
                >
                  Explore Business
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-primary rounded-4 p-4 p-lg-5 text-white position-relative overflow-hidden">
                <div className="position-relative">
                  <span className="badge bg-white text-primary rounded-pill px-3 py-2 mb-4">
                    FRERA GROUP OF INDUSTRIES
                  </span>

                  <h3 className="display-6 fw-bold mb-3">
                    Connecting Requirements. Creating Opportunities.
                  </h3>

                  <p className="text-white-50 lh-lg mb-4">
                    A multi-category business approach designed to bring
                    customers, suppliers and business requirements together.
                  </p>

                  <div className="row g-3">
                    <div className="col-6">
                      <div className="bg-white bg-opacity-10 rounded-3 p-3 h-100">
                        <i className="bi bi-house-door fs-2 text-info"></i>
                        <h4 className="h6 fw-bold mt-3">Property</h4>
                        <p className="small text-white-50 mb-0">
                          Residential & Commercial
                        </p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="bg-white bg-opacity-10 rounded-3 p-3 h-100">
                        <i className="bi bi-car-front fs-2 text-info"></i>
                        <h4 className="h6 fw-bold mt-3">Vehicles</h4>
                        <p className="small text-white-50 mb-0">
                          Personal & Commercial
                        </p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="bg-white bg-opacity-10 rounded-3 p-3 h-100">
                        <i className="bi bi-recycle fs-2 text-info"></i>
                        <h4 className="h6 fw-bold mt-3">Metals</h4>
                        <p className="small text-white-50 mb-0">
                          Scrap & Metal Trading
                        </p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="bg-white bg-opacity-10 rounded-3 p-3 h-100">
                        <i className="bi bi-gear fs-2 text-info"></i>
                        <h4 className="h6 fw-bold mt-3">Industrial</h4>
                        <p className="small text-white-50 mb-0">
                          Products & Supplies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS STRENGTHS */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <SectionHeading
            eyebrow="OUR BUSINESS APPROACH"
            title="What Makes FRERA Different"
            text="Our approach focuses on connecting different business requirements through one accessible platform."
            centered
          />

          <div className="row g-4 mt-3">
            {strengths.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className={`bi ${item.icon} fs-2`}></i>
                  </div>

                  <h3 className="h5 fw-bold">{item.title}</h3>

                  <p className="text-secondary lh-lg mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-5">
        <div className="container py-lg-5">
          <SectionHeading
            eyebrow="OUR PURPOSE"
            title="Mission & Vision"
            text="The principles that guide our business approach and long-term direction."
            centered
          />

          <div className="row g-4 mt-3">
            <div className="col-lg-6">
              <div className="bg-primary text-white rounded-4 p-4 p-lg-5 h-100">
                <div
                  className="bg-white bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i className="bi bi-bullseye fs-2 text-info"></i>
                </div>

                <span className="text-info fw-bold small">OUR MISSION</span>

                <h3 className="display-6 fw-bold mt-3 mb-4">
                  Making Business Connections Easier.
                </h3>

                <p className="text-white-50 lh-lg mb-0">
                  To simplify buying, selling and supply enquiries by bringing
                  multiple business categories together through clear
                  communication, customer-focused coordination and accessible
                  business connections.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-light border rounded-4 p-4 p-lg-5 h-100">
                <div
                  className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i className="bi bi-eye fs-2"></i>
                </div>

                <span className="text-primary fw-bold small">OUR VISION</span>

                <h3 className="display-6 fw-bold text-dark mt-3 mb-4">
                  Growing Through Stronger Partnerships.
                </h3>

                <p className="text-secondary lh-lg mb-0">
                  To build a trusted and growing multi-category business group
                  that creates meaningful connections, supports business
                  opportunities and develops long-term relationships across
                  industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <SectionHeading
            eyebrow="WHAT WE BELIEVE IN"
            title="Our Core Values"
            text="The values that shape how we communicate, coordinate and build business relationships."
            centered
          />

          <div className="row g-4 mt-3">
            {values.map((item) => (
              <div className="col-sm-6 col-lg-3" key={item.title}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{ width: "65px", height: "65px" }}
                  >
                    <i className={`bi ${item.icon} fs-2`}></i>
                  </div>

                  <h3 className="h6 fw-bold">{item.title}</h3>

                  <p className="text-secondary small lh-lg mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-5">
        <div className="container py-4">
          <SectionHeading
            eyebrow="OUR WORKING PROCESS"
            title="From Requirement to Business Connection"
            text="We follow a straightforward approach to understand and coordinate your business enquiry."
            centered
          />

          <div className="row g-4 mt-3">
            {process.map((item) => (
              <div className="col-md-4" key={item.number}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <span className="display-5 fw-bold text-primary opacity-25">
                      {item.number}
                    </span>

                    <i className={`bi ${item.icon} fs-2 text-primary`}></i>
                  </div>

                  <h3 className="h5 fw-bold">{item.title}</h3>

                  <p className="text-secondary lh-lg mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS CATEGORIES */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <SectionHeading
            eyebrow="OUR BUSINESS CATEGORIES"
            title="Explore the FRERA Business Network"
            text="Explore our different categories and discover where your requirements fit."
            centered
          />

          <div className="row g-4 mt-3">
            {categories.map((item) => (
              <div className="col-sm-6 col-lg-4" key={item.path}>
                <div className="h-100">
                  <Link
                    to={item.path}
                    className="card h-100 border-0 shadow-sm text-decoration-none overflow-hidden rounded-4"
                  >
                    <CatalogImage
                      src={item.image}
                      alt={item.title}
                      category={item.title}
                      className="card-img-top"
                    />

                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <i className={`bi ${item.icon} fs-4 text-primary`}></i>
                        <h3 className="h5 fw-bold text-dark mb-0">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-secondary small">{item.text}</p>

                      <span className="text-primary fw-bold">
                        Explore Category
                        <i className="bi bi-arrow-right ms-2"></i>
                      </span>
                    </div>
                  </Link>
                </div>
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
              <span className="badge bg-white text-primary rounded-pill px-3 py-2 mb-3">
                LET'S BUILD CONNECTIONS
              </span>

              <h2 className="display-5 fw-bold mb-3">
                Let's Discuss Your Business Requirements.
              </h2>

              <p className="text-white-50 fs-5 mb-0">
                Whether you want to buy, sell or source products, connect with
                FRERA Group of Industries.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <Link
                to="/contact"
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
