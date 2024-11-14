import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}
export const EmailPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    mode: "onTouched",
  });
  const submit: SubmitHandler<FormData> = (data) => {
    emailjs
      .send(
        "service_44xb8n6", // Replace with your service ID
        "template_6ex504d", // Replace with your template ID
        {
          name: data.name,
          mobile: data.mobile,
          email: data.email,
          message: data.message,
        },
        "rLSDJBWWKoKa9-j4K" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
          reset(); // Clear the form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Error sending email. Please try again.");
        }
      );
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('./web/about.webp')",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: {
            xs: "20px", // для экранов extra-small (мобильные устройства)
            sm: "24px", // для экранов small (планшеты)
            md: "28px", // для экранов medium (ноутбуки и десктопы)
            lg: "34px", // для экранов large (большие мониторы)
          },
        }}
      >
        Bizə yazın
      </Typography>
      <Box
        component={"form"}
        sx={{
          display: "flex",
          position: "relative",
          width: {
            xs: "250px",
            sm: "350px",
            md: "400px",
            lg: "600px",
          },
          flexDirection: "column",
          backgroundColor: "#F9FAFB",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "2em",
          padding: "2em",
          height: "500px", // Занимаем всю доступную высоту
          gap: 2,
        }}
        onSubmit={handleSubmit(submit)}
      >
        <Box sx={{ width: "80%" }}>
          <TextField
            fullWidth
            {...register("name")}
            label="Adınızı daxil edin"
            helperText={errors?.name?.message}
          />
        </Box>
        <Box sx={{ width: "80%" }}>
          <TextField
            fullWidth
            {...register("mobile")}
            label="Əlaqə telefonu qeyd edin"
            type="tel"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+994</InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ width: "80%" }}>
          <TextField fullWidth label="Email" {...register("email")} />
        </Box>
        <Box sx={{ width: "80%" }}>
          <TextField
            fullWidth
            label="Mesajınızı daxil edin"
            {...register("message")}
          />
        </Box>
        <Box sx={{ width: "80%" }}>
          <Button type="submit" variant="contained">
            Gönərmək
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
