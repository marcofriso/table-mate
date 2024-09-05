"use client";

import React, { useContext } from "react";
import useBookings from "@/utils/hooks/useBookings";
import { AuthenticationContext } from "../context/AuthContext";

export default function BookingsComponent() {
  const { data } = useContext(AuthenticationContext);
  const { bookings, loading, error } = useBookings(data?.id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {bookings.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Booking Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.booker_first_name}</td>
                <td>{booking.booker_last_name}</td>
                <td>{booking.booker_email}</td>
                <td>{booking.booker_phone}</td>
                <td>{new Date(booking.booking_time).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings found</p>
      )}
    </div>
  );
}
