import Link from 'next/link';

export default function EntryPage() {
  return (
    <div className="h-screen w-screen bg-blue-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl mb-4 font-light" style={{ fontFamily: 'laca, sans-serif' }}>
        VENTURES, UNHINGED
      </h1>
      <Link href="/home" className="text-xl italic" style={{ fontFamily: 'Times New Roman, serif' }}>
        enter site
      </Link>
    </div>
  );
}
