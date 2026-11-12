body {
  margin: 0;
  font-family: Inter, "Segoe UI", sans-serif;
  background: #edf5f9;
  color: #18344a;
}

* { box-sizing: border-box; }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }

#app {
  min-height: 100vh;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
}

.sidebar {
  background: #f8fbfd;
  border-right: 1px solid #dfeaf3;
  padding: 18px 14px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  padding: 6px 8px;
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0d7eb3, #25a57f);
  color: white;
  display: grid;
  place-items: center;
  font-weight: 800;
}

.brand-text strong {
  display: block;
  font-size: 0.9rem;
}

.brand-text small {
  color: #6a7d8b;
  font-size: 0.68rem;
}

.nav-group {
  margin-top: 12px;
}

.nav-label {
  color: #8aa0ad;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.62rem;
  font-weight: 800;
  margin: 8px 10px 10px;
}

.nav-btn {
  width: 100%;
  border: none;
  background: transparent;
  text-align: left;
  padding: 10px 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #49657a;
  font-weight: 700;
}

.nav-btn.active {
  background: #e8f4fb;
  color: #0b5d8c;
}

.sidebar-note {
  margin-top: 20px;
  background: #ebf8f1;
  border: 1px solid #cfe9d9;
  border-radius: 12px;
  padding: 12px 10px;
  color: #335d4d;
  font-size: 0.72rem;
  line-height: 1.5;
}

.main {
  padding: 28px 32px 60px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
}

.page-title {
  margin: 0;
  font-size: clamp(1.65rem, 2vw, 2.2rem);
  color: #173a52;
}

