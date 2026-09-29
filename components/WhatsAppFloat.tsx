"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="hover"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.4, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/25"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.5 14.4c-.3-.15-1.75-.85-2-.95-.28-.1-.48-.15-.68.15-.2.3-.78.95-.95 1.15-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.5.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.24-.7.24-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.44 1.28 4.9L2 22l5.31-1.39c1.42.77 3.04 1.21 4.73 1.21 5.46 0 9.92-4.45 9.92-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.13c-1.55 0-3-.42-4.24-1.14l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.26-4.34c0-4.52 3.68-8.2 8.21-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.53-3.68 8.22-8.2 8.22z" />
      </svg>
    </motion.a>
  );
}
