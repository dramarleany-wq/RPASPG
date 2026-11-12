const STORAGE_KEY = 'raps-pg-demo-v2';

const profiles = [
  'Psiquiatra visitador',
  'Coordenação da RAPS',
  'Psicólogo',
  'Enfermeiro',
  'Assistente social',
  'Terapeuta ocupacional',
  'Consentimento institucional',
  'Gestor com acesso a indicadores agregados'
];

const initialState = {
  loggedIn: false,
  profile: 'Psiquiatra visitador',
  page: 'login',
  section: 'geral',
  filterUnit: 'Todas as unidades',
  query: '',
  selectedPatientId: null,
  patientTab: 'summary',
  patients: [
    {
      id: 'PG-DEMO-001',
      name: 'Marina A.',
      unit: 'Hospital Irmã Dulce',
      place: 'Enfermaria — Leito 04',
      entry: daysAgo(6),
      priority: 'Alta',
      visit: 'Pendente',
      lastVisit: null,
      nextVisit: today(),
      caps: 'CAPS II Boqueirão',
      discharge: plusDays(2),
      hasCaps: true,
      age: 34,
      sex: 'Feminino',
      diagnosis: 'Transtornos do humor',
      notes: 'Articulação com CAPS pendente e acompanhamento de alta sugerida.',
      active: true,
      interventions: [
        {
          id: 'i-1',
          category: 'Psicologia',
          owner: 'Ana M.',
          plan: 'Acolhimento e avaliação psicossocial',
          frequency: '2x/semana',
          goal: 'Fortalecer estratégias de autocuidado e suporte social',
          status: 'Em andamento',
          review: plusDays(3)
        },
        {
          id: 'i-2',
          category: 'Serviço social',
          owner: 'João R.',
          plan: 'Contato com rede de apoio familiar e CAPS',
          frequency: 'Conforme necessidade',
          goal: 'Organizar continuidade do cuidado após alta',
          status: 'Pendente',
          review: plusDays(1)
        }
      ],
      evolutions: [],
      history: [
        { title: 'Admissão no hospital', date: daysAgo(6), detail: 'Hospital Irmã Dulce · Enfermaria 04 · Acompanhamento iniciante.' },
        { title: 'Censo diário atualizado', date: today(), detail: 'Registro demonstrativo de acompanhamento assistencial.' }
      ]
    },
    {
      id: 'PG-DEMO-002',
      name: 'Carlos R.',
      unit: 'PS/UPA Quietude',
      place: 'Observação — Box 08',
      entry: daysAgo(2),
      priority: 'Média',
      visit: 'Pendente',
      lastVisit: null,
      nextVisit: today(),
      caps: 'A definir',
      discharge: plusDays(1),
      hasCaps: false,
      age: 27,
      sex: 'Masculino',
      diagnosis: 'Transtornos relacionados a substâncias',
      notes: 'Necessidade de definição de CAPS de referência e negociação de continuidade.',
      active: true,
      interventions: [
        {
          id: 'i-3',
          category: 'Psiquiatria',
          owner: 'Dr. Silva',
          plan: 'Avaliação psiquiátrica e ajuste de tratamento inicial',
          frequency: 'Visita',
          goal: 'Estabilizar condições clínicas e definir encaminhamento',
          status: 'Pendente',
          review: plusDays(1)
        }
      ],
      evolutions: [],
      history: [
        { title: 'Entrada em unidade externa', date: daysAgo(2), detail: 'PS/UPA Quietude · Observação e vigilância inicial.' }
      ]
    },
    {
      id: 'PG-DEMO-003',
      name: 'Joana S.',
      unit: 'UPA Samambaia',
      place: 'Observação — Leito 02',
      entry: daysAgo(1),
      priority: 'Alta',
      visit: 'Realizada',
      lastVisit: daysAgo(1),
      nextVisit: today(),
      caps: 'CAPS AD Praia Grande',
      discharge: plusDays(4),
      hasCaps: true,
      age: 42,
      sex: 'Feminino',
      diagnosis: 'Transtornos relacionados a substâncias',
      notes: 'Confirmar acolhimento no CAPS e continuidade do cuidado.',
      active: true,
      interventions: [
        {
          id: 'i-4',
          category: 'Enfermagem',
          owner: 'Nurse Demo',
          plan: 'Acompanhamento de sinais vitais e orientação de seguimento',
          frequency: 'Diário',
          goal: 'Monitorar riscos e preparar continuidade da assistência',
          status: 'Em andamento',
          review: plusDays(2)
        }
      ],
      evolutions: [],
      history: [
        { title: 'Visita psiquiátrica realizada', date: daysAgo(1), detail: 'Avaliação de riscos e definição de continuidade após acolhimento.' }
      ]
    },
    {
      id: 'PG-DEMO-004',
      name: 'Rafael M.',
      unit: 'Hospital Irmã Dulce',
      place: 'Enfermaria — Leito 09',
      entry: daysAgo(9),
      priority: 'Baixa',
      visit: 'Realizada',
      lastVisit: daysAgo(1),
      nextVisit: plusDays(1),
      caps: 'CAPS III Ocian',
      discharge: plusDays(6),
      hasCaps: true,
      age: 51,
      sex: 'Masculino',
      diagnosis: 'Esquizofrenia e outros transtornos psicóticos',
      notes: 'Síntese de alta em elaboração; rotina de autonomia em reabilitação.',
      active: true,
      interventions: [
        {
          id: 'i-5',
          category: 'Terapia ocupacional',
          owner: 'Lívia C.',
          plan: 'Atividades de rotina e fortalecimento da autonomia',
          frequency: '3x/semana',
          goal: 'Retomar atividades cotidianas e participação social',
          status: 'Em andamento',
          review: plusDays(4)
        }
      ],
      evolutions: [],
      history: [
        { title: 'Avaliação multiprofissional', date: daysAgo(2), detail: 'Psiquiatria, enfermagem e terapia ocupacional integraram planejamento.' }
      ]
    },
    {
      id: 'PG-DEMO-005',
      name: 'Beatriz L.',
      unit: 'Pronto-Socorro Central',
      place: 'Observação — Box 03',
      entry: daysAgo(3),
      priority: 'Média',
      visit: 'Pendente',
      lastVisit: null,
      nextVisit: today(),
      caps: 'CAPS II Boqueirão',
      discharge: today(),
      hasCaps: true,
      age: 19,
      sex: 'Feminino',
      diagnosis: 'Transtornos de ansiedade',
      notes: 'Contato interunidades necessário e revisão do plano de alta.',
      active: true,
      interventions: [],
      evolutions: [],
      history: [
        { title: 'Acolhimento no pronto-atendimento', date: daysAgo(3), detail: 'Encaminhamento para avaliação psiquiátrica e definição de continuidade.' }
      ]
    },
    {
      id: 'PG-DEMO-006',
      name: 'Pedro F.',
      unit: 'CAPS II Boqueirão',
      place: 'Acompanhamento territorial',
      entry: daysAgo(12),
      priority: 'Baixa',
      visit: 'Realizada',
      lastVisit: daysAgo(2),
      nextVisit: plusDays(3),
      caps: 'CAPS II Boqueirão',
      discharge: plusDays(3),
      hasCaps: true,
      age: 63,
      sex: 'Masculino',
      diagnosis: 'Transtornos do humor',
      notes: 'Reavaliação do PTS programada com participação da família.',
      active: true,
      interventions: [],
      evolutions: [],
      history: [
        { title: 'Acompanhamento em CAPS', date: daysAgo(12), detail: 'Atendimento territorial com objetivos de continuidade e reabilitação.' }
      ]
    }
  ]
};

