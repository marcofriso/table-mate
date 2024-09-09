import React, { Dispatch, SetStateAction } from "react";
import { Alert, CircularProgress, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useDeleteBooking from "@/utils/hooks/useDeleteBooking";

const DeleteModal = ({
  open,
  setOpen,
  selectedBookingId,
  setSelectedBookingId,
  callRefresh,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectedBookingId: number | null;
  setSelectedBookingId: Dispatch<SetStateAction<number | null>>;
  callRefresh: () => void;
}) => {
  const { deleteBooking, loading, error } = useDeleteBooking();

  const isWiderThan480px = useMediaQuery("(min-width:480px)");
  const isShorterThan600px = useMediaQuery("(max-height:600px)");

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isWiderThan480px ? "400px" : "350px",
    maxHeight: isShorterThan600px ? "85vh" : "600px",
    overflowY: isShorterThan600px ? "auto" : "unset",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    if (!selectedBookingId) return;

    const success = await deleteBooking(selectedBookingId);

    if (success) {
      setSelectedBookingId(null);
      callRefresh();
      setOpen(false);
    } else {
      console.error("Failed to delete booking:", error);
    }
  };

  const handleCancel = () => {
    setSelectedBookingId(null);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="auth-modal"
      aria-describedby="auth-modal"
    >
      <Box sx={style}>
        {loading ? (
          <div className="py-24 px-2 h-[600px] flex justify-center">
            <CircularProgress />
          </div>
        ) : (
          <div className="p-2 h-[600px]">
            {error ? (
              <Alert severity="error" className="mb-4">
                {error}
              </Alert>
            ) : null}
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">Please confirm deletion of this booking</p>
            </div>
            <div className="m-auto">
              <h4 className="text-xl font-light text-center">
                Are you sure you want to delete this booking? This action cannot
                be undone.
              </h4>
              <div className="flex justify-center gap-2 mt-12">
                <button
                  className="uppercase bg-blue-500 hover:bg-blue-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="uppercase bg-red-500 hover:bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                  onClick={handleDelete}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default DeleteModal;
