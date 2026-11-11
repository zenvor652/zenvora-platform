// ==========================================
// ZENVORA — SISTEMA PRINCIPAL
// ==========================================

const SUPABASE_URL = "https://hydjfbndetixmnyannrr.supabase.co";
const SUPABASE_KEY = "sb_publishable_3GWjPvowFlbbt6lCIwJksg_lcV6EUcm";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// ==========================================
// TRADUCCIONES
// ==========================================

const translations = {
  pt: {
    navHome: "Início",
    navProducts: "Produtos",
    navAbout: "Sobre",
    navContact: "Contato",
    login: "Entrar",
    signup: "Criar conta",
    eyebrow: "TECNOLOGIA QUE CONECTA NEGÓCIOS",
    heroTitle: "Conversas inteligentes.<br><span>Mais vendas.</span>",
    heroText: "Automatize o atendimento, simplifique processos e crie experiências melhores para seus clientes com soluções inteligentes.",
    explore: "Conheça nossas soluções ↗",
    discover: "Descubra a ZENVORA →",
    heroNote: "Uma plataforma. Soluções para diferentes negócios.",
    visualCard1: "Atendimento inteligente",
    visualCard2: "Experiências conectadas",
    productsEyebrow: "ECOSSISTEMA ZENVORA",
    productsTitle: "Uma solução para cada<br><span>tipo de negócio.</span>",
    productsIntro: "Conheça nossa família de produtos. Cada solução é pensada para atender às necessidades de um setor específico.",
    fashionDesc: "Atendimento inteligente para lojas de roupas, moda e acessórios.",
    fashionTag: "MODA & VAREJO",
    foodDesc: "Experiências práticas de atendimento para restaurantes e delivery.",
    foodTag: "RESTAURANTES",
    gamingDesc: "Ferramentas inteligentes para organizar comunidades e grupos de jogos.",
    gamingTag: "GAMES & COMUNIDADES",
    hotelsDesc: "Comunicação mais simples para hotéis, pousadas e hospedagens.",
    hotelsTag: "HOSPITALIDADE",
    barberDesc: "Atendimento e organização para barbearias e salões de beleza.",
    barberTag: "BELEZA & BEM-ESTAR",
    aboutEyebrow: "SOBRE A ZENVORA",
    aboutTitle: "Tecnologia com propósito.<br><span>Conexões que evoluem.</span>",
    aboutText: "A ZENVORA está construindo um ecossistema de soluções digitais para ajudar negócios a atender melhor, trabalhar com mais eficiência e crescer com confiança.",
    aboutFoot: "SMART CONVERSATIONS. MORE SALES.",
    ctaEyebrow: "O PRÓXIMO PASSO COMEÇA AQUI",
    ctaTitle: "Vamos transformar<br><span>o seu atendimento?</span>",
    ctaText: "Crie sua conta para começar a conhecer a plataforma ZENVORA.",
    support: "Falar com o suporte ↗",
    rights: "Todos os direitos reservados."
  },

  es: {
    navHome: "Inicio",
    navProducts: "Productos",
    navAbout: "Nosotros",
    navContact: "Contacto",
    login: "Entrar",
    signup: "Crear cuenta",
    eyebrow: "TECNOLOGÍA QUE CONECTA NEGOCIOS",
    heroTitle: "Conversaciones inteligentes.<br><span>Más ventas.</span>",
    heroText: "Automatiza la atención, simplifica procesos y crea mejores experiencias para tus clientes con soluciones inteligentes.",
    explore: "Conoce nuestras soluciones ↗",
    discover: "Descubre ZENVORA →",
    heroNote: "Una plataforma. Soluciones para diferentes negocios.",
    visualCard1: "Atención inteligente",
    visualCard2: "Experiencias conectadas",
    productsEyebrow: "ECOSISTEMA ZENVORA",
    productsTitle: "Una solución para cada<br><span>tipo de negocio.</span>",
    productsIntro: "Conoce nuestra familia de productos. Cada solución está diseñada para las necesidades de un sector específico.",
    fashionDesc: "Atención inteligente para tiendas de ropa, moda y accesorios.",
    fashionTag: "MODA Y COMERCIO",
    foodDesc: "Experiencias prácticas de atención para restaurantes y delivery.",
    foodTag: "RESTAURANTES",
    gamingDesc: "Herramientas inteligentes para organizar comunidades y grupos de juegos.",
    gamingTag: "JUEGOS Y COMUNIDADES",
    hotelsDesc: "Comunicación más sencilla para hoteles, posadas y alojamientos.",
    hotelsTag: "HOSPITALIDAD",
    barberDesc: "Atención y organización para barberías y salones de belleza.",
    barberTag: "BELLEZA Y BIENESTAR",
    aboutEyebrow: "SOBRE ZENVORA",
    aboutTitle: "Tecnología con propósito.<br><span>Conexiones que evolucionan.</span>",
    aboutText: "ZENVORA está construyendo un ecosistema de soluciones digitales para ayudar a los negocios a atender mejor, trabajar con más eficiencia y crecer con confianza.",
    aboutFoot: "SMART CONVERSATIONS. MORE SALES.",
    ctaEyebrow: "EL PRÓXIMO PASO COMIENZA AQUÍ",
    ctaTitle: "¿Vamos a transformar<br><span>tu atención al cliente?</span>",
    ctaText: "Crea tu cuenta para comenzar a conocer la plataforma ZENVORA.",
    support: "Contactar soporte ↗",
    rights: "Todos los derechos reservados."
  },

  en: {
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About",
    navContact: "Contact",
    login: "Login",
    signup: "Create account",
    eyebrow: "TECHNOLOGY THAT CONNECTS BUSINESSES",
    heroTitle: "Smart conversations.<br><span>More sales.</span>",
    heroText: "Automate customer service, simplify processes and create better customer experiences with intelligent solutions.",
    explore: "Explore our solutions ↗",
    discover: "Discover ZENVORA →",
    heroNote: "One platform. Solutions for different businesses.",
    visualCard1: "Smart customer service",
    visualCard2: "Connected experiences",
    productsEyebrow: "ZENVORA ECOSYSTEM",
    productsTitle: "One solution for every<br><span>type of business.</span>",
    productsIntro: "Discover our product family. Each solution is designed for the needs of a specific industry.",
    fashionDesc: "Smart customer service for clothing, fashion and accessory stores.",
    fashionTag: "FASHION & RETAIL",
    foodDesc: "Practical customer service experiences for restaurants and delivery.",
    foodTag: "RESTAURANTS",
    gamingDesc: "Smart tools to organize gaming communities and groups.",
    gamingTag: "GAMES & COMMUNITIES",
    hotelsDesc: "Simpler communication for hotels, inns and accommodations.",
    hotelsTag: "HOSPITALITY",
    barberDesc: "Customer service and organization for barbershops and beauty salons.",
    barberTag: "BEAUTY & WELLNESS",
    aboutEyebrow: "ABOUT ZENVORA",
    aboutTitle: "Technology with purpose.<br><span>Connections that evolve.</span>",
    aboutText: "ZENVORA is building an ecosystem of digital solutions to help businesses serve customers better, work more efficiently and grow with confidence.",
    aboutFoot: "SMART CONVERSATIONS. MORE SALES.",
    ctaEyebrow: "THE NEXT STEP STARTS HERE",
    ctaTitle: "Let's transform<br><span>your customer service?</span>",
    ctaText: "Create your account to start exploring the ZENVORA platform.",
    support: "Contact support ↗",
    rights: "All rights reserved."
  }
};

