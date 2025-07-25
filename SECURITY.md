# 🛡️ Política de Seguridad

Este proyecto prioriza la seguridad de los datos y la protección de la información de los usuarios, especialmente en el formulario de contacto y cualquier funcionalidad que procese datos personales.

## Reporte de Vulnerabilidades

Si encuentras una vulnerabilidad o problema de seguridad, por favor:

1. **No abras un issue público.**
2. Envía un correo a [tu-email@dominio.com] con los detalles.
3. Proporciona información suficiente para reproducir el problema.
4. Espera confirmación y seguimiento del equipo de desarrollo.

## Prácticas de Seguridad

- **Validación de datos:** Todos los datos enviados a través del formulario de contacto son validados tanto en el frontend como en el backend (si aplica).
- **Protección contra XSS:** Se sanitizan los campos de entrada para evitar inyección de scripts.
- **Protección contra SPAM:** Se recomienda implementar reCAPTCHA o servicios antispam en producción.
- **No almacenar datos sensibles:** El formulario no almacena contraseñas ni información crítica.
- **Uso de HTTPS:** Se recomienda desplegar siempre bajo HTTPS para cifrado de datos en tránsito.
- **Actualizaciones:** Mantén las dependencias y librerías actualizadas para evitar vulnerabilidades conocidas.

## Alcance

Esta política cubre:

- Formulario de contacto (`components/ContactForm.tsx`)
- Cualquier endpoint o API que procese datos de usuarios

## Exclusiones

- No se garantiza soporte para forks o implementaciones personalizadas fuera del repositorio oficial.

## Recursos

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/advanced-features/security)

---

Gracias por ayudar a mantener este proyecto seguro para todos.
