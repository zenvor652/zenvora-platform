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
// ELEMENTOS
// ==========================================

const $ = id => document.getElementById(id);

const guestActions = $("guestActions");
const accountButton = $("accountButton");
const publicContent = $("publicContent");
const customerDashboard = $("customerDashboard");

const authModal = $("authModal");
const authForm = $("authForm");
const authEmail = $("authEmail");
const authPassword = $("authPassword");
const authPasswordConfirm = $("authPasswordConfirm");
const authUsername = $("authUsername");

const usernameField = $("usernameField");
const confirmPasswordField = $("confirmPasswordField");

const authTitle = $("authTitle");
const authDescription = $("authDescription");
const authSubmit = $("authSubmit");
const authSwitch = $("authSwitch");
const authClose = $("authClose");
const authMessage = $("authMessage");

const dashboardEmail = $("dashboardEmail");
const dashboardUsername = $("dashboardUsername");
const dashboardBalance = $("dashboardBalance");
const dashboardProducts = $("dashboardProducts");
const dashboardHistory = $("dashboardHistory");

const dashboardWalletBalance = $("dashboardWalletBalance");
const dashboardProfileUsername = $("dashboardProfileUsername");
const dashboardProfileEmail = $("dashboardProfileEmail");

const dashboardHomeProducts = $("dashboardHomeProducts");
const dashboardHomeHistory = $("dashboardHomeHistory");

const usernameForm = $("usernameForm");
const dashboardUsernameInput = $("dashboardUsernameInput");
const usernameMessage = $("usernameMessage");

const mainNav = $("mainNav");

let currentAuthMode = "login";
let currentSession = null;
let currentLanguage = localStorage.getItem("zenvora_language") || "pt";

// ==========================================
// TRADUÇÕES
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

  const languageSelect = $("languageSelect");

  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }

}

$("languageSelect")?.addEventListener("change", event => {
  translatePage(event.target.value);
});

// ==========================================
// MODAL
// ==========================================

function openAuth(mode = "login") {

  if (!authModal) return;

  currentAuthMode = mode;

  if (authMessage) authMessage.textContent = "";

  if (authTitle) {
    authTitle.textContent =
      mode === "login"
        ? "Entrar na ZENVORA"
        : "Criar conta ZENVORA";
  }

  if (authDescription) {
    authDescription.textContent =
      mode === "login"
        ? "Acesse sua conta ZENVORA."
        : "Preencha seus dados para criar sua conta.";
  }

  if (authSubmit) {
    authSubmit.textContent =
      mode === "login" ? "Entrar" : "Criar conta";
  }

  if (authSwitch) {
    authSwitch.textContent =
      mode === "login"
        ? "Não tem uma conta? Criar conta"
        : "Já tem uma conta? Entrar";
  }

  if (usernameField) usernameField.hidden = mode !== "signup";
  if (confirmPasswordField) confirmPasswordField.hidden = mode !== "signup";

  if (authUsername) {
    authUsername.required = mode === "signup";
    authUsername.value = "";
  }

  if (authPasswordConfirm) {
    authPasswordConfirm.required = mode === "signup";
    authPasswordConfirm.value = "";
  }

  if (authPassword) {
    authPassword.value = "";
    authPassword.autocomplete =
      mode === "login" ? "current-password" : "new-password";
  }

  authModal.style.display = "flex";
  authModal.setAttribute("aria-hidden", "false");

}

function closeAuth() {

  if (!authModal) return;

  authModal.style.display = "none";
  authModal.setAttribute("aria-hidden", "true");

}

document.querySelectorAll("[data-auth-mode]").forEach(button => {

  button.addEventListener("click", event => {

    event.preventDefault();

    openAuth(button.dataset.authMode);

  });

});

authClose?.addEventListener("click", closeAuth);

authModal?.addEventListener("click", event => {

  if (event.target === authModal) {
    closeAuth();
  }

});

authSwitch?.addEventListener("click", () => {

  openAuth(
    currentAuthMode === "login"
      ? "signup"
      : "login"
  );

});

// ==========================================
// VALIDAR NOME DE USUÁRIO
// ==========================================

function validateUsername(username) {

  return /^[A-Za-z0-9_.]{3,20}$/.test(username);

}

// ==========================================
// SALVAR PERFIL
// ==========================================

