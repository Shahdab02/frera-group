// import PageHero from '../../components/PageHero'
// import SectionHeading from '../../components/SectionHeading'
// import { Link } from 'react-router-dom'

// export default function Services() {
//   return (
//     <>
//       <PageHero
//         title="Our Services"
//         description="Buying, selling, trading coordination and industrial supply enquiries."
//       />

//       <section className="section-space">
//         <div className="container">
//           <div className="row g-5 align-items-center">
//             <div className="col-lg-6">
//               <SectionHeading
//                 eyebrow="Services"
//                 title="How we can help"
//                 text="FRERA Group of Industries supports customer enquiries across selected categories. Contact us with your requirement so we can direct it to the appropriate team."
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
//                 <h3 className="h5 card-title">Buy & sell assistance</h3>
//                 <p className="section-copy">
//                   Share product details and buying or selling requirements.
//                 </p>
//                 <hr />
//                 <h3 className="h5 card-title">Industrial supply enquiries</h3>
//                 <p className="section-copy mb-0">
//                   Discuss material, quantity, specification and delivery
//                   location.
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



import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "bi-arrow-left-right",
    title: "Buying & Selling Assistance",
    description:
      "Get support for buying and selling requirements across our business categories. Share your requirement and let our team coordinate the next steps.",
    points: [
      "Buying enquiries",
      "Selling requirements",
      "Product details coordination",
    ],
  },
  {
    icon: "bi-house-door",
    title: "Property Solutions",
    description:
      "Connect with us for property-related enquiries, including residential, commercial and other real estate requirements.",
    points: [
      "Residential properties",
      "Commercial spaces",
      "Property buying and selling",
    ],
  },
  {
    icon: "bi-car-front",
    title: "Vehicle Trading",
    description:
      "Share your requirements for cars and other vehicles. We help coordinate enquiries between interested buyers and sellers.",
    points: [
      "Car buying enquiries",
      "Vehicle selling enquiries",
      "Vehicle details coordination",
    ],
  },
  {
    icon: "bi-recycle",
    title: "Scrap Metal Trading",
    description:
      "Enquire about scrap metal buying and selling requirements for different types of industrial and recyclable materials.",
    points: ["Iron and steel scrap", "Copper and brass", "Other metal scrap"],
  },
  {
    icon: "bi-buildings",
    title: "Industrial Product Supply",
    description:
      "Discuss industrial product and material requirements with our team, including specifications, quantities and delivery locations.",
    points: ["Industrial materials", "Bulk requirements", "Supply enquiries"],
  },
  {
    icon: "bi-clipboard-check",
    title: "Business Coordination",
    description:
      "We help organize business enquiries by understanding customer requirements and connecting them with the appropriate category.",
    points: [
      "Requirement collection",
      "Enquiry coordination",
      "Communication support",
    ],
  },
];

const process = [
  {
    number: "01",
    icon: "bi-chat-dots",
    title: "Share Your Requirement",
    text: "Tell us what you want to buy, sell or source.",
  },
  {
    number: "02",
    icon: "bi-clipboard-data",
    title: "Discuss the Details",
    text: "Share quantity, specifications, location and other relevant details.",
  },
  {
    number: "03",
    icon: "bi-people",
    title: "Coordination",
    text: "Our team reviews your enquiry and coordinates the next steps.",
  },
  {
    number: "04",
    icon: "bi-check2-circle",
    title: "Next Steps",
    text: "We communicate the available information and help move the enquiry forward.",
  },
];

