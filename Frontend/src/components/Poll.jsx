import { css } from "@emotion/css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Poll({ question, options }) {
  return (
    <div
      className={css`
        border: 1.5px solid var(--light-purple);
        border-radius: 16px;
        /* max-width: 400px; */
        padding: 28px 16px 28px 16px;
        background-color: var(--white);
        transition: all 0.4s ease;

        &:hover {
          box-shadow: rgba(100, 100, 111, 0.15) 0px 7px 29px 0px,
            rgba(196, 163, 255, 0.4) 0px 0px 20px 6px;
        }
      `}
    >
      <Typography level="h1" sx={{ paddingBottom: "8px" }}>
        {question}
      </Typography>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          /* align-items: start; */
          gap: 10px;
        `}
      >
        {options.map((el) => (
          <Button
            variant="outlined"
            key={el}
            sx={{
              width: "100%",
              borderColor: "var(--lighter-purple)",
              color: "var(--text-gray)",
              textTransform: "capitalize",
              // Below is needed to change position of text inside button as MUI button uses inline-flex as display. If you don't use it will just display it in the center.
              // justifyContent: "flex-start",
            }}
          >
            {el}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Poll;
