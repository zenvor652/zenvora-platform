// ======================================================
// ZENVORA — SISTEMA PRINCIPAL
// Clientes | Produtos | Carteira | Histórico
// ======================================================

"use strict";

// ======================================================
// SUPABASE
// ======================================================

const SUPABASE_URL =
  "https://hydjfbndetixmnyannrr.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_3GWjPvowFlbbt6lCIwJksg_lcV6EUcm";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// ======================================================
// ELEMENTOS
// ======================================================

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
const menuToggle = $("menuToggle");

// ======================================================
// ESTADO
// ======================================================

let currentAuthMode = "login";
let currentSession = null;
let currentLanguage =
  localStorage.getItem("zenvora_language") || "pt";

let dashboardLoadId = 0;
let authListenerReady = false;

// ======================================================
// TRADUÇÕES
// ======================================================

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
    heroText:
      "Automatize o atendimento, simplifique processos e crie experiências melhores para seus clientes com soluções inteligentes.",

    explore: "Conheça nossas soluções ↗",
    discover: "Descubra a ZENVORA →",
    heroNote: "Uma plataforma. Soluções para diferentes negócios.",

    visualCard1: "Atendimento inteligente",
    visualCard2: "Experiências conectadas",

    productsEyebrow: "ECOSSISTEMA ZENVORA",
    productsTitle:
      "Uma solução para cada<br><span>tipo de negócio.</span>",

    productsIntro:
      "Conheça nossa família de produtos. Cada solução é pensada para atender às necessidades de um setor específico.",

    fashionDesc:
      "Atendimento inteligente para lojas de roupas, moda e acessórios.",
    fashionTag: "MODA & VAREJO",

    foodDesc:
      "Experiências práticas de atendimento para restaurantes e delivery.",
    foodTag: "RESTAURANTES",

    gamingDesc:
      "Ferramentas inteligentes para organizar comunidades e grupos de jogos.",
    gamingTag: "GAMES & COMUNIDADES",

    hotelsDesc:
      "Comunicação mais simples para hotéis, pousadas e hospedagens.",
    hotelsTag: "HOSPITALIDADE",

    barberDesc:
      "Atendimento e organização para barbearias e salões de beleza.",
    barberTag: "BELEZA & BEM-ESTAR",

    aboutEyebrow: "SOBRE A ZENVORA",
    aboutTitle:
      "Tecnologia com propósito.<br><span>Conexões que evoluem.</span>",

    aboutText:
      "A ZENVORA está construindo um ecossistema de soluções digitais para ajudar negócios a atender melhor, trabalhar com mais eficiência e crescer com confiança.",

    aboutFoot: "SMART CONVERSATIONS. MORE SALES.",

    ctaEyebrow: "O PRÓXIMO PASSO COMEÇA AQUI",
    ctaTitle:
      "Vamos transformar<br><span>o seu atendimento?</span>",

    ctaText:
      "Crie sua conta para começar a conhecer a plataforma ZENVORA.",

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

    heroText:
      "Automatiza la atención, simplifica procesos y crea mejores experiencias para tus clientes con soluciones inteligentes.",

    explore: "Conoce nuestras soluciones ↗",
    discover: "Descubre ZENVORA →",
    heroNote: "Una plataforma. Soluciones para diferentes negocios.",

    visualCard1: "Atención inteligente",
    visualCard2: "Experiencias conectadas",

    productsEyebrow: "ECOSISTEMA ZENVORA",
    productsTitle:
      "Una solución para cada<br><span>tipo de negocio.</span>",

    productsIntro:
      "Conoce nuestra familia de productos.",

    fashionDesc: "Atención inteligente para tiendas de ropa.",
    fashionTag: "MODA Y COMERCIO",

    foodDesc: "Atención práctica para restaurantes y delivery.",
    foodTag: "RESTAURANTES",

    gamingDesc: "Herramientas para comunidades de juegos.",
    gamingTag: "JUEGOS",

    hotelsDesc: "Comunicación para hoteles y alojamientos.",
    hotelsTag: "HOSPITALIDAD",

    barberDesc: "Atención para barberías y salones.",
    barberTag: "BELLEZA",

    aboutEyebrow: "SOBRE ZENVORA",
    aboutTitle:
      "Tecnología con propósito.<br><span>Conexiones que evolucionan.</span>",

    aboutText:
      "ZENVORA está construyendo un ecosistema de soluciones digitales.",

    aboutFoot: "SMART CONVERSATIONS. MORE SALES.",

    ctaEyebrow: "EL PRÓXIMO PASO COMIENZA AQUÍ",
    ctaTitle:
      "¿Vamos a transformar<br><span>tu atención al cliente?</span>",

    ctaText:
      "Crea tu cuenta para comenzar a conocer ZENVORA.",

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

    heroText:
      "Automate customer service, simplify processes and create better experiences.",

    explore: "Explore our solutions ↗",
    discover: "Discover ZENVORA →",
    heroNote: "One platform. Solutions for different businesses.",

    visualCard1: "Smart customer service",
    visualCard2: "Connected experiences",

    productsEyebrow: "ZENVORA ECOSYSTEM",
    productsTitle:
      "One solution for every<br><span>type of business.</span>",

    productsIntro: "Discover our product family.",

    fashionDesc: "Smart service for fashion stores.",
    fashionTag: "FASHION",

    foodDesc: "Customer service for restaurants.",
    foodTag: "RESTAURANTS",

    gamingDesc: "Tools for gaming communities.",
    gamingTag: "GAMES",

    hotelsDesc: "Communication for hotels.",
    hotelsTag: "HOSPITALITY",

    barberDesc: "Service for barbershops.",
    barberTag: "BEAUTY",

    aboutEyebrow: "ABOUT ZENVORA",
    aboutTitle:
      "Technology with purpose.<br><span>Connections that evolve.</span>",

    aboutText:
      "ZENVORA is building a digital solutions ecosystem.",

    aboutFoot: "SMART CONVERSATIONS. MORE SALES.",

    ctaEyebrow: "THE NEXT STEP STARTS HERE",
    ctaTitle:
      "Let's transform<br><span>your customer service?</span>",

    ctaText: "Create your account to explore ZENVORA.",

    support: "Contact support ↗",
    rights: "All rights reserved."
  }
};

