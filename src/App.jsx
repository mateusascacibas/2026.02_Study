import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Fase 1 — Core Java + Spring",
    period: "Meses 1–3",
    color: "#3B82F6",
    accent: "#DBEAFE",
    months: [
      {
        id: "m1",
        title: "Mês 1 — Java Avançado",
        weeks: [
          {
            id: "w1",
            label: "Semanas 1–2 · Teoria",
            english: "README e commits do projeto em inglês desde hoje",
            topics: [
              "JVM internals: heap, stack, metaspace, GC G1 vs ZGC",
              "Tipos de referência: strong, weak, soft, phantom",
              "Concorrência: Thread vs ExecutorService vs CompletableFuture",
              "Streams e Lambdas: lazy evaluation, collectors, streams paralelos",
            ],
            resources: [
              { label: "Effective Java (cap. 4, 5, 6, 11) — Joshua Bloch", url: "" },
            ],
            deliverable: null,
          },
          {
            id: "w2",
            label: "Semanas 3–4 · Prática",
            english: "Escreva 3–5 bullets do aprendizado da semana em inglês no Notion",
            topics: [
              "Criar esqueleto do projeto âncora no GitHub",
              "Implementar entidades do domínio: Conta, Transacao, Categoria",
              "Implementar exemplo real de CompletableFuture (processamento assíncrono)",
            ],
            resources: [],
            deliverable: "Projeto no GitHub com README explicando as decisões técnicas",
          },
        ],
      },
      {
        id: "m2",
        title: "Mês 2 — Spring Boot com Profundidade",
        weeks: [
          {
            id: "w3",
            label: "Semanas 1–2 · Teoria",
            english: "Leia a documentação do Spring em inglês (docs.spring.io)",
            topics: [
              "IoC Container: ciclo de vida de beans, @Scope, proxies CGLIB vs JDK",
              "Spring Data JPA avançado: @Query, Specifications, Projections, N+1 problem",
              "@Transactional: isolamento e propagação",
              "Spring Security: SecurityFilterChain, autenticação vs autorização, JWT do zero",
              "Tratamento de erros: @ControllerAdvice, ProblemDetail (RFC 7807)",
            ],
            resources: [
              { label: "docs.spring.io — documentação oficial", url: "https://docs.spring.io" },
              { label: "Canal Amigoscode (YouTube)", url: "https://youtube.com/@amigoscode" },
            ],
            deliverable: null,
          },
          {
            id: "w4",
            label: "Semanas 3–4 · Prática",
            english: "Nomes de classes, métodos e variáveis todos em inglês",
            topics: [
              "Implementar autenticação JWT no projeto âncora",
              "Adicionar Spring Data JPA com 2 queries customizadas",
              "Implementar tratamento global de erros padronizado",
            ],
            resources: [],
            deliverable: "API com CRUD funcionando, autenticada, com erros padronizados",
          },
        ],
      },
      {
        id: "m3",
        title: "Mês 3 — Banco de Dados com Profundidade",
        weeks: [
          {
            id: "w5",
            label: "Semanas 1–2 · Teoria",
            english: "Leia Use The Index, Luke em inglês (use-the-index-luke.com)",
            topics: [
              "Índices B-tree: como o PostgreSQL decide usar um índice",
              "EXPLAIN ANALYZE: ler e interpretar o plano de execução",
              "Transactions e isolamento: Read Committed vs Repeatable Read vs Serializable",
              "HikariCP: como configurar connection pool para produção",
              "Flyway: migrations versionadas, boas práticas",
            ],
            resources: [
              { label: "Use The Index, Luke (gratuito)", url: "https://use-the-index-luke.com" },
            ],
            deliverable: null,
          },
          {
            id: "w6",
            label: "Semanas 3–4 · Prática",
            english: "Escreva comentários explicando cada índice criado em inglês",
            topics: [
              "Adicionar Flyway ao projeto âncora com migrations versionadas",
              "Criar ao menos 2 índices justificados, documentados no README",
              "Usar EXPLAIN ANALYZE em uma query e otimizá-la",
              "Configurar HikariCP no application.yml",
            ],
            resources: [],
            deliverable: "Banco com migrations, índices justificados e HikariCP configurado",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Fase 2 — Qualidade e Arquitetura",
    period: "Meses 4–6",
    color: "#8B5CF6",
    accent: "#EDE9FE",
    months: [
      {
        id: "m4",
        title: "Mês 4 — Testes Automatizados",
        weeks: [
          {
            id: "w7",
            label: "Semanas 1–2 · Teoria",
            english: "Leia Unit Testing (Vladimir Khorikov) em inglês",
            topics: [
              "Pirâmide de testes: o que testar em cada camada",
              "JUnit 5 + Mockito: @Mock, @InjectMocks, @Captor, verify()",
              "@SpringBootTest vs @WebMvcTest vs @DataJpaTest",
              "Testcontainers: PostgreSQL real nos testes de integração",
              "AssertJ: assertions fluentes com mensagens legíveis",
            ],
            resources: [
              { label: "Unit Testing: Principles, Practices and Patterns — Khorikov", url: "" },
            ],
            deliverable: null,
          },
          {
            id: "w8",
            label: "Semanas 3–4 · Prática",
            english: "Escreva 2 posts no LinkedIn em inglês sobre o que aprendeu",
            topics: [
              "Escrever testes para todos os services do projeto âncora",
              "Implementar 3 testes de integração com Testcontainers",
              "Cobrir 100% da lógica de negócio (não perseguir % total)",
            ],
            resources: [],
            deliverable: "PR no projeto com self-review documentando o que aprendeu",
          },
        ],
      },
      {
        id: "m5",
        title: "Mês 5 — SOLID e Design Patterns",
        weeks: [
          {
            id: "w9",
            label: "Semanas 1–2 · Teoria",
            english: "Escreva explicação de cada pattern em inglês no seu Notion",
            topics: [
              "SRP: identificar classes com mais de uma razão para mudar",
              "OCP + Strategy Pattern: trocar comportamento sem modificar código",
              "DIP + Repository Pattern: depender de abstrações",
              "Factory / Abstract Factory: criação de objetos complexos",
              "Builder: DTOs com muitos campos (muito comum em Java)",
              "Observer: eventos de domínio",
              "Decorator: adicionar comportamento sem herança",
            ],
            resources: [
              { label: "Refactoring — Martin Fowler (2ª edição)", url: "" },
            ],
            deliverable: null,
          },
          {
            id: "w10",
            label: "Semanas 3–4 · Prática",
            english: "Commit messages descritivos em inglês para cada refactoring",
            topics: [
              "Refactoring session: identificar 3 violações de SOLID no projeto",
              "Corrigir cada violação com commit message explicativo",
              "Implementar Repository Pattern separando interface da implementação JPA",
            ],
            resources: [],
            deliverable: "3 refactorings documentados com before/after e justificativa",
          },
        ],
      },
      {
        id: "m6",
        title: "Mês 6 — Clean Architecture",
        weeks: [
          {
            id: "w11",
            label: "Semanas 1–2 · Teoria",
            english: "Leia artigo de Alistair Cockburn em inglês (alistair.cockburn.us)",
            topics: [
              "Arquitetura Hexagonal (Ports and Adapters)",
              "Camadas: domain, application, infrastructure, interfaces",
              "DDD introdutório: Entities vs Value Objects vs Aggregates",
              "ADRs (Architecture Decision Records): como documentar decisões técnicas",
            ],
            resources: [
              { label: "Clean Architecture — Robert C. Martin (cap. 15–22)", url: "" },
              { label: "Hexagonal Architecture — Alistair Cockburn", url: "https://alistair.cockburn.us/hexagonal-architecture/" },
            ],
            deliverable: null,
          },
          {
            id: "w12",
            label: "Semanas 3–4 · Prática",
            english: "ADR do projeto escrito em inglês",
            topics: [
              "Refatorar o projeto âncora para arquitetura hexagonal",
              "Estrutura de pastas: domain/ application/ infrastructure/ interfaces/",
              "Escrever ADR explicando por que essa arquitetura foi escolhida",
            ],
            resources: [],
            deliverable: "Projeto com arquitetura hexagonal + ADR documentado no repositório",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Fase 3 — Sistemas Distribuídos",
    period: "Meses 7–9",
    color: "#10B981",
    accent: "#D1FAE5",
    months: [
      {
        id: "m7",
        title: "Mês 7 — Kafka e Mensageria",
        weeks: [
          {
            id: "w13",
            label: "Semanas 1–2 · Teoria",
            english: "Consuma os cursos da Confluent Developer em inglês",
            topics: [
              "Por que mensageria existe: desacoplamento, resiliência, escalabilidade",
              "Kafka core: tópicos, partições, consumer groups, offsets",
              "Spring Kafka: @KafkaListener, KafkaTemplate, serialização com JSON/Avro",
              "Garantias de entrega: at-most-once, at-least-once, exactly-once",
              "Idempotência: processar a mesma mensagem duas vezes sem corromper dados",
            ],
            resources: [
              { label: "Confluent Developer (cursos gratuitos)", url: "https://developer.confluent.io" },
            ],
            deliverable: null,
          },
          {
            id: "w14",
            label: "Semanas 3–4 · Prática",
            english: "Documente o fluxo de eventos em inglês no README",
            topics: [
              "Adicionar Kafka ao projeto via Docker Compose",
              "Publicar evento TransacaoCriada ao registrar uma transação",
              "Consumer que processa o evento e gera relatório assíncrono",
              "Implementar idempotência usando ID da transação",
            ],
            resources: [],
            deliverable: "Kafka integrado ao projeto âncora com consumer idempotente",
          },
        ],
      },
      {
        id: "m8",
        title: "Mês 8 — Cloud Avançado e DevOps",
        weeks: [
          {
            id: "w15",
            label: "Semanas 1–2 · Teoria",
            english: "Leia 12factor.net completamente em inglês",
            topics: [
              "CI/CD com GitHub Actions: build, testes, análise estática, push Docker",
              "AWS para Java: ECS Fargate, RDS, MSK (Kafka gerenciado), Secrets Manager",
              "Terraform básico: VPC, ECS, RDS, variáveis, outputs",
              "12-Factor App: os 12 princípios de uma aplicação cloud-native",
            ],
            resources: [
              { label: "12factor.net — leitura obrigatória", url: "https://12factor.net" },
            ],
            deliverable: null,
          },
          {
            id: "w16",
            label: "Semanas 3–4 · Prática",
            english: "Pipeline e Terraform escritos inteiramente em inglês",
            topics: [
              "Configurar GitHub Actions: teste → build → push Docker Hub → deploy ECS",
              "Escrever Terraform que provisiona o ambiente na AWS",
            ],
            resources: [],
            deliverable: "Projeto rodando na AWS com URL pública e deploy automatizado",
          },
        ],
      },
      {
        id: "m9",
        title: "Mês 9 — Performance e Observabilidade",
        weeks: [
          {
            id: "w17",
            label: "Semanas 1–2 · Teoria",
            english: "Configure logs em inglês com campos descritivos",
            topics: [
              "Logs estruturados com SLF4J + Logback: formato JSON, campos obrigatórios",
              "Micrometer + Prometheus + Grafana: métricas customizadas (Counter, Timer, Gauge)",
              "Distributed Tracing com OpenTelemetry: traceId propagado entre serviços",
              "Profiling com JFR (Java Flight Recorder): hotspots de CPU e memória",
              "Caching com Redis: @Cacheable, estratégias de invalidação, cache-aside",
            ],
            resources: [],
            deliverable: null,
          },
          {
            id: "w18",
            label: "Semanas 3–4 · Prática",
            english: "Dashboard do Grafana com títulos e descrições em inglês",
            topics: [
              "Adicionar Prometheus + Grafana ao Docker Compose",
              "Criar 3 métricas customizadas relevantes para o domínio financeiro",
              "Implementar Redis cache nas queries mais pesadas",
              "Configurar logs estruturados em JSON",
            ],
            resources: [],
            deliverable: "Projeto com observabilidade completa: métricas, logs e cache",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Fase 4 — Posicionamento Sênior",
    period: "Meses 10–12",
    color: "#F59E0B",
    accent: "#FEF3C7",
    months: [
      {
        id: "m10",
        title: "Mês 10 — Algoritmos para Entrevistas",
        weeks: [
          {
            id: "w19",
            label: "Semanas 1–4 · Rotina diária",
            english: "Leia as soluções e discussões do LeetCode em inglês",
            topics: [
              "Semana 1: Arrays e Strings + Hash Maps e Sets",
              "Semana 2: Trees e BFS/DFS",
              "Semana 3: Two Pointers e Sliding Window + Stack e Queue",
              "Semana 4: DP básico (Fibonacci, Knapsack)",
              "Rotina: 30 min LeetCode + 30 min revisão de padrões por dia",
            ],
            resources: [
              { label: "NeetCode.io — roadmap com vídeos em Java", url: "https://neetcode.io" },
            ],
            deliverable: "40–50 problemas resolvidos com explicação de cada padrão",
          },
        ],
      },
      {
        id: "m11",
        title: "Mês 11 — Portfólio e Presença",
        weeks: [
          {
            id: "w20",
            label: "Semanas 1–2 · Projeto âncora final",
            english: "README completo em inglês é o entregável principal deste mês",
            topics: [
              "README profissional em inglês: arquitetura, decisões, como rodar, link do deploy",
              "Diagrama de arquitetura (draw.io ou Excalidraw)",
              "Seção 'What I Learned' documentando os principais aprendizados do ano",
            ],
            resources: [],
            deliverable: "Repositório público e profissional, pronto para mostrar em entrevistas",
          },
          {
            id: "w21",
            label: "Semanas 3–4 · Presença online",
            english: "LinkedIn headline, about e posts escritos em inglês",
            topics: [
              "LinkedIn em inglês: reescrever headline e about com foco em impacto técnico",
              "Escrever 2 posts técnicos no LinkedIn sobre aprendizados do ano",
              "Criar GitHub profile README destacando o projeto âncora",
            ],
            resources: [],
            deliverable: "LinkedIn reformulado + 2 posts publicados + GitHub profile",
          },
        ],
      },
      {
        id: "m12",
        title: "Mês 12 — Entrevistas e Negociação",
        weeks: [
          {
            id: "w22",
            label: "Semanas 1–2 · System Design",
            english: "Pratique explicar system design em inglês (grave áudio ou vídeo)",
            topics: [
              "Framework RADIO: Requirements, API design, Data model, Infrastructure, Optimizations",
              "Estudar 4–5 capítulos do System Design Interview (Alex Xu, vol. 1)",
              "Praticar: 'Design a URL shortener', 'Design a rate limiter'",
            ],
            resources: [
              { label: "System Design Interview — Alex Xu (volume 1)", url: "" },
            ],
            deliverable: null,
          },
          {
            id: "w23",
            label: "Semanas 3–4 · Behavioral Interviews",
            english: "Prepare e grave suas respostas em inglês usando método STAR",
            topics: [
              "Método STAR: Situation, Task, Action, Result",
              "'Tell me about a time you disagreed with a technical decision'",
              "'Describe a complex problem you solved'",
              "'How do you handle technical debt in a fast-moving team?'",
              "'Tell me about a time you mentored someone'",
            ],
            resources: [],
            deliverable: "4 histórias STAR preparadas, gravadas e revisadas em inglês",
          },
        ],
      },
    ],
  },
];

const weeklySchedule = [
  { day: "Segunda", theory: "Leitura do conteúdo novo", practice: "Implementação no projeto (feature 1)", algo: "LeetCode — 1 problema (30 min)", english: "Nomes, commits e código em inglês" },
  { day: "Terça", theory: "Continua leitura + anotações no Notion", practice: "Implementação no projeto (feature 2)", algo: "LeetCode — 1 problema (30 min)", english: "Nomes, commits e código em inglês" },
  { day: "Quarta", theory: "Vídeo complementar sobre o mesmo tema", practice: "Implementação no projeto (feature 3)", algo: "Revisão de padrões (30 min)", english: "Nomes, commits e código em inglês" },
  { day: "Quinta", theory: "Implementar exemplo mínimo do conceito", practice: "Implementação no projeto (feature 4)", algo: "LeetCode — 1 problema (30 min)", english: "Nomes, commits e código em inglês" },
  { day: "Sexta", theory: "Revisão: 3–5 bullets do que aprendeu", practice: "Self code review: critique seu próprio código", algo: "Revisão da semana (15 min)", english: "Escreva bullets da semana em inglês (15 min)" },
  { day: "Sábado", theory: "Prática livre no projeto âncora (90 min)", practice: "Finaliza entregável + atualiza README", algo: "Problema desafiador (opcional)", english: "Escreva 1 parágrafo técnico em inglês (10 min)" },
  { day: "Domingo", theory: "Descanso obrigatório", practice: "Descanso obrigatório", algo: "—", english: "—" },
];

const selfEvalQuestions = [
  "Consigo explicar o tema do mês para alguém em 5 minutos?",
  "Consigo implementar sem consultar tutorial passo a passo?",
  "Está no projeto âncora e funcionando?",
  "Documentei as decisões técnicas tomadas?",
  "Escrevi ao menos um conteúdo em inglês esta semana?",
];

const projectStructure = `fintrack/
├── src/main/java/com/fintrack/
│   ├── domain/                    # Núcleo do negócio (sem dependências externas)
│   │   ├── model/
│   │   │   ├── Conta.java
│   │   │   ├── Transacao.java
│   │   │   └── Categoria.java
│   │   ├── port/
│   │   │   ├── in/                # Casos de uso (interfaces)
│   │   │   │   └── CriarTransacaoUseCase.java
│   │   │   └── out/               # Portas de saída (interfaces)
│   │   │       └── TransacaoRepository.java
│   │   └── exception/
│   │       └── DomainException.java
│   ├── application/               # Implementa os casos de uso
│   │   └── service/
│   │       └── TransacaoService.java
│   ├── infrastructure/            # Adapters de saída (banco, kafka, redis...)
│   │   ├── persistence/
│   │   │   ├── TransacaoJpaRepository.java
│   │   │   └── TransacaoRepositoryAdapter.java
│   │   ├── messaging/
│   │   │   └── KafkaEventPublisher.java
│   │   └── cache/
│   │       └── RedisCacheAdapter.java
│   └── interfaces/                # Adapters de entrada (HTTP, consumers...)
│       ├── rest/
│       │   ├── TransacaoController.java
│       │   └── dto/
│       │       ├── TransacaoRequest.java
│       │       └── TransacaoResponse.java
│       └── kafka/
│           └── TransacaoEventConsumer.java
├── src/main/resources/
│   ├── application.yml
│   └── db/migration/              # Flyway migrations
│       ├── V1__create_conta.sql
│       └── V2__create_transacao.sql
├── src/test/java/com/fintrack/
│   ├── domain/                    # Testes unitários puros
│   ├── application/               # Testes de serviço
│   └── infrastructure/            # Testes de integração (Testcontainers)
├── docker-compose.yml             # PostgreSQL + Kafka + Redis + Grafana
├── Dockerfile
├── .github/workflows/ci.yml       # GitHub Actions pipeline
└── docs/
    └── adr/
        └── 001-hexagonal-architecture.md`;

export default function PlanoSeniorJava() {
  const [activeTab, setActiveTab] = useState("cronograma");
  const [expandedPhase, setExpandedPhase] = useState(1);
  const [expandedMonth, setExpandedMonth] = useState("m1");
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedEval, setCheckedEval] = useState({});
  const [weekMode, setWeekMode] = useState("theory");
  const [currentMonth, setCurrentMonth] = useState(1);

  const toggleCheck = (id) => setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleEval = (id) => setCheckedEval(prev => ({ ...prev, [id]: !prev[id] }));

  const totalTopics = phases.flatMap(p => p.months.flatMap(m => m.weeks.flatMap(w => w.topics))).length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalTopics) * 100);

  const tabs = [
    { id: "cronograma", label: "📅 Cronograma" },
    { id: "semanal", label: "⏱ Semana Tipo" },
    { id: "projeto", label: "🏗 Projeto Âncora" },
    { id: "avaliacao", label: "✅ Autoavaliação" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0F0F13",
      color: "#E2E8F0",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } 
        ::-webkit-scrollbar-track { background: #1A1A24; }
        ::-webkit-scrollbar-thumb { background: #3B4A6B; border-radius: 2px; }
        .tab-btn:hover { background: #1E2030 !important; }
        .phase-header:hover { opacity: 0.9; cursor: pointer; }
        .month-header:hover { background: #1E2030 !important; cursor: pointer; }
        .check-row:hover { background: #16161E !important; }
        .resource-link:hover { text-decoration: underline; }
        .progress-bar-fill { transition: width 0.8s cubic-bezier(.4,0,.2,1); }
        .week-toggle:hover { opacity: 0.85; }
        .check-box { transition: all 0.15s ease; }
        .check-box:hover { transform: scale(1.1); }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0F0F13 0%, #1A1028 50%, #0F1620 100%)",
        borderBottom: "1px solid #1E2A3A",
        padding: "32px 40px 24px",
        position: "sticky", top: 0, zIndex: 50,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, color: "#4A90A4", letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>
                Plano de Evolução Técnica
              </div>
              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 24, fontWeight: 700,
                background: "linear-gradient(90deg, #60A5FA, #A78BFA, #34D399)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                marginBottom: 4,
              }}>
                Java Pleno → Sênior
              </h1>
              <div style={{ fontSize: 12, color: "#64748B" }}>12 meses · 1h/dia · ~365 horas</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "#64748B", marginBottom: 6 }}>PROGRESSO GERAL</div>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#60A5FA", lineHeight: 1 }}>{progress}%</div>
              <div style={{ fontSize: 11, color: "#4B5563", marginTop: 4 }}>{checkedCount}/{totalTopics} tópicos</div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 20, background: "#1A1A24", borderRadius: 4, height: 6, overflow: "hidden" }}>
            <div className="progress-bar-fill" style={{
              height: "100%", width: `${progress}%`,
              background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #10B981)",
              borderRadius: 4,
            }} />
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginTop: 20 }}>
            {tabs.map(t => (
              <button key={t.id} className="tab-btn" onClick={() => setActiveTab(t.id)} style={{
                padding: "7px 14px", borderRadius: 6, border: "none", cursor: "pointer",
                fontSize: 12, fontFamily: "inherit",
                background: activeTab === t.id ? "#1E3A5F" : "transparent",
                color: activeTab === t.id ? "#60A5FA" : "#64748B",
                borderBottom: activeTab === t.id ? "2px solid #3B82F6" : "2px solid transparent",
                transition: "all 0.2s",
              }}>{t.label}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 40px" }}>

        {/* CRONOGRAMA TAB */}
        {activeTab === "cronograma" && (
          <div>
            {phases.map(phase => (
              <div key={phase.id} style={{ marginBottom: 24 }}>
                <div className="phase-header" onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                  style={{
                    background: `linear-gradient(135deg, ${phase.color}22, ${phase.color}11)`,
                    border: `1px solid ${phase.color}44`,
                    borderRadius: 10, padding: "16px 20px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: phase.color }} />
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: "#E2E8F0" }}>{phase.title}</div>
                      <div style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>{phase.period}</div>
                    </div>
                  </div>
                  <div style={{ color: "#64748B", fontSize: 16 }}>{expandedPhase === phase.id ? "▲" : "▼"}</div>
                </div>

                {expandedPhase === phase.id && (
                  <div style={{ marginTop: 8, paddingLeft: 16 }}>
                    {phase.months.map(month => (
                      <div key={month.id} style={{ marginBottom: 8 }}>
                        <div className="month-header" onClick={() => setExpandedMonth(expandedMonth === month.id ? null : month.id)}
                          style={{
                            background: "#131318", border: "1px solid #1E2A3A",
                            borderRadius: 8, padding: "12px 16px",
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                          }}>
                          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 14, color: "#CBD5E1" }}>{month.title}</span>
                          <span style={{ color: "#64748B", fontSize: 13 }}>{expandedMonth === month.id ? "▲" : "▼"}</span>
                        </div>

                        {expandedMonth === month.id && (
                          <div style={{ padding: "12px 0 0 16px" }}>
                            {month.weeks.map(week => (
                              <div key={week.id} style={{ marginBottom: 16 }}>
                                <div style={{ fontSize: 11, color: "#8B5CF6", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
                                  {week.label}
                                </div>

                                {/* English tip */}
                                {week.english && (
                                  <div style={{
                                    background: "#0F1A2E", border: "1px solid #1E3A5F",
                                    borderRadius: 6, padding: "8px 12px", marginBottom: 10,
                                    display: "flex", alignItems: "flex-start", gap: 8,
                                  }}>
                                    <span style={{ fontSize: 12 }}>🇺🇸</span>
                                    <span style={{ fontSize: 11, color: "#4A90A4" }}><strong>Inglês:</strong> {week.english}</span>
                                  </div>
                                )}

                                {/* Topics */}
                                {week.topics.map((topic, i) => {
                                  const checkId = `${week.id}-${i}`;
                                  return (
                                    <div key={checkId} className="check-row" onClick={() => toggleCheck(checkId)}
                                      style={{
                                        display: "flex", alignItems: "flex-start", gap: 10,
                                        padding: "7px 8px", borderRadius: 6, cursor: "pointer",
                                        background: checkedItems[checkId] ? "#0D1F0D" : "transparent",
                                        marginBottom: 2,
                                      }}>
                                      <div className="check-box" style={{
                                        width: 16, height: 16, borderRadius: 4, flexShrink: 0, marginTop: 1,
                                        border: `2px solid ${checkedItems[checkId] ? "#10B981" : "#2D3748"}`,
                                        background: checkedItems[checkId] ? "#10B981" : "transparent",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                      }}>
                                        {checkedItems[checkId] && <span style={{ color: "#fff", fontSize: 10 }}>✓</span>}
                                      </div>
                                      <span style={{
                                        fontSize: 13, lineHeight: 1.5,
                                        color: checkedItems[checkId] ? "#4B5563" : "#CBD5E1",
                                        textDecoration: checkedItems[checkId] ? "line-through" : "none",
                                      }}>{topic}</span>
                                    </div>
                                  );
                                })}

                                {/* Resources */}
                                {week.resources.length > 0 && (
                                  <div style={{ marginTop: 10, paddingLeft: 8 }}>
                                    <div style={{ fontSize: 10, color: "#64748B", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Recursos</div>
                                    {week.resources.map((r, i) => (
                                      <div key={i} style={{ fontSize: 12, color: "#60A5FA", marginBottom: 4 }}>
                                        {r.url ? (
                                          <a href={r.url} target="_blank" rel="noreferrer" className="resource-link"
                                            style={{ color: "#60A5FA", textDecoration: "none" }}>📖 {r.label}</a>
                                        ) : `📖 ${r.label}`}
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Deliverable */}
                                {week.deliverable && (
                                  <div style={{
                                    background: "#1A110A", border: "1px solid #92400E44",
                                    borderRadius: 6, padding: "8px 12px", marginTop: 10,
                                    fontSize: 12, color: "#F59E0B",
                                  }}>
                                    🎯 <strong>Entregável:</strong> {week.deliverable}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SEMANA TIPO TAB */}
        {activeTab === "semanal" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: "#E2E8F0", marginBottom: 8 }}>
                Semana Tipo
              </h2>
              <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                Nas fases de teoria, o dia é diferente das fases de prática. Alterne o modo abaixo para ver os dois.
              </p>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {["theory", "practice"].map(mode => (
                <button key={mode} className="week-toggle" onClick={() => setWeekMode(mode)} style={{
                  padding: "8px 20px", borderRadius: 6, border: "none", cursor: "pointer",
                  fontFamily: "inherit", fontSize: 12,
                  background: weekMode === mode ? "#1E3A5F" : "#131318",
                  color: weekMode === mode ? "#60A5FA" : "#64748B",
                  border: weekMode === mode ? "1px solid #3B82F6" : "1px solid #1E2A3A",
                }}>
                  {mode === "theory" ? "📖 Semana de Teoria" : "💻 Semana de Prática"}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {weeklySchedule.map((row, i) => (
                <div key={i} style={{
                  background: row.day === "Domingo" ? "#0D0D10" : "#131318",
                  border: `1px solid ${row.day === "Domingo" ? "#1A1A24" : "#1E2A3A"}`,
                  borderRadius: 8, padding: "14px 16px",
                  display: "grid", gridTemplateColumns: "80px 1fr 1fr",
                  gap: 16, alignItems: "start",
                  opacity: row.day === "Domingo" ? 0.5 : 1,
                }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: i === 6 ? "#4B5563" : "#60A5FA" }}>
                    {row.day}
                  </div>
                  <div style={{ fontSize: 12, color: "#CBD5E1", lineHeight: 1.5 }}>
                    {weekMode === "theory" ? row.theory : row.practice}
                  </div>
                  <div style={{ fontSize: 11, color: "#4A90A4", lineHeight: 1.5 }}>
                    🇺🇸 {row.english}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, background: "#131318", border: "1px solid #1E2A3A", borderRadius: 8, padding: 20 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: "#E2E8F0", marginBottom: 14 }}>
                📏 Regras de Ouro
              </div>
              {[
                ["Timebox estrito", "Começa e termina em 60 min. Sem exceção."],
                ["Ambiente preparado antes", "Deixe o IDE aberto e a aba carregada na noite anterior."],
                ["Revisão a cada 4 semanas", "Último sábado do mês: revise o mês inteiro, não avance conteúdo novo."],
                ["Um tema por vez", "Artigo interessante sobre outro assunto? Salve para depois."],
                ["Projeto âncora como termômetro", "Travou na implementação → volte à teoria. Fácil demais → avance."],
              ].map(([title, desc], i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#8B5CF6", minWidth: 160 }}>{title}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJETO ÂNCORA TAB */}
        {activeTab === "projeto" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
                Projeto Âncora — FinTrack
              </h2>
              <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                API de gestão financeira pessoal construída ao longo do ano. Um projeto, camadas adicionadas progressivamente.
              </p>
            </div>

            {/* O que o projeto terá ao final */}
            <div style={{ background: "#131318", border: "1px solid #1E2A3A", borderRadius: 8, padding: 20, marginBottom: 20 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: "#E2E8F0", marginBottom: 14 }}>
                🏁 Estado final do projeto
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  ["Mês 1–2", "API REST com Spring Boot + JWT"],
                  ["Mês 3", "PostgreSQL com Flyway + índices"],
                  ["Mês 4", "Testes com Testcontainers"],
                  ["Mês 5", "Refactoring SOLID + Design Patterns"],
                  ["Mês 6", "Arquitetura Hexagonal"],
                  ["Mês 7", "Kafka para eventos de transação"],
                  ["Mês 8", "CI/CD + Deploy na AWS com Terraform"],
                  ["Mês 9", "Redis + Prometheus + Grafana"],
                ].map(([phase, feature], i) => (
                  <div key={i} style={{
                    background: "#0F0F13", border: "1px solid #1E2A3A",
                    borderRadius: 6, padding: "10px 14px",
                    display: "flex", gap: 10, alignItems: "flex-start",
                  }}>
                    <span style={{ fontSize: 10, color: "#3B82F6", fontWeight: 600, minWidth: 50 }}>{phase}</span>
                    <span style={{ fontSize: 12, color: "#94A3B8" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estrutura de pastas */}
            <div style={{ background: "#0A0A0F", border: "1px solid #1E2A3A", borderRadius: 8, padding: 20, marginBottom: 20 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: "#E2E8F0", marginBottom: 14 }}>
                📁 Estrutura de Pastas (Arquitetura Hexagonal)
              </div>
              <pre style={{ fontSize: 11.5, color: "#94A3B8", lineHeight: 1.8, overflowX: "auto" }}>
                {projectStructure}
              </pre>
            </div>

            {/* Explicação das camadas */}
            <div style={{ background: "#131318", border: "1px solid #1E2A3A", borderRadius: 8, padding: 20 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: "#E2E8F0", marginBottom: 14 }}>
                🧠 Por que essa estrutura? (ADR resumido)
              </div>
              {[
                { layer: "domain/", color: "#3B82F6", desc: "Núcleo do negócio. Zero dependências externas — sem Spring, sem JPA, sem nada. Se você consegue testar a lógica de negócio sem subir contexto Spring, sua arquitetura está correta." },
                { layer: "domain/port/", color: "#8B5CF6", desc: "Interfaces que definem o contrato do domínio com o mundo externo. 'in' = o que o mundo pode pedir ao domínio. 'out' = o que o domínio precisa do mundo (ex: salvar dados)." },
                { layer: "application/service/", color: "#10B981", desc: "Implementa os casos de uso orquestrando o domínio. Conhece as interfaces (ports) mas não as implementações (adapters). Esta é a camada que usa @Transactional." },
                { layer: "infrastructure/", color: "#F59E0B", desc: "Adapters de saída. Implementa as interfaces do domínio usando tecnologias reais: JPA para banco, KafkaTemplate para mensageria, RedisTemplate para cache." },
                { layer: "interfaces/rest/", color: "#EF4444", desc: "Adapter de entrada HTTP. Recebe requests, converte DTOs, chama o caso de uso, retorna response. Não contém lógica de negócio — apenas conversão e validação de input." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16, alignItems: "flex-start" }}>
                  <div style={{
                    fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: item.color,
                    minWidth: 160, padding: "2px 8px",
                    background: `${item.color}15`, borderRadius: 4,
                    border: `1px solid ${item.color}33`, flexShrink: 0,
                  }}>{item.layer}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AUTOAVALIAÇÃO TAB */}
        {activeTab === "avaliacao" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
                Autoavaliação Mensal
              </h2>
              <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                Responda no final de cada mês. Se "não" em mais de 2 perguntas → repita 2 semanas antes de avançar.
              </p>
            </div>

            {/* Mês selector */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                <button key={m} onClick={() => setCurrentMonth(m)} style={{
                  width: 40, height: 40, borderRadius: 8, border: "none", cursor: "pointer",
                  fontFamily: "inherit", fontSize: 12, fontWeight: 600,
                  background: currentMonth === m ? "#1E3A5F" : "#131318",
                  color: currentMonth === m ? "#60A5FA" : "#64748B",
                  border: currentMonth === m ? "1px solid #3B82F6" : "1px solid #1E2A3A",
                }}>{m}</button>
              ))}
            </div>

            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: "#E2E8F0", marginBottom: 16 }}>
              Mês {currentMonth} — Checklist
            </div>

            {selfEvalQuestions.map((q, i) => {
              const id = `eval-m${currentMonth}-${i}`;
              return (
                <div key={id} className="check-row" onClick={() => toggleEval(id)} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "14px 16px",
                  background: checkedEval[id] ? "#0D1F0D" : "#131318",
                  border: `1px solid ${checkedEval[id] ? "#10B98133" : "#1E2A3A"}`,
                  borderRadius: 8, marginBottom: 8, cursor: "pointer",
                }}>
                  <div className="check-box" style={{
                    width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                    border: `2px solid ${checkedEval[id] ? "#10B981" : "#2D3748"}`,
                    background: checkedEval[id] ? "#10B981" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {checkedEval[id] && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 13, color: checkedEval[id] ? "#4B5563" : "#CBD5E1", lineHeight: 1.5 }}>{q}</span>
                </div>
              );
            })}

            {/* Score */}
            {(() => {
              const monthChecked = selfEvalQuestions.filter((_, i) => checkedEval[`eval-m${currentMonth}-${i}`]).length;
              const score = monthChecked;
              return (
                <div style={{
                  marginTop: 20, background: "#131318", border: "1px solid #1E2A3A",
                  borderRadius: 8, padding: 20, textAlign: "center",
                }}>
                  <div style={{ fontSize: 40, fontWeight: 700, color: score >= 4 ? "#10B981" : score >= 2 ? "#F59E0B" : "#EF4444" }}>
                    {score}/{selfEvalQuestions.length}
                  </div>
                  <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 8 }}>
                    {score === 5 && "✅ Excelente! Pode avançar para o próximo mês com confiança."}
                    {score === 4 && "🟡 Bom. Avance, mas revise o ponto que ficou em aberto."}
                    {score <= 3 && score > 1 && "⚠️ Repita mais 2 semanas antes de avançar."}
                    {score <= 1 && "🔴 Volte à teoria. O mês precisa de mais tempo."}
                  </div>
                </div>
              );
            })()}

            {/* Nota de inglês */}
            <div style={{ marginTop: 20, background: "#0F1A2E", border: "1px solid #1E3A5F", borderRadius: 8, padding: 16 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: "#60A5FA", marginBottom: 10 }}>
                🇺🇸 Progresso de Inglês — Mês {currentMonth}
              </div>
              {[
                "Todos os commits do projeto estão em inglês?",
                "Escrevi ao menos 1 conteúdo técnico em inglês neste mês?",
                "Li ao menos um recurso técnico em inglês sem precisar de tradução?",
              ].map((q, i) => {
                const id = `eng-m${currentMonth}-${i}`;
                return (
                  <div key={id} className="check-row" onClick={() => toggleEval(id)} style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "10px 12px",
                    background: checkedEval[id] ? "#0A1A2E" : "transparent",
                    borderRadius: 6, marginBottom: 4, cursor: "pointer",
                  }}>
                    <div className="check-box" style={{
                      width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                      border: `2px solid ${checkedEval[id] ? "#3B82F6" : "#2D3748"}`,
                      background: checkedEval[id] ? "#3B82F6" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {checkedEval[id] && <span style={{ color: "#fff", fontSize: 9 }}>✓</span>}
                    </div>
                    <span style={{ fontSize: 12, color: checkedEval[id] ? "#4B5563" : "#94A3B8" }}>{q}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
