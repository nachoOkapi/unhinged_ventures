import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-brown-dark text-text-body py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary-red font-sans">
              VENTURES, UNHINGED
            </h3>
            <p className="text-lg md:text-xl text-text-body font-sans">
              A good idea is a good idea.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-2xl font-bold mb-4 text-primary-red font-sans">Connect</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-text-body hover:text-primary-red transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-text-body hover:text-primary-red transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-text-body hover:text-primary-red transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