// ======================================================
// IDIOMA
// ======================================================

function translatePage(language) {
  currentLanguage = translations[language]
    ? language
    : "pt";

  localStorage.setItem(
    "zenvora_language",
    currentLanguage
  );

  document.documentElement.lang =
    currentLanguage === "pt"
      ? "pt-BR"
      : currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const value = translations[currentLanguage][key];

    if (value) {
      element.innerHTML = value;
    }
  });

  const select = $("languageSelect");

  if (select) {
    select.value = currentLanguage;
  }
}

$("languageSelect")?.addEventListener("change", event => {
  translatePage(event.target.value);
});

// ======================================================
// UTILIDADES
// ======================================================

function setText(element, value) {
  if (element) {
    element.textContent = value;
  }
}

function formatMoney(cents) {
  return (Number(cents || 0) / 100).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );
}

function showMessage(element, message) {
  if (element) {
    element.textContent = message;
  }
}

function validateUsername(username) {
  return /^[A-Za-z0-9_.]{3,20}$/.test(username);
}

// ======================================================
// LOGIN E CADASTRO
// ======================================================

function openAuth(mode = "login") {
  if (!authModal) return;

  currentAuthMode = mode;

  showMessage(authMessage, "");

  setText(
    authTitle,
    mode === "login"
      ? "Entrar na ZENVORA"
      : "Criar conta ZENVORA"
  );

  setText(
    authDescription,
    mode === "login"
      ? "Acesse sua conta ZENVORA."
      : "Preencha seus dados para criar sua conta."
  );

  setText(
    authSubmit,
    mode === "login"
      ? "Entrar"
      : "Criar conta"
  );

  setText(
    authSwitch,
    mode === "login"
      ? "Não tem uma conta? Criar conta"
      : "Já tem uma conta? Entrar"
  );

  if (usernameField) {
    usernameField.hidden = mode !== "signup";
  }

  if (confirmPasswordField) {
    confirmPasswordField.hidden = mode !== "signup";
  }

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
      mode === "login"
        ? "current-password"
        : "new-password";
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

// ======================================================
// PERFIL
// ======================================================

async function saveProfile(user) {
  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  const username =
    user.user_metadata?.username || null;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, username")
    .eq("id", user.id)
    .maybeSingle();

  if (error) throw error;

  if (data) {
    if (!data.username && username) {
      const { error: updateError } = await supabaseClient
        .from("profiles")
        .update({
          username,
          email: user.email
        })
        .eq("id", user.id);

      if (updateError) throw updateError;
    }

    return data.username || username;
  }

  const { error: insertError } = await supabaseClient
    .from("profiles")
    .insert({
      id: user.id,
      email: user.email,
      username
    });

  if (insertError) throw insertError;

  return username;
}

// ======================================================
// NAVEGAÇÃO
// ======================================================

function switchDashboardView(viewName) {
  const allowedViews = [
    "home",
    "products",
    "wallet",
    "profile"
  ];

  if (!allowedViews.includes(viewName)) {
    viewName = "home";
  }

  document.querySelectorAll("[data-view]").forEach(view => {
    const active = view.dataset.view === viewName;

    view.classList.toggle("active", active);
    view.hidden = !active;
  });

  document.querySelectorAll("[data-dashboard-view]").forEach(button => {
    const active =
      button.dataset.dashboardView === viewName;

    button.classList.toggle("active", active);

    button.setAttribute(
      "aria-current",
      active ? "page" : "false"
    );
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

    switchDashboardView(
      button.dataset.dashboardView
    );
  });
});

