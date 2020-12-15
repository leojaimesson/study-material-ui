import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

import useForm from "../../hooks/useForm";

import { cpf, rawCpf, rg, rawRg } from "../../helpers/mask";

import ShowFormStore from "../../components/ShowFormStore";

function UserData() {
  const { getField, setField } = useForm();

  function handleChange(key) {
    return (event) => {
      setField(key, event.target.value);
    };
  }

  function handleChangeCpf(event) {
    setField("cpf", rawCpf(event.target.value));
  }

  function handleChangeRg(event) {
    setField("rg", rawRg(event.target.value));
  }

  return (
    <Container>
      <ShowFormStore />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={6} xl={6}>
          <TextField
            id="first-name-basic"
            label="Primeiro Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={getField("firstName", "")}
            onChange={handleChange("firstName")}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} xl={6}>
          <TextField
            id="last-name-basic"
            label="Sobrenome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={getField("lastName", "")}
            onChange={handleChange("lastName")}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={5} xl={5}>
          <TextField
            id="last-name-basic"
            label="RG"
            variant="outlined"
            fullWidth
            margin="normal"
            value={rg(getField("rg", ""))}
            inputProps={{ maxLength: 15 }}
            onChange={handleChangeRg}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={2} xl={2}>
          <TextField
            id="last-name-basic"
            label="Orgão Emissor"
            variant="outlined"
            // type="date"
            fullWidth
            margin="normal"
            // inputProps={{ type: 'date'}}
            value={getField("issuingBody", "")}
            onChange={handleChange("issuingBody")}
          />
        </Grid>
        <Grid item xs={12} sm={5} lg={5} xl={5}>
          <TextField
            id="last-name-basic"
            label="CPF"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cpf(getField("cpf", ""))}
            onChange={handleChangeCpf}
            inputProps={{ maxLength: 14 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserData;