async function saveProfile(user) {

  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  const usernameFromMetadata =
    user.user_metadata?.username || null;

  const { data: existingProfile, error: readError } =
    await supabaseClient
      .from("profiles")
      .select("id, username")
      .eq("id", user.id)
      .maybeSingle();

  if (readError) {
    throw readError;
  }

  if (existingProfile) {

    if (!existingProfile.username && usernameFromMetadata) {

      const { error: updateError } =
        await supabaseClient
          .from("profiles")
          .update({
            username: usernameFromMetadata,
            email: user.email
          })
          .eq("id", user.id);

      if (updateError) {
        throw updateError;
      }

      return usernameFromMetadata;
    }

    return existingProfile.username;

  }

  const { error: insertError } =
    await supabaseClient
      .from("profiles")
      .insert({
        id: user.id,
        email: user.email,
        username: usernameFromMetadata
      });

  if (insertError) {
    throw insertError;
  }

  return usernameFromMetadata;

}

// ==========================================
// NAVEGAÇÃO DO PAINEL
// ==========================================

function switchDashboardView(viewName) {

  const allowedViews = ["home", "products", "wallet", "profile"];

  if (!allowedViews.includes(viewName)) {
    viewName = "home";
  }

  document.querySelectorAll("[data-view]").forEach(view => {

    const isActive = view.dataset.view === viewName;

    view.classList.toggle("active", isActive);
    view.hidden = false;

  });

  document.querySelectorAll("[data-dashboard-view]").forEach(button => {

    const isActive = button.dataset.dashboardView === viewName;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");

  });

  if (customerDashboard) {
    customerDashboard.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

}

document.querySelectorAll("[data-dashboard-view]").forEach(button => {

  button.addEventListener("click", event => {

    event.preventDefault();

    switchDashboardView(button.dataset.dashboardView);

  });

});

// ==========================================
// MOSTRAR PAINEL
// ==========================================

function setText(element, value) {

  if (element) {
    element.textContent = value;
  }

}

function updateAuthUI(session) {

  currentSession = session;

  const loggedIn = Boolean(session?.user);

  if (guestActions) guestActions.hidden = loggedIn;
  if (accountButton) accountButton.hidden = !loggedIn;

  if (publicContent) publicContent.hidden = loggedIn;
  if (customerDashboard) customerDashboard.hidden = !loggedIn;

  if (mainNav) {
    mainNav.hidden = loggedIn;
  }

  if (loggedIn) {

    const email = session.user.email || "Conta ZENVORA";

    setText(dashboardEmail, email);
    setText(dashboardProfileEmail, email);

    switchDashboardView("home");

    closeAuth();

    loadDashboard(session.user);

  } else {

    switchDashboardView("home");

  }

}

accountButton?.addEventListener("click", () => {

  if (!currentSession?.user) return;

  customerDashboard.hidden = false;
  publicContent.hidden = true;

  switchDashboardView("home");

});

// ==========================================
// CADASTRO E LOGIN
// ==========================================

authForm?.addEventListener("submit", async event => {

  event.preventDefault();

  const email = authEmail.value.trim().toLowerCase();
  const password = authPassword.value;

  authSubmit.disabled = true;
  authSubmit.textContent = "Aguarde...";

  authMessage.textContent = "";

  try {

    if (currentAuthMode === "signup") {

      const username = authUsername.value.trim();
      const confirmPassword = authPasswordConfirm.value;

      if (!validateUsername(username)) {

        throw new Error(
          "O nome de usuário deve ter de 3 a 20 caracteres. Use apenas letras, números, ponto ou underline."
        );

      }

      if (password !== confirmPassword) {
        throw new Error("As senhas não coincidem.");
      }

      if (password.length < 6) {
        throw new Error("A senha precisa ter pelo menos 6 caracteres.");
      }

      const { data, error } =
        await supabaseClient.auth.signUp({

          email,
          password,

          options: {
            data: {
              username: username
            }
          }

        });

      if (error) {
        throw error;
      }

      if (data.session && data.user) {

        await saveProfile(data.user);

        updateAuthUI(data.session);

        return;

      }

      authMessage.textContent =
        "Conta criada! Confirme seu e-mail e depois entre na ZENVORA com seu e-mail e senha.";

      return;

    }

    const { data, error } =
      await supabaseClient.auth.signInWithPassword({

        email,
        password

      });

    if (error) {
      throw error;
    }

    if (!data.user || !data.session) {
      throw new Error("Não foi possível acessar sua conta.");
    }

    await saveProfile(data.user);

    updateAuthUI(data.session);

  } catch (error) {

    console.error("Erro de autenticação:", error);

    if (error.code === "23505") {

      authMessage.textContent =
        "Esse nome de usuário já está sendo utilizado. Escolha outro.";

    } else {

      authMessage.textContent =
        error.message || "Não foi possível concluir a operação.";

    }

  } finally {

    authSubmit.disabled = false;

    authSubmit.textContent =
      currentAuthMode === "login"
        ? "Entrar"
        : "Criar conta";

  }

});

// ==========================================
// NOME DE USUÁRIO NO PAINEL
// ==========================================

function updateUsernameDisplays(username) {

  const displayName = username || "Não definido";

  setText(dashboardUsername, displayName);
  setText(dashboardProfileUsername, displayName);

}

async function loadUsername(user) {

  const { data, error } =
    await supabaseClient
      .from("profiles")
      .select("username")
      .eq("id", user.id)
      .maybeSingle();

  if (error) {

    console.error("Erro ao carregar nome:", error.message);

    updateUsernameDisplays("Indisponível");

    return;

  }

  const username = data?.username || null;

  updateUsernameDisplays(username);

  if (usernameForm) {
    usernameForm.hidden = Boolean(username);
  }

}

// ==========================================
// SALVAR NOME DE USUÁRIO NO PAINEL
// ==========================================

usernameForm?.addEventListener("submit", async event => {

  event.preventDefault();

  if (!currentSession?.user) {
    return;
  }

  const username = dashboardUsernameInput.value.trim();

  usernameMessage.textContent = "";

  if (!validateUsername(username)) {

    usernameMessage.textContent =
      "Use de 3 a 20 caracteres: letras, números, ponto ou underline.";

    return;

  }

  const button = usernameForm.querySelector("button");

  button.disabled = true;
  button.textContent = "Salvando...";

  try {

    const { error } =
      await supabaseClient
        .from("profiles")
        .update({
          username: username
        })
        .eq("id", currentSession.user.id);

    if (error) {
      throw error;
    }

    await supabaseClient.auth.updateUser({

      data: {
        username: username
      }

    });

    updateUsernameDisplays(username);

    usernameForm.hidden = true;

    dashboardUsernameInput.value = "";

  } catch (error) {

    console.error(error);

    if (error.code === "23505") {

      usernameMessage.textContent =
        "Esse nome já está em uso. Escolha outro.";

    } else {

      usernameMessage.textContent =
        error.message || "Não foi possível salvar o nome.";

    }

  } finally {

    button.disabled = false;
    button.textContent = "Salvar nome de usuário";

  }

});

// ==========================================
// SALDO
// ==========================================

function formatMoney(cents) {

  return (Number(cents || 0) / 100).toLocaleString("pt-BR", {

    style: "currency",
    currency: "BRL"

  });

}

function updateBalanceDisplays(value) {

  setText(dashboardBalance, value);
  setText(dashboardWalletBalance, value);

}

async function loadWallet(userId) {

  const { data, error } =
    await supabaseClient
      .from("wallets")
      .select("balance_cents")
      .eq("user_id", userId)
      .maybeSingle();

  if (error) {

    console.error("Erro ao carregar carteira:", error.message);

    updateBalanceDisplays("Indisponível");

    return;

  }

  updateBalanceDisplays(
    formatMoney(data?.balance_cents || 0)
  );

}

// ==========================================
// PRODUTOS
// ==========================================

function createProductCard(product) {

  const card = document.createElement("div");

  card.className = "dashboard-product";

  const title = document.createElement("h4");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description || "";

  const status = document.createElement("span");
  status.textContent = "Disponível";

  card.append(title, description, status);

  return card;

}

function renderProducts(container, products) {

  if (!container) return;

  container.innerHTML = "";

  if (!products || products.length === 0) {

    container.textContent = "Nenhum produto disponível.";

    return;

  }

  products.forEach(product => {

    container.appendChild(createProductCard(product));

  });

}

async function loadProducts() {

  const { data, error } =
    await supabaseClient
      .from("products")
      .select("id, name, description")
      .eq("active", true);

  if (error) {

    console.error("Erro ao carregar produtos:", error.message);

    if (dashboardProducts) {
      dashboardProducts.textContent =
        "Não foi possível carregar os produtos.";
    }

    if (dashboardHomeProducts) {
      dashboardHomeProducts.textContent =
        "Não foi possível carregar os produtos.";
    }

    return;

  }

  const products = data || [];

  renderProducts(dashboardProducts, products);

  renderProducts(
    dashboardHomeProducts,
    products.slice(0, 3)
  );

}

// ==========================================
// HISTÓRICO
// ==========================================

function createHistoryRow(transaction) {

  const row = document.createElement("div");

  row.className = "dashboard-history-item";

  const description = document.createElement("span");

  description.textContent =
    transaction.description || transaction.transaction_type;

  const amount = document.createElement("strong");

  amount.textContent =
    formatMoney(transaction.amount_cents);

  const date = document.createElement("small");

  date.textContent =
    new Date(transaction.created_at).toLocaleDateString("pt-BR");

  row.append(description, amount, date);

  return row;

}

function renderHistory(container, transactions) {

  if (!container) return;

  container.innerHTML = "";

  if (!transactions || transactions.length === 0) {

    container.textContent =
      "Você ainda não possui movimentações.";

    return;

  }

  transactions.forEach(transaction => {

    container.appendChild(createHistoryRow(transaction));

  });

}

async function loadHistory(userId) {

  const { data, error } =
    await supabaseClient
      .from("wallet_transactions")
      .select("amount_cents, transaction_type, description, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(10);

  if (error) {

    console.error("Erro ao carregar histórico:", error.message);

    if (dashboardHistory) {
      dashboardHistory.textContent =
        "Não foi possível carregar o histórico.";
    }

    if (dashboardHomeHistory) {
      dashboardHomeHistory.textContent =
        "Não foi possível carregar o histórico.";
    }

    return;

  }

  const transactions = data || [];

  renderHistory(dashboardHistory, transactions);

  renderHistory(
    dashboardHomeHistory,
    transactions.slice(0, 3)
  );

}

// ==========================================
// CARREGAR PAINEL COMPLETO
// ==========================================

async function loadDashboard(user) {

  if (!user) return;

  if (customerDashboard) {
    customerDashboard.hidden = false;
  }

  const email = user.email || "Conta ZENVORA";

  setText(dashboardEmail, email);
  setText(dashboardProfileEmail, email);

  updateBalanceDisplays("Carregando...");

  if (dashboardProducts) {
    dashboardProducts.textContent = "Carregando produtos...";
  }

  if (dashboardHomeProducts) {
    dashboardHomeProducts.textContent = "Carregando produtos...";
  }

  if (dashboardHistory) {
    dashboardHistory.textContent = "Carregando histórico...";
  }

  if (dashboardHomeHistory) {
    dashboardHomeHistory.textContent = "Carregando histórico...";
  }

  try {

    await saveProfile(user);

    await Promise.all([

      loadUsername(user),

      loadWallet(user.id),

      loadProducts(),

      loadHistory(user.id)

    ]);

  } catch (error) {

    console.error("Erro ao carregar painel:", error);

    updateUsernameDisplays("Erro ao carregar");

  }

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

  currentSession = null;

  updateAuthUI(null);

  closeAuth();

  window.scrollTo({

    top: 0,
    behavior: "smooth"

  });

}

$("dashboardLogout")?.addEventListener("click", logout);
$("profileLogout")?.addEventListener("click", logout);
$("authLogout")?.addEventListener("click", logout);

// ==========================================
// MENU MOBILE DO SITE PÚBLICO
// ==========================================

const menuToggle = $("menuToggle");

menuToggle?.addEventListener("click", () => {

  const isOpen = mainNav?.classList.toggle("active");

  menuToggle.setAttribute(
    "aria-expanded",
    String(Boolean(isOpen))
  );

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

const yearElement = $("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

translatePage(currentLanguage);

async function initializeZenvora() {

  const { data, error } =
    await supabaseClient.auth.getSession();

  if (error) {

    console.error("Erro ao verificar sessão:", error.message);

    updateAuthUI(null);

    return;

  }

  updateAuthUI(data.session);

}

initializeZenvora();

supabaseClient.auth.onAuthStateChange((event, session) => {

  setTimeout(() => {

    updateAuthUI(session);

  }, 0);

});
