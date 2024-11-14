import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdvertTypes } from "../components/AdvertTypes";
import { WebServices } from "../components/WebServices";
import "./style.css";
export const HomePage = () => {
  const text = "BBiznesiniz üçün müasir həllər...";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    let isTyping = true; // флаг для отслеживания, печатаем ли мы или сбрасываем
    let interval: NodeJS.Timeout;

    const startTypingEffect = () => {
      interval = setInterval(() => {
        if (isTyping) {
          setDisplayedText((prev) => prev + text.charAt(index)); // добавляем символ
          index += 1;
          if (index === text.length) {
            isTyping = false; // как только текст напечатан, переключаем флаг
            setTimeout(() => {
              setDisplayedText(""); // очищаем текст
              index = 0; // сбрасываем индекс для повторной печати
              isTyping = true; // включаем печать снова
            }, 1000); // задержка перед сбросом текста (1 секунда)
          }
        }
      }, 100); // каждые 100 мс добавляем символ
    };

    startTypingEffect();

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, []); // запускается только один раз при монтировании компонента
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: 'url("./info_bg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          height: "200px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Playwrite GB S", cursive',
            fontSize: {
              sx: "30px",
              md: "30px",
              lg: "50px",
            },
          }}
        >
          {displayedText}
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box
          height={600}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                fontSize: {
                  sx: "50px",
                  md: "60px",
                  lg: "70px",
                },
                color: "#4E4D70",
                fontFamily: '"Playwrite GB S", cursive',
                fontWeight: 600,
              }}
            >
              Media Bələdçiniz
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "600px", // максимальная ширина
              width: "100%", // растягиваем изображение по ширине
              height: "auto", // сохраняем пропорции
              "@media (max-width: 600px)": {
                maxWidth: "100%", // на маленьких экранах 100% ширины
              },
              "@media (max-width: 400px)": {
                maxWidth: "90%", // на очень маленьких экранах 90% ширины
              },
            }}
          >
            <img
              src="./media-info.png"
              alt="Responsive Image"
              style={{
                width: "100%", // изображение растягивается на весь контейнер
                height: "auto", // сохраняем пропорции
              }}
            />
          </Box>
        </Box>
        <AdvertTypes />
        <WebServices />
      </Box>
    </Box>
  );
};

// <div className="typing-effect">
//   <span>{displayedText}</span>
//   <span className="cursor">|</span>
// </div>;
