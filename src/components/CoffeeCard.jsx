import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";

const CoffeeCard = (props) => {
  const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    btnStyles: (props) => {
      return {
        color: props.clicked ? "blue" : "red",
        [theme.breakpoints.down("sm")]: {
          color: "black",
        },
        fontWeight: props.clicked ? "bold" : "inherit",
      };
    },
  }));
  const classes = useStyles(props);
  const { avatarSrc, title, price, description, imgSrc } = props;
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={avatarSrc}
          />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia className={classes.media} image={imgSrc} />
      <CardContent>
        <Typography color="textSecondary" variant="subtitle2" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.btnStyles}>
          BUY NOW
        </Button>
        <Button size="small" className={classes.btnStyles}>
          OFFER
        </Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
