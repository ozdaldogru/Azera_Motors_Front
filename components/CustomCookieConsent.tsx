"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CustomCookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie.split("; ").find(row => row.startsWith("cookieConsent="));
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = "cookieConsent=accepted; max-age=" + 60 * 60 * 24 * 150;
    setIsVisible(false);
  };

  const handleRefuse = () => {
    document.cookie = "cookieConsent=refused; max-age=" + 60 * 60 * 24 * 150;
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        maxWidth: "500px",
        width: "100%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <h2 style={{ marginBottom: "10px" }}>We use cookies</h2>
        <p style={{ marginBottom: "20px" }}>
          This website uses cookies to enhance the user experience and to analyze performance and traffic on our website. 
          By clicking "Accept", you consent to the use of cookies. For more information, please visit our 
          <Link href="/privacy-policy" style={{ color: "#007BFF", textDecoration: "none", marginLeft: "5px" }}>Privacy Policy</Link>.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={handleAccept} style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Accept
          </button>
          <button onClick={handleRefuse} style={{ padding: "10px 20px", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Refuse
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCookieConsent;