import { css } from "@emotion/css";
import Grid from "@mui/material/Grid";
// import Item from "@mui/material/Item";

import Poll from "./Poll";

function AllPolls() {
  return (
    <div
      className={css`
        margin-left: 20px;
        margin-top: 10px;
        z-index: 10;
      `}
    >
      <h1>All Polls</h1>
      <p>Cast your vote and see real-time results</p>

      <Grid container columns={16} spacing={4}>
        <Grid size={5}>
          <Poll
            question={"What's your favorite programming language?"}
            options={["javaScript", "Python", "TypeScript", "Rust"]}
          ></Poll>
        </Grid>

        <Grid size={5}>
          <Poll
            question={"What's your favorite programming language?"}
            options={["javaScript", "Python", "TypeScript", "Rust"]}
          ></Poll>
        </Grid>

        <Grid size={5}>
          <Poll
            question={"What's your favorite programming language?"}
            options={["javaScript", "Python", "TypeScript", "Rust"]}
          ></Poll>
        </Grid>

        <Grid size={5}>
          <Poll
            question={"What's your favorite programming language?"}
            options={["javaScript", "Python", "TypeScript", "Rust"]}
          ></Poll>
        </Grid>

        <Grid size={5}>
          <Poll
            question={"What's your favorite programming language?"}
            options={["javaScript", "Python", "TypeScript", "Rust"]}
          ></Poll>
        </Grid>
      </Grid>
    </div>
  );
}

export default AllPolls;
