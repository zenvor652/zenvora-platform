const SUPABASE_URL = "https://hydjfbndetixmnyannrr.supabase.co";
const SUPABASE_KEY = "sb_publishable_3GWjPvowFlbbt6lCIwJksg_lcV6EUcm";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const translations = {
  pt: {
    navHome:"Início",navProducts:"Produtos",navAbout:"Sobre",navContact:"Contato",
    login:"Entrar",signup:"Criar conta",
    eyebrow:"TECNOLOGIA QUE CONECTA NEGÓCIOS",
    heroTitle:'Conversas inteligentes.<br><span>Mais vendas.</span>',
    heroText:"Automatize o atendimento, simplifique processos e crie experiências melhores para seus clientes com soluções inteligentes.",
    explore:"Conheça nossas soluções",discover:"Descubra a ZENVORA",
    heroNote:"Uma plataforma. Soluções para diferentes negócios.",
    visualCard1:"Atendimento inteligente",visualCard2:"Experiências conectadas",
    productsEyebrow:"ECOSSISTEMA ZENVORA",
    productsTitle:'Uma solução para cada<br><span>tipo de negócio.</span>',
    productsIntro:"Conheça nossa família de produtos. Cada solução é pensada para atender às necessidades de um setor específico.",
    fashionDesc:"Atendimento inteligente para lojas de roupas, moda e acessórios.",fashionTag:"MODA & VAREJO",
    foodDesc:"Experiências práticas de atendimento para restaurantes e delivery.",foodTag:"RESTAURANTES",
    gamingDesc:"Ferramentas inteligentes para organizar comunidades e grupos de jogos.",gamingTag:"GAMES & COMUNIDADES",
    hotelsDesc:"Comunicação mais simples para hotéis, pousadas e hospedagens.",hotelsTag:"HOSPITALIDADE",
    barberDesc:"Atendimento e organização para barbearias e salões de beleza.",barberTag:"BELEZA & BEM-ESTAR",
    aboutEyebrow:"SOBRE A ZENVORA",
    aboutTitle:'Tecnologia com propósito.<br><span>Conexões que evoluem.</span>',
    aboutText:"A ZENVORA está construindo um ecossistema de soluções digitais para ajudar negócios a atender melhor, trabalhar com mais eficiência e crescer com confiança.",
    aboutFoot:"SMART CONVERSATIONS. MORE SALES.",
    ctaEyebrow:"O PRÓXIMO PASSO COMEÇA AQUI",
    ctaTitle:'Vamos transformar<br><span>o seu atendimento?</span>',
    ctaText:"Crie sua conta para começar a conhecer a plataforma ZENVORA.",
    support:"Falar com o suporte ↗",rights:"Todos os direitos reservados.",
    authLogin:"Entrar na ZENVORA",authSignup:"Criar sua conta",
    authLoginDescription:"Acesse sua conta ZENVORA.",
    authSignupDescription:"Crie sua conta para começar.",
    email:"E-mail",password:"Senha",submitLogin:"Entrar",
    submitSignup:"Criar conta",switchSignup:"Não tem uma conta? Criar conta",
    switchLogin:"Já tem uma conta? Entrar",logout:"Sair da conta",
    loading:"Aguarde...",signupSuccess:"Conta criada! Verifique seu e-mail para confirmar o cadastro.",
    loginSuccess:"Login realizado com sucesso!",
    logoutSuccess:"Você saiu da sua conta.",
    loginError:"Não foi possível entrar. Confira seu e-mail e senha.",
    signupError:"Não foi possível criar a conta.",
    sessionText:"Você está conectado como:",
    profileError:"Sua conta foi criada, mas não foi possível salvar o perfil."
  },

  es: {
    navHome:"Inicio",navProducts:"Productos",navAbout:"Nosotros",navContact:"Contacto",
    login:"Entrar",signup:"Crear cuenta",
    eyebrow:"TECNOLOGÍA QUE CONECTA NEGOCIOS",
    heroTitle:'Conversaciones inteligentes.<br><span>Más ventas.</span>',
    heroText:"Automatiza la atención, simplifica procesos y crea mejores experiencias para tus clientes con soluciones inteligentes.",
    explore:"Conoce nuestras soluciones",discover:"Descubre ZENVORA",
    heroNote:"Una plataforma. Soluciones para diferentes negocios.",
    visualCard1:"Atención inteligente",visualCard2:"Experiencias conectadas",
    productsEyebrow:"ECOSISTEMA ZENVORA",
    productsTitle:'Una solución para cada<br><span>tipo de negocio.</span>',
    productsIntro:"Conoce nuestra familia de productos. Cada solución está pensada para las necesidades de un sector específico.",
    fashionDesc:"Atención inteligente para tiendas de ropa, moda y accesorios.",fashionTag:"MODA Y COMERCIO",
    foodDesc:"Experiencias prácticas de atención para restaurantes y delivery.",foodTag:"RESTAURANTES",
    gamingDesc:"Herramientas inteligentes para organizar comunidades y grupos de juegos.",gamingTag:"JUEGOS Y COMUNIDADES",
    hotelsDesc:"Comunicación más sencilla para hoteles, posadas y alojamientos.",hotelsTag:"HOSPITALIDAD",
    barberDesc:"Atención y organización para barberías y salones de belleza.",barberTag:"BELLEZA Y BIENESTAR",
    aboutEyebrow:"SOBRE ZENVORA",
    aboutTitle:'Tecnología con propósito.<br><span>Conexiones que evolucionan.</span>',
    aboutText:"ZENVORA está construyendo un ecosistema de soluciones digitales para ayudar a los negocios a atender mejor, trabajar con más eficiencia y crecer con confianza.",
    aboutFoot:"SMART CONVERSATIONS. MORE SALES.",
    ctaEyebrow:"EL PRÓXIMO PASO EMPIEZA AQUÍ",
    ctaTitle:'¿Transformamos<br><span>tu atención al cliente?</span>',
    ctaText:"Crea tu cuenta para comenzar a conocer la plataforma ZENVORA.",
    support:"Contactar soporte ↗",rights:"Todos los derechos reservados.",
    authLogin:"Entrar en ZENVORA",authSignup:"Crear tu cuenta",
    authLoginDescription:"Accede a tu cuenta ZENVORA.",
    authSignupDescription:"Crea tu cuenta para comenzar.",
    email:"Correo electrónico",password:"Contraseña",submitLogin:"Entrar",
    submitSignup:"Crear cuenta",switchSignup:"¿No tienes cuenta? Crear cuenta",
    switchLogin:"¿Ya tienes cuenta? Entrar",logout:"Cerrar sesión",
    loading:"Espera...",signupSuccess:"¡Cuenta creada! Revisa tu correo para confirmar el registro.",
    loginSuccess:"¡Inicio de sesión correcto!",
    logoutSuccess:"Has cerrado tu sesión.",
    loginError:"No se pudo entrar. Revisa tu correo y contraseña.",
    signupError:"No se pudo crear la cuenta.",
    sessionText:"Has iniciado sesión como:",
    profileError:"Tu cuenta se creó, pero no se pudo guardar el perfil."
  },

  en: {
    navHome:"Home",navProducts:"Products",navAbout:"About",navContact:"Contact",
    login:"Log in",signup:"Create account",
    eyebrow:"TECHNOLOGY THAT CONNECTS BUSINESSES",
    heroTitle:'Smart conversations.<br><span>More sales.</span>',
    heroText:"Automate customer service, simplify processes and create better customer experiences with intelligent solutions.",
    explore:"Explore our solutions",discover:"Discover ZENVORA",
    heroNote:"One platform. Solutions for different businesses.",
    visualCard1:"Intelligent service",visualCard2:"Connected experiences",
    productsEyebrow:"THE ZENVORA ECOSYSTEM",
    productsTitle:'One solution for every<br><span>kind of business.</span>',
    productsIntro:"Meet our family of products. Each solution is designed for the needs of a specific industry.",
    fashionDesc:"Intelligent customer service for clothing, fashion and accessory stores.",fashionTag:"FASHION & RETAIL",
    foodDesc:"Practical customer service experiences for restaurants and delivery businesses.",foodTag:"RESTAURANTS",
    gamingDesc:"Smart tools to organize gaming communities and groups.",gamingTag:"GAMES & COMMUNITIES",
    hotelsDesc:"Simpler communication for hotels, inns and accommodations.",hotelsTag:"HOSPITALITY",
    barberDesc:"Customer service and organization for barbershops and beauty salons.",barberTag:"BEAUTY & WELLNESS",
    aboutEyebrow:"ABOUT ZENVORA",
    aboutTitle:'Technology with purpose.<br><span>Connections that evolve.</span>',
    aboutText:"ZENVORA is building an ecosystem of digital solutions to help businesses serve customers better, work more efficiently and grow with confidence.",
    aboutFoot:"SMART CONVERSATIONS. MORE SALES.",
    ctaEyebrow:"YOUR NEXT STEP STARTS HERE",
    ctaTitle:'Let’s transform<br><span>your customer service.</span>',
    ctaText:"Create your account to start exploring the ZENVORA platform.",
    support:"Contact support ↗",rights:"All rights reserved.",
    authLogin:"Log in to ZENVORA",authSignup:"Create your account",
    authLoginDescription:"Access your ZENVORA account.",
    authSignupDescription:"Create your account to get started.",
    email:"Email",password:"Password",submitLogin:"Log in",
    submitSignup:"Create account",switchSignup:"Don't have an account? Create one",
    switchLogin:"Already have an account? Log in",logout:"Log out",
    loading:"Please wait...",signupSuccess:"Account created! Check your email to confirm your registration.",
    loginSuccess:"Login successful!",
    logoutSuccess:"You have signed out.",
    loginError:"Unable to log in. Check your email and password.",
    signupError:"Unable to create your account.",
    sessionText:"You are signed in as:",
    profileError:"Your account was created, but the profile could not be saved."
  }
};

