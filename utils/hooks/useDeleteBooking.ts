import { useState } from "react";

const useDeleteBooking = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteBooking = async (bookingId: number | undefined) => {
    if (!bookingId) return;

    setLoading(true);

    try {
      const res = await fetch(`/api/booking/delete?bookingId=${bookingId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete the booking");
      }

      setLoading(false);
      return true;
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setLoading(false);
      return false;
    }
  };

  return { deleteBooking, loading, error };
};

export default useDeleteBooking;
