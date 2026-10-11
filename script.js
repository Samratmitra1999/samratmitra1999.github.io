(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toast = document.querySelector('.toast');
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
  }
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const field = document.createElement('textarea');
        field.value = value;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Copy command unavailable');
      }
      showToast('Email address copied');
    } catch (_) {
      showToast('Email: ' + value);
    }
  }));


  const projectDialog = document.querySelector('.project-dialog');
  if (projectDialog && typeof projectDialog.showModal === 'function') {
    const projectContent = {
      ingestion: {
        kicker: 'INGESTION · ORCHESTRATION',
        title: 'Multi-source ingestion framework',
        summary: 'A reusable ingestion foundation for moving structured and semi-structured data from multiple source systems into Azure storage, ready for governed downstream transformations.',
        points: [
          'Designed and developed 50+ scalable ETL pipelines using Azure Data Factory and Azure Databricks.',
          'Built multi-source ingestion flows to ADLS Gen2 and Azure Blob Storage.',
          'Improved consistency of downstream processing while reducing manual data-processing effort.'
        ],
        outcomeValue: '60% less manual effort',
        outcome: 'Reported reduction in manual data processing through automated ingestion and pipeline execution.',
        tech: ['Azure Data Factory', 'ADLS Gen2', 'Azure Blob Storage', 'Azure Databricks']
      },
      supply: {
        kicker: 'DATA MODELLING · SUPPLY CHAIN',
        title: 'Supply planning & KPI data models',
        summary: 'Analytics-ready discount, inventory, and supply-planning models supporting enterprise supply-chain reporting and Integrated Business Planning workflows.',
        points: [
          'Built data models for Projected Supply Inventory, Demand Supply Suite, IBP, and OTIF KPIs.',
          'Used Databricks SQL and PySpark with dimensional modelling patterns for reusable reporting datasets.',
          'Supported greater visibility into inventory movement and supply planning decisions.'
        ],
        outcomeValue: '27% increase in stock movement',
        outcome: 'The résumé reports a contribution to this improvement; stock movement is influenced by broader operational factors as well.',
        tech: ['PySpark', 'Databricks SQL', 'Star schema', 'Snowflake schema', 'IBP / OTIF']
      },
      performance: {
        kicker: 'LAKEHOUSE · PERFORMANCE',
        title: 'Lakehouse performance tuning',
        summary: 'Performance improvements across high-volume healthcare, sales, inventory, and supply-chain workloads through Spark, Delta Lake, and SQL optimization.',
        points: [
          'Optimized PySpark and SQL transformations and data-model access patterns.',
          'Applied partitioning and Delta Lake optimization to improve workload efficiency.',
          'Supported processing at a scale of 100M+ records across enterprise datasets.'
        ],
        outcomeValue: '35% lower query latency',
        outcome: 'The résumé also notes a 40% reduction in data preparation time after pipeline optimization.',
        tech: ['Azure Databricks', 'PySpark', 'Apache Spark', 'Delta Lake', 'SQL']
      },
      analytics: {
        kicker: 'DATA QUALITY · BI ENABLEMENT',
        title: 'Analytics-ready reporting layer',
        summary: 'A reporting foundation focused on dataset reliability, quality checks, and KPI readiness for analysis and Power BI reporting workflows.',
        points: [
          'Created SQL-based data quality checks, profiling, monitoring, and alerting.',
          'Supported completeness, accuracy, and timely availability of enterprise datasets.',
          'Optimized SQL for inventory, supply-chain KPI reporting, and sales-performance analysis.'
        ],
        outcomeValue: '100M+ records supported',
        outcome: 'Specific query response times improved by up to 80%, as reported in the résumé.',
        tech: ['SQL', 'Power BI', 'Data profiling', 'Monitoring & alerting', 'KPI reporting']
      }
    };

    const dialogKicker = projectDialog.querySelector('.dialog-kicker');
    const dialogTitle = projectDialog.querySelector('#project-dialog-title');
    const dialogSummary = projectDialog.querySelector('.dialog-summary');
    const dialogPoints = projectDialog.querySelector('.dialog-points');
    const dialogOutcomeValue = projectDialog.querySelector('.dialog-outcome > strong');
    const dialogOutcome = projectDialog.querySelector('.dialog-outcome > p');
    const dialogTech = projectDialog.querySelector('.dialog-tech');
    let activeProject = null;

    function setText(selector, value) {
      const target = projectDialog.querySelector(selector);
      if (target) target.textContent = value;
    }

    document.querySelectorAll('[data-project]').forEach(button => {
      button.addEventListener('click', () => {
        const project = projectContent[button.getAttribute('data-project')];
        if (!project) return;
        activeProject = project;
        dialogKicker.textContent = project.kicker;
        dialogTitle.textContent = project.title;
        dialogSummary.textContent = project.summary;
        dialogOutcomeValue.textContent = project.outcomeValue;
        dialogOutcome.textContent = project.outcome;
        dialogPoints.replaceChildren();
        project.points.forEach(point => {
          const item = document.createElement('li');
          item.textContent = point;
          dialogPoints.appendChild(item);
        });
        dialogTech.replaceChildren();
        project.tech.forEach(technology => {
          const chip = document.createElement('span');
          chip.textContent = technology;
          dialogTech.appendChild(chip);
        });
        projectDialog.showModal();
      });
    });

    projectDialog.querySelectorAll('.dialog-close').forEach(button => {
      button.addEventListener('click', () => projectDialog.close());
    });
    projectDialog.addEventListener('click', event => {
      if (event.target === projectDialog) projectDialog.close();
    });
    const copyOverview = projectDialog.querySelector('.dialog-copy');
    if (copyOverview) {
      copyOverview.addEventListener('click', async () => {
        if (!activeProject) return;
        const overview = `${activeProject.title}\n\n${activeProject.summary}\n\nContribution:\n- ${activeProject.points.join('\n- ')}\n\nOutcome: ${activeProject.outcomeValue}. ${activeProject.outcome}\nTechnology: ${activeProject.tech.join(', ')}`;
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(overview);
          } else {
            const field = document.createElement('textarea');
            field.value = overview;
            field.setAttribute('readonly', '');
            field.style.position = 'fixed';
            field.style.opacity = '0';
            document.body.appendChild(field);
            field.select();
            const copied = document.execCommand('copy');
            field.remove();
            if (!copied) throw new Error('Copy command unavailable');
          }
          showToast('Case study overview copied');
        } catch (_) {
          showToast('Select and copy the case study text manually');
        }
      });
    }
  }

  const revealTargets = document.querySelectorAll('.hero-copy h1, .hero-description, .hero-actions, .hero-proof, .hero-visual, .metric, .section-heading, .section-intro, .about-content, .skill-card, .tech-skill-card, .work-card, .timeline-item, .credential-card, .education-card, .award-strip, .contact-left, .contact-detail');
  revealTargets.forEach((el, index) => {
    el.classList.add('js-reveal');
    if (el.classList.contains('tech-skill-card')) el.style.setProperty('--reveal-index', String(index % 5));
  });
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }
})();