// ==========================================
// ELEMENTOS
// ==========================================

const guestActions = document.getElementById("guestActions");
const accountButton = document.getElementById("accountButton");
const publicContent = document.getElementById("publicContent");
const customerDashboard = document.getElementById("customerDashboard");

const authModal = document.getElementById("authModal");
const authForm = document.getElementById("authForm");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const authTitle = document.getElementById("authTitle");
const authDescription = document.getElementById("authDescription");
const authSubmit = document.getElementById("authSubmit");
const authSwitch = document.getElementById("authSwitch");
const authClose = document.getElementById("authClose");
const authMessage = document.getElementById("authMessage");

const dashboardEmail = document.getElementById("dashboardEmail");
const dashboardBalance = document.getElementById("dashboardBalance");
const dashboardProducts = document.getElementById("dashboardProducts");
const dashboardHistory = document.getElementById("dashboardHistory");

let currentAuthMode = "login";
let currentLanguage = localStorage.getItem("zenvora_language") || "pt";
let currentSession = null;

// ==========================================
// IDIOMA
// ==========================================

function translatePage(language) {
  currentLanguage = translations[language] ? language : "pt";

  localStorage.setItem("zenvora_language", currentLanguage);

  document.documentElement.lang =
    currentLanguage === "pt" ? "pt-BR" : currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const translation = translations[currentLanguage][key];

    if (translation) {
      element.innerHTML = translation;
    }
  });

  const languageSelect = document.getElementById("languageSelect");

  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }
}

