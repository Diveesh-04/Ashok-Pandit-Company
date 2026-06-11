import aboutImg from "@/assets/about-office.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Office workspace"
            className="rounded shadow-lg w-full object-cover h-[400px]"
          />
          <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground font-heading font-bold px-6 py-3 rounded shadow-lg">
            400+ Satisfied Clients
          </div>
        </div>

        <div>
          <p className="text-primary font-heading font-semibold tracking-widest text-sm mb-2">
            WHO WE ARE
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            WELCOME TO ASHOK PANDIT & CO.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ashok Pandit & Co. is a well-established Chartered Accountancy firm based in Mumbai, India, with over 35 years of professional experience. We are committed to providing high-quality financial services and business solutions to our clients.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our team of experienced professionals offers comprehensive services in auditing, taxation, corporate advisory, and business management. We pride ourselves on our integrity, reliability, and client-centric approach.
          </p>
          <a
            href="#services"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-3 tracking-wider transition-colors"
          >
            READ MORE
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
