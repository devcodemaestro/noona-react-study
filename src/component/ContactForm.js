import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import usePhonebookStore from "store/usePhonebookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhonebookStore();

  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    addContact(name, phoneNumber);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        mb: 3,
      }}
    >
      <TextField
        id="name"
        type="text"
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        type="number"
        id="phone-number"
        label="전화번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Button
          variant="contained"
          size="large"
          onClick={(e) => handleAddContact(e)}
        >
          추가
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