// ======================================================
// INTERFACE DE AUTENTICAÇÃO
// ======================================================

function updateAuthUI(session) {
  currentSession = session;

  const loggedIn = Boolean(session?.user);

  if (guestActions) {
    guestActions.hidden = loggedIn;
  }

  if (accountButton) {
    accountButton.hidden = !loggedIn;
  }

  if (publicContent) {
    publicContent.hidden = loggedIn;
  }

  if (customerDashboard) {
    customerDashboard.hidden = !loggedIn;
  }

  if (mainNav) {
    mainNav.hidden = loggedIn;
  }

  if (loggedIn) {
    const email =
      session.user.email || "Conta ZENVORA";

    setText(dashboardEmail, email);
    setText(dashboardProfileEmail, email);

    closeAuth();

    switchDashboardView("home");

    loadDashboard(session.user);
  } else {
    switchDashboardView("home");
  }
}

accountButton?.addEventListener("click", () => {
  if (!currentSession?.user) return;

  if (customerDashboard) {
    customerDashboard.hidden = false;
  }

  if (publicContent) {
    publicContent.hidden = true;
  }

  switchDashboardView("home");
});

// ======================================================
// FORMULÁRIO DE AUTENTICAÇÃO
// ======================================================

authForm?.addEventListener("submit", async event => {
  event.preventDefault();

  if (!authEmail || !authPassword || !authSubmit) {
    return;
  }

  const email = authEmail.value.trim().toLowerCase();
  const password = authPassword.value;

  authSubmit.disabled = true;
  authSubmit.textContent = "Aguarde...";

  showMessage(authMessage, "");

  try {
    if (currentAuthMode === "signup") {
      const username = authUsername.value.trim();
      const confirmPassword =
        authPasswordConfirm.value;

      if (!validateUsername(username)) {
        throw new Error(
          "O nome deve ter de 3 a 20 caracteres."
        );
      }

      if (password !== confirmPassword) {
        throw new Error("As senhas não coincidem.");
      }

      if (password.length < 6) {
        throw new Error(
          "A senha precisa ter pelo menos 6 caracteres."
        );
      }

      const { data, error } =
        await supabaseClient.auth.signUp({
          email,
          password,
          options: {
            data: {
              username
            }
          }
        });

      if (error) throw error;

      if (data.session && data.user) {
        await saveProfile(data.user);
        updateAuthUI(data.session);
      } else {
        showMessage(
          authMessage,
          "Conta criada! Confirme seu e-mail antes de entrar."
        );
      }

      return;
    }

    const { data, error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

    if (error) throw error;

    if (!data.session || !data.user) {
      throw new Error(
        "Não foi possível acessar sua conta."
      );
    }

    await saveProfile(data.user);

    updateAuthUI(data.session);

  } catch (error) {
    console.error("Erro de autenticação:", error);

    showMessage(
      authMessage,
      error.message || "Não foi possível concluir."
    );

  } finally {
    authSubmit.disabled = false;

    authSubmit.textContent =
      currentAuthMode === "login"
        ? "Entrar"
        : "Criar conta";
  }
});

// ======================================================
// NOME DE USUÁRIO
// ======================================================

function updateUsernameDisplays(username) {
  const name = username || "Não definido";

  setText(dashboardUsername, name);
  setText(dashboardProfileUsername, name);
}

async function loadUsername(user) {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("username")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    console.error("Erro ao carregar nome:", error);
    updateUsernameDisplays("Indisponível");
    return;
  }

  const username = data?.username || null;

  updateUsernameDisplays(username);

  if (usernameForm) {
    usernameForm.hidden = Boolean(username);
  }
}

