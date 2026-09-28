"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function ProcessStepsSection({
  id = "process",
  badge = "How It Works",
  title = "Our Simple Accounting Process",
  subtitle = "From understanding your needs to managing ongoing accounting work, our structured process helps ensure a smooth transition, clear communication, and support that fits your existing workflows.",
  steps = [],
  autoScrollDelay = 2000,
  maxWidth = "xl",
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [inView, setInView] = React.useState(false);
  const sectionRef = React.useRef(null);

  // Intersection observer for entrance animations
  React.useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id={id}
      ref={sectionRef}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth={maxWidth}>
        {/* Header Block */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Pill Badge */}
          {badge && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#EAF7E8",
                border: "1px solid rgba(106, 190, 82, 0.25)",
                borderRadius: "9999px",
                px: 2,
                py: 0.65,
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#6ABE52",
                  letterSpacing: "0.01em",
                }}
              >
                {badge}
              </Typography>
            </Box>
          )}

          {/* Heading */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontSize: { xs: "1.95rem", sm: "2.35rem", md: "2.75rem" },
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#0F172A",
              letterSpacing: "-0.02em",
              mb: 2,
            }}
          >
            {title}
          </Typography>

          {/* Subtitle */}
          {subtitle && (
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.6,
                color: "#475467",
                maxWidth: "780px",
                mx: "auto",
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {/* Desktop View: 5-Column Grid (md+) */}
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
            gap: 2.5,
            width: "100%",
          }}
        >
          {steps.map((item, index) => (
            <Box
              key={item.step || index}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #EAECF0",
                p: { md: 2.5, lg: 3 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "100%",
                minHeight: "250px",
                position: "relative",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(25px)",
                transitionDelay: `${index * 80}ms`,
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 14px 30px -4px rgba(106, 190, 82, 0.16)",
                  borderColor: "#6ABE52",
                  "& .step-icon-box": {
                    transform: "scale(1.1) rotate(4deg)",
                    backgroundColor: "#6ABE52",
                    color: "#FFFFFF",
                  },
                  "& .step-number": {
                    color: "rgba(106, 190, 82, 0.35)",
                  },
                },
              }}
            >
              {/* Top Row: Icon + Step Number */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {/* Rounded Icon Box */}
                <Box
                  className="step-icon-box"
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: "12px",
                    backgroundColor: "#EAF7E8",
                    color: "#6ABE52",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    "& svg": {
                      fontSize: 24,
                    },
                  }}
                >
                  {item.icon}
                </Box>

                {/* Step Number (e.g. 01, 02) */}
                <Typography
                  className="step-number"
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { md: "2rem", lg: "2.25rem" },
                    fontWeight: 700,
                    color: "#E2E8F0",
                    lineHeight: 1,
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.step}
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#0F172A",
                  lineHeight: 1.3,
                  mt: 3,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: "1rem",
                  color: "#475467",
                  lineHeight: 1.55,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Mobile View: Swiper with Auto-Scroll every 2s & Progress Bar (xs to sm) */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            width: "100%",
          }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: autoScrollDelay,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1.22}
            spaceBetween={16}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            style={{ paddingBottom: "8px", paddingTop: "4px" }}
          >
            {steps.map((item, index) => (
              <SwiperSlide key={item.step || index} style={{ height: "auto" }}>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    border: "1px solid #EAECF0",
                    p: 2.75,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    height: "100%",
                    minHeight: "240px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#6ABE52",
                    },
                  }}
                >
                  {/* Top Row: Icon + Step Number */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: "12px",
                        backgroundColor: "#EAF7E8",
                        color: "#6ABE52",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "& svg": {
                          fontSize: 24,
                        },
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontFamily:
                          'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#E2E8F0",
                        lineHeight: 1,
                      }}
                    >
                      {item.step}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      lineHeight: 1.3,
                      mt: 3,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: "0.885rem",
                      color: "#475467",
                      lineHeight: 1.55,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dynamic Progress Bar (Matching Image 2) */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "320px",
              height: "5px",
              backgroundColor: "#EAF7E8",
              borderRadius: "9999px",
              overflow: "hidden",
              mt: 3,
              mx: "auto",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: `${((activeIndex + 1) / steps.length) * 100}%`,
                backgroundColor: "#6ABE52",
                borderRadius: "9999px",
                transition: "width 0.4s ease",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
