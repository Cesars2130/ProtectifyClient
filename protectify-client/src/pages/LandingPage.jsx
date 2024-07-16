import React from "react";
import Flyer from "../components/Flyer";
import CardGeneric from "../components/CardGeneric";
import { Grid } from "@mui/material";

export default function LandingPage() {
  const cards = [
    {
      headTitle: "Misión",
      text: "Protectify es un software de seguridad doméstica enfocada en el control de accesos, detección de gases y humo e identificadores de movimiento, la información recolectada será almacenada, en una base de datos y por medio de una interfaz gráfica los usuarios podrán consultar la información procesada por el programa.",
    },
    {
      headTitle: "Visión",
      text: "Somos una compañía especializada en el desarrollo de software, dedicada a la creación de soluciones prácticas y efectivas que se ajustan perfectamente a las necesidades únicas de cada uno de nuestros clientes. Nuestra misión es integrar tecnologías de la información personalizadas, asegurando la eficiencia de los procesos y fomentando la innovación en sus negocios. Nos esforzamos por brindar un servicio excepcional, basado en la calidad y la confianza, para superar las expectativas de nuestros clientes y contribuir al éxito de sus proyectos.",
    },
    ,{
      headTitle: "Politicas",
      text: "1. Política de Calidad\n2. Política de Desarrollo y Deploy\n3. Política de Pruebas y Plan de Pruebas\n4. Política de Diseño UI/UX\n5. Política de Gestión de Ramas en Repositorios\n6. Política de Innovación y Mejora Continua\n7. Política de Relaciones con Clientes\n8. Política de Responsabilidad Social y Sostenibilidad\n9. Política de Comunicación con los Clientes\n10. Política de Personalización y Adaptabilidad\n11. Política de Garantía y Soporte Post-venta\n12. Política de Confidencialidad y Seguridad"
    }
    
  ];
  return (
    <>
      
      <Flyer></Flyer>
      <Grid container spacing={2} direction={"row"} className="container" style={
        {
          alignItems:"flex-start"
        }
      }>
        {cards.map((card) => (
          <CardGeneric key={card.headTitle} {...card} />
        ))}
      </Grid>
      <Grid container spacing={2} direction={"row"} className="container" style={
        {
          alignItems:"flex-start"
        }
      }>
   
      </Grid>
      
    </>
  );
}