export default function Services() {
  return (
    <main className="services-page">
      <PageHero
        title="Our Services"
        description="Connecting buying, selling and industrial supply requirements through one business platform."
      />

      {/* Introduction */}
      <section className="py-5 py-lg-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <SectionHeading
                eyebrow="What We Do"
                title="Business solutions across multiple industries"
                text="FRERA Group of Industries brings together different business categories under one platform. From property and vehicle enquiries to scrap metal trading and industrial supply requirements, we focus on clear communication and business coordination."
              />

              <p className="text-secondary lh-lg mb-4">
                Whether you are looking to buy, sell or source products, you can
                share your requirement with our team and discuss the appropriate
                next steps.
              </p>

              <Link to="/contact" className="btn btn-frera btn-lg px-4">
                Discuss Your Requirement
                <i className="bi bi-arrow-right ms-2" />
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="bg-primary text-white rounded-4 p-4 p-lg-5 h-100">
                <span className="badge bg-white text-primary px-3 py-2 mb-4">
                  FRERA GROUP OF INDUSTRIES
                </span>

                <h3 className="fw-bold mb-3">
                  One Group. Multiple Business Categories.
                </h3>

                <p className="text-white-50 lh-lg mb-4">
                  A single point of contact for diverse buying, selling and
                  industrial business enquiries.
                </p>

                <div className="row g-3">
                  {[
                    ["bi-house-door", "Property"],
                    ["bi-car-front", "Vehicles"],
                    ["bi-recycle", "Scrap Metals"],
                    ["bi-buildings", "Industrial Products"],
                  ].map(([icon, label]) => (
                    <div className="col-6" key={label}>
                      <div className="bg-white bg-opacity-10 rounded-3 p-3 h-100">
                        <i className={`bi ${icon} fs-3 d-block mb-2`} />
                        <span className="fw-semibold">{label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 bg-light">
        <div className="container">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Explore Our Services"
            text="Explore the different business services offered by FRERA Group of Industries."
            centered
          />

          <div className="row g-4 mt-2">
            {services.map((service) => (
              <div className="col-md-6 col-lg-4" key={service.title}>
                <div className="card border-0 shadow-sm rounded-4 h-100 p-3 p-lg-4">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "58px", height: "58px" }}
                  >
                    <i className={`bi ${service.icon} fs-3`} />
                  </div>

                  <h3 className="h5 fw-bold mb-3">{service.title}</h3>

                  <p className="text-secondary lh-lg">{service.description}</p>

                  <ul className="list-unstyled mb-4">
                    {service.points.map((point) => (
                      <li className="mb-2 text-secondary" key={point}>
                        <i className="bi bi-check-circle-fill text-primary me-2" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      to="/contact"
                      className="service-enquiry-link"
                    >
                      Send an Enquiry
                      <i className="bi bi-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-5">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="A Simple Process to Get Started"
            text="Our enquiry process is designed to keep communication clear and straightforward."
            centered
          />

          <div className="row g-4 mt-2">
            {process.map((step) => (
              <div className="col-12 col-sm-6 col-lg-3" key={step.number}>
                <div className="border rounded-4 p-4 h-100">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <i className={`bi ${step.icon} fs-2 text-primary`} />
                    <span className="fw-bold text-primary fs-5">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="h5 fw-bold">{step.title}</h3>
                  <p className="text-secondary mb-0 lh-lg">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <SectionHeading
                eyebrow="Why FRERA"
                title="A Practical Approach to Business"
                text="We believe that every business enquiry starts with understanding the requirement and maintaining clear communication."
              />

              <Link to="/about" className="btn btn-outline-frera px-4">
                Know About Us
                <i className="bi bi-arrow-right ms-2" />
              </Link>
            </div>

            <div className="col-lg-7">
              <div className="row g-3">
                {[
                  {
                    icon: "bi-grid",
                    title: "Multiple Categories",
                    text: "Different business requirements under one group.",
                  },
                  {
                    icon: "bi-chat-square-text",
                    title: "Clear Communication",
                    text: "A straightforward approach to customer enquiries.",
                  },
                  {
                    icon: "bi-person-check",
                    title: "Customer Focus",
                    text: "Understanding requirements before moving forward.",
                  },
                  {
                    icon: "bi-diagram-3",
                    title: "Business Coordination",
                    text: "Organized communication across relevant categories.",
                  },
                ].map((item) => (
                  <div className="col-sm-6" key={item.title}>
                    <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                      <i
                        className={`bi ${item.icon} fs-2 text-primary mb-3 d-block`}
                      />
                      <h3 className="h6 fw-bold">{item.title}</h3>
                      <p className="text-secondary mb-0">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5">
        <div className="container">
          <div className="bg-primary text-white rounded-4 p-4 p-lg-5 text-center">
            <span className="text-white-50 fw-semibold">
              LET'S WORK TOGETHER
            </span>

            <h2 className="display-6 fw-bold mt-3 mb-3">
              Have a Business Requirement?
            </h2>

            <p
              className="text-white-50 mx-auto mb-4"
              style={{ maxWidth: "650px" }}
            >
              Whether you want to buy, sell or enquire about industrial
              products, connect with FRERA Group of Industries.
            </p>

            <Link to="/contact" className="btn btn-light btn-lg px-4">
              Contact Our Team
              <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
