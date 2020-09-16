import React, { useEffect, useState } from "react";

import { IconButton, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

type snackbarWithButtonProps = {
  message: string;
  severity: "error" | "warning" | "success" | "info" | undefined;
};

const SnackbarWithButton: React.FC<snackbarWithButtonProps> = ({
  message,
  severity
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (message === "") {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [message]);

  return (
    <Snackbar open={isOpen}>
      <Alert severity={severity} variant="filled">
        {message}
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Close fontSize="small" />
        </IconButton>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarWithButton;
