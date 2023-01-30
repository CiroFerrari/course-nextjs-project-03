import { Layout } from "@/components/layouts";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export const EntryPage = () => {
  return (
    <Layout title="...">
      <Grid
        container
        justifyContent='center'
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
          <Card>
            <CardHeader
              title="Entrada:"
              subheader={`Creada hacer: ... minutos`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Nueva entrada"
              />
              {/* RADIO */}
              <CardActions>
                <Button
                  startIcon={ <SaveOutlinedIcon /> }
                  variant="contained"
                >
                  Save
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default EntryPage;