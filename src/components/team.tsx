import Image from 'next/image'

export default function Team() {
  return (
    <section id="team" className="py-20 bg-primary-brown-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <h2 className="text-6xl font-bold mr-4 text-primary-red font-junicode-bold-italic">TEAM</h2>
          <hr className="flex-grow border-t-2 border-primary-red" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto mt-8">
          <div className="text-center bg-primary-brown-dark rounded-lg p-4 md:p-6 shadow-md">
            <div className="mb-4 relative w-32 h-32 md:w-48 md:h-48 mx-auto">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Andrew McKee"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-text-headline">Andrew McKee</h3>
            <p className="text-lg text-text-body">
              Co-founder and visionary leader, Andrew brings years of experience in tech innovation and strategic planning.
            </p>
          </div>
          <div className="text-center bg-primary-brown-dark rounded-lg p-6 shadow-md">
            <div className="mb-4 relative w-48 h-48 mx-auto">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Noah Copiak"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-text-headline">Noah Copiak</h3>
            <p className="text-lg text-text-body">
              As our chief innovator, Noah leads our R&D efforts, constantly pushing the boundaries of what&apos;s possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