document.getElementById("languageSelect")?.addEventListener("change", event => {
  translatePage(event.target.value);
});

// ==========================================
// MODAL DE LOGIN
// ==========================================

function openAuth(mode = "login") {
  currentAuthMode = mode;

  authMessage.textContent = "";

  authTitle.textContent =
    mode === "login" ? "Entrar na ZENVORA" : "Criar conta ZENVORA";

  authDescription.textContent =
    mode === "login"
      ? "Acesse sua conta ZENVORA."
      : "Crie sua conta para começar.";

  authSubmit.textContent =
    mode === "login" ? "Entrar" : "Criar conta";

  authSwitch.textContent =
    mode === "login"
      ? "Não tem uma conta? Criar conta"
      : "Já tem uma conta? Entrar";

  authPassword.value = "";

  authModal.style.display = "flex";
  authModal.setAttribute("aria-hidden", "false");
}

function closeAuth() {
  authModal.style.display = "none";
  authModal.setAttribute("aria-hidden", "true");
  authMessage.textContent = "";
}

document.querySelectorAll("[data-auth-mode]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    openAuth(button.dataset.authMode);
  });
});

authClose.addEventListener("click", closeAuth);

authModal.addEventListener("click", event => {
  if (event.target === authModal) {
    closeAuth();
  }
});

authSwitch.addEventListener("click", () => {
  openAuth(currentAuthMode === "login" ? "signup" : "login");
});

// ==========================================
// PERFIL DO CLIENTE
// ==========================================

async function saveProfile(user) {
  if (!user) return;

  const { error } = await supabaseClient
    .from("profiles")
    .upsert({
      id: user.id,
      email: user.email
    });

  if (error) {
    console.error("Erro ao salvar perfil:", error.message);
  }
}

// ==========================================
// ATUALIZAR INTERFACE DE LOGIN
// ==========================================

function updateAuthUI(session) {
  currentSession = session;

  const loggedIn = Boolean(session?.user);

  guestActions.hidden = loggedIn;
  accountButton.hidden = !loggedIn;

  publicContent.hidden = loggedIn;
  customerDashboard.hidden = !loggedIn;

  const mainNav = document.getElementById("mainNav");

  if (mainNav) {
    mainNav.hidden = loggedIn;
  }

  if (loggedIn) {
    dashboardEmail.textContent = session.user.email || "Conta ZENVORA";
    closeAuth();
    loadDashboard(session.user);
  }
}