const selector = document.getElementById("languageSelect");
const modal = document.getElementById("authModal");
const authForm = document.getElementById("authForm");
const authFormArea = document.getElementById("authFormArea");
const authAccountArea = document.getElementById("authAccountArea");
const authMessage = document.getElementById("authMessage");

let currentMode = "login";
let currentLanguage = localStorage.getItem("zenvora-language") || "pt";

function t(key) {
  return translations[currentLanguage][key] || translations.pt[key] || key;
}

function setLanguage(lang) {
  currentLanguage = translations[lang] ? lang : "pt";
  const dict = translations[currentLanguage];

  document.documentElement.lang =
    currentLanguage === "pt" ? "pt-BR" : currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  localStorage.setItem("zenvora-language", currentLanguage);
  selector.value = currentLanguage;

  if (modal.classList.contains("active")) {
    updateModalText();
  }
}

selector.addEventListener("change", e => setLanguage(e.target.value));
setLanguage(currentLanguage);

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

/* Estilos da janela de login */
const authStyles = document.createElement("style");

authStyles.textContent = `
.auth-modal {
  display:none;
  position:fixed;
  inset:0;
  z-index:9999;
  background:rgba(0,0,0,.82);
  backdrop-filter:blur(12px);
  align-items:center;
  justify-content:center;
  padding:20px;
}
.auth-modal.active { display:flex; }
.auth-box {
  width:100%;
  max-width:430px;
  background:#100d19;
  border:1px solid rgba(180,130,255,.3);
  border-radius:22px;
  padding:32px;
  color:#fff;
  position:relative;
  box-shadow:0 20px 80px rgba(0,0,0,.5);
  font-family:'DM Sans',sans-serif;
}
.auth-brand {
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:25px;
  font-family:'Space Grotesk',sans-serif;
  font-weight:700;
  letter-spacing:2px;
}
.auth-box h2 {
  font-family:'Space Grotesk',sans-serif;
  font-size:28px;
  margin:0 0 8px;
}
.auth-box p {
  color:#b8afc8;
  line-height:1.6;
}
.auth-close {
  position:absolute;
  top:12px;
  right:17px;
  background:none;
  border:0;
  color:#fff;
  font-size:32px;
  cursor:pointer;
}
.auth-box form {
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-top:24px;
}
.auth-box label {
  font-size:13px;
  color:#d8cde9;
}
.auth-box input {
  width:100%;
  box-sizing:border-box;
  padding:14px;
  border-radius:10px;
  border:1px solid #40334f;
  background:#09070f;
  color:#fff;
  font-size:16px;
  margin-bottom:10px;
}
.auth-submit {
  width:100%;
  justify-content:center;
  margin-top:10px;
  cursor:pointer;
}
.auth-switch {
  width:100%;
  margin-top:20px;
  border:0;
  background:none;
  color:#c9a5ff;
  cursor:pointer;
  font-size:14px;
}
#authMessage {
  margin-top:18px;
  font-size:14px;
  line-height:1.5;
  color:#d8cde9;
}
#authUserEmail {
  overflow-wrap:anywhere;
}
[hidden] { display:none !important; }
`;

