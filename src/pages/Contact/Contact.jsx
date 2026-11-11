import PageHero from '../../components/PageHero'
import SectionHeading from '../../components/SectionHeading'
import ContactForm from '../../components/ContactForm'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Let's start a conversation"
        description="Share your requirement with FRERA Group of Industries. We will help direct your enquiry."
      />

      <section className="section-space">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <SectionHeading
                eyebrow="Contact FRERA"
                title="We are here to help"
                text="Use the enquiry form or contact our team through your preferred channel. Replace the sample contact details with your verified business information before publishing."
              />

              <div className="d-flex gap-3 my-4">
                <div className="icon-circle">
                  <i className="bi bi-geo-alt" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Location</h6>
                  <p className="section-copy mb-0">Delhi NCR, India</p>
                </div>
              </div>

              <div className="d-flex gap-3 my-4">
                <div className="icon-circle">
                  <i className="bi bi-envelope" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="section-copy mb-0">
                    Add your official email address
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 my-4">
                <div className="icon-circle">
                  <i className="bi bi-telephone" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Phone</h6>
                  <p className="section-copy mb-0">
                    official phone number
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
