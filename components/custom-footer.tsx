export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-serif text-2xl mb-4">Class of 2013</h3>
        <p className="text-white/70 mb-6">
          Questions? Contact the reunion committee at xxxx@xxxx.com
        </p>
        <div className="flex justify-center gap-6 text-sm text-white/60">
          <span>Richlands High School</span>
          <span>•</span>
          <span>13 Year Reunion</span>
          <span>•</span>
          <span>2026</span>
          <span>•</span>
          <a
            href="/attributions"
            className="underline hover:text-gray-300 ml-1"
          >
            Image Credits
          </a>
        </div>
      </div>
    </footer>
  );
}
