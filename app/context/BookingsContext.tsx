"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
  useContext,
} from "react";
import { Booking } from "@prisma/client";
import { AuthenticationContext } from "./AuthContext";

interface BookingsContextType {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
  refreshBookings: () => Promise<void>;
}

export const BookingsContext = createContext<BookingsContextType>({
  bookings: [],
  loading: true,
  error: null,
  refreshBookings: async () => {},
});

const BookingsProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { data } = useContext(AuthenticationContext);

  const fetchBookings = useCallback(async () => {
    const userId = data?.id;

    if (!userId) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/booking/list?userId=${userId}`);

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
  }, [data?.id]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  return (
    <BookingsContext.Provider
      value={{ bookings, loading, error, refreshBookings: fetchBookings }}
    >
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsProvider;
