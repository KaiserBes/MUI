"use client";
import Header from "./components/Header";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <>
      <Header />
      <Stack
        direction="row"
        spacing={2}
        className="w-full   mt-5 justify-center px-8 items-center sm:gap-5 md:gap-10"
      >
        <Item className="shadow-none">
          <div className="">
            <Avatar className="h-[70px] w-[70px]" />
            <p className="mt-3 font-bold text-black">nicknamelike</p>
          </div>
        </Item>
        <Item className="shadow-none">
          <div className="flex h-full justify-center gap-5">
            <div className="">
              <p className="text-3xl text-black font-bold">2</p>
              <p className="text-xs mt-3">Vouched</p>
            </div>
            <div className="">
              <p className="text-3xl text-black font-bold">2</p>
              <p className="text-xs mt-3">Received</p>
            </div>
          </div>
        </Item>
        <Item className="shadow-none">
          <div className="h-full flex  flex-col	 justify-center items-center">
            <div className="text-4xl">
              <StarBorderRoundedIcon fontSize="" className="cursor-pointer" />
            </div>
            <div className="text-3xl mt-4">
              <MailOutlineRoundedIcon fontSize="" className="cursor-pointer" />
            </div>
          </div>
        </Item>
      </Stack>
      <Stack
        direction={"row"}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        className="w-full flex justify-between px-[50px] mt-[30px]"
      >
        <Button className="text-black">Coins</Button>
        <Button className="text-black underline	">Collectables</Button>
        <Button className="text-black">Offers</Button>
      </Stack>
      <div className="flex gap-[45px] w-[70%] mx-auto justify-center flex-wrap mt-[50px] xl:justify-between">
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
