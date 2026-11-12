# RAPS Praia Grande — demonstração navegável

Protótipo responsivo do **Sistema Integrado de Saúde Mental da RAPS Praia Grande**, construído com HTML, CSS e JavaScript sem dependências de build.

## Executar

Abra `index.html` em um navegador moderno. O estado de demonstração persiste no armazenamento local do navegador (`localStorage`). Use **Limpar dados do site** no navegador para reinicializar os registros fictícios originais.

## O que já está demonstrável

- Interface responsiva mobile-first, navegação desktop e barra inferior no celular.
- Censo geral, externo e hospitalar, filtros e acesso à ficha sem redigitar identificadores.
- Fichas individuais com resumo, PTS, evoluções e histórico.
- Cadastro de intervenções por categoria e atualização de situação.
- Formulário de evolução com previsão de alta obrigatória, registro de autoria e justificativa/histórico quando a previsão muda.
- Integração com a rede, painel de gestão de altas e ação separada para registrar alta efetiva.
- Dashboard com indicadores agregados e impressão do navegador para PDF.
- Seletor de perfil apenas demonstrativo.

## Limites de segurança e escopo

**Todos os dados são fictícios. Não insira dados reais de saúde.** O seletor de perfil não é autenticação e não implementa autorização de servidor. O armazenamento é local ao navegador, sem banco de dados compartilhado, criptografia, trilha de auditoria inviolável, gestão de sessão ou controles LGPD institucionais. Não há integração com sistemas externos ou serviços de produção. O protótipo não está apto para uso assistencial real. Antes de qualquer uso clínico, são necessárias avaliação, implementação e validação institucional de segurança, privacidade, infraestrutura, governança e requisitos legais.

Os gráficos e métricas são ilustrativos; não usar para tomada de decisão ou avaliação de desempenho. Identidade visual é provisória: logotipos oficiais devem ser fornecidos e autorizados antes de inclusão.
