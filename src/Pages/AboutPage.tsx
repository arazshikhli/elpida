import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Siz mütəxəssis ilə sorğu göndərirsiz",
  "Layihə ilə bağlı məlumatları toplayırıq",
  "Ofisinizə (məkanınıza) gələrək bütün lazımi ölçüləri alırıq",
  "Reklamınızın dizayn-maketini hazırlayıb Sizinlə təsdiqləyirik",
  "Maliyyə hesablanması və detalları hazırlayırıq",
  "Layihənin istehsalı, quraşdırılması",
];
export const AboutPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 64px)",
        backgroundImage: "url('/web/hosting.jpg')",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ flex: 1 }}></Box>
      <Box
        sx={{
          flex: 6,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              xl: "50%",
            },
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginTop: "20px",
              fontSize: {
                xs: "16px",
                md: "18px",
                lg: "20px",
                xl: "22px",
              },
            }}
          >
            “Elpida Advertising” reklam şirkəti Azərbaycanda reklam istehsalı və
            quraşdırılması üzrə öz xidmətlərini təklif edir. Vizual reklamın
            hazırlanması və quraşdırılması ilə bağlı bütün fəaliyyət növləri
            üzrə ixtisaslaşmışıq.
          </Typography>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          mt={"40px"}
        >
          <Box
            sx={{
              width: "50%", // Длина линии
              height: "5px", // Толщина линии
              backgroundColor: "white", // Цвет линии
              margin: "10px auto", // Центрирование и вертикальные отступы
            }}
          />
          <Typography
            sx={{
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Vizual reklamın üstünlükləri
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Məhsulların işlənilməsi və irəli sürülməsi düşünülmüş reklam
            kampaniyasız mümkün deyil. Ətraf mühitdən gələn məlumatın 90 %
            insanlar vizual kanal vasitəsi ilə mənimsədiklərinə görə, vizual
            reklam haqla istehlakçıların diqqətinin cəlb edilməsinin və
            saxlanılmasının ən effektiv vasitəsi sayılır.
          </Typography>
          <Box
            sx={{
              width: "50%", // Длина линии
              height: "5px", // Толщина линии
              backgroundColor: "white", // Цвет линии
              margin: "10px auto", // Центрирование и вертикальные отступы
            }}
          />
          <Typography
            sx={{
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Elpida Advertising reklam şirkətinin üstünlükləri
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src="/about/6.png"
                srcSet="/about/6.png"
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Xüsusi istehsal istənilən növ reklam konsturkiyalarını
                  hazırlamağa imkan verir, o cümlədən mürəkkəb və fərdi
                  layihələri.
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src="/about/5.png"
                srcSet="/about/5.png"
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Çevik qiymət siyasəti. Bizim şirkətimizin öz yeri, nəqliyyatı
                  və istehsalatı var. Bunun nəticəsi kimi, biz qiymətdə həmişə
                  endirim edə bilirik.
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src="/about/2.png"
                srcSet="/about/2.png"
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Öz səyyar montaj briqadamız bütün quraşdırma işlərini və
                  reklam konstruksiyaların xidmətini keyfiyyətlə yerinə yetirir.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src="/about/4.png"
                srcSet="/about/4.png"
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Biz istehsal etdiyimiz reklam məhsullarımıza zəmanət veririk.
                  Bizim əməkdaşlarımız yüksək keyfiyyətli lövhələri istehsal
                  edirlər.
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src="/about/3.png"
                srcSet="/about/3.png"
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>Bakı ərazisində pulsuz çatdırılma.</Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src="/about/1.png"
                srcSet="/about/1.png"
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Reklam konstruksiyasının pulsuz dizaynı.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ width: "100%", marginTop: "10px" }}>
            <Stepper activeStep={6} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel
                    // Conditionally render label text or icons based on screen size
                    icon={
                      isSmallScreen ? (
                        <Typography sx={{ fontSize: "12px", color: "white" }}>
                          {index + 1}
                        </Typography>
                      ) : undefined
                    }
                  >
                    {!isSmallScreen && (
                      <Typography sx={{ color: "white", fontSize: "14px" }}>
                        {label}
                      </Typography>
                    )}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
      </Box>

      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};