.subtitle {
  color: #6d7f90;
  margin: 6px 0 0;
  font-size: 0.82rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.pill {
  background: #fff5db;
  color: #8a5e00;
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.user-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid #dfeaf3;
  border-radius: 12px;
  padding: 6px 10px;
  font-size: 0.8rem;
  color: #284c66;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #dff1f8;
  color: #0b5d8c;
  font-weight: 800;
}

.btn {
  border: 1px solid #dbe7ef;
  background: white;
  color: #274c66;
  border-radius: 10px;
  padding: 9px 12px;
  font-weight: 700;
}

.btn.primary {
  background: #0b5d8c;
  border-color: #0b5d8c;
  color: white;
}

.btn.success {
  background: #1f8d66;
  border-color: #1f8d66;
  color: white;
}

.btn.link {
  border: none;
  background: transparent;
  color: #0c6d99;
  font-weight: 700;
  padding: 0;
}

.kpis {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.card {
  background: #fff;
  border: 1px solid #dfeaf3;
  border-radius: 14px;
  box-shadow: 0 10px 26px rgba(11, 47, 70, 0.04);
}

.kpi {
  padding: 16px 18px;
}

.kpi-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #738ba0;
  font-size: 0.72rem;
  margin-bottom: 10px;
}

.kpi-icon {
  background: #edf5fb;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  font-size: 1rem;
}

.kpi-value {
  font-weight: 800;
  font-size: clamp(1.3rem, 1.2vw, 2rem);
  color: #163d58;
  margin-bottom: 4px;
}

.kpi-meta {
  font-size: 0.72rem;
  color: #7d8f9e;
}

.panel {
  padding: 16px 18px;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.panel h2 {
  margin: 0;
  font-size: 0.98rem;
  color: #183d57;
}

.panel small {
  color: #7a8e9f;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.segment {
  display: flex;
  background: #f4f8fb;
  border: 1px solid #dfeaf3;
  border-radius: 10px;
  padding: 4px;
}

.segment button {
  border: none;
  background: transparent;
  color: #5f7890;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 0.72rem;
}

.segment button.active {
  background: #eaf6fb;
  color: #0b5d8c;
}

.field,
.field input,
.field select,
.field textarea {
  border-radius: 10px;
  border: 1px solid #dfeaf3;
  background: white;
  color: #1d4059;
}

.field input,
.field select,
.field textarea {
  min-height: 38px;
  width: 100%;
  padding: 9px 10px;
}

.field textarea {
  min-height: 90px;
  resize: vertical;
}

.table-wrap {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
}

.table th {
  text-align: left;
  color: #8598a8;
  font-size: 0.63rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 10px 8px;
  border-bottom: 1px solid #edf2f7;
}

.table td {
  padding: 12px 8px;
  border-bottom: 1px solid #edf2f7;
  font-size: 0.77rem;
  color: #35546b;
}

.patient-name {
  font-weight: 800;
  color: #133d57;
}

.small-meta {
  display: block;
  color: #7d8f9e;
  font-size: 0.62rem;
  margin-top: 4px;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.66rem;
  font-weight: 800;
  background: #edf4f8;
  color: #345971;
}

.badge.green { background: #eaf9f2; color: #1a7b54; }
.badge.yellow { background: #fff4d6; color: #8a5e00; }
.badge.red { background: #feece8; color: #b24b3f; }
.badge.blue { background: #eaf3ff; color: #215a9b; }

.inline-link {
  border: none;
  background: transparent;
  color: #0f6d99;
  font-weight: 800;
  padding: 0;
}

.page-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 16px;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
  padding: 18px;
}

.hero h2 {
  margin: 6px 0 0;
  color: #153d57;
  font-size: 1.35rem;
}

.hero-meta {
  margin: 8px 0 0;
  color: #71879a;
  font-size: 0.78rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;
}

.hero-stat {
  padding: 11px 12px;
  border-radius: 10px;
  background: #f7fafb;
  border: 1px solid #e5edf3;
}

.hero-stat small {
  display: block;
  color: #7a8d9d;
  margin-bottom: 5px;
  font-size: 0.63rem;
}

.hero-stat strong {
  color: #244d69;
  font-size: 0.78rem;
}

.tabs {
  display: flex;
  gap: 6px;
  border-bottom: 1px solid #e4edf3;
  margin: 0 0 14px;
  overflow-x: auto;
}

.tabs button {
  border: none;
  background: transparent;
  color: #65829a;
  font-weight: 700;
  padding: 10px 12px;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
}

.tabs button.active {
  color: #0b5d8c;
  border-color: #0b5d8c;
}

.notice {
  background: #fff7e4;
  color: #7f5d00;
  border: 1px solid #f2dcc0;
  border-radius: 10px;
  padding: 12px 13px;
  margin: 12px 0;
  font-size: 0.78rem;
  line-height: 1.5;
}

.notice.success {
  background: #ebfbf2;
  border-color: #ccecdc;
  color: #245e46;
}

.intervention {
  border: 1px solid #e1ebf3;
  border-radius: 12px;
  padding: 12px 13px;
  margin-bottom: 10px;
}

.intervention-head {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
}

.intervention-head strong {
  color: #254e69;
}

.intervention p {
  color: #587686;
  line-height: 1.55;
  font-size: 0.76rem;
  margin: 8px 0 0;
}

.timeline {
  position: relative;
  padding-left: 14px;
}

.timeline-item {
  position: relative;
  padding: 0 0 14px 16px;
  border-left: 2px solid #d9edf3;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -7px;
  top: 2px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #1a859f;
}

.timeline-item strong {
  display: block;
  color: #254d69;
  font-size: 0.78rem;
  margin-bottom: 4px;
}

.timeline-item p {
  margin: 0;
  color: #637f90;
  font-size: 0.74rem;
  line-height: 1.5;
}

.chart {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 150px;
  padding: 12px 8px 4px;
}

.bar-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 100%;
}

.bar-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.bar {
  width: min(42px, 70%);
  border-radius: 8px 8px 3px 3px;
  background: linear-gradient(180deg, #2ab0a2, #0a718d);
  min-height: 12px;
}

.bar-col small {
  font-size: 0.62rem;
  color: #7f93a1;
}

.metric-list {
  display: grid;
  gap: 10px;
}

.metric-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 0px;
  border-bottom: 1px solid #edf2f5;
  color: #5e7a89;
  font-size: 0.76rem;
}

.metric-row strong {
  color: #1f4665;
}

.empty {
  padding: 24px 0;
  text-align: center;
  color: #7c8f9d;
  font-size: 0.8rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field.full {
  grid-column: 1 / -1;
}

.form-field label {
  color: #5a7689;
  font-size: 0.7rem;
  font-weight: 700;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(14, 26, 37, 0.5);
  display: grid;
  place-items: center;
  z-index: 20;
  padding: 16px;
}

.modal {
  width: min(680px, 100%);
  background: white;
  border-radius: 18px;
  border: 1px solid #dfeaf3;
  max-height: 90vh;
  overflow: auto;
  padding: 18px;
}

.modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.modal-head h3 {
  margin: 0;
  color: #173d57;
  font-size: 1.1rem;
}

.close-btn {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: #edf4f8;
  font-size: 1.2rem;
  color: #294d6a;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;
}

.login-screen {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #eaf5fb 0%, #edf9f2 100%);
  padding: 24px;
}

.login-card {
  width: min(520px, 100%);
  background: white;
  border: 1px solid #dfeaf3;
  border-radius: 22px;
  box-shadow: 0 18px 42px rgba(23, 52, 76, 0.12);
  padding: 28px 26px;
}

.login-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.login-header .brand-mark {
  width: 48px;
  height: 48px;
  font-size: 1.3rem;
}

.login-header h1 {
  margin: 0;
  font-size: 1.45rem;
  color: #173d57;
}

.login-header p {
  margin: 4px 0 0;
  color: #69839a;
  font-size: 0.78rem;
}

.login-form {
  display: grid;
  gap: 14px;
}

.login-form .field {
  display: grid;
  gap: 6px;
}

.login-form label {
  color: #58758a;
  font-size: 0.72rem;
  font-weight: 700;
}

.login-rights {
  margin-top: 18px;
  color: #73879b;
  font-size: 0.68rem;
  text-align: center;
}

.mobile-nav {
  display: none;
}

@media (max-width: 980px) {
  .app-shell { grid-template-columns: 180px 1fr; }
  .main { padding: 20px 18px 92px; }
  .kpis { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .page-grid { grid-template-columns: 1fr; }
  .hero-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 720px) {
  .app-shell { display: block; }
  .sidebar { display: none; }
  .topbar { display: block; }
  .header-actions { margin-top: 12px; }
  .kpis { grid-template-columns: 1fr; }
  .hero { display: block; }
  .hero-grid, .form-grid { grid-template-columns: 1fr; }
  .mobile-nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    background: rgba(255,255,255,0.98);
    border-top: 1px solid #dfeaf3;
    padding: 8px 6px calc(8px + env(safe-area-inset-bottom));
    justify-content: space-around;
  }
  .mobile-nav button {
    border: none;
    background: transparent;
    color: #69859c;
    display: grid;
    place-items: center;
    gap: 2px;
    font-weight: 700;
    font-size: 0.64rem;
    flex: 1;
  }
  .mobile-nav button.active { color: #0b5d8c; }
}

@media print {
  .sidebar, .topbar, .header-actions, .toolbar, .mobile-nav, .modal-backdrop { display: none !important; }
  .main { padding: 0; }
  body { background: white; }
  .card { box-shadow: none; }
}
