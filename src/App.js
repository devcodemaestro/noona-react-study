import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Grid from "@mui/material/Grid";
import ContactForm from "component/ContactForm";
import ContactList from "component/ContactList";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box className="p-2">
        <h1 className="text-center p-3">연락처 앱</h1>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactForm />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactList />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