function daysAgo(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return formatDate(d);
}

function plusDays(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return formatDate(d);
}

function today() {
  return formatDate(new Date());
}

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(initialState);
    const parsed = JSON.parse(raw);
    if (!parsed.patients) return structuredClone(initialState);
    return parsed;
  } catch (_) {
    return structuredClone(initialState);
  }
}

let state = loadState();

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDisplayDate(value) {
  if (!value || value === '—') return '—';
  const date = new Date(value + 'T12:00:00');
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

function daysBetween(start, end) {
  const a = new Date(start + 'T12:00:00');
  const b = new Date(end + 'T12:00:00');
  return Math.max(0, Math.round((b - a) / 86400000));
}

function getPatient(id) {
  return state.patients.find((p) => p.id === id);
}

function getActivePatients() {
  return state.patients.filter((p) => p.active);
}

function getFilteredPatients() {
  const list = getActivePatients();
  let filtered = list;

  if (state.filterUnit !== 'Todas as unidades') {
    filtered = filtered.filter((p) => p.unit === state.filterUnit);
  }

  if (state.query) {
    const q = state.query.toLowerCase();
    filtered = filtered.filter((p) => {
      return `${p.name} ${p.id} ${p.unit} ${p.caps}`.toLowerCase().includes(q);
    });
  }

  if (state.section === 'externo') {
    filtered = filtered.filter((p) => !p.unit.includes('Hospital'));
  }
  if (state.section === 'hospital') {
    filtered = filtered.filter((p) => p.unit.includes('Hospital'));
  }

  return filtered;
}

function setPage(page) {
  state.page = page;
  if (page !== 'patient') {
    state.patientTab = 'summary';
  }
  render();
}

function setSection(section) {
  state.section = section;
  state.filterUnit = 'Todas as unidades';
  render();
}

function setFilterUnit(unit) {
  state.filterUnit = unit;
  render();
}

function setQuery(queryText) {
  state.query = queryText;
  render();
}

function login() {
  state.loggedIn = true;
  state.page = 'census';
  persistState();
  render();
}

function logout() {
  state.loggedIn = false;
  state.page = 'login';
  persistState();
  render();
}

function openPatient(id) {
  state.selectedPatientId = id;
  state.patientTab = 'summary';
  state.page = 'patient';
  render();
}

function render() {
  const app = document.getElementById('app');
  if (!state.loggedIn || state.page === 'login') {
    app.innerHTML = loginView();
    return;
  }

  const content = {
    census: censusView(),
    patient: patientView(),
    patients: patientsView(),
    pts: ptsView(),
    evolutions: evolutionsView(),
    discharges: dischargesView(),
    dashboard: dashboardView(),
  }[state.page] || censusView();

  app.innerHTML = shellLayout(content);
  attachGlobalHandlers();
}

function shellLayout(mainContent) {
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">✚</div>
          <div class="brand-text">
            <strong>RAPS Praia Grande</strong>
            <small>Sistema Integrado de Saúde Mental</small>
          </div>
        </div>

        <div class="nav-group">
          <div class="nav-label">Assistência</div>
          <button class="nav-btn ${state.page === 'census' ? 'active' : ''}" onclick="setPage('census')">▦ Censo</button>
          <button class="nav-btn ${state.page === 'patients' ? 'active' : ''}" onclick="setPage('patients')">♙ Pacientes</button>
          <button class="nav-btn ${state.page === 'pts' ? 'active' : ''}" onclick="setPage('pts')">✚ PTS</button>
          <button class="nav-btn ${state.page === 'evolutions' ? 'active' : ''}" onclick="setPage('evolutions')">▤ Evoluções</button>
          <button class="nav-btn ${state.page === 'discharges' ? 'active' : ''}" onclick="setPage('discharges')">↗ Gestão de altas</button>
          <button class="nav-btn ${state.page === 'dashboard' ? 'active' : ''}" onclick="setPage('dashboard')">▥ Indicadores</button>
        </div>

        <div class="sidebar-note">
          <strong>Ambiente demonstrativo</strong><br />
          Os registros deste protótipo são públicos, fictícios e não devem ser utilizados para assistência real.
        </div>
      </aside>

      <main class="main">
        <div class="topbar">
          <div>
            <h1 class="page-title">${pageTitle()}</h1>
            <p class="subtitle">${pageSubtitle()}</p>
          </div>
          <div class="header-actions">
            <span class="pill">Demonstração</span>
            <div class="user-chip">
              <span class="avatar">${state.profile.charAt(0)}</span>
              <span>${esc(state.profile)}</span>
              <select onchange="state.profile=this.value; persistState(); render();" style="border:none;background:transparent;color:#2d4b65;max-width:160px;">
                ${profiles.map((p) => `<option value="${esc(p)}" ${state.profile === p ? 'selected' : ''}>${esc(p)}</option>`).join('')}
              </select>
            </div>
            <button class="btn" onclick="logout()">Sair</button>
          </div>
        </div>

        ${mainContent}
      </main>
    </div>

    <nav class="mobile-nav">
      <button class="${state.page === 'census' ? 'active' : ''}" onclick="setPage('census')">▦<br />Censo</button>
      <button class="${state.page === 'patients' ? 'active' : ''}" onclick="setPage('patients')">♙<br />Pacientes</button>
      <button class="${state.page === 'pts' ? 'active' : ''}" onclick="setPage('pts')">✚<br />PTS</button>
      <button class="${state.page === 'evolutions' ? 'active' : ''}" onclick="setPage('evolutions')">▤<br />Evo.</button>
      <button class="${state.page === 'dashboard' ? 'active' : ''}" onclick="setPage('dashboard')">▥<br />Indic.</button>
    </nav>
  `;
}

function pageTitle() {
  const titles = {
    census: 'Censo diário',
    patient: 'Ficha individual',
    patients: 'Pacientes',
    pts: 'Projetos terapêuticos',
    evolutions: 'Evoluções multiprofissionais',
    discharges: 'Gestão de altas',
    dashboard: 'Indicadores da RAPS'
  };
  return titles[state.page] || 'Censo diário';
}

function pageSubtitle() {
  const subs = {
    census: 'Acompanhamento assistencial e monitoramento da rede.',
    patient: 'Visão clínica e histórica do paciente selecionado.',
    patients: 'Lista de episódios ativos no ambiente demonstrativo.',
    pts: 'Intervenções pactuadas e acompanhadas por categoria profissional.',
    evolutions: 'Registros finalizados com autoria, data e previsão de alta.',
    discharges: 'Planejamento de alta responsável e continuidade da rede.',
    dashboard: 'Painel gerencial com indicadores agregados da RAPS.'
  };
  return subs[state.page] || 'Acompanhamento assistencial e monitoramento da rede.';
}

function loginView() {
  return `
    <div class="login-screen">
      <div class="login-card">
        <div class="login-header">
          <div class="brand-mark">✚</div>
          <div>
            <h1>RAPS Praia Grande</h1>
            <p>Sistema Integrado de Saúde Mental</p>
          </div>
        </div>

        <div class="login-form">
          <div class="field">
            <label>Usuário</label>
            <input type="text" value="profissional.demo@raps.pg" readonly />
          </div>

          <div class="field">
            <label>Perfil de acesso</label>
            <select id="loginProfile">
              ${profiles.map((p) => `<option value="${esc(p)}" ${p === state.profile ? 'selected' : ''}>${esc(p)}</option>`).join('')}
            </select>
          </div>

          <div class="field">
            <label>Senha</label>
            <input type="password" value="demo123" readonly />
          </div>

          <button class="btn primary" style="margin-top:8px;" onclick="state.profile=document.getElementById('loginProfile').value; persistState(); login();">Entrar no ambiente demonstrativo</button>
        </div>

        <div class="login-rights">
          Ambiente exclusivo para validação de fluxos · sem dados reais de pacientes
        </div>
      </div>
    </div>
  `;
}

function kpi(title, value, meta, icon) {
  return `
    <article class="card kpi">
      <div class="kpi-head">
        <span>${esc(title)}</span>
        <span class="kpi-icon">${icon}</span>
      </div>
      <div class="kpi-value">${esc(value)}</div>
      <div class="kpi-meta">${esc(meta)}</div>
    </article>
  `;
}

function badge(label, type = 'blue') {
  return `<span class="badge ${type}">${esc(label)}</span>`;
}

function censusView() {
  const active = getActivePatients();
  const filtered = getFilteredPatients();
  const pending = active.filter((p) => p.visit === 'Pendente').length;
  const external = active.filter((p) => !p.unit.includes('Hospital')).length;
  const overdue = active.filter((p) => p.discharge && p.discharge < today()).length;

  return `
    <div class="kpis">
      ${kpi('Pacientes ativos', String(active.length), 'em acompanhamento', '♙')}
      ${kpi('Visitas pendentes', String(pending), 'requerem avaliação', '◷')}
      ${kpi('Unidades externas', String(external), 'PS e UPAs', '⌖')}
      ${kpi('Previsões vencidas', String(overdue), 'revisar planejamento', '↗')}
    </div>

    <div class="card panel">
      <div class="panel-head">
        <h2>Censo assistencial</h2>
        <small>Atualização automática por registros simulados</small>
      </div>

      <div class="toolbar">
        <div class="segment">
          <button class="${state.section === 'geral' ? 'active' : ''}" onclick="setSection('geral')">Geral da RAPS</button>
          <button class="${state.section === 'externo' ? 'active' : ''}" onclick="setSection('externo')">Unidades externas</button>
          <button class="${state.section === 'hospital' ? 'active' : ''}" onclick="setSection('hospital')">Hospital Irmã Dulce</button>
        </div>

        <select class="field" style="min-width:180px;" onchange="setFilterUnit(this.value)">
          <option>Todas as unidades</option>
          ${Array.from(new Set(state.patients.map((p) => p.unit))).map((u) => `<option ${state.filterUnit === u ? 'selected' : ''}>${esc(u)}</option>`).join('')}
        </select>

        <input class="field" style="min-width:220px;" placeholder="Buscar paciente ou identificador" value="${esc(state.query)}" oninput="setQuery(this.value)" />
      </div>

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Unidade / local</th>
              <th>Entrada</th>
              <th>Permanência</th>
              <th>Prioridade</th>
              <th>Visita</th>
              <th>Próxima avaliação</th>
              <th>CAPS</th>
              <th>Alta prevista</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length ? filtered.map((p) => `
              <tr>
                <td>
                  <span class="patient-name">${esc(p.name)}</span>
                  <span class="small-meta">${esc(p.id)}</span>
                </td>
                <td>
                  ${esc(p.unit)}
                  <span class="small-meta">${esc(p.place)}</span>
                </td>
                <td>${formatDisplayDate(p.entry)}</td>
                <td>${daysBetween(p.entry, today())} dias</td>
                <td>${badge(p.priority, p.priority === 'Alta' ? 'red' : p.priority === 'Média' ? 'yellow' : 'green')}</td>
                <td>${badge(p.visit, p.visit === 'Realizada' ? 'green' : 'yellow')}</td>
                <td>${formatDisplayDate(p.nextVisit)}</td>
                <td>${esc(p.caps)}</td>
                <td>${formatDisplayDate(p.discharge)}</td>
                <td><button class="inline-link" onclick="openPatient('${p.id}')">Abrir ficha →</button></td>
              </tr>
            `).join('') : '<tr><td colspan="10" class="empty">Nenhum paciente encontrado para os filtros aplicados.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function patientView() {
  const patient = getPatient(state.selectedPatientId);
  if (!patient) {
    state.page = 'census';
    render();
    return '';
  }

  const tabs = ['summary', 'pts', 'evolutions', 'history'];

  return `
    <div class="card hero">
      <div>
        <div class="small-meta" style="margin:0; font-size:0.68rem; color:#0b5d8c; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">${esc(patient.unit)} · ${esc(patient.place)}</div>
        <h2>${esc(patient.name)} ${badge('FICTÍCIO', 'blue')}</h2>
        <p class="hero-meta">${esc(patient.id)} · Entrada em ${formatDisplayDate(patient.entry)} · ${daysBetween(patient.entry, today())} dias de permanência</p>

        <div class="hero-grid">
          <div class="hero-stat"><small>CAPS referência</small><strong>${esc(patient.caps)}</strong></div>
          <div class="hero-stat"><small>Última visita</small><strong>${formatDisplayDate(patient.lastVisit)}</strong></div>
          <div class="hero-stat"><small>Próxima avaliação</small><strong>${formatDisplayDate(patient.nextVisit)}</strong></div>
          <div class="hero-stat"><small>Previsão de alta</small><strong>${formatDisplayDate(patient.discharge)}</strong></div>
        </div>
      </div>

      <div class="header-actions">
        ${badge(patient.priority, patient.priority === 'Alta' ? 'red' : patient.priority === 'Média' ? 'yellow' : 'green')}
        ${badge(patient.visit, patient.visit === 'Realizada' ? 'green' : 'yellow')}
      </div>
    </div>

    <div class="card panel" style="margin-top:16px;">
      <div class="tabs">
        <button class="${state.patientTab === 'summary' ? 'active' : ''}" onclick="state.patientTab='summary'; render();">Resumo assistencial</button>
        <button class="${state.patientTab === 'pts' ? 'active' : ''}" onclick="state.patientTab='pts'; render();">PTS</button>
        <button class="${state.patientTab === 'evolutions' ? 'active' : ''}" onclick="state.patientTab='evolutions'; render();">Evoluções</button>
        <button class="${state.patientTab === 'history' ? 'active' : ''}" onclick="state.patientTab='history'; render();">Histórico</button>
      </div>

      ${viewForPatientTab(patient)}
    </div>
  `;
}

function viewForPatientTab(patient) {
  if (state.patientTab === 'pts') {
    return `
      <div class="panel-head" style="margin-top:8px;">
        <h2>Projeto Terapêutico Singular</h2>
        <button class="btn primary" onclick="openIntervention('${patient.id}')">＋ Nova intervenção</button>
      </div>

      <div class="page-grid">
        <div>
          <div class="notice success">Diagnóstico situacional ampliado, metas pactuadas, continuidade do cuidado e articulação com CAPS são campos demonstrativos a serem preenchidos pela equipe.</div>
          <div class="metric-list">
            <div class="metric-row"><span>Diagnóstico situacional</span><strong>Preenchido</strong></div>
            <div class="metric-row"><span>Objetivos terapêuticos</span><strong>Pactuados</strong></div>
            <div class="metric-row"><span>Plano de crise</span><strong>Em construção</strong></div>
            <div class="metric-row"><span>Previsão de alta</span><strong>${formatDisplayDate(patient.discharge)}</strong></div>
          </div>
        </div>

        <div>
          <div class="notice">A alta prevista não implica alta efetiva; a ação final deve ser registrada separadamente.</div>
        </div>
      </div>

      <div style="margin-top:18px;">
        ${(patient.interventions || []).length ? patient.interventions.map((i) => `
          <div class="intervention">
            <div class="intervention-head">
              <strong>${esc(i.category)}</strong>
              ${badge(i.status, i.status === 'Pendente' ? 'yellow' : i.status === 'Em andamento' ? 'blue' : 'green')}
            </div>
            <p>
              <b>Responsável:</b> ${esc(i.owner)}<br />
              <b>Frequência:</b> ${esc(i.frequency)}<br />
              <b>Proposta terapêutica:</b> ${esc(i.plan)}<br />
              <b>Meta:</b> ${esc(i.goal)}<br />
              <b>Reavaliação:</b> ${formatDisplayDate(i.review)}
            </p>
            <div style="margin-top:10px;">
              <button class="inline-link" onclick="updateIntervention('${patient.id}', '${i.id}')">Atualizar situação</button>
            </div>
          </div>
        `).join('') : '<div class="empty">Nenhuma intervenção cadastrada para este paciente.</div>'}
      </div>
    `;
  }

  if (state.patientTab === 'evolutions') {
    return `
      <div class="panel-head" style="margin-top:8px;">
        <h2>Evoluções multiprofissionais</h2>
        <button class="btn primary" onclick="openEvolution('${patient.id}')">＋ Registrar evolução</button>
      </div>
      ${(patient.evolutions || []).length ? patient.evolutions.slice().reverse().map((ev) => `
        <div class="intervention">
          <div class="intervention-head">
            <strong>${esc(ev.category)} · ${esc(ev.professional)}</strong>
            <span class="badge green">Finalizada</span>
          </div>
          <p>
            <b>Data/hora:</b> ${formatDisplayDate(ev.date)} ${esc(ev.time)}<br />
            <b>Previsão de alta:</b> ${formatDisplayDate(ev.discharge)}<br />
            <b>Avaliação:</b> ${esc(ev.assessment)}<br />
            <b>Condutas:</b> ${esc(ev.conducts || '-')}
          </p>
        </div>
      `).join('') : '<div class="empty">Ainda não existem evoluções finalizadas neste perfil demonstrativo.</div>'}
    `;
  }

  if (state.patientTab === 'history') {
    return `
      <div class="panel-head" style="margin-top:8px;">
        <h2>Histórico de atendimento</h2>
      </div>
      <div class="timeline">
        ${(patient.history || []).slice().reverse().map((event) => `
          <div class="timeline-item">
            <strong>${esc(event.title)}</strong>
            <p>${formatDisplayDate(event.date)} · ${esc(event.detail)}</p>
          </div>
        `).join('') || '<div class="empty">Não há movimentações registradas.</div>'}
      </div>
    `;
  }

  return `
    <div class="page-grid" style="margin-top:8px;">
      <div>
        <div class="panel-head">
          <h2>Resumo assistencial</h2>
          <button class="btn" onclick="openEditPatient('${patient.id}')">Editar demonstração</button>
        </div>

        <div class="metric-list">
          <div class="metric-row"><span>Identificação</span><strong>${esc(patient.id)}</strong></div>
          <div class="metric-row"><span>Unidade atual</span><strong>${esc(patient.unit)}</strong></div>
          <div class="metric-row"><span>CAPS referência</span><strong>${esc(patient.caps)}</strong></div>
          <div class="metric-row"><span>Situação clínica</span><strong>${esc(patient.diagnosis)}</strong></div>
          <div class="metric-row"><span>Última visita</span><strong>${formatDisplayDate(patient.lastVisit)}</strong></div>
          <div class="metric-row"><span>Próxima avaliação</span><strong>${formatDisplayDate(patient.nextVisit)}</strong></div>
          <div class="metric-row"><span>Previsão de alta</span><strong>${formatDisplayDate(patient.discharge)}</strong></div>
        </div>

        <div class="notice">${esc(patient.notes)}</div>
      </div>

      <div>
        <div class="panel-head">
          <h2>Próximas ações</h2>
        </div>
        ${((patient.interventions || []).length ? patient.interventions.slice(0, 3).map((i) => `
          <div class="intervention">
            <div class="intervention-head">
              <strong>${esc(i.category)}</strong>
              ${badge(i.status, i.status === 'Pendente' ? 'yellow' : i.status === 'Em andamento' ? 'blue' : 'green')}
            </div>
            <p>${esc(i.plan)}<br />Reavaliação: ${formatDisplayDate(i.review)}</p>
          </div>
        `).join('') : '<div class="empty">Nenhuma intervenção atual neste paciente.</div>')}

        <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
          <button class="btn primary" onclick="openEvolution('${patient.id}')">＋ Registrar evolução</button>
          <button class="btn" onclick="openIntegration('${patient.id}')">＋ Ação de integração</button>
        </div>
      </div>
    </div>
  `;
}

function patientsView() {
  return `
    <div class="card panel">
      <div class="panel-head">
        <h2>Lista de pacientes</h2>
        <small>${getActivePatients().length} episódios ativos</small>
      </div>

      <div class="toolbar">
        <input class="field" style="min-width:220px;" placeholder="Buscar paciente ou ID" value="${esc(state.query)}" oninput="setQuery(this.value)" />
      </div>

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Unidade</th>
              <th>CAPS</th>
              <th>Situação</th>
              <th>Alta prevista</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${getActivePatients().filter((p) => !state.query || `${p.name} ${p.id}`.toLowerCase().includes(state.query.toLowerCase())).map((p) => `
              <tr>
                <td>
                  <span class="patient-name">${esc(p.name)}</span>
                  <span class="small-meta">${esc(p.id)}</span>
                </td>
                <td>${esc(p.unit)}</td>
                <td>${esc(p.caps)}</td>
                <td>${badge(p.visit, p.visit === 'Realizada' ? 'green' : 'yellow')}</td>
                <td>${formatDisplayDate(p.discharge)}</td>
                <td><button class="inline-link" onclick="openPatient('${p.id}')">Abrir →</button></td>
              </tr>
            `).join('') || '<tr><td colspan="6" class="empty">Nenhum paciente encontrado.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function ptsView() {
  const list = getActivePatients();
  return `
    <div class="card panel">
      <div class="panel-head">
        <h2>Projetos terapêuticos singulares</h2>
        <button class="btn primary" onclick="openIntervention('${list[0]?.id || state.selectedPatientId || 'PG-DEMO-001'}')">＋ Novo PTS</button>
      </div>

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Unidade</th>
              <th>Intervenções</th>
              <th>Em andamento</th>
              <th>Alta prevista</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${list.map((p) => `
              <tr>
                <td>
                  <span class="patient-name">${esc(p.name)}</span>
                  <span class="small-meta">${esc(p.id)}</span>
                </td>
                <td>${esc(p.unit)}</td>
                <td>${(p.interventions || []).length}</td>
                <td>${(p.interventions || []).filter((i) => i.status === 'Em andamento').length}</td>
                <td>${formatDisplayDate(p.discharge)}</td>
                <td><button class="inline-link" onclick="openPatient('${p.id}'); state.patientTab='pts'; render();">Abrir PTS →</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function evolutionsView() {
  const list = state.patients
    .flatMap((p) => (p.evolutions || []).map((e) => ({ ...e, patient: p })))
    .reverse();

  return `
    <div class="card panel">
      <div class="panel-head">
        <h2>Evoluções finalizadas</h2>
        <small>${list.length} registros</small>
      </div>

      ${list.length ? list.map((e) => `
        <div class="intervention">
          <div class="intervention-head">
            <strong>${esc(e.patient.name)} · ${esc(e.category)}</strong>
            <span class="badge green">Finalizada</span>
          </div>
          <p>
            <b>Profissional:</b> ${esc(e.professional)}<br />
            <b>Data/hora:</b> ${formatDisplayDate(e.date)} ${esc(e.time)}<br />
            <b>Previsão de alta:</b> ${formatDisplayDate(e.discharge)}<br />
            <b>Avaliação:</b> ${esc(e.assessment)}
          </p>
        </div>
      `).join('') : '<div class="empty">Ainda não há evoluções registradas no ambiente demonstrativo.</div>'}
    </div>
  `;
}

function dischargesView() {
  const active = getActivePatients();
  const overdue = active.filter((p) => p.discharge < today());
  const todayList = active.filter((p) => p.discharge === today());
  const next7 = active.filter((p) => p.discharge > today() && p.discharge <= plusDays(7));
  const pending = active.filter((p) => !p.hasCaps || p.caps === 'A definir');

  return `
    <div class="kpis">
      ${kpi('Previsões vencidas', String(overdue.length), 'requere reavaliação', '⚠')}
      ${kpi('Previstas para hoje', String(todayList.length), 'conferir continuidade', '◷')}
      ${kpi('Próximos 7 dias', String(next7.length), 'planejamento ativo', '↗')}
      ${kpi('Pendências de articulação', String(pending.length), 'com hats / CAPS', '⌖')}
    </div>

    <div class="page-grid">
      <div class="card panel">
        <div class="panel-head"><h2>Altas previstas</h2></div>
        ${[['Previsões vencidas', overdue], ['Previstas para hoje', todayList], ['Próximos sete dias', next7]].map(([title, list]) => `
          <div class="intervention">
            <div class="intervention-head">
              <strong>${title}</strong>
              <span class="badge blue">${list.length}</span>
            </div>
            ${list.length ? list.map((p) => `
              <p>
                ${esc(p.name)} · ${esc(p.unit)}<br />
                CAPS: ${esc(p.caps)} · Previsão: ${formatDisplayDate(p.discharge)}
              </p>
            `).join('') : '<p>Nenhum paciente neste bloco.</p>'}
          </div>
        `).join('')}
      </div>

      <div class="card panel">
        <div class="panel-head"><h2>Pendências de articulação</h2></div>
        ${pending.length ? pending.map((p) => `
          <div class="intervention">
            <div class="intervention-head"><strong>${esc(p.name)}</strong>${badge(p.priority, p.priority === 'Alta' ? 'red' : 'yellow')}</div>
            <p>${esc(p.unit)} · ${esc(p.caps)}<br />${esc(p.notes)}</p>
            <div style="margin-top:10px;"><button class="inline-link" onclick="openPatient('${p.id}')">Abrir ficha →</button></div>
          </div>
        `).join('') : '<div class="empty">Sem pendências de rede nesta demonstração.</div>'}
      </div>
    </div>
  `;
}

function dashboardView() {
  const active = getActivePatients();
  const all = state.patients;
  const linked = active.filter((p) => p.hasCaps).length;
  const interventions = all.flatMap((p) => p.interventions || []);
  const evolutions = all.flatMap((p) => p.evolutions || []);

  return `
    <div class="kpis">
      ${kpi('Pacientes únicos', String(all.length), 'episódios fictícios', '♙')}
      ${kpi('Ativos', String(active.length), 'em acompanhamento', '◷')}
      ${kpi('Vinculados ao CAPS', `${linked}`, `${Math.round((linked / Math.max(active.length, 1)) * 100)}% da rede`, '⌖')}
      ${kpi('Evoluções', String(evolutions.length), 'finalizadas', '▤')}
    </div>

    <div class="page-grid">
      <div class="card panel">
        <div class="panel-head"><h2>A. Censo e epidemiologia</h2></div>
        <div class="chart">
          ${Array.from(new Set(active.map((p) => p.unit))).slice(0, 7).map((unit) => {
            const count = active.filter((p) => p.unit === unit).length;
            const height = Math.max(18, (count / Math.max(active.length, 1)) * 100);
            return `
              <div class="bar-col">
                <div class="bar-wrap"><div class="bar" style="height:${height}%"></div></div>
                <small>${esc(unit.replace('Hospital Irmã Dulce', 'Hospital').replace('Pronto-Socorro Central', 'PS Central').slice(0, 10)}</small>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="card panel">
        <div class="panel-head"><h2>B. Integração da RAPS</h2></div>
        <div class="metric-list">
          <div class="metric-row"><span>Sem CAPS na entrada</span><strong>${active.filter((p) => !p.hasCaps).length}</strong></div>
          <div class="metric-row"><span>Vinculados durante atendimento</span><strong>${linked}</strong></div>
          <div class="metric-row"><span>Taxa de vinculação</span><strong>${Math.round((linked / Math.max(active.length, 1)) * 100)}%</strong></div>
          <div class="metric-row"><span>Altas responsáveis</span><strong>${all.filter((p) => !p.active).length}</strong></div>
          <div class="metric-row"><span>Contrarreferências</span><strong>${Math.max(2, Math.min(8, linked))}</strong></div>
        </div>
      </div>
    </div>

    <div class="page-grid" style="margin-top:16px;">
      <div class="card panel">
        <div class="panel-head"><h2>C. PTS multiprofissional</h2></div>
        <div class="metric-list">
          <div class="metric-row"><span>PTS ativos</span><strong>${active.length}</strong></div>
          <div class="metric-row"><span>Intervenções planejadas</span><strong>${interventions.length}</strong></div>
          <div class="metric-row"><span>Em andamento</span><strong>${interventions.filter((i) => i.status === 'Em andamento').length}</strong></div>
          <div class="metric-row"><span>Pendentes</span><strong>${interventions.filter((i) => i.status === 'Pendente').length}</strong></div>
          <div class="metric-row"><span>Concluídas</span><strong>${interventions.filter((i) => i.status === 'Concluída').length}</strong></div>
        </div>
      </div>

      <div class="card panel">
        <div class="panel-head"><h2>D. Gestão de altas</h2></div>
        <div class="metric-list">
          <div class="metric-row"><span>Previsões vencidas</span><strong>${active.filter((p) => p.discharge < today()).length}</strong></div>
          <div class="metric-row"><span>Previstas para hoje</span><strong>${active.filter((p) => p.discharge === today()).length}</strong></div>
          <div class="metric-row"><span>Próximos 7 dias</span><strong>${active.filter((p) => p.discharge > today() && p.discharge <= plusDays(7)).length}</strong></div>
          <div class="metric-row"><span>Taxa de cumprimento da previsão</span><strong>87%</strong></div>
        </div>
      </div>
    </div>
  `;
}

function attachGlobalHandlers() {
  // no-op; all handlers are inline in template strings.
}

function openIntervention(patientId) {
  const patient = getPatient(patientId);
  if (!patient) return;

  const modalHtml = `
    <div class="modal-backdrop" onclick="if (event.target.classList.contains('modal-backdrop')) this.remove();">
      <div class="modal">
        <div class="modal-head">
          <h3>Nova intervenção no PTS</h3>
          <button class="close-btn" onclick="this.closest('.modal-backdrop').remove()">×</button>
        </div>

        <div class="form-grid">
          <div class="form-field">
            <label>Paciente</label>
            <input value="${esc(patient.name)} · ${esc(patient.id)}" readonly />
          </div>
          <div class="form-field">
            <label>Categoria profissional</label>
            <select id="interv-cat">
              <option>Psiquiatria</option>
              <option>Psicologia</option>
              <option>Enfermagem</option>
              <option>Serviço social</option>
              <option>Terapia ocupacional</option>
              <option>Profissional CAPS</option>
            </select>
          </div>
          <div class="form-field">
            <label>Responsável</label>
            <input id="interv-owner" value="Profissional demonstrativo" />
          </div>
          <div class="form-field">
            <label>Frequência</label>
            <input id="interv-freq" value="Semanal" />
          </div>
          <div class="form-field full">
            <label>Proposta terapêutica</label>
            <textarea id="interv-plan"></textarea>
          </div>
          <div class="form-field full">
            <label>Meta terapêutica</label>
            <textarea id="interv-goal"></textarea>
          </div>
          <div class="form-field">
            <label>Data de reavaliação</label>
            <input id="interv-review" type="date" value="${plusDays(7)}" />
          </div>
          <div class="form-field">
            <label>Situação</label>
            <select id="interv-status">
              <option>Pendente</option>
              <option>Em andamento</option>
              <option>Concluída</option>
              <option>Reavaliar</option>
            </select>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn" onclick="this.closest('.modal-backdrop').remove()">Cancelar</button>
          <button class="btn primary" onclick="saveIntervention('${patient.id}')">Salvar intervenção</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function saveIntervention(patientId) {
  const patient = getPatient(patientId);
  if (!patient) return;

  const cat = document.getElementById('interv-cat').value;
  const owner = document.getElementById('interv-owner').value;
  const freq = document.getElementById('interv-freq').value;
  const plan = document.getElementById('interv-plan').value;
  const goal = document.getElementById('interv-goal').value;
  const review = document.getElementById('interv-review').value;
  const status = document.getElementById('interv-status').value;

  patient.interventions.push({
    id: `i-${Date.now()}`,
    category: cat,
    owner,
    frequency: freq,
    plan,
    goal,
    review,
    status
  });

  patient.history.push({
    title: 'Nova intervenção adicionada ao PTS',
    date: today(),
    detail: `${cat} · ${owner}`
  });

  persistState();
  document.querySelector('.modal-backdrop').remove();
  render();
}

function updateIntervention(patientId, interventionId) {
  const patient = getPatient(patientId);
  const item = patient.interventions.find((i) => i.id === interventionId);
  if (!item) return;

  const nextStatus = window.prompt('Nova situação da intervenção:', item.status || 'Pendente');
  if (!nextStatus) return;

  item.status = nextStatus;
  patient.history.push({
    title: 'Atualização de intervenção',
    date: today(),
    detail: `${item.category} · ${nextStatus}`
  });

  persistState();
  render();
}

function openEvolution(patientId) {
  const patient = getPatient(patientId);
  if (!patient) return;

  const modalHtml = `
    <div class="modal-backdrop" onclick="if (event.target.classList.contains('modal-backdrop')) this.remove();">
      <div class="modal">
        <div class="modal-head">
          <h3>Registrar evolução multiprofissional</h3>
          <button class="close-btn" onclick="this.closest('.modal-backdrop').remove()">×</button>
        </div>

        <div class="form-grid">
          <div class="form-field">
            <label>Paciente</label>
            <input value="${esc(patient.name)} · ${esc(patient.id)}" readonly />
          </div>
          <div class="form-field">
            <label>Categoria</label>
            <select id="evo-cat">
              <option>Psiquiatria</option>
              <option>Psicologia</option>
              <option>Enfermagem</option>
              <option>Serviço social</option>
              <option>Terapia ocupacional</option>
            </select>
          </div>
          <div class="form-field">
            <label>Profissional</label>
            <input id="evo-prof" value="Profissional demonstrativo" />
          </div>
          <div class="form-field">
            <label>Data</label>
            <input id="evo-date" type="date" value="${today()}" />
          </div>
          <div class="form-field">
            <label>Hora</label>
            <input id="evo-time" type="time" value="${new Date().toTimeString().slice(0, 5)}" />
          </div>
          <div class="form-field">
            <label>Previsão de alta</label>
            <input id="evo-discharge" type="date" value="${patient.discharge || plusDays(3)}" />
          </div>
          <div class="form-field full">
            <label>Avaliação</label>
            <textarea id="evo-assessment"></textarea>
          </div>
          <div class="form-field full">
            <label>Condutas</label>
            <textarea id="evo-conducts"></textarea>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn" onclick="this.closest('.modal-backdrop').remove()">Cancelar</button>
          <button class="btn primary" onclick="saveEvolution('${patient.id}')">Finalizar evolução</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function saveEvolution(patientId) {
  const patient = getPatient(patientId);
  if (!patient) return;

  const discharge = document.getElementById('evo-discharge').value;
  if (!discharge) {
    alert('A previsão de alta é obrigatória para evoluções finalizadas.');
    return;
  }

  const evolution = {
    category: document.getElementById('evo-cat').value,
    professional: document.getElementById('evo-prof').value,
    date: document.getElementById('evo-date').value,
    time: document.getElementById('evo-time').value,
    discharge,
    assessment: document.getElementById('evo-assessment').value,
    conducts: document.getElementById('evo-conducts').value
  };

  if (!patient.evolutions) patient.evolutions = [];
  patient.evolutions.push(evolution);
  patient.discharge = discharge;
  patient.lastVisit = evolution.date;
  patient.nextVisit = plusDays(1);
  patient.visit = 'Realizada';
  patient.history.push({
    title: 'Evolução finalizada',
    date: evolution.date,
    detail: `${evolution.category} · ${evolution.professional} · alta prevista ${discharge}`
  });

  persistState();
  document.querySelector('.modal-backdrop').remove();
  render();
}

function openEditPatient(patientId) {
  const patient = getPatient(patientId);
  const modalHtml = `
    <div class="modal-backdrop" onclick="if (event.target.classList.contains('modal-backdrop')) this.remove();">
      <div class="modal">
        <div class="modal-head">
          <h3>Editar dados demonstrativos</h3>
          <button class="close-btn" onclick="this.closest('.modal-backdrop').remove()">×</button>
        </div>

        <div class="form-grid">
          <div class="form-field">
            <label>Prioridade</label>
            <select id="edit-priority">
              <option ${patient.priority === 'Alta' ? 'selected' : ''}>Alta</option>
              <option ${patient.priority === 'Média' ? 'selected' : ''}>Média</option>
              <option ${patient.priority === 'Baixa' ? 'selected' : ''}>Baixa</option>
            </select>
          </div>
          <div class="form-field">
            <label>CAPS</label>
            <select id="edit-caps">
              <option ${patient.caps === 'A definir' ? 'selected' : ''}>A definir</option>
              <option ${patient.caps === 'CAPS II Boqueirão' ? 'selected' : ''}>CAPS II Boqueirão</option>
              <option ${patient.caps === 'CAPS III Ocian' ? 'selected' : ''}>CAPS III Ocian</option>
              <option ${patient.caps === 'CAPS AD Praia Grande' ? 'selected' : ''}>CAPS AD Praia Grande</option>
            </select>
          </div>
          <div class="form-field">
            <label>Próxima avaliação</label>
            <input id="edit-next" type="date" value="${patient.nextVisit || today()}" />
          </div>
          <div class="form-field">
            <label>Previsão de alta</label>
            <input id="edit-discharge" type="date" value="${patient.discharge || plusDays(3)}" />
          </div>
          <div class="form-field full">
            <label>Pendências</label>
            <textarea id="edit-notes">${esc(patient.notes || '')}</textarea>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn" onclick="this.closest('.modal-backdrop').remove()">Cancelar</button>
          <button class="btn primary" onclick="saveEditPatient('${patient.id}')">Salvar</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function saveEditPatient(patientId) {
  const patient = getPatient(patientId);
  if (!patient) return;

  patient.priority = document.getElementById('edit-priority').value;
  patient.caps = document.getElementById('edit-caps').value;
  patient.nextVisit = document.getElementById('edit-next').value;
  patient.discharge = document.getElementById('edit-discharge').value;
  patient.notes = document.getElementById('edit-notes').value;
  patient.hasCaps = patient.caps !== 'A definir';

  patient.history.push({
    title: 'Edição manual do resumo assistencial',
    date: today(),
    detail: `Prioridade ${patient.priority} · CAPS ${patient.caps}`
  });

  persistState();
  document.querySelector('.modal-backdrop').remove();
  render();
}

function openIntegration(patientId) {
  const patient = getPatient(patientId);
  const modalHtml = `
    <div class="modal-backdrop" onclick="if (event.target.classList.contains('modal-backdrop')) this.remove();">
      <div class="modal">
        <div class="modal-head">
          <h3>Registrar ação de integração da rede</h3>
          <button class="close-btn" onclick="this.closest('.modal-backdrop').remove()">×</button>
        </div>

        <div class="form-grid">
          <div class="form-field">
            <label>Tipo de ação</label>
            <select id="int-type">
              <option>Contato interunidades</option>
              <option>Discussão de caso</option>
              <option>Roda de conversa</option>
              <option>Matriciamento</option>
              <option>Reunião de rede</option>
              <option>Contrarreferência</option>
            </select>
          </div>
          <div class="form-field">
            <label>Situação</label>
            <select id="int-status">
              <option>Solicitado</option>
              <option>Aceito</option>
              <option>Agendado</option>
              <option>Realizado</option>
            </select>
          </div>
          <div class="form-field full">
            <label>Registro / plano de continuidade</label>
            <textarea id="int-detail"></textarea>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn" onclick="this.closest('.modal-backdrop').remove()">Cancelar</button>
          <button class="btn primary" onclick="saveIntegration('${patient.id}')">Salvar integração</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function saveIntegration(patientId) {
  const patient = getPatient(patientId);
  if (!patient) return;

  const type = document.getElementById('int-type').value;
  const status = document.getElementById('int-status').value;
  const detail = document.getElementById('int-detail').value;

  patient.history.push({
    title: `Integração da rede: ${type}`,
    date: today(),
    detail: `${status} · ${detail || 'Registro demonstrativo sem informação detalhada.'}`
  });

  persistState();
  document.querySelector('.modal-backdrop').remove();
  render();
}

render();
window.setPage = setPage;
window.login = login;
window.logout = logout;
window.openPatient = openPatient;
window.openEvolution = openEvolution;
window.openIntervention = openIntervention;
window.updateIntervention = updateIntervention;
window.openEditPatient = openEditPatient;
window.openIntegration = openIntegration;
window.setSection = setSection;
window.setFilterUnit = setFilterUnit;
window.setQuery = setQuery;
window.saveIntervention = saveIntervention;
window.saveEvolution = saveEvolution;
window.saveEditPatient = saveEditPatient;
window.saveIntegration = saveIntegration;
window.render = render;
