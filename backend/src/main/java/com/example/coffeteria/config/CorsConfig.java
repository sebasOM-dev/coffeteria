package com.example.coffeteria.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Habilita CORS para todas las rutas ("/**")
        registry.addMapping("/**")
                // Permite solicitudes desde el origen de tu aplicación Angular
                .allowedOrigins("http://localhost:4200")
                // Permite los métodos que necesitas (GET, POST, PUT, DELETE, etc.)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                // Puedes permitir cualquier encabezado
                .allowedHeaders("*")
                // Si necesitas enviar cookies o credenciales de autenticación (JWT, etc.)
                .allowCredentials(true);
    }
}