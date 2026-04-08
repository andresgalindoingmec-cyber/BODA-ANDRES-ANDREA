import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const fechaBoda = new Date("2026-09-26T18:00:00");
  const telefono = "618469154";

  const [tiempo, setTiempo] = useState({});

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date();
      const diferencia = fechaBoda - ahora;

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
      const segundos = Math.floor((diferencia / 1000) % 60);

      setTiempo({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const confirmarWhatsApp = () => {
    const mensaje = encodeURIComponent("¡Hola! Confirmo mi asistencia a vuestra boda 💍");
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
  };

  return (
    <div style={{textAlign:"center", padding:"20px"}}>
      <h1>💍 ¡Nos casamos! 💍</h1>
      <h2>Andrés & Andrea</h2>
      <p>26 septiembre 2026 - 18:00</p>

      <p>{tiempo.dias}d {tiempo.horas}h {tiempo.minutos}m {tiempo.segundos}s</p>

      <iframe
        src="https://www.google.com/maps?q=Torquemada,+C.+Bo.+García,+12,+34230+Torquemada,+Palencia&output=embed"
        width="100%"
        height="250"
      ></iframe>

      <br /><br />

      <button onClick={confirmarWhatsApp}>
        Confirmar por WhatsApp
      </button>

      <p>Habrá opción de autobús hasta el lugar del evento</p>
    </div>
  );
}
