"use client";
import { useGetAnnouncements } from "@/hooks/useGetAnnouncements";

export default function AccouncementsSection() {
  var { announcements, loading, error } = useGetAnnouncements();
  announcements = announcements || [
    {
      id: 1,
      content: "Testing announcements",
      date: "2024-06-01",
      postedBy: "Admin",
    },
    {
      id: 2,
      content: "Second announcement",
      date: "2024-06-05",
      postedBy: "Admin the second",
    },
  ];

  const hasAnnouncements = announcements && announcements.length > 0;

  const content = hasAnnouncements ? (
    <>
      <div className="max-w-4xl mx-auto space-y-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="p-4 bg-charcoal/85 border border-sage/30 rounded-lg"
          >
            <p className="text-rich-gold text-pretty text-lg">
              {announcement.content}
            </p>
            <p className="text-sm text-muted-foreground mt-2 text-white">
              Posted by {announcement.postedBy} on{" "}
              {new Date(announcement.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <p className="text-white text-pretty text-lg text-center">
      No announcements at this time.
    </p>
  );

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-rich-gold mb-8 text-center">
          Announcements
        </h2>
      </div>
      {content}
    </section>
  );
}
