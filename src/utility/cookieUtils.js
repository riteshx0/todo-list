// Utility to set token in cookie
 export const setTokenCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // HTTPS in production
    sameSite: "strict", // Prevent CSRF
    maxAge: 3600000, // 1 hour
  });
};