accountButton.addEventListener("click", () => {
  customerDashboard.hidden = false;
  publicContent.hidden = true;

  customerDashboard.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// ==========================================
// LOGIN E CADASTRO
// ==========================================

authForm.addEventListener("submit", async event => {
  event.preventDefault();

  const email = authEmail.value.trim();
  const password = authPassword.value;

  authSubmit.disabled = true;
  authSubmit.textContent = "Aguarde...";

  authMessage.textContent = "";

  try {
    if (currentAuthMode === "signup") {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password
      });

      if (error) throw error;

      if (data.session) {
        await saveProfile(data.user);
        updateAuthUI(data.session);
      } else {
        authMessage.textContent =
          "Conta criada! Verifique seu e-mail para confirmar o cadastro antes de entrar.";
      }

    } else {
      const { data, error } =
        await supabaseClient.auth.signInWithPassword({
          email,
          password
        });

      if (error) throw error;

      await saveProfile(data.user);

      updateAuthUI(data.session);
    }

  } catch (error) {
    authMessage.textContent =
      error.message || "Não foi possível concluir a operação.";
  } finally {
    authSubmit.disabled = false;
    authSubmit.textContent =
      currentAuthMode === "login" ? "Entrar" : "Criar conta";
  }
});

// ==========================================
// CARTEIRA E PAINEL
// ==========================================

function formatMoney(cents) {
  return (Number(cents || 0) / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

async function loadDashboard(user) {
  dashboardEmail.textContent = user.email || "Conta ZENVORA";

  dashboardBalance.textContent = "Carregando...";
  dashboardProducts.textContent = "Carregando produtos...";
  dashboardHistory.textContent = "Carregando histórico...";

  await Promise.all([
    loadWallet(user.id),
    loadProducts(),
    loadHistory(user.id)
  ]);
}

async function loadWallet(userId) {
  const { data, error } = await supabaseClient
    .from("wallets")
    .select("balance_cents")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    console.error("Erro ao carregar carteira:", error.message);
    dashboardBalance.textContent = "Indisponível";
    return;
  }

  dashboardBalance.textContent =
    formatMoney(data?.balance_cents || 0);
}

async function loadProducts() {
  const { data, error } = await supabaseClient
    .from("products")
    .select("id, name, description")
    .eq("active", true);

  if (error) {
    console.error("Erro ao carregar produtos:", error.message);
    dashboardProducts.textContent =
      "Não foi possível carregar os produtos.";
    return;
  }

  if (!data || data.length === 0) {
    dashboardProducts.textContent = "Nenhum produto disponível.";
    return;
  }

  dashboardProducts.innerHTML = "";

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "dashboard-product";

    const title = document.createElement("h4");
    title.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description || "";

    const status = document.createElement("span");
    status.textContent = "Disponível";

    card.append(title, description, status);
    dashboardProducts.appendChild(card);
  });
}

async function loadHistory(userId) {
  const { data, error } = await supabaseClient
    .from("wallet_transactions")
    .select("amount_cents, transaction_type, description, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Erro ao carregar histórico:", error.message);
    dashboardHistory.textContent =
      "Não foi possível carregar o histórico.";
    return;
  }

  if (!data || data.length === 0) {
    dashboardHistory.textContent =
      "Você ainda não possui movimentações.";
    return;
  }

  dashboardHistory.innerHTML = "";

  data.forEach(transaction => {
    const row = document.createElement("div");
    row.className = "dashboard-history-item";

    const description = document.createElement("span");
    description.textContent =
      transaction.description ||
      transaction.transaction_type;

    const amount = document.createElement("strong");
    amount.textContent = formatMoney(transaction.amount_cents);

    const date = document.createElement("small");
    date.textContent = new Date(
      transaction.created_at
    ).toLocaleDateString("pt-BR");

    row.append(description, amount, date);
    dashboardHistory.appendChild(row);
  });
}

// ==========================================
// SAIR DA CONTA
// ==========================================

async function logout() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    alert("Não foi possível sair da conta.");
    return;
  }

  updateAuthUI(null);
  closeAuth();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.getElementById("dashboardLogout")
  .addEventListener("click", logout);

document.getElementById("authLogout")
  .addEventListener("click", logout);

// ==========================================
// MENU MOBILE
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.getElementById("year").textContent =
  new Date().getFullYear();

translatePage(currentLanguage);

async function initializeZenvora() {
  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    console.error("Erro ao verificar sessão:", error.message);
    updateAuthUI(null);
    return;
  }

  updateAuthUI(data.session);
}

initializeZenvora();

supabaseClient.auth.onAuthStateChange((event, session) => {
  updateAuthUI(session);
});
