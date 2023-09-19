import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Link as MUILink,
  Typography,
} from "@suid/material";
import { JokesResponse } from "../../types/pocketbase-types";
import { UserExpand } from "../../types/query-types";
import { A } from "@solidjs/router";
import { AiFillCalendar } from "solid-icons/ai";
import { BiSolidComment } from "solid-icons/bi";
import {
  RiUserFacesEmotionLaughFill,
  RiHealthMedicalZzzFill,
} from "solid-icons/ri";

import { format } from "date-fns";

export default function JokeCard({ ...props }: JokesResponse<UserExpand>) {
  const date = new Date(props.created);
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: "70%",
        background: "#7851A9",
        paddingX: "2rem",
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          sx={{ fontSize: 48 }}
          fontWeight={500}
          color="#FFFDF9"
          textAlign="left"
        >
          {props.joke}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "5px" }}>
          <Typography
            variant="h4"
            sx={{ fontSize: 24, opacity: "80%" }}
            fontWeight="normal"
            color="#FFFDF9"
            textAlign="left"
            gutterBottom
          >
            Made by
          </Typography>
          <MUILink
            as={A}
            href={`/users/${props.expand?.user.id}`}
            sx={{
              fontSize: 24,
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            @{props.expand?.user.username}
          </MUILink>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton
            onClick={() => (location.href = `/jokes/${props.id}`)}
            aria-label="comments"
            sx={{ color: "white" }}
          >
            <BiSolidComment />
            <Typography marginLeft={"5px"}>1</Typography>
          </IconButton>
          <IconButton aria-label="like" sx={{ color: "white" }}>
            <RiUserFacesEmotionLaughFill color="white" />
            <Typography marginLeft={"5px"}>1</Typography>
          </IconButton>
          <IconButton aria-label="dislike" sx={{ color: "white" }}>
            <RiHealthMedicalZzzFill width="1.3em" color="white" />
            <Typography marginLeft={"5px"}>1</Typography>
          </IconButton>
        </Box>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          <AiFillCalendar width="1.3em" style={{ "padding-bottom": "3px" }} />
          {format(date, "hh:mm bbbb - d MMM yyyy")}
        </Typography>
      </CardActions>
    </Card>
  );
}
