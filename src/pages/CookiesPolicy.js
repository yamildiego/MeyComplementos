import React from 'react';
import Constants from '../config';
import './../components/styles/CookiesPolicy.css';

const CookiesPolicy = () => {
    return (
        <div className="Contact container">
            <div className="CookiesPolicy">
                <h2>Política de Cookies de {Constants.urlVisible}.</h2>
                <p>En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, {Constants.urlVisible} informa, en esta sección, sobre la política de recogida y tratamiento de cookies.</p>
                <p>Al entrar en esta web ya has sido informado sobre la utilización de las cookies a través de un aviso o alerta. Si has accedido y sigues navegando, estás aceptando la instalación de estas cookies.</p>
                <p>&nbsp;</p>
                <h3>¿Qué son las cookies?</h3>
                <p>Una cookie es un fichero que se descarga en tu ordenador o equipo al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación del Usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice tu equipo, pueden utilizarse para reconocer al Usuario.</p>
                <p>&nbsp;</p>
                <h3>¿Qué tipos de cookies utiliza esta página web?</h3>
                <p>{Constants.urlVisible} utiliza los siguientes tipos de cookies:</p>
                <p>Cookies de análisis: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que te ofrecemos.</p>
                <p>Cookies técnicas: Son aquellas que permiten al usuario la navegación a través del área restringida y la utilización de sus diferentes funciones, como por ejemplo, llevar a cambio el proceso de compra de un artículo.</p>
                <p>Cookies de personalización: Son aquellas que permiten al Usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma o el tipo de navegador a través del cual se conecta al servicio.</p>
                <p>Cookies publicitarias: Son aquéllas que, bien tratadas por esta web o por terceros, permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realices de nuestra página web. Para ello podemos analizar tus hábitos de navegación en Internet y podemos mostrarte publicidad relacionada con tu perfil de navegación.</p>
                <p>Cookies de publicidad comportamental: Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Este tipo de cookies almacenan información del comportamiento de los visitantes obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar avisos publicitarios en función del mismo.</p>
                <p>&nbsp;</p>
                <h3>Desactivar las cookies.</h3>
                <p>El Usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
                <p>En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.</p>
                <p>A continuación puedes acceder a la configuración de los navegadores webs más frecuentes para aceptar, instalar o desactivar las cookies:</p>
                <ul>
                    <li><a target="_blank" href="https://support.google.com/chrome/answer/95647?hl=es">Configurar cookies en Google Chrome</a></li>
                    <li><a target="_blank" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&amp;redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we">Configurar cookies en MozillaFirefox</a></li>
                    <li><a target="_blank" href="https://support.apple.com/es-es/HT201265">Configurar cookies en Safari (Apple)</a></li>
                </ul>
                <p>&nbsp;</p>
                <h3>Cookies de terceros.</h3>
                <p>En concreto, usamos los servicios de Google Adsense y de Google Analytics para nuestras estadísticas y publicidad. Algunas cookies son esenciales para el funcionamiento del sitio, por ejemplo el buscador incorporado.</p>
                <p>Nuestro sitio incluye otras funcionalidades proporcionadas por terceros. El Usuario puede fácilmente compartir el contenido en redes sociales como Facebook, Twitter o Google +, con los botones que hemos incluido a tal efecto.</p>
                <p>&nbsp;</p>
                <h3>Advertencia sobre eliminar cookies.</h3>
                <p>El Usuario puede eliminar y bloquear todas las cookies de este sitio, pero parte del sitio no funcionará o la calidad de la página web y de los Contenidos pueden verse afectados.</p>
                <p>&nbsp;</p>
            </div>
        </div>
    )
}

export default CookiesPolicy;