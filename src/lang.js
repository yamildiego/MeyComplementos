let yearActual = new Date().getFullYear();
let lang = {
    en: {
        "nav.home": "Home",
        "nav.products": "Products",
        "nav.about_us": "About Us",
        "nav.contact_us": "Contact Us",
        "nav.search": "Search",
        "nav.search_no_found": "Sorry, we found no results for ",
        "nav.search_no_found_text": "We've looked everywhere but couldn't find any items. Check the spelling or try less specific search terms.",
        "menu_left.title": "Filter",
        "menu_left.text_one": "Don't we have what you're looking for?",
        "menu_left.text_two_part_one": "Make your order by clicking",
        "menu_left.text_two_part_two": "here!",
        "cart.total": "TOTAL",
        "cart.item": "PRODUCT",
        "cart.view_bag": "VIEW BAG",
        "line_check_out.continue_shopping": "Continue shopping",
        "line_check_out.status": ["Your Bag", "Your Details", "Confirm and Pay", "Order Confirmed"],
        "view_cart.title": "Your bag has ",
        "view_cart.empty": "Your bag is empty",
        "view_cart.continue_shopping": "Continue shopping",
        "view_cart.next": "Proceed to checkout",
        "view_cart_line.color": "Color",
        "view_cart_line.size": "Size",
        "view_cart_line.edit": "Edit",
        "view_cart_line.delete": "Delete",
        "order_summary.next": "next",
        "order_summary.title": "Order summary",
        "order_summary.products": "PRODUCTS",
        "order_summary.total_products": "Total in products",
        "order_summary.shipping": "Delivery",
        "order_summary.free": "Free",
        "order_summary.total": "Total",
        "view_article.added": "Added to your bag",
        "view_article.description": "Product details",
        "view_article.brand": "Brand",
        "view_article.add": "Add to bag",
        "view_article.edit": "Edit",
        "delivery_data.title": "Delivery details",
        "delivery_data.name": "First name",
        "delivery_data.lastname": "Last name",
        "delivery_data.country": "Country",
        "delivery_data.street": "Delivery Address",
        "delivery_data.flour": "Company / Level (if applicable)",
        "delivery_data.phone": "Mobile Phone Number",
        "delivery_data.email": "Email",
        "delivery_data.back": "Back",
        "delivery_data.next": "Next",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.send": "Send",
        "footer.copyright": "© Copyright " + yearActual + " MeyComplementos - All rights reserved.",
        // // // // // Ya se agregó uno al carrito!
        // // // // // Ya se agregó dos al carrito!
        // // // // // Ya tienes 1 en el carrito!
        // // // // // Ya tienes 5 en el carrito!


        // "ourservices.btnseemore": "See more",
        // "contact.title": "Contact",
        // "contact.subtitle": "Get in touch for any question",
        // "contact.subtitleform": "Your Details",
        // "contact.contactinformation": "Contact details",
        // "aboutus.title": "About us",1
        // "aboutus.subtitle": " ",
        // "aboutus.paragraphone": "Inspired by the force of nature I created VerdeAGOSTINI, a company dedicated 100% to renewable energy. In my passion I found a balance between generating great savings in my clients and taking care of my favorite place, the environment.",
        // "aboutus.paragraphtwo": "It is a venture, in which I am constantly training to be at the forefront of clean energy technology, creating and innovating. Growing by leaps and bounds thanks to desire, focus, effort, commitment and dedication, VerdeAGOSTINI provides first-rate sustainable energy services.",
        // "section.check1": "Return of investment in the short term",
        // "section.check2": "Preserves temperature up to 72 hours",
        // "section.check3": "Water reaches between 70 ° C and 100 ° C",
        // "section.check4": "100% Ecological does not generate CO2",
        // "section.check5": "Proven technology in more than 100 countries",
        // "section.check6": "Up to 80% savings",
        // "section.check7": "Noiseless",
        // "section.check8": "Resistant to rain wind and hail",
        // "section.check9": "Guaranteed equipment",
        // "section.check10": "25 years of useful life",
        // "footer.yamildiego": "Developed by Yamil Diego",
        // "footer.copyrightshort": "© " + yearActual + " VerdeAgostini",
    },
    es: {
        // "nav.home": "Inicio",
        // "nav.products": "Productos",
        // "nav.about": "Nosotros",
        // "nav.contact": "Contacto",
        // "ourservices.title": "Nuestros servicios",
        // "ourservices.btnseemore": "Ver más",
        // "contact.title": "Contacto",
        // "contact.subtitle": "Póngase en contacto por cualquier consulta",
        // "contact.contactinformation": "Datos de contacto",
        // "contact.subtitleform": "Tus datos",
        // "contact.form.name": "Nombre",
        // "contact.form.phone": "Teléfono",
        // "contact.form.email": "Correo electrónico",
        // "contact.form.message": "Mensaje",
        // "contact.form.send": "Enviar",
        // "aboutus.title": "¿Quienes somos?",
        // "aboutus.subtitle": " ",
        // "aboutus.paragraphone": "Inspirado por la fuerza de la naturaleza creé VerdeAGOSTINI, una empresa dedicada 100% a la energía renovable. En mi pasión encontré un equilibrio entre generar grandes ahorros en mis clientes y cuidar mi lugar preferido, el medioambiente.",
        // "aboutus.paragraphtwo": "Es un emprendimiento en el que me estoy capacitando constantemente para estar a la vanguardia de la tecnología en energía limpia, creando e innovando. Creciendo a pasos agigantados gracias al deseo, enfoque, esfuerzo, compromiso y dedicación, VerdeAGOSTINI brinda servicios energéticos sustentables de primer nivel.",
        // "section.check1": "Retorno de inversión a corto plazo",
        // "section.check2": "Conserva la temperatura hasta 72 hs",
        // "section.check3": "El agua alcanza entre 70°C y 100°C",
        // "section.check4": "100% Ecológico no genera CO2",
        // "section.check5": "Tecnología probada en mas de 100 paises",
        // "section.check6": "Hasta 80% de ahorro",
        // "section.check7": "Silencioso",
        // "section.check8": "Resistente a lluvia viento y granizo",
        // "section.check9": "Equipos con garantía",
        // "section.check10": "25 años de vida útil",
        // "footer.yamildiego": "Desarrollado por Yamil Diego",
        // "footer.copyrightshort": "© " + yearActual + " VerdeAgostini",
        // "footer.copyright": "© " + yearActual + " VerdeAgostini - Todos los derechos reservados."
    }
};
export default lang;