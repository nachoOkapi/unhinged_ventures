export default function About() {
  return (
    <section id="about" className="py-20 bg-primary-brown">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <h2 className="text-6xl font-bold mr-4 text-primary-red font-junicode-bold-italic">ABOUT</h2>
          <hr className="flex-grow border-t-2 border-primary-red" />
        </div>
        <div className="bg-primary-brown-dark rounded-lg p-4 md:p-8 mt-8">
          <p className="text-xl md:text-2xl text-text-body max-w-3xl mx-auto text-center">
            Unhinged Ventures is a forward-thinking company that explores innovative ideas across various domains. 
            From cutting-edge apps to world-changing initiatives, we&apos;re committed to pushing boundaries and creating 
            impactful solutions for tomorrow&apos;s challenges.
          </p>
        </div>
      </div>
    </section>
  )
}
