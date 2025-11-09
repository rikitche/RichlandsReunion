import { Card } from "@/components/ui/card"

export function MemoryGallery() {
  const memories = [
    {
      image: "/high-school-yearbook-photo-vintage-2005.jpg",
      caption: "Senior Year Yearbook Photos",
      year: "2005",
    },
    {
      image: "/high-school-prom-dance-2005-formal.jpg",
      caption: "Prom Night",
      year: "2005",
    },
    {
      image: "/high-school-graduation-ceremony-caps-thrown.jpg",
      caption: "Graduation Day",
      year: "2005",
    },
    {
      image: "/high-school-football-game-homecoming-crowd.jpg",
      caption: "Homecoming Victory",
      year: "2004",
    },
    {
      image: "/high-school-theater-musical-performance-stage.jpg",
      caption: "Spring Musical",
      year: "2004",
    },
    {
      image: "/high-school-cafeteria-lunch-friends-group.jpg",
      caption: "Lunch with Friends",
      year: "2003",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-charcoal text-balance">
          Remember When...
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto text-pretty">
          Take a trip down memory lane with photos from our unforgettable years together
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer border-sage/20 hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={memory.image || "/placeholder.svg"}
                  alt={memory.caption}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold">{memory.caption}</p>
                  <p className="text-sm text-white/80">{memory.year}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
