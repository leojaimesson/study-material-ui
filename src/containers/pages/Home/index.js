import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { Link } from "react-router-dom";

import { Title } from "./styled";

import { useStyles, link } from "./styles";

function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Title>Olokinho Meu!</Title>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid className={classes.grid} item xs={12} sm={4} lg={4} xl={4}>
          <Link style={link} to="/new-user">
            <Paper className={classes.paper}>Adicionar Usuário</Paper>
          </Link>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={4} lg={4} xl={4}>
          <Paper className={classes.paper}>Listar Usuários</Paper>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={4} lg={4} xl={4}>
          <Paper className={classes.paper}>Editar/Remover Usuário</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