usernameForm?.addEventListener("submit", async event => {
  event.preventDefault();

  if (!currentSession?.user) return;

  const username = dashboardUsernameInput.value.trim();

  showMessage(usernameMessage, "");

  if (!validateUsername(username)) {
    showMessage(
      usernameMessage,
      "Use de 3 a 20 caracteres: letras, números, ponto ou underline."
    );
    return;
  }

  const button = usernameForm.querySelector("button");

  if (button) {
    button.disabled = true;
    button.textContent = "Salvando...";
  }

  try {
    const { error } = await supabaseClient
      .from("profiles")
      .update({ username })
      .eq("id", currentSession.user.id);

    if (error) throw error;

    const { error: authError } =
      await supabaseClient.auth.updateUser({
        data: { username }
      });

    if (authError) throw authError;

    updateUsernameDisplays(username);

    usernameForm.hidden = true;
    dashboardUsernameInput.value = "";

  } catch (error) {
    console.error(error);

    showMessage(
      usernameMessage,
      error.message || "Não foi possível salvar."
    );

  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = "Salvar nome de usuário";
    }
  }
});

// ======================================================
// CARTEIRA
// ======================================================

function updateBalanceDisplays(value) {
  setText(dashboardBalance, value);
  setText(dashboardWalletBalance, value);
}

async function loadWallet(userId) {
  const { data, error } = await supabaseClient
    .from("wallets")
    .select("balance_cents")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    console.error("Erro na carteira:", error);

    updateBalanceDisplays("Indisponível");
    return;
  }

  updateBalanceDisplays(
    formatMoney(data?.balance_cents || 0)
  );
}

// ======================================================
// PRODUTOS E PREÇOS
// ======================================================

function createPriceItem(label, cents) {
  const item = document.createElement("div");

  item.className = "product-price-item";

  const name = document.createElement("span");
  name.textContent = label;

  const price = document.createElement("strong");
  price.textContent =
    cents === null || cents === undefined
      ? "Preço indisponível"
      : formatMoney(cents);

  item.append(name, price);

  return item;
}

function createProductCard(product) {
  const card = document.createElement("article");

  card.className = "dashboard-product";

  const title = document.createElement("h3");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent =
    product.description || "Solução ZENVORA.";

  const status = document.createElement("span");
  status.className = "product-status";
  status.textContent = "Disponível";

  const prices = document.createElement("div");
  prices.className = "product-prices";

  prices.append(
    createPriceItem(
      "Semanal",
      product.weekly_price_cents
    ),
    createPriceItem(
      "Mensal",
      product.monthly_price_cents
    ),
    createPriceItem(
      "Trimestral",
      product.quarterly_price_cents
    )
  );

  const note = document.createElement("small");
  note.className = "product-note";
  note.textContent =
    "Selecione um plano para consultar a contratação.";

  card.append(
    title,
    description,
    status,
    prices,
    note
  );

  return card;
}

function renderProducts(container, products) {
  if (!container) return;

  container.innerHTML = "";

  if (!products || products.length === 0) {
    container.textContent =
      "Nenhum produto disponível.";
    return;
  }

  products.forEach(product => {
    container.appendChild(
      createProductCard(product)
    );
  });
}

async function loadProducts() {
  const { data, error } = await supabaseClient
    .from("products")
    .select(`
      id,
      name,
      description,
      active,
      weekly_price_cents,
      monthly_price_cents,
      quarterly_price_cents
    `)
    .eq("active", true)
    .order("name");

  if (error) {
    console.error("Erro ao carregar produtos:", error);

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

  renderProducts(
    dashboardProducts,
    products
  );

  renderProducts(
    dashboardHomeProducts,
    products.slice(0, 3)
  );
}

// ======================================================
// HISTÓRICO
// ======================================================

function createHistoryRow(transaction) {
  const row = document.createElement("div");

  row.className =
    "dashboard-history-item history-item";

  const description = document.createElement("span");

  description.textContent =
    transaction.description ||
    transaction.transaction_type ||
    "Movimentação";

  const amount = document.createElement("strong");

  amount.textContent =
    formatMoney(transaction.amount_cents);

  const date = document.createElement("small");

  date.textContent = transaction.created_at
    ? new Date(
        transaction.created_at
      ).toLocaleDateString("pt-BR")
    : "";

  row.append(
    description,
    amount,
    date
  );

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
    container.appendChild(
      createHistoryRow(transaction)
    );
  });
}