document.head.appendChild(authStyles);

function updateModalText() {
  document.getElementById("authTitle").textContent =
    currentMode === "login" ? t("authLogin") : t("authSignup");

  document.getElementById("authDescription").textContent =
    currentMode === "login" ? t("authLoginDescription") : t("authSignupDescription");

  document.querySelector('label[for="authEmail"]').textContent = t("email");
  document.querySelector('label[for="authPassword"]').textContent = t("password");

  document.getElementById("authSubmit").textContent =
    currentMode === "login" ? t("submitLogin") : t("submitSignup");

  document.getElementById("authSwitch").textContent =
    currentMode === "login" ? t("switchSignup") : t("switchLogin");

  document.getElementById("authLogout").textContent = t("logout");
}

function openAuth(mode) {
  currentMode = mode;
  authMessage.textContent = "";
  authForm.reset();
  authFormArea.hidden = false;
  authAccountArea.hidden = true;
  updateModalText();

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeAuth() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-auth-mode]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    openAuth(button.dataset.authMode);
  });
});

document.getElementById("authClose").addEventListener("click", closeAuth);

modal.addEventListener("click", event => {
  if (event.target === modal) closeAuth();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeAuth();
});

document.getElementById("authSwitch").addEventListener("click", () => {
  openAuth(currentMode === "login" ? "signup" : "login");
});

