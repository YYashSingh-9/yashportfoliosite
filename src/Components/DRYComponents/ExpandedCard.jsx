import { Button, Grid } from "@mui/material";
import classes from "./ExpandedCard.module.css";

const ExpandedCard = (props) => {
  return (
    <>
      <Grid container className={parent_Container}>
        <Grid item xs={12} className={classes.img_container}></Grid>
        <Grid item xs={12} className={classes.card_info}>
          <h3>Title</h3>
          <p>
            Avoid labeling these experiences with terms like "Other" or "Misc."
            Using structured titles like Product & Market Insights, Venture
            Execution, and Event Production & Operations keeps the tone highly
            professional and executive-focused. Led a multi-person ground team,
            negotiated vendor contracts, and coordinated stage/sound
            infrastructure under strict deadlines. Outcome: Successfully
            executed a flagship city event, reaching maximum venue capacity
            while operating within target budget constraints.
          </p>
        </Grid>
        <Grid item xs={12} className={classes.cardButton}>
          <Button href={props.link}>Visit Project</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ExpandedCard;