async function loadHistory(userId) {
  const { data, error } = await supabaseClient
    .from("wallet_transactions")
    .select(`
      amount_cents,
      transaction_type,
      description,
      created_at
    `)
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false
    })
    .limit(10);

  if (error) {
    console.error("Erro no histórico:", error);

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

  renderHistory(
    dashboardHistory,
    transactions
  );

  renderHistory(
    dashboardHomeHistory,
    transactions.slice(0, 3)
  );
}

// ======================================================
// CARREGAMENTO DO PAINEL
// ======================================================

async function loadDashboard(user) {
  if (!user) return;

  const currentLoad = ++dashboardLoadId;

  if (customerDashboard) {
    customerDashboard.hidden = false;
  }

  setText(
    dashboardEmail,
    user.email || "Conta ZENVORA"
  );

  setText(
    dashboardProfileEmail,
    user.email || "Conta ZENVORA"
  );

  updateBalanceDisplays("Carregando...");

  if (dashboardProducts) {
    dashboardProducts.textContent =
      "Carregando produtos...";
  }

  if (dashboardHomeProducts) {
    dashboardHomeProducts.textContent =
      "Carregando produtos...";
  }

  if (dashboardHistory) {
    dashboardHistory.textContent =
      "Carregando histórico...";
  }

  if (dashboardHomeHistory) {
    dashboardHomeHistory.textContent =
      "Carregando histórico...";
  }

  try {
    await saveProfile(user);

    await Promise.all([
      loadUsername(user),
      loadWallet(user.id),
      loadProducts(),
      loadHistory(user.id)
    ]);

    if (currentLoad !== dashboardLoadId) {
      return;
    }

  } catch (error) {
    console.error(
      "Erro ao carregar painel:",
      error
    );
  }
}

// ======================================================
// SAIR DA CONTA
// ======================================================

async function logout() {
  const { error } =
    await supabaseClient.auth.signOut();

  if (error) {
    alert("Não foi possível sair da conta.");
    return;
  }

  dashboardLoadId++;

  currentSession = null;

  updateAuthUI(null);

  closeAuth();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

$("dashboardLogout")?.addEventListener(
  "click",
  logout
);

$("profileLogout")?.addEventListener(
  "click",
  logout
);

$("authLogout")?.addEventListener(
  "click",
  logout
);

// ======================================================
// MENU MOBILE
// ======================================================

menuToggle?.addEventListener("click", () => {
  if (!mainNav) return;

  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");

    menuToggle?.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});

// ======================================================
// AJUSTES RESPONSIVOS
// ======================================================

function adjustMobileLayout() {
  const viewport = document.querySelector(
    'meta[name="viewport"]'
  );

  if (viewport) {
    viewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0, viewport-fit=cover"
    );
  }
}

adjustMobileLayout();

// ======================================================
// ANO DO RODAPÉ
// ======================================================

const yearElement = $("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}

// ======================================================
// INICIALIZAÇÃO
// ======================================================

translatePage(currentLanguage);

async function initializeZenvora() {
  try {
    const { data, error } =
      await supabaseClient.auth.getSession();

    if (error) throw error;

    updateAuthUI(data.session);

  } catch (error) {
    console.error(
      "Erro ao iniciar ZENVORA:",
      error
    );

    updateAuthUI(null);
  }
}

initializeZenvora();

// ======================================================
// OBSERVAR MUDANÇAS DE LOGIN
// ======================================================

if (!authListenerReady) {
  authListenerReady = true;

  supabaseClient.auth.onAuthStateChange(
    (event, session) => {
      if (
        event === "INITIAL_SESSION" ||
        event === "SIGNED_IN" ||
        event === "SIGNED_OUT" ||
        event === "TOKEN_REFRESHED" ||
        event === "USER_UPDATED"
      ) {
        setTimeout(() => {
          updateAuthUI(session);
        }, 0);
      }
    }
  );
}

// ======================================================
// FIM DO SISTEMA ZENVORA
// ======================================================