/* Guarda o perfil básico do usuário na tabela profiles */
async function saveUserProfile(user) {
  if (!user) return;

  const { error } = await supabaseClient
    .from("profiles")
    .upsert({
      id: user.id,
      email: user.email
    }, { onConflict: "id" });

  if (error) {
    console.error("Erro ao salvar perfil:", error.message);
  }
}

/* Registro e login */
authForm.addEventListener("submit", async event => {
  event.preventDefault();

  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const submit = document.getElementById("authSubmit");

  submit.disabled = true;
  submit.textContent = t("loading");
  authMessage.textContent = "";

  try {
    if (currentMode === "signup") {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + window.location.pathname
        }
      });

      if (error) throw error;

      if (data.user && data.session) {
        await saveUserProfile(data.user);
      }

      authMessage.textContent = t("signupSuccess");
      authForm.reset();

    } else {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      await saveUserProfile(data.user);

      authMessage.textContent = t("loginSuccess");
      showLoggedInUser(data.user);
    }

  } catch (error) {
    console.error("Auth error:", error);
    authMessage.textContent =
      currentMode === "login" ? t("loginError") : t("signupError");
  } finally {
    submit.disabled = false;
    submit.textContent =
      currentMode === "login" ? t("submitLogin") : t("submitSignup");
  }
});

function showLoggedInUser(user) {
  authFormArea.hidden = true;
  authAccountArea.hidden = false;

  document.getElementById("authUserEmail").textContent =
    t("sessionText") + " " + user.email;
}

document.getElementById("authLogout").addEventListener("click", async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    authMessage.textContent = error.message;
    return;
  }

  authFormArea.hidden = false;
  authAccountArea.hidden = true;
  authForm.reset();
  authMessage.textContent = t("logoutSuccess");
});

/* Verifica se já existe uma sessão */
async function checkSession() {
  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    console.error("Session error:", error.message);
    return;
  }

  if (data.session) {
    await saveUserProfile(data.session.user);
  }
}

checkSession();

supabaseClient.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN" && session) {
    saveUserProfile(session.user);
  }
});
