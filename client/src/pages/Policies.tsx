export default function Policies() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl mb-8">Policies</h1>
        <div className="prose prose-sm text-muted-foreground font-light leading-relaxed">
          <p>Last updated: October 2023</p>
          <h3>1. Booking Policy</h3>
          <p>All bookings are subject to availability and confirmation by the venue. A deposit is required to secure your date.</p>
          <h3>2. Cancellation</h3>
          <p>Cancellations made less than 30 days prior to the event may forfeit the deposit. Please refer to your specific contract for full terms.</p>
          {/* Add more placeholder policy text */}
        </div>
      </div>
    </div>
  );
}
