const translations = {
pt: {
navHome:"Início",navProducts:"Produtos",navAbout:"Sobre",navContact:"Contato",login:"Entrar",signup:"Criar conta",
eyebrow:"TECNOLOGIA QUE CONECTA NEGÓCIOS",heroTitle:'Conversas inteligentes.<br><span>Mais vendas.</span>',heroText:"Automatize o atendimento, simplifique processos e crie experiências melhores para seus clientes com soluções inteligentes.",explore:"Conheça nossas soluções",discover:"Descubra a ZENVORA",heroNote:"Uma plataforma. Soluções para diferentes negócios.",visualCard1:"Atendimento inteligente",visualCard2:"Experiências conectadas",
productsEyebrow:"ECOSSISTEMA ZENVORA",productsTitle:'Uma solução para cada<br><span>tipo de negócio.</span>',productsIntro:"Conheça nossa família de produtos. Cada solução é pensada para atender às necessidades de um setor específico.",
fashionDesc:"Atendimento inteligente para lojas de roupas, moda e acessórios.",fashionTag:"MODA & VAREJO",foodDesc:"Experiências práticas de atendimento para restaurantes e delivery.",foodTag:"RESTAURANTES",gamingDesc:"Ferramentas inteligentes para organizar comunidades e grupos de jogos.",gamingTag:"GAMES & COMUNIDADES",hotelsDesc:"Comunicação mais simples para hotéis, pousadas e hospedagens.",hotelsTag:"HOSPITALIDADE",barberDesc:"Atendimento e organização para barbearias e salões de beleza.",barberTag:"BELEZA & BEM-ESTAR",
aboutEyebrow:"SOBRE A ZENVORA",aboutTitle:'Tecnologia com propósito.<br><span>Conexões que evoluem.</span>',aboutText:"A ZENVORA está construindo um ecossistema de soluções digitais para ajudar negócios a atender melhor, trabalhar com mais eficiência e crescer com confiança.",aboutFoot:"SMART CONVERSATIONS. MORE SALES.",ctaEyebrow:"O PRÓXIMO PASSO COMEÇA AQUI",ctaTitle:'Vamos transformar<br><span>o seu atendimento?</span>',ctaText:"Nossa plataforma está em desenvolvimento. Em breve, você poderá criar sua conta e conhecer todos os recursos disponíveis.",talkToUs:"Fale com a ZENVORA",support:"Falar com o suporte ↗",rights:"Todos os direitos reservados."
},
es: {
navHome:"Inicio",navProducts:"Productos",navAbout:"Nosotros",navContact:"Contacto",login:"Entrar",signup:"Crear cuenta",
eyebrow:"TECNOLOGÍA QUE CONECTA NEGOCIOS",heroTitle:'Conversaciones inteligentes.<br><span>Más ventas.</span>',heroText:"Automatiza la atención, simplifica procesos y crea mejores experiencias para tus clientes con soluciones inteligentes.",explore:"Conoce nuestras soluciones",discover:"Descubre ZENVORA",heroNote:"Una plataforma. Soluciones para diferentes negocios.",visualCard1:"Atención inteligente",visualCard2:"Experiencias conectadas",
productsEyebrow:"ECOSISTEMA ZENVORA",productsTitle:'Una solución para cada<br><span>tipo de negocio.</span>',productsIntro:"Conoce nuestra familia de productos. Cada solución está pensada para las necesidades de un sector específico.",
fashionDesc:"Atención inteligente para tiendas de ropa, moda y accesorios.",fashionTag:"MODA Y COMERCIO",foodDesc:"Experiencias prácticas de atención para restaurantes y delivery.",foodTag:"RESTAURANTES",gamingDesc:"Herramientas inteligentes para organizar comunidades y grupos de juegos.",gamingTag:"JUEGOS Y COMUNIDADES",hotelsDesc:"Comunicación más sencilla para hoteles, posadas y alojamientos.",hotelsTag:"HOSPITALIDAD",barberDesc:"Atención y organización para barberías y salones de belleza.",barberTag:"BELLEZA Y BIENESTAR",
aboutEyebrow:"SOBRE ZENVORA",aboutTitle:'Tecnología con propósito.<br><span>Conexiones que evolucionan.</span>',aboutText:"ZENVORA está construyendo un ecosistema de soluciones digitales para ayudar a los negocios a atender mejor, trabajar con más eficiencia y crecer con confianza.",aboutFoot:"SMART CONVERSATIONS. MORE SALES.",ctaEyebrow:"EL PRÓXIMO PASO EMPIEZA AQUÍ",ctaTitle:'¿Transformamos<br><span>tu atención al cliente?</span>',ctaText:"Nuestra plataforma está en desarrollo. Próximamente podrás crear tu cuenta y conocer todas las funciones disponibles.",talkToUs:"Habla con ZENVORA",support:"Contactar soporte ↗",rights:"Todos los derechos reservados."
},
en: {
navHome:"Home",navProducts:"Products",navAbout:"About",navContact:"Contact",login:"Log in",signup:"Create account",
eyebrow:"TECHNOLOGY THAT CONNECTS BUSINESSES",heroTitle:'Smart conversations.<br><span>More sales.</span>',heroText:"Automate customer service, simplify processes and create better customer experiences with intelligent solutions.",explore:"Explore our solutions",discover:"Discover ZENVORA",heroNote:"One platform. Solutions for different businesses.",visualCard1:"Intelligent service",visualCard2:"Connected experiences",
productsEyebrow:"THE ZENVORA ECOSYSTEM",productsTitle:'One solution for every<br><span>kind of business.</span>',productsIntro:"Meet our family of products. Each solution is designed for the needs of a specific industry.",
fashionDesc:"Intelligent customer service for clothing, fashion and accessory stores.",fashionTag:"FASHION & RETAIL",foodDesc:"Practical customer service experiences for restaurants and delivery businesses.",foodTag:"RESTAURANTS",gamingDesc:"Smart tools to organize gaming communities and groups.",gamingTag:"GAMES & COMMUNITIES",hotelsDesc:"Simpler communication for hotels, inns and accommodations.",hotelsTag:"HOSPITALITY",barberDesc:"Customer service and organization for barbershops and beauty salons.",barberTag:"BEAUTY & WELLNESS",
aboutEyebrow:"ABOUT ZENVORA",aboutTitle:'Technology with purpose.<br><span>Connections that evolve.</span>',aboutText:"ZENVORA is building an ecosystem of digital solutions to help businesses serve customers better, work more efficiently and grow with confidence.",aboutFoot:"SMART CONVERSATIONS. MORE SALES.",ctaEyebrow:"YOUR NEXT STEP STARTS HERE",ctaTitle:'Let’s transform<br><span>your customer service.</span>',ctaText:"Our platform is in development. Soon, you will be able to create an account and explore all available features.",talkToUs:"Talk to ZENVORA",support:"Contact support ↗",rights:"All rights reserved."
}
};
const selector=document.getElementById("languageSelect");
function setLanguage(lang){
 const dict=translations[lang]||translations.pt;
 document.documentElement.lang=lang==="pt"?"pt-BR":lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(dict[key]!==undefined)el.innerHTML=dict[key]});
 localStorage.setItem("zenvora-language",lang);selector.value=lang;
}
selector.addEventListener("change",e=>setLanguage(e.target.value));
setLanguage(localStorage.getItem("zenvora-language")||"pt");
document.getElementById("year").textContent=new Date().getFullYear();
const toggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
document.querySelectorAll('a[href="#account"]').forEach(a=>a.addEventListener("click",e=>{e.preventDefault();alert(translations[selector.value].ctaText)}));
