"use client";

import React, { useContext, useState } from "react";
import { BookingsContext } from "../context/BookingsContext";
import DeleteModal from "./DeleteModal";

const Bookings = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<number | null>(
    null
  );

  const { bookings, loading, error, refreshBookings } =
    useContext(BookingsContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const sortedBookings =
    bookings.length > 0
      ? bookings.sort(
          (a, b) =>
            new Date(a.booking_time).getTime() -
            new Date(b.booking_time).getTime()
        )
      : [];

  return (
    <>
      <DeleteModal
        open={isModalOpen}
        setOpen={setModalOpen}
        selectedBookingId={selectedBookingId}
        setSelectedBookingId={setSelectedBookingId}
        callRefresh={refreshBookings}
      />
      <div className="overflow-x-auto">
        {bookings.length > 0 ? (
          <>
            <table className="hidden md:table min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left p-4">Restaurant Name</th>
                  <th className="text-left p-4">Booking Date and Time</th>
                  <th className="text-left p-4">Number of People</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedBookings.map((booking, index) => (
                  <tr
                    key={booking.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100`}
                  >
                    <td className="p-4">{booking.restaurant_name}</td>
                    <td className="p-4">
                      {new Date(booking.booking_time).toLocaleString()}
                    </td>
                    <td className="p-4">{booking.number_of_people}</td>
                    <td className="text-center p-4">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow"
                        onClick={() => {
                          setSelectedBookingId(booking.id);
                          setModalOpen(true);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="md:hidden">
              {sortedBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-gray-50 shadow-md rounded-lg p-4 mb-4 "
                >
                  <div className="mb-2">
                    <strong>Restaurant Name:</strong> {booking.restaurant_name}
                  </div>
                  <div className="mb-2">
                    <strong>Booking Date and Time:</strong>{" "}
                    {new Date(booking.booking_time).toLocaleString()}
                  </div>
                  <div className="mb-2">
                    <strong>Number of People:</strong>{" "}
                    {booking.number_of_people}
                  </div>
                  <div className="text-right">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow">
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">No bookings found</p>
        )}
      </div>
    </>
  );
};

export default Bookings;
