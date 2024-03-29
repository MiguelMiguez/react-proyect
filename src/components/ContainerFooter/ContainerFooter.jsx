import React from 'react';
import './ContainerFooter.css'

const ContainerFooter = () => {
  return (
    <div>
        <footer>
            <div className="contact-info">
            <p>Contáctanos: contacto@iphonezs.com</p>
            <p>Teléfono: 11-7456-7890</p>
            </div>
            <nav className="footer-nav">
            <ul>
                <li><a href="#">Términos y condiciones</a></li>
                <li><a href="#">Política de privacidad</a></li>
                <li><a href="#">Ayuda</a></li>
                <li><a href="#">Soporte</a></li>
            </ul>
            </nav>
            <p>&copy; 2024 IphoneZS. Todos los derechos reservados.</p>
        </footer>
    </div>
  )
}

export default ContainerFooter