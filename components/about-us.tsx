export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Born from a passion for authentic Cajun heritage and time-honored traditions, Jazzyjeatz Seasoning brings the bold, unforgettable flavors of Louisiana right to your kitchen.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Every blend is crafted with premium, hand-selected spices that complement seafood, meats, and vegetables. Our mission is simple: to transform every meal into a Cajun celebration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From our kitchen to your table, we're committed to delivering authentic taste and exceptional quality in every sprinkle.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F047d1840961a481cb83b4782a1b2b517%2Faaa2e04a13c24e2ea14862c464a2d594?format=webp&width=800"
              alt="Our Story"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
