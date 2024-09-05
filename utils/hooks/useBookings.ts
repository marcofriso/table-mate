import { useState, useEffect } from "react";
import { Booking } from "@prisma/client";

const useBookings = (userId: number | undefined) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!userId) return;

      try {
        const res = await fetch(`/api/bookings?userId=${userId}`);

        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const data = await res.json();
        setBookings(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  return { bookings, loading, error };
};

export default useBookings;
