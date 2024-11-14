import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dialog, DialogContent } from "@mui/material";

import {
  Navigation,
  Pagination,
  EffectFade,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { sliderData } from "../cardData";
import "./style.css";

interface ISlide {
  imageUrl: string;
}

export const GalleryPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:600px) and (max-width:960px)"
  );
  const [openSocar, setOpenSocar] = useState(false);
  const [openHomme, setOpenHomme] = useState(false);
  const [openMado, setOpenMado] = useState(false);

  const handleClickOpenSocar = () => {
    setOpenSocar(true);
  };
  const handleClickOpenHomme = () => {
    setOpenHomme(true);
  };
  const handleClickOpenMado = () => {
    setOpenMado(true);
  };

  const handleCloseSocar = () => {
    setOpenSocar(false);
  };
  const handleCloseHomme = () => {
    setOpenHomme(false);
  };
  const handleCloseMado = () => {
    setOpenMado(false);
  };
  // Determine the number of slides to show based on screen size
  const slidesPerView = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 64px)",
        backgroundImage: "url('/gallery/bg-gallery.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ flex: 1 }}></Box>
      <Box
        sx={{
          flex: 5,
          display: "flex",
          marginTop: "20px",
          flexDirection: "column",
          justifyContent: "center", // Centers Swiper horizontally
          alignItems: "center", // Centers Swiper vertically
        }}
      >
        <Typography
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "30px",
            letterSpacing: "2px",
            fontWeight: "600",
            fontFamily: "Playwrite GB S, cursive",
          }}
        >
          İşlərimizdən
        </Typography>
        <Swiper
          grabCursor={true}
          effect={"creative"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay, Pagination, Navigation]}
          style={{
            width: "600px", // Adjust to control Swiper width
            height: "400px", // Adjust to control Swiper height
          }}
        >
          {sliderData &&
            sliderData.map((slideItem: ISlide, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%", // Fill the SwiperSlide height
                  }}
                >
                  <img
                    className="imageClass"
                    src={slideItem.imageUrl}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }} // Adjust to fit the image
                  />
                </Box>
              </SwiperSlide>
            ))}
        </Swiper>
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <img
            src="/gallery/homme-stand.jpeg"
            width={300}
            height={300}
            onClick={handleClickOpenHomme}
            style={{ cursor: "pointer" }}
          />
          <img
            src="/gallery/mado-stand.jpeg"
            width={300}
            height={300}
            onClick={handleClickOpenMado}
            style={{ cursor: "pointer" }}
          />
          <img
            src="/gallery/socar-stand.jpeg"
            width={300}
            height={300}
            onClick={handleClickOpenSocar}
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <img src="/gallery/homme.png" width={200} />
          <img src="/gallery/mado.png" width={200} />
          <img src="/gallery/socar.webp" width={200} />

          <Dialog open={openSocar} onClose={handleCloseSocar} maxWidth="xl">
            <DialogContent>
              <img
                src="/gallery/socar-stand.jpeg"
                alt="Full Screen"
                style={{ width: "100%", height: "calc(100vh - 100px)" }}
              />
            </DialogContent>
          </Dialog>
          <Dialog open={openHomme} onClose={handleCloseHomme} maxWidth="xl">
            <DialogContent>
              <img
                src="/gallery/homme-stand.jpeg"
                alt="Full Screen"
                style={{ width: "100%", height: "calc(100vh - 100px)" }}
              />
            </DialogContent>
          </Dialog>

          <Dialog open={openMado} onClose={handleCloseMado} maxWidth="xl">
            <DialogContent>
              <img
                src="/gallery/mado-stand.jpeg"
                alt="Full Screen"
                style={{ width: "100%", height: "calc(100vh - 100px)" }}
              />
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};
