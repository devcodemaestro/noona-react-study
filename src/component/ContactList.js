import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import usePhonebookStore from "store/usePhonebookStore";

const ContactList = () => {
  const { phoneBook, removeContact } = usePhonebookStore();
  const [searchQuery, setSearchQuery] = useState("");

  // 검색어에 따라 필터링된 연락처 목록
  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) {
      return phoneBook; // 검색어가 없으면 전체 목록 반환
    }

    // 검색어를 포함하는 이름을 가진 연락처만 필터링
    return phoneBook.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [phoneBook, searchQuery]);

  const handleRemoveContact = (id) => {
    removeContact(id);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
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
          id="outlined-search"
          label="검색"
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment>
                  <SearchOutlined />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      {filteredContacts.length > 0 ? (
        filteredContacts?.map((item) => (
          <Box key={item.id}>
            <p>이름: {item.name}</p>
            <p>전화번호: {item.phoneNumber}</p>
            <Button
              variant="contained"
              size="large"
              onClick={() => handleRemoveContact(item.id)}
              color="error"
            >
              삭제
            </Button>
            <hr />
          </Box>
        ))
      ) : (
        <Box textAlign="center" mt={3}>
          <p>검색 결과가 없습니다.</p>
        </Box>
      )}
    </>
  );
};

export default ContactList;
