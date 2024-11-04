export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-primary-brown">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <h2 className="text-6xl font-bold mr-4 text-primary-red font-junicode-bold-italic">CONTACT</h2>
            <hr className="flex-grow border-t-2 border-primary-red" />
          </div>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-2xl text-text-body max-w-3xl mx-auto text-center mt-8">
              Have a question about our ventures or want to collaborate? We&apos;d love to hear from you! 
              Whether you&apos;re an innovator, investor, or just curious about our projects, 
              drop us a message and let&apos;s start a conversation about the future.
            </p>
          </div>
          <div className="max-w-lg mx-auto bg-primary-brown-dark rounded-lg p-8 shadow-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-headline">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary-red focus:ring focus:ring-primary-red focus:ring-opacity-50 bg-background-main text-text-body" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-headline">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary-red focus:ring focus:ring-primary-red focus:ring-opacity-50 bg-background-main text-text-body" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-headline">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary-red focus:ring focus:ring-primary-red focus:ring-opacity-50 bg-background-main text-text-body" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-neutral-white bg-primary-red hover:bg-primary-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-red">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}
